import axios from "axios";

export class ClienteService {

    constructor(username, password) {
        this.state = {
            basicUrl: "http://localhost:8080/",
            auth: {
                username: username,
                password: password
            },
            headers: {
                "Content-Type": "application/json"
            }
        }
    }

    async getAll() {
        return axios({
            method: 'get',
            url: this.state.basicUrl + 'cliente',
            auth: this.state.auth,
            headers: this.state.headers,
        }).then(function (response) {
            return response;
        }).catch(function (error) {
            return error;
        });
    }

    getByCpf(cpf) {
        axios({
            method: 'get',
            url: this.state.basicUrl + 'cliente/' + cpf,
            auth: this.state.auth,
            headers: this.state.headers,
        }).then(function (response) {
            return response;
        });
    }

    include(cliente) {
        axios({
            method: 'post',
            url: this.state.basicUrl + 'cliente',
            auth: this.state.auth,
            data: cliente,
            headers: this.state.headers,
        }).then(function (response) {
            return response;
        });
    }

    update(cliente) {
        axios({
            method: 'put',
            url: this.state.basicUrl + 'cliente',
            auth: this.state.auth,
            data: cliente,
            headers: this.state.headers,
        }).then(function (response) {
            return response;
        });
    }

    delete(cpf) {
        axios({
            method: 'delete',
            url: this.state.basicUrl + 'cliente/' + cpf,
            auth: this.state.auth,
            headers: this.state.headers,
        }).then(function (response) {
            return response;
        });
    }
}