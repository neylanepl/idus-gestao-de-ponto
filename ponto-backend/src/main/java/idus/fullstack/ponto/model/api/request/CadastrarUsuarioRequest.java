package idus.fullstack.ponto.model.api.request;

import idus.fullstack.ponto.model.enums.Regime;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class CadastrarUsuarioRequest {
    @NotNull
    private String login;
    @NotNull
    private String senha;
    @NotNull
    private Regime tipoDeRegime;
}
