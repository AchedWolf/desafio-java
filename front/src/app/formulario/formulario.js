import React from 'react';
import { ClienteService } from '../../service/cliente.service';
import './formulario.css';

export class Formulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cpf: '',
      name: '',
      genero: '',
      email: '',
      isEmailValid: true,
      dataNasc: '',
      isDataDascValid: true,
      nat: '',
      nac: '',
      isCpfValid: true,
      isUpdate: props.update,
    }

    this.service = new ClienteService(props.username, props.password);

    this.validateInput = this.validateInput.bind(this);
    this.updateValue = this.updateValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validate = this.validate.bind(this);

    // Update
    if (this.state.isUpdate) {
      this.updateValue('cpf', this.props.cliente.cpf);
      this.updateValue('name', this.props.cliente.name);
      this.updateValue('genero', this.props.cliente.genero);
      this.updateValue('email', this.props.cliente.email);
      this.updateValue('dataNasc', this.props.cliente.dataNasc);
      this.updateValue('nat', this.props.cliente.nat);
      this.updateValue('nac', this.props.cliente.nac);
    }
  }

  async validateInput(event) {
    const name = event.target.name;
    var value = event.target.value;

    if (name === 'cpf') {
      value = value.replace(/\D/g, "");
      value = value.replace(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/);
    }

    await this.updateValue(name, value);
  }

  async updateValue(name, value) {
    this.setState({ [name]: value });
  }

  async handleSubmit(event) {
    await this.validate();

    if (
      this.state.isEmailValid &&
      this.state.isDataDascValid &&
      this.state.isCpfValid
    ) {

      var aux = {
        cpf: this.state.cpf,
        name: this.state.name,
        genero: this.state.genero,
        email: this.state.email,
        dataNasc: this.state.dataNasc,
        nat: this.state.nat,
        nac: this.state.nac,
      }

      var result;
      if (this.state.isUpdate)
        result = this.service.update(aux);
      else
        result = this.service.include(aux);

      console.log(result);

      if (result.status === 200)
        alert("Chamada realizada com sucesso")
      else
        alert("Falha na chamada")
    }

    event.preventDefault();
  }

  async validate() {
    // Validação Data
    var today = new Date();
    var dataNasc = new Date(this.state.dataNasc + ' 23:59:59');
    if (
      this.state.dataNasc.match(/^\d{4}\-\d{2}\-\d{2}$/) &&
      !(
        today.getTime() === dataNasc.getTime() ||
        today.getTime() < dataNasc.getTime()
      )
    ) {
      await this.updateValue('isDataDascValid', true);
    }
    else {
      await this.updateValue('isDataDascValid', false);
    }

    // Validação CPF
    if (this.state.cpf.length < 14 && this.state.cpf.match(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/)) {
      await this.updateValue('isCpfValid', true);
    }
    else {
      await this.updateValue('isCpfValid', false);
    }

    // Validação Email
    if (this.state.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) || this.state.email === '') {
      await this.updateValue('isEmailValid', true);
      console.log("email ok");
    }
    else {
      await this.updateValue('isEmailValid', false);
      console.log("email falhou");
    }

  }

  render() {
    return (
      <form class="container formulario" onSubmit={this.handleSubmit}>
        <div class="row">
          <label>
            Nome
            <input required name="name" type="text" value={this.state.user} onChange={this.validateInput} />
          </label>
        </div>

        <div class="row">
          <label>
            Gênero
            <input name="genero" type="text" value={this.state.genero} onChange={this.validateInput} />
          </label>
        </div>

        <div class="row">
          <label>
            E-mail
            <input name="email" type="text" value={this.state.email} onChange={this.validateInput} />
          </label>
        </div>

        <div class="row">
          <label>
            Data de Nascimento
            <input required name="dataNasc" type="date" value={this.state.dataNasc} onChange={this.validateInput} />
          </label>
        </div>

        <div class="row">
          <label>
            Naturalidade
            <input name="nat" type="text" value={this.state.nat} onChange={this.validateInput} />
          </label>
        </div>

        <div class="row">
          <label>
            Nacionalidade
            <input name="nac" type="text" value={this.state.nac} onChange={this.validateInput} />
          </label>
        </div>

        <div class="row">
          <label>
            CPF
            <input required maxLength={14} name="cpf" type="text" value={this.state.cpf} onChange={this.validateInput} pattern={/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/} />
          </label>
          <label ></label>
        </div>

        <div class="row">
          <input type="submit" value="Enviar" />
        </div>
      </form>
    );
  }

}