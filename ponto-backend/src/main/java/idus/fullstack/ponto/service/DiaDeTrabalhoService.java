package idus.fullstack.ponto.service;

import java.sql.Date;
import java.time.Duration;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cglib.core.Local;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.annotation.JsonAppend.Attr;

import idus.fullstack.ponto.model.DiaDeTrabalho;
import idus.fullstack.ponto.model.Ponto;
import idus.fullstack.ponto.model.UsuarioComum;
import idus.fullstack.ponto.model.api.mapper.PontoMapper;
import idus.fullstack.ponto.model.api.mapper.UtilsMapper;
import idus.fullstack.ponto.model.api.response.HorasExcedidasResponse;
import idus.fullstack.ponto.model.api.response.PontoResponse;
import idus.fullstack.ponto.model.api.response.PrevisaoCompletarJornadaResponse;
import idus.fullstack.ponto.model.api.response.ResumoJornadaResponse;
import idus.fullstack.ponto.model.enums.Regime;
import idus.fullstack.ponto.repository.DiaDeTrabalhoRepository;
import jakarta.transaction.Transactional;

@Service
public class DiaDeTrabalhoService {
    @Autowired
    private DiaDeTrabalhoRepository diaDeTrabalhoRepository;

    @Autowired
    private UsuarioService usuarioService;

    @Autowired
    private PontoMapper pontoMapper;

    @Autowired
    private UtilsMapper utilsMapper;

    public ResumoJornadaResponse resumoDiaAtual(Long usuarioId) {
        UsuarioComum usuario = usuarioService.getUsuarioComumById(usuarioId);
        Optional<DiaDeTrabalho> diaDeTrabalho = this.getDiaDeTrabalhoHojeByUsuarioId(usuarioId);

        boolean isJornadaCompleta = isJornadaCompleta(usuario, diaDeTrabalho);
        boolean ehFechado;
        if (diaDeTrabalho.isPresent()) {
            ehFechado = this.isFechado(diaDeTrabalho.get());
        } else {
            ehFechado = true;
        }
        List<PontoResponse> pontos = new ArrayList<>();
        if (diaDeTrabalho.isPresent()) {
            pontos = diaDeTrabalho
                    .get()
                    .getPontos()
                    .stream()
                    .map(pontoMapper::pontoToPontoResponse)
                    .toList();
        }

        return new ResumoJornadaResponse(pontos, isJornadaCompleta, ehFechado);
    }

    public PrevisaoCompletarJornadaResponse previsaoCompletarJornada(Long usuarioId) {
        UsuarioComum usuario = usuarioService.getUsuarioComumById(usuarioId);
        Duration horasDeTrabalhoEsperadas = this.getHorasDeTrabalhoEsperadas(usuario.getTipoDeRegime());
        Optional<DiaDeTrabalho> diaDeTrabalho = this.getDiaDeTrabalhoHojeByUsuarioId(usuarioId);

        Duration horasFalta = calcularHorasFalta(diaDeTrabalho, horasDeTrabalhoEsperadas);

        if (horasFalta.isPositive()) {
            return new PrevisaoCompletarJornadaResponse(convertDurationToLocalTime(horasFalta));
        } else {
            return new PrevisaoCompletarJornadaResponse(convertDurationToLocalTime(Duration.ZERO));
        }

    }

    private LocalTime convertDurationToLocalTime(Duration duration) {
        return LocalTime.MIN.plus(duration);
    }

    public HorasExcedidasResponse horasExcedidas(Long usuarioId) {
        UsuarioComum usuario = usuarioService.getUsuarioComumById(usuarioId);
        Duration horasDeTrabalhoEsperadas = this.getHorasDeTrabalhoEsperadas(usuario.getTipoDeRegime());
        Optional<DiaDeTrabalho> diaDeTrabalho = this.getDiaDeTrabalhoHojeByUsuarioId(usuarioId);

        Duration horasFalta = calcularHorasFalta(diaDeTrabalho, horasDeTrabalhoEsperadas);
        Duration horasExcedidas = horasFalta.negated();

        if (horasExcedidas.isPositive()) {
            return new HorasExcedidasResponse(convertDurationToLocalTime(horasExcedidas));
        } else {
            return new HorasExcedidasResponse(convertDurationToLocalTime(Duration.ZERO));
        }
    }

    @Transactional
    public DiaDeTrabalho createDiaDeTrabalho(DiaDeTrabalho diaDeTrabalho) {
        return diaDeTrabalhoRepository.save(diaDeTrabalho);
    }

    @Transactional
    public DiaDeTrabalho createDiaDeTrabalho(UsuarioComum funcionario) {
        Date data = utilsMapper.localDateToDate(LocalDate.now());

        return createDiaDeTrabalho(funcionario, data);
    }

    @Transactional
    public DiaDeTrabalho createDiaDeTrabalho(UsuarioComum funcionario, Date data) {
        DiaDeTrabalho diaDeTrabalho = DiaDeTrabalho.builder()
                .funcionario(funcionario)
                .data(data)
                .build();

        return createDiaDeTrabalho(diaDeTrabalho);
    }

    public DiaDeTrabalho getDiaDeTrabalho(Long diaDeTrabalhoId) {
        return diaDeTrabalhoRepository.findById(diaDeTrabalhoId).orElseThrow();
    }

    public DiaDeTrabalho getDiaDeTrabalho(Long usuarioId, Date data) {
        UsuarioComum usuario = usuarioService.getUsuarioComumById(usuarioId);
        return diaDeTrabalhoRepository.findFirstByFuncionarioAndData(usuario, data).orElseThrow();
    }

    @Transactional
    public DiaDeTrabalho getOrCreateDiaDeTrabalho(UsuarioComum funcionario, Date data) {
        DiaDeTrabalho diaDeTrabalho = null;
        try {
            diaDeTrabalho = getDiaDeTrabalho(funcionario.getId(), data);
        } catch (Exception e) {
            diaDeTrabalho = createDiaDeTrabalho(funcionario, data);
        }
        return diaDeTrabalho;
    }

    @Transactional
    public DiaDeTrabalho getOrCreateDiaDeTrabalhoHoje(UsuarioComum funcionario) {
        Date data = utilsMapper.localDateToDate(LocalDate.now());
        return getOrCreateDiaDeTrabalho(funcionario, data);
    }

    @Transactional
    public DiaDeTrabalho addPontoToDiaDeTrabalho(DiaDeTrabalho diaDeTrabalho, Ponto ponto) {
        diaDeTrabalho.adicionarPonto(ponto);
        diaDeTrabalhoRepository.save(diaDeTrabalho);
        return getDiaDeTrabalho(diaDeTrabalho.getId());
    }

    public boolean isFechado(DiaDeTrabalho diaDeTrabalho) {
        var pontos = diaDeTrabalho.getPontos();

        if (pontos == null || pontos.isEmpty()) {
            return true;
        }
        var ultimoPonto = pontos.getLast();
        return ultimoPonto.isEhFechado();
    }

    private Optional<DiaDeTrabalho> getDiaDeTrabalhoHojeByUsuarioId(Long usuarioId) {
        UsuarioComum usuario = usuarioService.getUsuarioComumById(usuarioId);
        Date data = utilsMapper.localDateToDate(LocalDate.now());

        return diaDeTrabalhoRepository.findFirstByFuncionarioAndData(usuario, data);
    }

    private Duration calcularHorasFalta(Optional<DiaDeTrabalho> diaDeTrabalho, Duration horasDeTrabalhoEsperadas) {
        if (diaDeTrabalho.isEmpty()) {
            return horasDeTrabalhoEsperadas;
        }

        Duration horasTrabalhadas = this.calcularHorasTrabalhadas(diaDeTrabalho.get().getPontos());
        return horasDeTrabalhoEsperadas.minus(horasTrabalhadas);
    }

    private boolean isJornadaCompleta(UsuarioComum usuario, Optional<DiaDeTrabalho> diaDeTrabalho) {
        if (diaDeTrabalho.isEmpty()) {
            return false;
        }
        Duration horasDeTrabalhoEsperadas = this.getHorasDeTrabalhoEsperadas(usuario.getTipoDeRegime());

        Duration horasFalta = calcularHorasFalta(diaDeTrabalho, horasDeTrabalhoEsperadas);
        return !horasFalta.isPositive();
    }

    private Duration getHorasDeTrabalhoEsperadas(Regime regime) {
        if (regime == Regime.OITOHORAS) {
            return Duration.ofHours(8);
        } else {
            return Duration.ofHours(6);
        }
    }

    private DiaDeTrabalho validarDiaDeTrabalho(DiaDeTrabalho diaDeTrabalho) {
        boolean ehValido = true;
        Regime regime = diaDeTrabalho.getFuncionario().getTipoDeRegime();
        List<Ponto> pontos = diaDeTrabalho.getPontos();

        if (regime.equals(Regime.OITOHORAS)) {
            ehValido = pontos.size() == 2;
        }

        ehValido = ehValido && validarHorasTrabalhadas(pontos, regime);

        diaDeTrabalho.setEhDiaValido(ehValido);
        return diaDeTrabalho;
    }

    private boolean validarHorasTrabalhadas(List<Ponto> pontos, Regime regime) {
        Duration horasTrabalhadas = calcularHorasTrabalhadas(pontos);
        Duration horasDeDescanso = calcularHorasDeDescanso(pontos);

        if (regime == Regime.OITOHORAS) {
            return horasTrabalhadas.compareTo(Duration.ofHours(8)) >= 0
                    && horasDeDescanso.compareTo(Duration.ofHours(1)) >= 0;
        } else {
            return horasTrabalhadas.compareTo(Duration.ofHours(6)) >= 0
                    && horasDeDescanso.compareTo(Duration.ZERO) <= 0;
        }
    }

    private Duration calcularHorasTrabalhadas(List<Ponto> pontos) {
        if (pontos.size() <= 1) {
            return Duration.ZERO;
        }
        Duration tempoDeTrabalho = Duration.ZERO;

        for (int i = 1; i < pontos.size(); i += 2) {
            var horaAtual = pontos.get(i).getHora().toLocalTime();
            var horaAnterior = pontos.get(i - 1).getHora().toLocalTime();

            tempoDeTrabalho = tempoDeTrabalho.plus(Duration.between(horaAnterior, horaAtual));
        }
        return tempoDeTrabalho;
    }

    private Duration calcularHorasDeDescanso(List<Ponto> pontos) {
        if (pontos.size() <= 2) {
            return Duration.ZERO;
        }
        Duration tempoDePausa = Duration.ZERO;

        for (int i = 2; i < pontos.size(); i += 2) {
            var horaAtual = pontos.get(i).getHora().toLocalTime();
            var horaAnterior = pontos.get(i - 1).getHora().toLocalTime();

            tempoDePausa = tempoDePausa.plus(Duration.between(horaAnterior, horaAtual));
        }
        return tempoDePausa;
    }

}
