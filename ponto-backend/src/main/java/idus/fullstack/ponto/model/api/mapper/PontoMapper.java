package idus.fullstack.ponto.model.api.mapper;

import org.mapstruct.Mapper;

import idus.fullstack.ponto.model.Ponto;
import idus.fullstack.ponto.model.api.request.PontoRequest;
import idus.fullstack.ponto.model.api.response.PontoResponse;

@Mapper(componentModel = "spring", uses = { UtilsMapper.class })
public abstract class PontoMapper {
    // @Mapping(target = "id", ignore = true)
    public abstract Ponto pontoRequestToPonto(PontoRequest pontoRequest);

    public abstract PontoResponse pontoToPontoResponse(Ponto ponto);

}
