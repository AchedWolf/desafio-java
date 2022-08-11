import axios from "axios";

export class ClienteService {

    constructor(username, password) {
        this.state = {
            basicUrl: "localhost:8080/",
            auth: {
                username: username,
                password: password,
            }
        }
    }

    getAll() {
        axios({
            method: 'get',
            url: this.basicUrl + 'cliente',
            auth: this.auth,
        }).then(function (response) {
            return response;
        });
    }

    getByCpf(cpf) {
        axios({
            method: 'get',
            url: this.basicUrl + 'cliente/' + cpf,
            auth: this.auth,
        }).then(function (response) {
            return response;
        });
    }

    include(cliente) {
        axios({
            method: 'post',
            url: this.basicUrl + 'cliente',
            auth: this.auth,
            data: cliente
        }).then(function (response) {
            return response;
        });
    }

    update(cliente) {
        axios({
            method: 'put',
            url: this.basicUrl + 'cliente',
            auth: this.auth,
            data: cliente
        }).then(function (response) {
            return response;
        });
    }

    delete(cpf) {
        axios({
            method: 'delete',
            url: this.basicUrl + 'cliente/' + cpf,
            auth: this.auth,
        }).then(function (response) {
            return response;
        });
    }
}