package idus.fullstack.ponto.model.api.response;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ResumoJornadaResponse {
    private List<PontoResponse> pontosDoDia;

    private boolean ehJornadaCompleta;

    private boolean ehFechado;
}
