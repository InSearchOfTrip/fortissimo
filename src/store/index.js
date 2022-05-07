import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const productsSlider = {
  state: {
    products: [
      {
        id: "1",
        title: "дегустаційний сет “затятий кавоман”",
        img: "productsSlide/product_1.png",
        prise_int: "399 грн",
        prise_text: "/ 100% арабіка",

      },
      // {
      //   id: "2",
      //   title: "ефіопія джимма 100% арабіка",
      //   img: "@/assets/images/productsSlide/product_1.png",
      //   prise_int: "150 грн",
      //   prise_text: "/ 100% арабіка",

      // },
      // {
      //   id: "3",
      //   title: "дегустаційний сет “затятий кавоман”",
      //   img: "@/assets/images/productsSlide/product_1.png",
      //   prise_int: "399 грн",
      //   prise_text: "/ 100% арабіка",

      // },
      // {
      //   id: "4",
      //   title: "ефіопія джимма 100% арабіка",
      //   img: "@/assets/images/productsSlide/product_1.png",
      //   prise_int: "150 грн",
      //   prise_text: "/ 100% арабіка",

      // },
    ],
    propose: [
      {
        name: "ефіопія джимма 100% арабіка / зерна / 500 г",
        href: "/some"
      },
      {
        name: "Бразилія сантос 100% арабіка / мелена / 250 г",
        href: "/other"
      },
      {
        name: "Гондурас маркала 100% арабіка / мелена / 250 г",
        href: "/some2"
      }
    ]
  },
  getters:{
    getProducts(state){
      return state.products;
    },
    getPropose(state){
      return state.propose;
    }
  },
  mutations: {},
  actions: {},
  modules: {}
}

export default new Vuex.Store({
  modules: {
    productsSlider
  }
})