import Vue from 'vue'
import Vuex from 'vuex'



Vue.use(Vuex)

const productsSlider = {
  state: {
    products: [{
        id: "1",
        title: "дегустаційний сет “затятий кавоман”",
        img: "productsSlide/product_1.png",
        prise_int: "399",
        prise_text: "/ 100% арабіка",

      },
      {
        id: "2",
        title: "ефіопія джимма 100% арабіка",
        img: "productsSlide/product_2.png",
        prise_int: "150",
        prise_text: "/ 100% арабіка",

      },
      {
        id: "3",
        title: "дегустаційний сет “затятий кавоман”",
        img: "productsSlide/product_1.png",
        prise_int: "399",
        prise_text: "/ 100% арабіка",

      },
      {
        id: "4",
        title: "ефіопія джимма 100% арабіка",
        img: "productsSlide/product_2.png",
        prise_int: "150",
        prise_text: "/ 100% арабіка",

      },
    ],
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

  },
  getters: {
    getProducts(state) {
      return state.products;
    },
    getPropose(state) {
      return state.propose;
    }
  },
  mutations: {},
  actions: {},
  modules: {}
}

const products = {
  state: {
    products: [
      {
        id: "0",
        title: "Бразилія Сантос 100% арабіка",
        img: "products/product_1.png",
        marks: [
          "хіт продажів",
          "новинка"
        ],
        taste: "чорний шоколад",   
       
        type: [
          "мелена",
          "зерна"
        ],
        priseStructure: {
          ground: {           
            prises: {
              "250": "55",
              "500": "110",
              "1000": "220"
            }
          },
          grains: {          
            prises: {
              "250": "50",
              "500": "100",
              "1000": "200"
            }
          },
        },
        weightChoosed: "250",
        typeChoosed: "ground",
        addedInBasket: [
         
        ]
      },
      {
        id: "1",
        title: "ефіопія джимма 100% арабіка",
        img: "products/product_2.png",
        marks: [
          "акція",        
        ],
        taste: "гіркуватий смак із сильним кавовим ароматом",   
       
        type: [
          "мелена",
          "зерна"
        ],
        priseStructure: {
          ground: {           
            prises: {
              "250": {
                old: "55",
                new: "50"
              },
              "500": {
                old: "110",
                new: "100"
              },
              "1000": {
                old: "220",
                new: "200"
              }
            }
          },
          grains: {          
            prises: {
              "250": {
                old: "50",
                new: "45"
              },
              "500": {
                old: "100",
                new: "95"
              },
              "1000": {
                old: "200",
                new: "190"
              }
            }
          },
        },
        weightChoosed: "250",
        typeChoosed: "ground",
        addedInBasket: [
         
        ] 
      },
      {
        id: "3",
        title: "гондурас маркала ля паз 100% арабіка",
        img: "products/product_1.png",
        marks: [        
         
        ],
        taste: "чорний шоколад",   
       
        type: [
          "мелена",
          "зерна"
        ],
        priseStructure: {
          ground: {           
            prises: {
              "250": "55",
              "500": "110",
              "1000": "220"
            }
          },
          grains: {          
            prises: {
              "250": "50",
              "500": "100",
              "1000": "200"
            }
          },
        },
        weightChoosed: "250",
        typeChoosed: "ground",
        addedInBasket: [
         
        ]
      },
      {
        id: "4",
        title: "Бразилія Сантос 100% арабіка",
        img: "products/product_1.png",
        marks: [
          "хіт продажів",
          "новинка"
        ],
        taste: "чорний шоколад",   
       
        type: [
          "мелена",
          "зерна"
        ],
        priseStructure: {
          ground: {           
            prises: {
              "250": "55",
              "500": "110",
              "1000": "220"
            }
          },
          grains: {          
            prises: {
              "250": "50",
              "500": "100",
              "1000": "200"
            }
          },
        },
        weightChoosed: "250",
        typeChoosed: "ground",
        addedInBasket: [
         
        ]
      },
      {
        id: "5",
        title: "ефіопія джимма 100% арабіка",
        img: "products/product_2.png",
        marks: [
          "акція",        
        ],
        taste: "гіркуватий смак із сильним кавовим ароматом",   
       
        type: [
          "мелена",
          "зерна"
        ],
        priseStructure: {
          ground: {           
            prises: {
              "250": {
                old: "55",
                new: "50"
              },
              "500": {
                old: "110",
                new: "100"
              },
              "1000": {
                old: "220",
                new: "200"
              }
            }
          },
          grains: {          
            prises: {
              "250": {
                old: "50",
                new: "45"
              },
              "500": {
                old: "100",
                new: "95"
              },
              "1000": {
                old: "200",
                new: "190"
              }
            }
          },
        },
        weightChoosed: "250",
        typeChoosed: "ground",
        addedInBasket: [
         
        ]
      },
      {
        id: "6",
        title: "Бразилія Сантос 100% арабіка",
        img: "products/product_1.png",
        marks: [
          "хіт продажів",
          "новинка"
        ],
        taste: "чорний шоколад",   
       
        type: [
          "мелена",
          "зерна"
        ],
        priseStructure: {
          ground: {           
            prises: {
              "250": "55",
              "500": "110",
              "1000": "220"
            }
          },
          grains: {          
            prises: {
              "250": "50",
              "500": "100",
              "1000": "200"
            }
          },
        },
        weightChoosed: "250",
        typeChoosed: "ground",
        addedInBasket: [
         
        ]
      },
      {
        id: "7",
        title: "ефіопія джимма 100% арабіка",
        img: "products/product_2.png",
        marks: [
          "акція",        
        ],
        taste: "гіркуватий смак із сильним кавовим ароматом",   
       
        type: [
          "мелена",
          "зерна"
        ],
        priseStructure: {
          ground: {           
            prises: {
              "250": {
                old: "55",
                new: "50"
              },
              "500": {
                old: "110",
                new: "100"
              },
              "1000": {
                old: "220",
                new: "200"
              }
            }
          },
          grains: {          
            prises: {
              "250": {
                old: "50",
                new: "45"
              },
              "500": {
                old: "100",
                new: "95"
              },
              "1000": {
                old: "200",
                new: "190"
              }
            }
          },
        },
        weightChoosed: "250",
        typeChoosed: "ground",
        addedInBasket: [
         
        ]
      },
      {
        id: "8",
        title: "гондурас маркала ля паз 100% арабіка",
        img: "products/product_1.png",
        marks: [        
         
        ],
        taste: "чорний шоколад",   
       
        type: [
          "мелена",
          "зерна"
        ],
        priseStructure: {
          ground: {           
            prises: {
              "250": "55",
              "500": "110",
              "1000": "220"
            }
          },
          grains: {          
            prises: {
              "250": "50",
              "500": "100",
              "1000": "200"
            }
          },
        },
        weightChoosed: "250",
        typeChoosed: "ground",
        addedInBasket: [
         
        ]
      },
      {
        id: "9",
        title: "Бразилія Сантос 100% арабіка",
        img: "products/product_1.png",
        marks: [
          "хіт продажів",
          "новинка"
        ],
        taste: "чорний шоколад",   
       
        type: [
          "мелена",
          "зерна"
        ],
        priseStructure: {
          ground: {           
            prises: {
              "250": "55",
              "500": "110",
              "1000": "220"
            }
          },
          grains: {          
            prises: {
              "250": "50",
              "500": "100",
              "1000": "200"
            }
          },
        },
        weightChoosed: "250",
        typeChoosed: "ground",
        addedInBasket: [
         
        ]
      },
      {
        id: "10",
        title: "ефіопія джимма 100% арабіка",
        img: "products/product_2.png",
        marks: [
          "акція",        
        ],
        taste: "гіркуватий смак із сильним кавовим ароматом",   
       
        type: [
          "мелена",
          "зерна"
        ],
        priseStructure: {
          ground: {           
            prises: {
              "250": {
                old: "55",
                new: "50"
              },
              "500": {
                old: "110",
                new: "100"
              },
              "1000": {
                old: "220",
                new: "200"
              }
            }
          },
          grains: {          
            prises: {
              "250": {
                old: "50",
                new: "45"
              },
              "500": {
                old: "100",
                new: "95"
              },
              "1000": {
                old: "200",
                new: "190"
              }
            }
          },
        },
        weightChoosed: "250",
        typeChoosed: "ground",
        addedInBasket: [
         
        ]
      },

    ],
  },
  getters: {
    getAllProducts(state) {
      return state.products;
    },

  },
  mutations: {},
  actions: {},
  modules: {}
}

const basket = {
  state: {
    basket: []
  },
  mutations:{
    addInBaskt(state , el){
      state.basket.push(el);
    },
    
    incrProdInBasket(state , id){
      state.basket.forEach(element => {
        if( element.id === id){
          element.addedInBasket++;
        }
      });
    },
    decrProdInBasket(state , id){
      state.basket.forEach(element => {
        if( element.id === id){
          element.addedInBasket--;
        }
      });
    },
    deleteFromBasket(state){
      state.basket = state.basket.filter( (el)=> {
        return el.addedInBasket > 0;
      });
    }
  },
  getters: {
    getBasket(state) {
      return state.basket;
    },

  },
  computed:{
    basketComputed(){
      return state.basket
    }
  },
}

export default new Vuex.Store({
  modules: {
    productsSlider,
    products,
    basket
  }
})