package idus.fullstack.ponto.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import idus.fullstack.ponto.model.api.response.PontoResponse;
import idus.fullstack.ponto.service.PontoService;

@RestController
@RequestMapping("ponto")
@CrossOrigin(origins = "http://localhost:3000")
public class PontoController {

    @Autowired
    private PontoService pontoService;

    @PostMapping("{idUsuario}")
    public PontoResponse registrarPonto(@PathVariable("idUsuario") Long idUsuario) {
        return pontoService.registrarPonto(idUsuario);
    }

}
