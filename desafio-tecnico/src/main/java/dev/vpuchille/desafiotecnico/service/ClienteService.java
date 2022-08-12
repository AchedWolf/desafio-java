package dev.vpuchille.desafiotecnico.service;

import dev.vpuchille.desafiotecnico.model.Cliente;
import dev.vpuchille.desafiotecnico.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Service
public class ClienteService {

    @Autowired
    private ClienteRepository repository;

    public List<Cliente> getAll () {
        List<Cliente> list = StreamSupport.stream(repository.findAll().spliterator(), false).collect(Collectors.toList());
        return list;
    }

    public Cliente getById(Double cpf) {
        Optional<Cliente> cliente = repository.findById(cpf);

        if(cliente.isEmpty())
            return null;
        else
            return cliente.get();
    }

    public String save(Cliente cliente) {
        Cliente aux = this.getById(cliente.getCpf());
        if(aux == null) {
            repository.save(cliente);
            return "Cliente cadastrado com sucesso";
        }
        else
            return "Cliente já cadastrado";
    }

    public String update(Cliente cliente) {
        Cliente aux = this.getById(cliente.getCpf());
        if(aux != null) {
            repository.save(cliente);
            return "Cliente atualizado com sucesso";
        }
        else
            return "Cliente não cadastrado";
    }

    public String delete(Double cpf) {
        Cliente aux = this.getById(cpf);
        if(aux != null) {
            repository.deleteById(cpf);
            return "Cliente deletado com sucesso";
        }
        else
            return "Cliente não cadastrado";
    }
}
