import axios from 'axios'

export default class ClientesService {
    getClientes(){
        return axios.get('http://localhost:8000/clientes').then(res => res.data);
    }
}