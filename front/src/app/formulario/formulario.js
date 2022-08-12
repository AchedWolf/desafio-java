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
      value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,
        function (regex, argumento1, argumento2, argumento3, argumento4) {
          return argumento1 + '.' + argumento2 + '.' + argumento3 + '-' + argumento4;
        });
    }

    await this.updateValue(name, value);
  }

  async updateValue(name, value) {
    this.setState({ [name]: value });
  }

  async handleSubmit() {
    await this.validate();

    if (
      this.state.isEmailValid &&
      this.state.isDataDascValid &&
      this.state.isCpfValid
    ) {

      var aux = {
        cpf: parseInt((this.state.cpf.replaceAll('.', '')).replace('-', '')),
        name: this.state.name,
        genero: this.state.genero,
        email: this.state.email,
        dataNasc: this.state.dataNasc + 'T23:59:59.000',
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
    if (this.state.cpf.length === 14 && this.state.cpf.match(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/)) {
      await this.updateValue('isCpfValid', true);
    }
    else {
      await this.updateValue('isCpfValid', false);
    }

    // Validação Email
    if (this.state.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) || this.state.email === '') {
      await this.updateValue('isEmailValid', true);
    }
    else {
      await this.updateValue('isEmailValid', false);
    }

    return;
  }

  render() {
    return (
      <form class="container formulario">
        <div class="row">
          <label class="title">
            Formulario de Cliente
          </label>
        </div>

        <div class="row">
          <label>
            Nome
          </label>
          <input class="input" required name="name" type="text" value={this.state.user} onChange={this.validateInput} />
        </div>

        <div class="row">
          <label>
            Gênero
          </label>
          <input class="input" name="genero" type="text" value={this.state.genero} onChange={this.validateInput} />
        </div>

        <div class="row">
          <label>
            E-mail
          </label>
          <input class="input" name="email" type="text" value={this.state.email} onChange={this.validateInput} />
        </div>

        <div class="row">
          <label>
            Data de Nascimento
          </label>
          <input class="input" required name="dataNasc" type="date" value={this.state.dataNasc} onChange={this.validateInput} />
        </div>

        <div class="row">
          <label>
            Naturalidade
          </label>
          <input class="input" name="nat" type="text" value={this.state.nat} onChange={this.validateInput} />
        </div>

        <div class="row">
          <label>
            Nacionalidade
          </label>
          <input class="input" name="nac" type="text" value={this.state.nac} onChange={this.validateInput} />
        </div>

        <div class="row">
          <label>
            CPF
          </label>
          <input class="input" required maxLength={11} name="cpf" type="text" value={this.state.cpf} onChange={this.validateInput} pattern={/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/} />
        </div>

        <div class="row">
          <input class="center" type="button" value="Enviar" onClick={this.handleSubmit} />
        </div>
      </form>
    );
  }

}