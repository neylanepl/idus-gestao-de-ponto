package idus.fullstack.ponto.model;

import java.util.ArrayList;
import java.util.List;

import idus.fullstack.ponto.model.enums.Regime;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.OneToMany;
import jakarta.persistence.PrimaryKeyJoinColumn;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Data
@EqualsAndHashCode(callSuper = true)
@PrimaryKeyJoinColumn(name = "id")
@Table(name = "usuario_comum")
public class UsuarioComum extends Usuario {

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private Regime tipoDeRegime;

    private String cargo;

    private String empresa;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER, orphanRemoval = true, mappedBy = "funcionario")
    private List<DiaDeTrabalho> diasDeTrabalho = new ArrayList<>();

    public void adicionarDiaDeTrabalho(DiaDeTrabalho diaDeTrabalho) {
        diasDeTrabalho.add(diaDeTrabalho);
        diaDeTrabalho.setFuncionario(null);
    }

    public void removerDiaDeTrabalho(DiaDeTrabalho diaDeTrabalho) {
        diasDeTrabalho.remove(diaDeTrabalho);
        diaDeTrabalho.setFuncionario(null);
    }
}
