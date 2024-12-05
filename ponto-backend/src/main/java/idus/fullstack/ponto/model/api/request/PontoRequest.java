package idus.fullstack.ponto.model.api.request;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class PontoRequest {
    // @NotNull
    // private LocalDate data;

    // @NotNull
    // private LocalTime hora;

    @NotNull
    private boolean ehfechado;
}
