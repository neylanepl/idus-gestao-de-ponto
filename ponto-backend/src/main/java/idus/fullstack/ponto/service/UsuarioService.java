package idus.fullstack.ponto.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import idus.fullstack.ponto.model.UsuarioComum;
import idus.fullstack.ponto.model.api.mapper.UsuarioMapper;
import idus.fullstack.ponto.model.api.request.UsuarioComumRequest;
import idus.fullstack.ponto.model.api.response.UsuarioComumResponse;
import idus.fullstack.ponto.repository.UsuarioComumRepository;

@Service
public class UsuarioService {
    @Autowired
    private UsuarioComumRepository usuarioComumRepository;
    @Autowired
    private UsuarioMapper usuarioMapper;

    public UsuarioComum getUsuarioComumById(Long id) {
        return usuarioComumRepository.findById(id).orElseThrow();
    }

    public UsuarioComumResponse createUsuarioComum(UsuarioComumRequest usuarioComumRequest) {
        UsuarioComum usuarioComum = usuarioMapper.usuarioComumRequestToUsuarioComum(usuarioComumRequest);
        UsuarioComum usuarioSalvo = usuarioComumRepository.save(usuarioComum);
        return usuarioMapper.usuarioComumToUsuarioComumResponse(usuarioSalvo);
    }

}
