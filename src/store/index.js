import Vue from 'vue'
import Vuex from 'vuex'

function _findElInBasket(el, func) {
  let result;
  el.addedInBasket.forEach((element) => {
    if (
      el.typeChoosed === element.typeChoosed &&
      el.weightChoosed === element.weightChoosed
    ) {
      result = func(element);
    } else {
      return false;
    }
  });
  return result;
}

const domain = "https://fortissimo.devseonet.com";

Vue.use(Vuex);

const api = {
  state: {
    settings: null,
  },
  actions: {
    loadSetting() {
      let that = this;
      fetch(`${domain}/api/settings`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          that.state.api.settings = data.settings;
          return data.settings;
        });
    },
  },
  getters: {
    getSetting(state) {
      return state.settings;
    }
  },


}

const productsSlider = {
  state: {
    products: [{
        id: "1",
        title: "дегустаційний сет “затятий кавоман”",
        description: "Важко обрати каву? – Спробуйте кілька варіантів та оберіть для себе найкращий смак. В набір входить:",
        img: "productsSlide/product_1.png",
        prise_int: "399",
        prise_text: "/ 100% арабіка",
        propose: [{
            name: "ефіопія джимма 100% арабіка / зерна / 500 г",
            href: "/some"
          },
          {
            name: "Lorem Ipsum is simply dummy text",
            href: "/other"
          },
          {
            name: "Гондурас маркала 100% арабіка / мелена / 250 г",
            href: "/some2"
          }
        ],
        detailsLink: "/details4",

      },
      {
        id: "2",
        title: "ефіопія джимма 100% арабіка",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        img: "productsSlide/product_2.png",
        prise_int: "150",
        prise_text: "/ 100% арабіка",
        propose: [{
            name: "Lorem Ipsum is simply dummy text",
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
        ],
        detailsLink: "/details3",


      },
      {
        id: "3",
        title: "ефіопія джимма 100% арабіка",
        description: "Важко обрати каву? – Спробуйте кілька варіантів та оберіть для себе найкращий смак. В набір входить:",
        img: "productsSlide/product_2.png",
        prise_int: "150",
        prise_text: "/ 100% арабіка",
        propose: [{
            name: "Lorem Ipsum is simply dummy text",
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
        ],
        detailsLink: "/details2",


      },

      {
        id: "4",
        title: "ефіопія джимма 100% арабіка",
        description: "Важко обрати каву? – Спробуйте кілька варіантів та оберіть для себе найкращий смак. В набір входить:",
        img: "productsSlide/product_2.png",
        prise_int: "150",
        prise_text: "/ 100% арабіка",
        propose: [{
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
        ],
        detailsLink: "/details2",

      },
    ],


  },
  getters: {
    getProducts(state) {
      return state.products;
    },

  },
  mutations: {},
  actions: {},
  modules: {}
}

const products = {
  state: {
    products: [],
    
  },
  getters: {
    getAllProducts(state) {
      return state.products;
    },

  },
  mutations: {
    setNewFields(state) {    
      state.products.forEach((el) => {
        Vue.set( el , "weightChoosed" , "250" );
        Vue.set( el , "typeChoosed" , "grains" );   
        Vue.set( el , "addedInBasket" , [] );        

        Object.keys(el.priseStructure.grains.prises).forEach((element) => {        

         el.priseStructure.grains.prises[element.replace(/[^0-9]/g, '')] = el.priseStructure.grains.prises[element];

         delete el.priseStructure.grains.prises[element];

        });

        Object.keys(el.priseStructure.ground.prises).forEach((element) => {      
 
          el.priseStructure.ground.prises[element.replace(/[^0-9]/g, '')] = el.priseStructure.ground.prises[element];
 
          delete el.priseStructure.ground.prises[element]; 
 
        });

      



      });
    }
  },
  actions: {
    loadProducts() {
      let that = this;
      fetch(`${domain}/api/products`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          that.state.products.products = data;
          that.commit('setNewFields');
          return data;
        });
    },

  },
  modules: {}
}

const basket = {
  state: {
    basket: []
  },
  mutations: {

    addInBaskt(state, obj) {

      if (state.basket.length != 0) {
        let flag = true;
        state.basket.forEach(function (element) {
          if (element.id === obj.clone.id) {
            element.addedInBasket.push(obj.basketObj);

            element.weightChoosed = obj.basketObj.weightChoosed;
            element.typeChoosed = obj.basketObj.typeChoosed;

            flag = false;
          }
        });
        if (flag) {
          state.basket.push(obj.clone);
        }

      } else {
        state.basket.push(obj.clone);
      }

    },

    incrProdInBasket(state, obj) {
      state.basket.forEach(element => {
        if (element.id === obj.id) {
          element.addedInBasket.forEach(function (el) {
            if (
              el.typeChoosed === obj.typeChoosed &&
              el.weightChoosed === obj.weightChoosed
            ) {
              el.cnt = el.cnt + 1;
            }
          })

        }
      });
    },
    decrProdInBasket(state, obj) {
      state.basket.forEach(element => {
        if (element.id === obj.id) {
          let basketArr = element.addedInBasket;
          for (let i = 0; i < basketArr.length; i++) {
            let el = basketArr[i];
            if (
              el.typeChoosed === obj.typeChoosed &&
              el.weightChoosed === obj.weightChoosed
            ) {
              if (el.cnt - 1 != 0) {
                el.cnt = el.cnt - 1;
              } else {

                basketArr.splice(i, 1);
              }
            }
          }
        }
      });
    },
    deleteFromBasket(state) {
      state.basket.forEach(function (element, index) {
        let basketArr = element.addedInBasket;
        for (let i = 0; i < basketArr.length; i++) {
          let element = basketArr[i];
          if (element.cnt === 0) {
            state.basket.splice(i, 1);
          };
        }

      })
    }
  },
  getters: {
    getBasket(state) {
      return state.basket;
    },

  },
  computed: {
    basketComputed() {
      return state.basket
    }
  },

}

const pages = {
  state: {
    pages_routs: []
  },
  actions: {
    loadPagesRouts() {

      let that = this;
      fetch(`${domain}/api/pages`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          that.state.pages.pages_routs = data.data;
          return data.data;
        });
    }
  },
  getters: {
    getPagesRouts(state) {
      return state.pages_routs;
    }
  }
}

export default new Vuex.Store({
  modules: {
    api,
    productsSlider,
    products,
    basket,
    pages
  }
})