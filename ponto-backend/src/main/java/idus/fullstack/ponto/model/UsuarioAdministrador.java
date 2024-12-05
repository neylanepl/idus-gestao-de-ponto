package idus.fullstack.ponto.model;

import jakarta.persistence.Table;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
@Table(name = "usuario_administrador")
public class UsuarioAdministrador extends Usuario {

}
