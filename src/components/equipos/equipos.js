import EquiposService from "../../services/EquiposService";
import ClientesService from "../../services/ClientesService";

export default {
  name: 'equipos',
  components: {},
  props: [],
  data () {
    return {
      equipos: null,
      columns: null,
      equipoSeleccionado: null
    }
  },
  equiposService: null,
  created () {
    this.equiposService = new EquiposService();

    this.columns = [
      {field: 'cliente.nombre', header: 'Cliente'},
      {field: 'sistemaOperativo', header: 'S.O.'},
      {field: 'nombreUsuario', header: 'Usuario'},
      {field: 'clave', header: 'Password'},
      {field: 'nombreRed', header: 'Red'},
      {field: 'nombreEquipo', header: 'Equipo'},
      {field: 'direccionIp', header: 'Direccion IP'}
    ]
  },
  computed: {

  },
  mounted () {
    this.equiposService.getEquipos().then(data => this.equipos = data)
  },
  methods: {
    onRowSelect() {
      console.log(this.equipoSeleccionado.id)
    }
  }
}


