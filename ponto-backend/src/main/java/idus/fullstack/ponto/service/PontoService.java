package idus.fullstack.ponto.service;

import java.sql.Date;
import java.sql.Time;
import java.time.LocalDate;
import java.time.LocalTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import idus.fullstack.ponto.model.Ponto;
import idus.fullstack.ponto.model.api.mapper.PontoMapper;
import idus.fullstack.ponto.model.api.response.PontoResponse;
import idus.fullstack.ponto.repository.PontoRepository;
import jakarta.transaction.Transactional;

@Service
public class PontoService {
    @Autowired
    private PontoMapper pontoMapper;
    @Autowired
    private PontoRepository pontoRepository;

    @Autowired
    private DiaDeTrabalhoService diaDeTrabalhoService;
    @Autowired
    private UsuarioService usuarioService;

    @Transactional
    public PontoResponse registrarPonto(Long idUsuario) {
        var usuario = usuarioService.getUsuarioComumById(idUsuario);
        var dataAtual = Date.valueOf(LocalDate.now());
        var horaAtual = Time.valueOf(LocalTime.now());
        var diaDeTrabalho = diaDeTrabalhoService.getOrCreateDiaDeTrabalho(usuario, dataAtual);
        var ehFechado = !diaDeTrabalhoService.isFechado(diaDeTrabalho);

        Ponto ponto = Ponto.builder()
                .hora(horaAtual)
                .data(dataAtual)
                .ehFechado(ehFechado)
                .build();

        ponto = createPonto(ponto);
        diaDeTrabalhoService.addPontoToDiaDeTrabalho(diaDeTrabalho, ponto);

        Ponto pontoSalvo = pontoRepository.save(ponto);
        return pontoMapper.pontoToPontoResponse(pontoSalvo);
    }

    public Ponto createPonto(Ponto ponto) {
        return pontoRepository.save(ponto);
    }

}
