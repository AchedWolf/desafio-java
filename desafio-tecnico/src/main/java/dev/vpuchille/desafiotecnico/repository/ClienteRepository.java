package dev.vpuchille.desafiotecnico.repository;

import dev.vpuchille.desafiotecnico.model.Cliente;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClienteRepository extends CrudRepository<Cliente, Integer> {

}
