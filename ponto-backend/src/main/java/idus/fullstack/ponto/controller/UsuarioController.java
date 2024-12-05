package idus.fullstack.ponto.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import idus.fullstack.ponto.model.api.request.UsuarioComumRequest;
import idus.fullstack.ponto.model.api.response.UsuarioComumResponse;
import idus.fullstack.ponto.service.UsuarioService;

@RestController
@RequestMapping("usuario")
@CrossOrigin(origins = "http://localhost:3000")
public class UsuarioController {
    @Autowired
    private UsuarioService usuarioService;

    @PostMapping("comum")
    public UsuarioComumResponse cadastrarUsuarioComum(@RequestBody UsuarioComumRequest usuarioComumRequest) {
        return usuarioService.createUsuarioComum(usuarioComumRequest);
    }
}
