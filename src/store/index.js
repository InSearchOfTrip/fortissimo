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
        typeChoosed: "grains",
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
        typeChoosed: "grains",
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
        typeChoosed: "grains",
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
        typeChoosed: "grains",
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
        typeChoosed: "grains",
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
        typeChoosed: "grains",
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
        typeChoosed: "grains",
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
        typeChoosed: "grains",
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
        typeChoosed: "grains",
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
        typeChoosed: "grains",
        addedInBasket: [

        ]
      },
      {
        id: "11",
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
        typeChoosed: "grains",
        addedInBasket: [

        ]
      },    
      {
        id: "12",
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
        typeChoosed: "grains",
        addedInBasket: [

        ]
      },
      {
        id: "13",
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
        typeChoosed: "grains",
        addedInBasket: [

        ]
      },
      {
        id: "14",
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
        typeChoosed: "grains",
        addedInBasket: [

        ]
      },
      {
        id: "15",
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
        typeChoosed: "grains",
        addedInBasket: [

        ]
      },
      {
        id: "16",
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
        typeChoosed: "grains",
        addedInBasket: [

        ]
      },
      {
        id: "17",
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
        typeChoosed: "grains",
        addedInBasket: [

        ]
      },
      {
        id: "18",
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
        typeChoosed: "grains",
        addedInBasket: [

        ]
      },
      {
        id: "19",
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
        typeChoosed: "grains",
        addedInBasket: [

        ]
      },
      {
        id: "20",
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
        typeChoosed: "grains",
        addedInBasket: [

        ]
      },
      {
        id: "21",
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
        typeChoosed: "grains",
        addedInBasket: [

        ]
      },

      {
        id: "22",
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
        typeChoosed: "grains",
        addedInBasket: [

        ]
      },
      {
        id: "23",
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
        typeChoosed: "grains",
        addedInBasket: [

        ]
      },
      {
        id: "24",
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
        typeChoosed: "grains",
        addedInBasket: [

        ]
      },
      {
        id: "25",
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
        typeChoosed: "grains",
        addedInBasket: [

        ]
      },
      {
        id: "26",
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
        typeChoosed: "grains",
        addedInBasket: [

        ]
      },
      {
        id: "27",
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
        typeChoosed: "grains",
        addedInBasket: [

        ]
      },
      {
        id: "28",
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
        typeChoosed: "grains",
        addedInBasket: [

        ]
      },
      {
        id: "29",
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
        typeChoosed: "grains",
        addedInBasket: [

        ]
      },
      {
        id: "30",
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
        typeChoosed: "grains",
        addedInBasket: [

        ]
      },
      {
        id: "31",
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
        typeChoosed: "grains",
        addedInBasket: [

        ]
      },
      {
        id: "32",
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
        typeChoosed: "grains",
        addedInBasket: [

        ]
      },    
      {
        id: "33",
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
        typeChoosed: "grains",
        addedInBasket: [

        ]
      },
      {
        id: "34",
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
        typeChoosed: "grains",
        addedInBasket: [

        ]
      },
      {
        id: "35",
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
        typeChoosed: "grains",
        addedInBasket: [

        ]
      },
      {
        id: "36",
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
        typeChoosed: "grains",
        addedInBasket: [

        ]
      },
      {
        id: "37",
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
        typeChoosed: "grains",
        addedInBasket: [

        ]
      },
      {
        id: "38",
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
        typeChoosed: "grains",
        addedInBasket: [

        ]
      },
      {
        id: "39",
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
        typeChoosed: "grains",
        addedInBasket: [

        ]
      },
      {
        id: "40",
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
        typeChoosed: "grains",
        addedInBasket: [

        ]
      },
      {
        id: "41",
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
        typeChoosed: "grains",
        addedInBasket: [

        ]
      },
      {
        id: "42",
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
        typeChoosed: "grains",
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
  actions:{
      loadPagesRouts(){
        console.log( "action");
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
    getPagesRouts(state){
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