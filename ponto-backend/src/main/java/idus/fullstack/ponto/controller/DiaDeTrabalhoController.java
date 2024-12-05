package idus.fullstack.ponto.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import idus.fullstack.ponto.model.api.response.HorasExcedidasResponse;
import idus.fullstack.ponto.model.api.response.PrevisaoCompletarJornadaResponse;
import idus.fullstack.ponto.model.api.response.ResumoJornadaResponse;
import idus.fullstack.ponto.service.DiaDeTrabalhoService;

@RestController
@RequestMapping("diaDeTrabalho")
@CrossOrigin(origins = "http://localhost:3000")
public class DiaDeTrabalhoController {
    @Autowired
    private DiaDeTrabalhoService diaDeTrabalhoService;

    @GetMapping("resumo/por-usuarioId/{usuarioId}")
    public ResumoJornadaResponse resumoDiaAtual(@PathVariable("usuarioId") Long usuarioId) {
        return diaDeTrabalhoService.resumoDiaAtual(usuarioId);
    }

    @GetMapping("previsaoCompletarJornada/por-usuarioId/{usuarioId}")
    public PrevisaoCompletarJornadaResponse previsaoCompletarJornada(@PathVariable("usuarioId") Long usuarioId) {
        return diaDeTrabalhoService.previsaoCompletarJornada(usuarioId);
    }

    @GetMapping("horasExcedidas/por-usuarioId/{usuarioId}")
    public HorasExcedidasResponse horasExcedidas(@PathVariable("usuarioId") Long usuarioId) {
        return diaDeTrabalhoService.horasExcedidas(usuarioId);
    }

}
