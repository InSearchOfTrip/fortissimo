<template>
  <section class="products">
    <div class="container">
      <div class="products_wrapper">
        <div class="products_head">
          <div class="products_title">100% арабіка</div>

          <div class="products_group">
            <div class="products_text">
              Має багатий, насичений смак та аромат, містить менше кофеїну ніж у
              робусті, проте має більше солоду у своєму складі
            </div>

            <div class="products_control control">
              <div class="control_counter">
                <span
                  class="control-counter_current"
                  v-html="currentSlide + 1"
                ></span
                >/
                <span
                  class="control-counter_max"
                  v-html="products.length"
                ></span>
              </div>
              <div class="control_group">
                <button class="control_prev" @click="prev">
                  <img src="../assets/images/products/arrow.png" alt="" />
                </button>

                <button class="control_next" @click="next">
                  <img src="../assets/images/products/arrow.png" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="products_slider products-slider">
          <VueSlickCarousel
            ref="carousel"
            @afterChange="changed"
            v-bind="{
              slidesToShow: 4,
              slidesToScroll: 1,
              arrows: false,
              infinite: false,
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
                  },
                },
              ],
            }"
          >
            <div
              class="products-slider_container"
              v-for="(el, i) in products"
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
                              <label
                                :class="{ active: name === el.weightChoosed }"
                              >
                                <input
                                  type="radio"
                                  required
                                  name="weight"
                                  :value="name"
                                  v-model="el.weightChoosed"
                                />
                                {{ name }}
                              </label>
                            </div>
                          </div>

                          <div class="item-choose_type choose-type">
                            <div
                              class="choose-type_item"
                              v-for="(value2, name2) in el.priseStructure"
                              :key="name2"
                            >
                              <label
                                :class="{ active: name2 === el.typeChoosed }"
                              >
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
          </VueSlickCarousel>
        </div>

        <div class="products_more products-more">
          <router-link tag="a" to="" class="products-more_link">
            переглянути більше
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";

export default {
  name: "Products",
  components: { VueSlickCarousel },
  data() {
    return {
      products: [],
      currentSlide: 0,
      basket: [],
    };
  },
  computed: {},
  methods: {
    getImg(rout) {
      return require(`../assets/images/${rout}`);
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
      let res =  this._findElInBasket(el, function (element) {        
        return element.cnt > 0;
      });
      console.log( "do" );
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

      if (product.addedInBasket.length === 0) {
        product.addedInBasket.push(basketObj);
      } else {
        product.addedInBasket.forEach((el) => {
          if (
            el.typeChoosed !== basketObj.typeChoosed ||
            el.weightChoosed !== basketObj.weightChoosed
          ) {
            product.addedInBasket.push(basketObj);
          }
        });
      }

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
      this._findElInBasket(el, (element) => {
        if (element.cnt - 1 != -1) {
          element.cnt--;
        }

        this.$store.commit("decrProdInBasket", {
          id: el.id,
          typeChoosed: element.typeChoosed,
          weightChoosed: element.weightChoosed,
        });
      });

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
    deleteFromBasket() {
        let that = this;
        this.products.forEach(function (element, i) {
          let basketArr = element.addedInBasket;
          for (let i = 0; i < basketArr.length; i++) {
            let element = basketArr[i];

            if (element.cnt === 0) {
             
              that.products.splice(i, 1);
            }
          }
        });
    
    },
  },
  created() {
    this.products = this.$store.getters.getAllProducts;
  },
};
</script>

<style scoped lang="scss">
.products {
  padding: 146px 0;
  @include max-w(1199) {
    padding: 100px 0;
  }

  &_wrapper {
    max-width: 1740px;
    padding: 0 20px;
    margin: 0 auto;
  }

  .control {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;

    @include max-w(767) {
      justify-content: flex-start;
    }

    &-slides {
      display: flex;
      align-items: center;

      font-family: "Cuprum";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      letter-spacing: 0.02em;
      text-transform: uppercase;

      &_counter {
        margin-right: 30px;
        @include max-w(991) {
          margin-right: 17px;
        }
      }
    }

    &_group {
      display: flex;
    }

    &_prev,
    &_next {
      display: block;
      width: 52px;
      height: 56px;
      background: transparent;
      border: 1px solid #d8d8d8;
      cursor: pointer;
    }
    &_next {
      border-left: none;
      img {
        transform: rotate(180deg);
      }
    }

    &_counter {
      font-family: "Cuprum";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      margin-right: 30px;
    }

    &-counter {
      &_current {
        padding-right: 10px;
        color: #1b1b1a;
      }
      &_max {
        color: #c2c2c2;
      }
    }
  }

  &_head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 60px;
    @include max-w(767) {
      display: block;
    }
  }
  .head-markers {
    display: flex;
    padding: 20px 20px 16px;
    min-height: 60px;
    box-sizing: border-box;
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
    }
  }

  &_group {
    display: flex;
    justify-content: flex-end;
    flex-grow: 1;
    @include max-w(767) {
      display: block;
    }
  }

  &_title {
    position: relative;
    font-family: "Cuprum";
    font-style: normal;
    font-weight: 400;
    font-size: 46px;
    line-height: 54px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #1b1b1a;
    margin-right: 30px;
    padding-left: 60px;

    @include max-w(767) {
      font-size: 32px;
      line-height: 36px;
      margin: 0 0 24px;
      padding-left: 40px;
    }

    &:before {
      position: absolute;
      left: 0;
      top: 0;
      content: "";
      display: block;
      width: 44px;
      height: 44px;
      background-image: url("../assets/images/products/bean.png");
      background-size: cover;
      @include max-w(767) {
        width: 30px;
        height: 32px;
      }
    }
  }

  &_text {
    display: flex;
    align-items: center;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 22px;
    color: #1b1b1a;
    max-width: 567px;
    margin-right: 13%;
    @include max-w(1299) {
      margin-right: 6%;
    }
    @include max-w(767) {
      font-size: 18px;
      line-height: 22px;
      margin: 0 0 24px;
    }
  }

  &_slider {
    margin-bottom: 80px;
  }

  .products-slider {
    overflow: hidden;
    margin-left: -15px;
    margin-right: -15px;

    &_item {
      margin: 0 3.35%;
    }

    .slider-item {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border: 1px solid #d8d8d8;
      // width: 100%;
      min-height: 565px;
      @include max-w(767) {
        min-height: 540px;
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
          padding: 4px 10px;
          border: 1px solid #d8d8d8;
          margin: 0 3px;
          &.active {
            background: #1b1b1a;
            color: #ffffff;
          }

          @include max-w(1600) {
            font-size: 18px;
            padding: 2px 10px;
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

    .slick-track {
      display: flex;
    }
  }

  &-more {
    text-align: center;
    &_link {
      font-family: "Cuprum";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      color: #1b1b1a;
      padding-bottom: 4px;
      border-bottom: 1px solid #f2000e;
    }
  }
}
</style>