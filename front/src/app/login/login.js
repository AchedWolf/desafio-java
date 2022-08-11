import React from 'react';
import './login.css';
import { Formulario } from '../formulario/formulario';
import { ClienteService } from '../../service/cliente.service';

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isLogged: false
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    await this.setState({ [name]: value });
  }

  handleSubmit(event) {
    this.login();
    event.preventDefault();
  }

  login() {
    var service = new ClienteService(this.state.username, this.state.password);
    var result = service.getAll();
    if (result.status === 200) {
      this.setState({ isLogged: true });
    }
  }

  render() {
    if (this.state.isLogged)
      return (<Formulario username={this.state.username} password={this.state.password} ></Formulario>);

    return (
      <form class="container formulario" onSubmit={this.handleSubmit}>
        <div class="row center">
          <label>
            Seja bem vindo!
          </label>
        </div>

        <div class="row">
          <label>
            Usuario
            <input name="username" type="text" value={this.state.username} onChange={this.handleInputChange} />
          </label>
        </div>

        <div class="row">
          <label>
            Senha
            <input name="password" type="password" value={this.state.password} onChange={this.handleInputChange} />
          </label>
        </div>

        <div class="row">
          <input type="submit" value="Enviar" />
        </div>
      </form>
    );
  }

}