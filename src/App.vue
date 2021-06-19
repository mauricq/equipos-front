<template>
  <div id="app">
    <div id="nav">
      <Menubar :model="items">
        <Button label="Salir" icon="pi pi-sign-out" />
      </Menubar>
    </div>
    <router-view/>
  </div>
</template>

<style>
body{
  background-color: #17324f;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
  export default {
    data() {
      return {
        items: [
          {
            label:'Home',
            icon:'pi pi-fw pi-home',
            url:'/'
          },
          {
            label:'Clientes',
            icon:'pi pi-fw pi-user',
            url:'clientes'
          },
          {
            label:'Equipos',
            icon:'pi pi-fw pi-desktop',
            url: 'equipos'
          },
          {
            label:'Dispositivos',
            icon:'pi pi-fw pi-print',
            url: 'dispositivos'
          }
        ]
      }
    }
  }
</script>
