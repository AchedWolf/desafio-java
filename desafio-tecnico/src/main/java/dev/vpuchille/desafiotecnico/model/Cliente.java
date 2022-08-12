package dev.vpuchille.desafiotecnico.model;

import org.springframework.boot.jackson.JsonObjectDeserializer;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.time.LocalDateTime;

@Entity(name = "cliente")
public class Cliente {

    public Cliente() {}

    @Id
    public Double cpf;

    @Column(nullable = false)
    public String name;

    @Column
    public String genero;

    @Column
    public String email;

    @Column(nullable = false)
    public LocalDateTime dataNasc;

    @Column
    public String nat;

    @Column
    public String nac;

    public Double getCpf() {
        return cpf;
    }

    public void setCpf(Double cpf) {
        this.cpf = cpf;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getGenero() {
        return genero;
    }

    public void setGenero(String genero) {
        this.genero = genero;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public LocalDateTime getDataNasc() {
        return dataNasc;
    }

    public void setDataNasc(LocalDateTime dataNasc) {
        this.dataNasc = dataNasc;
    }

    public String getNat() {
        return nat;
    }

    public void setNat(String nat) {
        this.nat = nat;
    }

    public String getNac() {
        return nac;
    }

    public void setNac(String nac) {
        this.nac = nac;
    }

}
