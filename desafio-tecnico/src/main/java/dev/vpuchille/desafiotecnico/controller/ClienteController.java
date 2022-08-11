package dev.vpuchille.desafiotecnico.controller;

import dev.vpuchille.desafiotecnico.model.Cliente;
import dev.vpuchille.desafiotecnico.service.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = ("/cliente"))
public class ClienteController {

    @Autowired
    private ClienteService service;

    @GetMapping
    public List<Cliente> getAll() {
        return service.getAll();
    }

    @GetMapping(path = "/{cpf}")
    public ResponseEntity getById(@PathVariable("cpf") Integer cpf){
        return ResponseEntity.ok().body(service.getById(cpf));
    }

    @PostMapping
    public ResponseEntity save(@RequestBody Cliente cliente) {
        return ResponseEntity.ok().body(service.save(cliente));
    }

    @PutMapping
    public ResponseEntity update(@RequestBody Cliente cliente) {
        return ResponseEntity.ok().body(service.update(cliente));
    }

    @DeleteMapping(path = "/{cpf}")
    public ResponseEntity delete(@PathVariable("cpf") Integer cpf) {
        return ResponseEntity.ok().body(service.delete(cpf));
    }

}
