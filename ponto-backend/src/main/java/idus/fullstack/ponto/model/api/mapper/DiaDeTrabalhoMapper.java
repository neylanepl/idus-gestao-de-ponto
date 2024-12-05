package idus.fullstack.ponto.model.api.mapper;

import org.mapstruct.Mapper;

import idus.fullstack.ponto.model.DiaDeTrabalho;
import idus.fullstack.ponto.model.api.response.DiaDeTrabalhoResponse;

@Mapper(componentModel = "spring", uses = { UtilsMapper.class })
public abstract class DiaDeTrabalhoMapper {
    public abstract DiaDeTrabalhoResponse diaDeTrabalhoToDiaDeTrabalhoResponse(DiaDeTrabalho diaDeTrabalho);
}
