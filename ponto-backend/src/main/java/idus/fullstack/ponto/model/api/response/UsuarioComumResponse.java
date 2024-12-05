package idus.fullstack.ponto.model.api.response;

import java.util.ArrayList;
import java.util.List;

import idus.fullstack.ponto.model.enums.Regime;
import lombok.Data;

@Data
public class UsuarioComumResponse {

    private Long id;

    private Regime tipoDeRegime;

    private String login;

    private String senha;

    private String nome;

    private String cargo;

    private String empresa;

    private List<DiaDeTrabalhoResponse> diasDeTrabalho = new ArrayList<>();

}
