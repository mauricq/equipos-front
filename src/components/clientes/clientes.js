import ClientesService from "../../services/ClientesService.js";

export default {
  name: 'clientes',
  components: {},
  props: [],
  data () {
    return {
      clientes: null,
      columns: null,
      clienteSeleccionado: null
    }
  },
  clientesService: null,
  created () {
    this.clientesService = new ClientesService();

    this.columns = [
      {field: 'nombre', header: 'Nombres'},
      {field: 'ciudad', header: 'Ciudad'},
      {field: 'telefono', header: 'Telefono'}
    ]

  },
  computed: {

  },
  mounted () {
    this.clientesService.getClientes().then(data => this.clientes = data)
  },
  methods: {
    onRowSelect() {
      console.log(this.clienteSeleccionado.id)
    }
  }
}


