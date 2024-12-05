package idus.fullstack.ponto.model.api.mapper;

import org.mapstruct.Mapper;

import idus.fullstack.ponto.model.UsuarioComum;
import idus.fullstack.ponto.model.api.request.UsuarioComumRequest;
import idus.fullstack.ponto.model.api.response.UsuarioComumResponse;

@Mapper(componentModel = "spring", uses = { UtilsMapper.class })
public abstract class UsuarioMapper {
    public abstract UsuarioComum usuarioComumRequestToUsuarioComum(UsuarioComumRequest usuarioComumRequest);

    public abstract UsuarioComumResponse usuarioComumToUsuarioComumResponse(UsuarioComum usuarioComum);
}
