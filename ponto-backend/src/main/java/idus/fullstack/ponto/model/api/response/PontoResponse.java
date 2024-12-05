package idus.fullstack.ponto.model.api.response;

import java.time.LocalDate;
import java.time.LocalTime;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class PontoResponse {
    @NotNull
    private LocalDate data;

    @NotNull
    private LocalTime hora;

    @NotNull
    private boolean ehFechado;

}
