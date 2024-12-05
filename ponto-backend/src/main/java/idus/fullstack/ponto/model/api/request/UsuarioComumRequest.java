package idus.fullstack.ponto.model.api.request;

import idus.fullstack.ponto.model.enums.Regime;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class UsuarioComumRequest {
    @NotNull
    private Regime tipoDeRegime;

    @NotNull
    private String login;

    @NotNull
    private String senha;

    @NotNull
    private String nome;

    private String cargo;

    private String empresa;
}
