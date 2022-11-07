import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vuelidate from 'vuelidate'

import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

Vue.use(Vuelidate)

Vue.component("Header", Header);
Vue.component("Footer", Footer);

Vue.productionTip = false


Vue.use({
  store,
  router, 
})

const main = new Vue({
  store,
  router,
  
  render: h => h(App)
}).$mount('#app');



main.$store.dispatch("loadSliders");
main.$store.dispatch("loadProducts");
main.$store.commit("setNewFields");



main.$store.dispatch("loadPages");
main.$store.dispatch("loadSetting");
main.$store.dispatch("loadCategories");
main.$store.dispatch("loadPagesRouts");


export default main
