package idus.fullstack.ponto.model.api.response;

import java.time.LocalTime;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class HorasExcedidasResponse {
    private LocalTime horasExcedidas;
}
