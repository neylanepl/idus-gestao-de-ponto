package idus.fullstack.ponto.repository;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import idus.fullstack.ponto.model.DiaDeTrabalho;
import idus.fullstack.ponto.model.UsuarioComum;

@Repository
public interface DiaDeTrabalhoRepository extends CrudRepository<DiaDeTrabalho, Long> {
    Optional<DiaDeTrabalho> findFirstByFuncionarioAndData(UsuarioComum funcionario, Date data);

    List<DiaDeTrabalho> findByFuncionario(UsuarioComum funcionario);

    List<DiaDeTrabalho> findByData(Date data);

}
