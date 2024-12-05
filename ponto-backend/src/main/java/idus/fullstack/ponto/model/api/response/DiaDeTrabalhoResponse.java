package idus.fullstack.ponto.model.api.response;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@Data
public class DiaDeTrabalhoResponse {

    private Long id;

    private LocalDate data;

    @JsonIgnore
    private List<PontoResponse> pontos = new ArrayList<>();

    private boolean ehDiaValido;

    private UsuarioComumResponse funcionario;

}
