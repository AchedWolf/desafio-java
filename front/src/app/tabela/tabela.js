import React from "react";
import { ClienteService } from "../../service/cliente.service";
import './tabela.css'
import { Formulario } from "../formulario/formulario";

export class Tabela extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: props.username,
			password: props.password,
			isCreate: false,
			isUpdate: false,
			listCliente: [],
			idUpdate: 0,
		}

		this.updateValue = this.updateValue.bind(this);
		this.createCliente = this.createCliente.bind(this);

		this.service = new ClienteService(this.state.username, this.state.password);

		this.loadList();
	}

	async loadList() {
		var list = (await this.service.getAll()).data;
		this.updateValue('listCliente', []);
		console.log(list);
		this.updateValue('listCliente', list);
	}

	async createCliente() {
		this.updateValue('isCreate', true);
	}

	async delete(cpf) {
		await this.service.delete(cpf);

		const element = document.getElementById(cpf);
		element.remove();


		this.loadList();
	}

	async edit(cpf) {
		this.loadList();
	}

	async updateValue(name, value) {
		this.setState({ [name]: value });
	}

	formatData(txt) {
		txt = txt.split('T')[0];
		var aux = txt.split('-');
		return (aux[2] + '/' + aux[1] + '/' + aux[0]);
	}

	render() {
		if (this.state.isCreate) {
			return (<Formulario
				username={this.state.username}
				password={this.state.password}
				isUpdate={this.state.isUpdate}
			></Formulario>);
		}

		if (this.state.isUpdate) {
			return (<Formulario
				username={this.state.username}
				password={this.state.password}
				isUpdate={this.state.isUpdate}
				cliente={this.state.listCliente[this.state.idUpdate]}
			></Formulario>);
		}

		return (
			<div class="container tela">
				<div class="row">
					<label class="title">
						Lista de Clientes
					</label>
				</div>

				<table class="col-12 table">
					<thead>
						<tr>
							<td class="cell col-3">Cpf</td>
							<td class="cell col-3">Nome</td>
							<td class="cell col-3">Data de Nascimento</td>
							<td class="cellAction col-3">Ações</td>
						</tr>
					</thead>
					<tbody>
						{
							this.state.listCliente.map(cli =>
								<tr id={cli.cpf} key={cli.cpf}>
									<td class="cell"> {cli.cpf}</td>
									<td class="cell"> {cli.name}</td>
									<td class="cell"> {this.formatData(cli.dataNasc)}</td>
									<td class="cellAction">
										<button class="btnEdit border" onClick={() => this.edit(cli.cpf)}><i class="fas fa-trash"></i></button>
										<button class="btnDelete border" onClick={() => this.delete(cli.cpf)}><i class="fas fa-trash"></i></button>
									</td>
								</tr>
							)
						}
						<tr></tr>
					</tbody>
				</table>

				<div class="row">
					<input class="button" type="button" value="Cadastrar" onClick={this.createCliente} />
				</div>
			</div>
		);
	}

}