import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Toolbar from 'primevue/toolbar'
import Button from 'primevue/button';
import Menubar from 'primevue/menubar';
import InputText from 'primevue/inputtext'
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import SplitButton from 'primevue/splitbutton'

Vue.config.productionTip = false
Vue.component('Toolbar', Toolbar)
Vue.component('Button', Button)
Vue.component('Menubar', Menubar)
Vue.component('InputText', InputText)
Vue.component('DataTable', DataTable)
Vue.component('Column', Column)
Vue.component('SplitButton', SplitButton)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
