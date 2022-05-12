import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false


Vue.use({
  store,
  router, 
})

const main = new Vue({
  store,
  router,
  
  render: h => h(App)
}).$mount('#app')


export default main
