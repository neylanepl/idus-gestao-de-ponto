package idus.fullstack.ponto.model;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "dia_de_trabalho")
public class DiaDeTrabalho {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column(nullable = false)
    private Date data;

    @Column(nullable = false)
    private boolean ehDiaValido;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER, orphanRemoval = true, mappedBy = "diaDeTrabalho")
    @Builder.Default
    private List<Ponto> pontos = new ArrayList<>();

    @ManyToOne(fetch = FetchType.EAGER)
    private UsuarioComum funcionario;

    public void adicionarPonto(Ponto ponto) {
        pontos.add(ponto);
        ponto.setDiaDeTrabalho(this);
    }

    public void removerPonto(Ponto ponto) {
        pontos.remove(ponto);
        ponto.setDiaDeTrabalho(null);
    }
}
