import React from 'react';
import './login.css';
import { ClienteService } from '../../service/cliente.service';
import { Tabela } from '../tabela/tabela';

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'admin',
      password: '1234',
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

  async login() {
    var service = new ClienteService(this.state.username, this.state.password);
    await service.getAll().then((response) => {
      if (response.status === 200) {
        this.setState({ isLogged: true });
      }

    });
  }

  render() {
    if (this.state.isLogged)
      return (<Tabela username={this.state.username} password={this.state.password} ></Tabela>);

    return (
      <form class="container login" onSubmit={this.handleSubmit}>
        <div class="row center">
          <label class="title">
            Seja bem vindo!
          </label>
        </div>

        <div class="row">
          <label>
            Usuario
          </label>
          <input class="input" name="username" type="text" value={this.state.username} onChange={this.handleInputChange} />
        </div>

        <div class="row">
          <label>
            Senha
          </label>
          <input class="input" name="password" type="password" value={this.state.password} onChange={this.handleInputChange} />
        </div>

        <div class="row">
          <input class="center" type="submit" value="Enviar" />
        </div>
      </form>
    );
  }

}