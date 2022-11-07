import Vue from 'vue'
import Vuex from 'vuex'
import  serverLink from '../../serverLink';
console.log("serverLink" , serverLink)


Vue.use(Vuex);


const api = {
  state: {
    settings: null,
    pages: null,
    gallery: null,
    block_text: null,
    serverLink: serverLink
  },
  actions: {
    loadSetting() {
      let that = this;
      fetch(`${serverLink}/api/settings`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          that.state.api.settings = data.settings;        
        });
    },
    loadPages() {
      let that = this;
      fetch(`${serverLink}/api/pages`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          that.state.api.pages = data.data;       
        });
    },
    loadGallery() {
      let that = this;
      fetch(`${serverLink}/api/galleries`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          that.state.api.gallery = data.data;
          return data.data;
        });
    },
    loadBlockText() {
      let that = this;
      fetch(`${serverLink}/api/block_texts`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          that.state.api.block_text = data.data;      
        });
    },
  },
  getters: {
    getServerLink(state){
      return state.serverLink
    },
    getSetting(state) {
      return state.settings;
    },
    getPages(state) {
      return state.pages;
    },
    getGallery(state) {
      return state.gallery;
    },
    getBlockText(state) {
      return state.block_text;
    }
  },
}

const productsSlider = {
  state: {
    products: [
    ],


  },
  getters: {
    getSliders(state) {
      return state.products;
    },

  },
  mutations: {},
  actions: {
    loadSliders() {
      let that = this;
      fetch(`${serverLink}/api/sliders`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {           
          that.state.productsSlider.products = data.data;        
        });
    },
  },
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
    getOneProduct: (state) => (id) => {
      let result = [];
      state.products.forEach((element) => {
        if (id.replace(/[^0-9]/g, "") == element.id) {
          result.push(element);
        }
      })
      return result;

    },

  },
  mutations: {
    setNewFields(state) {
      state.products.forEach((el) => {
        Vue.set(el, "weightChoosed", "250");
        Vue.set(el, "typeChoosed", "grains");
        Vue.set(el, "addedInBasket", []);

        Object.keys(el.priseStructure.grains.prises).forEach((element) => {

          el.priseStructure.grains.prises[element.replace(/[^0-9]/g, '')] = el.priseStructure.grains.prises[element];

          delete el.priseStructure.grains.prises[element];

        });

        Object.keys(el.priseStructure.ground.prises).forEach((element) => {

          el.priseStructure.ground.prises[element.replace(/[^0-9]/g, '')] = el.priseStructure.ground.prises[element];

          delete el.priseStructure.ground.prises[element];

        });

      });
    },
    clearProductBasket(state) {
      state.products.forEach((el) => {
        el.addedInBasket = [];
      });
    }
  },
  actions: {
    loadProducts() {
      let that = this;
      fetch(`${serverLink}/api/products`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          that.state.products.products = data;
          that.commit('setNewFields');        
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
    },
    deleteProduct(state, obj) {
      state.basket.forEach(element => {
        if (element.id === obj.id) {
          let basketArr = element.addedInBasket;
          for (let i = 0; i < basketArr.length; i++) {
            let el = basketArr[i];
            if (
              el.typeChoosed === obj.typeChoosed &&
              el.weightChoosed === obj.weightChoosed
            ) {
              basketArr.splice(i, 1);
            }
          }
        }
      });
    },
    clearBasket(state) {
      state.basket = [];

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
    pages_routs: [],
    categories: []
  },
  actions: {
    loadPagesRouts() {

      let that = this;
      fetch(`${serverLink}/api/pages`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          that.state.pages.pages_routs = data.data;    
        });
    },
    loadCategories() {   
      let that = this;
      fetch(`${serverLink}/api/categories`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          that.state.pages.categories = data;        
        });
    }
  },
  getters: {
    getPagesRouts(state) {
      return state.pages_routs;
    },
    getCategories(state) {
      return state.categories;
    },
    getCategoryName: (state) => (id) => {    
      let result = {}; 

      if (state.categories.length > 0) {
        for (let i = 0; i < state.categories.length; i++) {

          if (state.categories[i].products.length > 0) {

            for (let q = 0; q < state.categories[i].products.length; q++) { 
        
              if (state.categories[i].products[q].id === +id.slice(1)) {    
         
                result.categoryName = state.categories[i].name;
                result.categoryLink = state.categories[i].slug;
              }
              
            }

          }

        }
      }    
  
      return result;
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