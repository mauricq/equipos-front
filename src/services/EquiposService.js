import axios from 'axios'

export default class EquiposService {
    getEquipos(){
        return axios.get('http://localhost:8000/computadoras').then(res => res.data);
    }
}