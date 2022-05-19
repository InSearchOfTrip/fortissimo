<template>
  <div class="products_slider products-slider">
    <div class="products-slider_wrapper">
      <VueSlickCarousel
        ref="carousel"
        @afterChange="changed"
        @reInit="addArrows"
        v-bind="{
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: false,
          swipe: false,
          dots: true,
          arrows: false,
          adaptiveHeight: false,
          rows: cualityRows(),
          responsive: [
            {
              breakpoint: 1600,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: false,
              },
            },
            {
              breakpoint: 1199,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: false,
              },
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false,
                rows: 8,
              },
            },
          ],
        }"
      >
        <div
          class="products-slider_container"
          v-for="(el, i) in getAllProducts"
          :key="i"
        >
          <div class="products-slider_item slider-item">
            <div class="slider-item_top">
              <div class="slider-item_head item-head">
                <div class="item-head_markers head-markers">
                  <div
                    class="head-markers_item"
                    v-for="(el2, i2) in el.marks"
                    :key="i2"
                    v-text="el2"
                  ></div>
                </div>
              </div>
              <div class="slider-item_img">
                <img :src="getImg(el.img)" alt="" />
              </div>
              <div class="slider-item_group">
                <div class="slider-item_title" v-text="el.title"></div>
                <div class="slider-item_taste" v-text="el.taste"></div>
              </div>
            </div>
            <div>
              <div class="slider-item_choose item-choose">
                <div class="item-choose_container">
                  <div class="item-choose_wrap">
                    <div class="item-choose_weight choose-weight">
                      <div
                        class="choose-weight_item"
                        v-for="(value, name) in el.priseStructure[
                          el.typeChoosed
                        ].prises"
                        :key="name"
                      >
                        <label :class="{ active: name === el.weightChoosed }">
                          <input
                            type="radio"
                            required
                            name="weight"
                            :value="name"
                            v-model="el.weightChoosed"
                          />
                          {{ weightText(name) }}
                        </label>
                      </div>
                    </div>

                    <div class="item-choose_type choose-type">
                      <div
                        class="choose-type_item"
                        v-for="(value2, name2) in el.priseStructure"
                        :key="name2"
                      >
                        <label :class="{ active: name2 === el.typeChoosed }">
                          <input
                            type="radio"
                            required
                            name="type"
                            :value="name2"
                            v-model="el.typeChoosed"
                          />
                          {{ name2 === "ground" ? "мелена" : "зерна" }}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="slider-item_footer item-footer">
                <button class="item-footer_price">
                  <template v-if="typeof calcPrise(el.id) === 'object'">
                    <span class="new">{{ calcPrise(el.id).new }} грн</span
                    ><span class="old">{{ calcPrise(el.id).old }} грн</span>
                  </template>

                  <template v-else>
                    <span v-html="calcPrise(el.id)"></span>&nbsp;<span
                      >грн</span
                    >
                  </template>
                </button>
                <div
                  :class="[
                    'item-footer_basket-group',
                    { active: isBasketEmpty(el) },
                  ]"
                >
                  <div class="item-footer_basket-control basket-control">
                    <button
                      class="basket-control_minus"
                      @click="decrementProduct(el)"
                    >
                      -
                    </button>
                    <button
                      class="basket-control_plus"
                      @click="incrementProduct(el)"
                    >
                      +
                    </button>
                  </div>
                  <button
                    :class="['item-footer_basket basket']"
                    @click="addInBasket(el)"
                  >
                    <svg
                      class="basket_img"
                      width="22"
                      height="26"
                      viewBox="0 0 22 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16.1187 5V5.34984C18.5888 5.61682 20.5424 7.73416 20.6989 10.3787L21.2399 19.5216C21.4227 22.6117 19.0972 25.25 16.1309 25.25H5.86905C2.90284 25.25 0.577238 22.6117 0.760089 19.5216L1.30108 10.3787C1.45754 7.73431 3.41094 5.61706 5.8809 5.34989V5C5.8809 2.66586 7.67556 0.75 9.91781 0.75H12.0818C14.324 0.75 16.1187 2.66586 16.1187 5ZM14.5367 5V5.32143H7.46287V5C7.46287 3.54705 8.5747 2.39286 9.91781 2.39286H12.0818C13.4248 2.39286 14.5367 3.54705 14.5367 5ZM2.88007 10.4795C2.9977 8.49159 4.55425 6.96429 6.41004 6.96429H15.5899C17.4457 6.96429 19.0023 8.49159 19.1199 10.4795L19.6609 19.6224C19.7895 21.7958 18.1576 23.6071 16.1309 23.6071H5.86905C3.84242 23.6071 2.21047 21.7958 2.33908 19.6224L2.88007 10.4795ZM7.46287 9.32143H5.8809V10.7143C5.8809 13.0484 7.67556 14.9643 9.91781 14.9643H12.0818C14.324 14.9643 16.1187 13.0484 16.1187 10.7143V9.32143H14.5367V10.7143C14.5367 12.1672 13.4248 13.3214 12.0818 13.3214H9.91781C8.57471 13.3214 7.46287 12.1672 7.46287 10.7143V9.32143Z"
                        fill="#1B1B1A"
                      />
                    </svg>
                    <span
                      v-text="showBasketCnt(el)"
                      class="basket_count"
                      v-if="isBasketEmpty(el)"
                    ></span>
                    <span v-else class="basket_text">кошик</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";

export default {
  name: "Catalog",
  components: { VueSlickCarousel },
  data() {
    return {
      products: [],
      currentSlide: 0,
      dotsCtn: 0,
    };
  },
  computed: {
    getAllProducts() {
      let data = this.$store.getters.getAllProducts;
      this.products = data;
      return data;
    },
  },
  methods: {
    cualityRows(){
      let length = this.products.length;

      if( length >= 12){
        return 3;
      }else if( length >= 8 && length < 12 ){
        return 2
      }else{
        return 1;
      }
    },
    getImg(rout) {
      return `https://fortissimo.devseonet.com//storage/${rout}`;
    },
    calcPrise(id) {
      let resultPrise = "";
      this.products.forEach((element) => {
        if (element.id === id) {
          let choosedTypeArr = element["priseStructure"][element.typeChoosed];
          let choosedWeightArr = choosedTypeArr["prises"];

          resultPrise = choosedWeightArr[element.weightChoosed];

          return resultPrise;
        }
      });

      return resultPrise;
    },

    isBasketEmpty(el) {
      let res = this._findElInBasket(el, function (element) {
        return element.cnt > 0;
      });

      return res;
    },
    _findElInBasket(el, func) {
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
    },
    showBasketCnt(el) {
      return this._findElInBasket(el, function (element) {
        return element.cnt;
      });
    },
    addInBasket(product) {
      let basketObj = {
        cnt: 1,
        weightChoosed: product.weightChoosed,
        typeChoosed: product.typeChoosed,
      };

      product.addedInBasket.push(basketObj);

      let clone = JSON.parse(JSON.stringify(product));

      this.$store.commit("addInBaskt", {
        clone: JSON.parse(JSON.stringify(clone)),
        basketObj: JSON.parse(JSON.stringify(basketObj)),
      });
    },
    incrementProduct(el) {
      this._findElInBasket(el, (element) => {
        element.cnt++;

        this.$store.commit("incrProdInBasket", {
          id: el.id,
          typeChoosed: element.typeChoosed,
          weightChoosed: element.weightChoosed,
        });
      });
    },
    decrementProduct(el) {
      let basketArr = el.addedInBasket;

      for (let i = 0; i < basketArr.length; i++) {
        let element = basketArr[i];

        let setting = {
          id: el.id,
          typeChoosed: element.typeChoosed,
          weightChoosed: element.weightChoosed,
        };

        if (
          element.typeChoosed === el.typeChoosed &&
          element.weightChoosed === el.weightChoosed
        ) {
          if (element.cnt - 1 != 0) {
            element.cnt--;
            this.$store.commit("decrProdInBasket", setting);
          } else {
            basketArr.splice(i, 1);
            this.$store.commit("decrProdInBasket", setting);
          }
        }
      }

      // this.$store.commit("deleteFromBasket");
      // this.deleteFromBasket();
    },
    prev() {
      this.$refs.carousel.prev();
    },
    next() {
      this.$refs.carousel.next();
    },

    changed(slideIndex) {
      this.currentSlide = slideIndex;
    },

    weightText(name) {
      if (name === "1000") {
        return "1 кг";
      } else {
        return `${name} г`;
      }
    },
    addArrows() {
      let dots = document.querySelector(".slick-dots");
      let countDots;

      if(dots){
        dots.querySelectorAll("li").length;
      }
   

      if (dots && countDots !== this.dotsCtn) {
        this.dotsCtn = countDots;

        let nodeControl = document.querySelector(".control");

        if (nodeControl) {
          nodeControl.remove();
        }

        let control = document.createElement("div");
        control.classList.add("control");

        let prev = document.createElement("button");
        let next = document.createElement("button");

        prev.classList.add("control_prev");
        next.classList.add("control_next");

        prev.onclick = this.prev;
        next.onclick = this.next;

        prev.innerHTML =
          '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="14" viewBox="0 0 24 14" fill="none" > <path d="M0.22528 7.8042C0.568878 8.17662 1.11035 8.4496 1.51858 8.73363C2.42116 9.36204 8.49003 13.5699 8.2635 13.2961C9.00877 14.1958 10.27 12.8965 9.5308 12.0028C9.21931 11.6268 8.60919 11.3611 8.2149 11.104C7.29669 10.5048 3.9192 8.3138 3.14583 7.81822C4.27759 7.89542 10.1627 8.00604 11.9727 8.04508C15.5901 8.12314 19.2875 8.43195 22.9011 8.24218C24.365 8.16498 24.3675 5.99449 22.9011 5.91753C19.2877 5.72755 15.5901 6.03635 11.9727 6.11463C10.226 6.15237 4.15194 6.25329 2.86686 6.36263C3.64213 5.64473 4.42453 4.93612 5.20807 4.2275C6.35816 3.18958 7.99633 2.19114 8.79419 0.840757C8.92491 0.619935 8.70845 0.343692 8.46918 0.409895C6.93811 0.828462 5.48727 2.30565 4.24635 3.27754C2.86796 4.35791 1.5392 5.50884 0.225405 6.67179C-0.100877 6.96205 -0.0482042 7.50769 0.22528 7.8042Z" fill="#1B1B1A" /> </svg>';
        next.innerHTML =
          '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="14" viewBox="0 0 24 14" fill="none" > <path d="M0.22528 7.8042C0.568878 8.17662 1.11035 8.4496 1.51858 8.73363C2.42116 9.36204 8.49003 13.5699 8.2635 13.2961C9.00877 14.1958 10.27 12.8965 9.5308 12.0028C9.21931 11.6268 8.60919 11.3611 8.2149 11.104C7.29669 10.5048 3.9192 8.3138 3.14583 7.81822C4.27759 7.89542 10.1627 8.00604 11.9727 8.04508C15.5901 8.12314 19.2875 8.43195 22.9011 8.24218C24.365 8.16498 24.3675 5.99449 22.9011 5.91753C19.2877 5.72755 15.5901 6.03635 11.9727 6.11463C10.226 6.15237 4.15194 6.25329 2.86686 6.36263C3.64213 5.64473 4.42453 4.93612 5.20807 4.2275C6.35816 3.18958 7.99633 2.19114 8.79419 0.840757C8.92491 0.619935 8.70845 0.343692 8.46918 0.409895C6.93811 0.828462 5.48727 2.30565 4.24635 3.27754C2.86796 4.35791 1.5392 5.50884 0.225405 6.67179C-0.100877 6.96205 -0.0482042 7.50769 0.22528 7.8042Z" fill="#1B1B1A" /> </svg>';

        control.appendChild(prev);
        control.appendChild(dots);
        control.appendChild(next);

        document.querySelector(".products-slider_wrapper").appendChild(control);
      }
    },
  },
  beforeCreate() {
    this.$store.dispatch("loadProducts");
    this.$store.commit("setNewFields");
  },
};
</script>


<style lang="scss" scoped>
.products-slider {
  overflow: hidden;
  margin-left: -15px;
  margin-right: -15px;
  @include max-w(767) {
    margin-left: 0;
    margin-right: 0;
  }

  &_wrapper {
    max-width: 1740px;
    padding: 0 20px;
    margin: 0 auto;
    @include max-w(767) {
      padding: 0 16px;
    }
  }

  &_item {
    margin: 3.35%;
    @include max-w(767) {
      margin: 3.35% 0;
    }
  }

  .slider-item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid #d8d8d8;
    // width: 100%;
    min-height: 587px;
    @include max-w(767) {
      min-height: 509px;
    }
    &_container {
      display: flex;
    }

    &_img {
      margin-bottom: 20px;
      img {
        display: block;
        width: 100%;
        height: auto;

        -webkit-user-drag: none;
        user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
      }
    }

    &_group {
      padding: 0 20px;
      @include max-w(767) {
        padding: 0 16px;
      }
    }

    &_title {
      font-family: "Cuprum";
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 28px;
      /* identical to box height, or 117% */

      text-align: center;
      letter-spacing: 0.02em;
      text-transform: uppercase;

      /* bg color */

      color: #1b1b1a;

      @include max-w(767) {
        font-size: 18px;
        line-height: 22px;
      }
    }

    &_taste {
      font-family: "Raleway";
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      line-height: 16px;
      text-align: center;
      color: #1b1b1a;
      margin-bottom: 20px;
      @include max-w(767) {
        font-size: 13px;
      }
    }

    .item-choose {
      input {
        position: absolute;
        visibility: hidden;
      }
      label {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 24px;
        border-radius: 50px;
        font-family: "Cuprum";
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 16px;
        color: #1b1b1a;
        padding: 4px 9px;
        border: 1px solid #d8d8d8;
        margin: 0 3px;
        &.active {
          background: #1b1b1a;
          color: #ffffff;
        }

        @include max-w(1600) {
          font-size: 18px;
          padding: 2px 6px;
        }
        @include max-w(767) {
          font-size: 12px;
          line-height: 16px;
        }
      }
      &_wrap {
        display: flex;
        justify-content: center;
        margin-bottom: 17px;
      }
      &_weight {
        display: flex;
        padding-right: 3px;

        border-right: 1px solid #d8d8d8;
      }
      &_type {
        display: flex;
        padding-left: 3px;
      }
    }

    .item-footer {
      display: flex;
      height: 46px;
      border-top: 1px solid #d8d8d8;
      button {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 50%;

        background: transparent;
        font-family: "Cuprum";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        letter-spacing: 0.02em;
        text-transform: uppercase;

        border-radius: 0;

        svg {
          margin-right: 13px;
        }
      }

      &_price {
        color: #f2000e;
        border: none;
        border-right: 1px solid #d8d8d8;
        ::v-deep .new {
          color: #ff8000;
          margin-right: 8px;
        }
        ::v-deep .old {
          color: #c2c2c2;
          text-decoration: line-through;
        }
      }
      &_basket {
        flex-grow: 1;
        &-control {
          display: flex;
        }
        &-group {
          display: flex;
          width: 50%;
          .basket {
            border: none;
            cursor: pointer;
            width: 100%;
            &:hover {
              background: #f2000e;
              color: #ffffff;
              svg {
                path {
                  fill: #ffffff;
                }
              }
            }
            &:active {
              background: #d9000d;
            }

            &-control {
              overflow: hidden;
              width: 0;
              max-width: max-content;
              transition: width 0.2s ease-in-out;
              &_minus,
              &_plus {
                cursor: pointer;
                border: none;
                width: 46px;
                border-right: 1px solid #d8d8d8;
              }
            }
          }

          &.active {
            .basket-control {
              width: 100%;
            }
            .basket {
              pointer-events: none;
              background: #1b1b1a;
              &_count {
                font-family: "Cuprum";
                font-style: normal;
                font-weight: 400;
                font-size: 18px;
                line-height: 22px;
                letter-spacing: 0.02em;
                text-transform: uppercase;
                color: #ffffff;
              }
              &_img {
                path {
                  fill: #ffffff;
                }
              }
            }
          }
        }
      }
    }
  }

  .head-markers {
    display: flex;
    padding: 20px 20px 16px;
    min-height: 60px;
    box-sizing: border-box;
    @include max-w(767) {
      padding: 20px 16px 15px;
    }
    &_item {
      font-family: "Cuprum";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 16px;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      color: #f2000e;

      padding: 4px 10px;

      background: #f2f2f2;
      border-radius: 50px;
      @include max-w(767) {
        font-size: 12px;
        line-height: 16px;
      }
    }
  }

  .slick-track {
    display: flex;
  }

  .slick-slider {
    margin-bottom: 38px;
  }

  ::v-deep .slick-dots {
    display: flex !important;
    justify-content: center;
    flex-wrap: wrap;

    button {
      display: block;
      width: 50px;
      height: 50px;
      outline: none;
      border: 1px solid #c2c2c2;
    }
    li {
      outline: none;
      margin: 10px;
    }

    .slick-active {
      button {
        background: #f2000e;
        color: #ffffff;
        border-color: #f2000e;
      }
    }
  }

  ::v-deep .control {
    display: flex;
    justify-content: center;
    margin: 0 15px;
    @include max-w(767) {
      margin: 0;
    }

    &_prev,
    &_next {
      display: block;
      width: 50px;
      height: 50px;
      background: transparent;
      border: 1px solid #d8d8d8;
      cursor: pointer;
      flex-shrink: 0;
      margin-top: 10px;
      &:hover {
        border: 1px solid #f2000e;
      }
      &:active {
        svg {
          path {
            fill: #f2000e;
          }
        }
      }
    }
    &_next {
      svg {
        transform: rotate(180deg);
      }
    }
  }
}
</style>