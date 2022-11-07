<template>
  <div>
    <ModalImg :product="getProduct" v-show="showModal" @closeModal="hideModal" />
    <div class="product">
      <div class="product_wrap">
        <div class="product_container" v-for="(el, i) in getProduct" :key="i">
          <div class="product_main product-main">
            <div class="product-main_wrap">
              <div class="product-main_markers markers">
                <div
                  class="markers_item"
                  v-for="(el2, i2) in el.marks"
                  :key="i2"
                  v-text="el2"
                ></div>
              </div>

              <div class="product-main_title" v-html="el.title"></div>

              <div class="product-main_text" v-html="el.taste"></div>

              <div class="product-main_choose choose">
                <div class="product-main_choose-weight choose-weight">
                  <div class="choose_title">маса</div>
                  <div
                    class="choose-weight_item"
                    v-for="(value, name) in el.priseStructure[el.typeChoosed]
                      .prises"
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

                <div class="product-main_choose-type choose-type">
                  <div class="choose_title">помел</div>
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

              <div class="product-main_buttons-group buttons-group">
                <div class="buttons-group_price">
                  <template v-if="typeof calcPrise(el.id) === 'object'">
                    <span class="new">{{ calcPrise(el.id).new }} грн</span
                    ><span class="old">{{ calcPrise(el.id).old }} грн</span>
                  </template>

                  <template v-else>
                    <span v-html="calcPrise(el.id)"></span>
                  </template>
                </div>
                <div class="buttons-group_basket-group">
                  <div class="buttons-group_basket-control basket-control">
                    <button
                      class="basket-control_minus"
                      @click="decrementProduct(el)"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="2"
                        viewBox="0 0 22 2"
                        fill="none"
                      >
                        <path
                          d="M1.66663 1H20.3333"
                          stroke="#1B1B1A"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                    <span
                      v-text="showBasketCnt(el)"
                      class="basket-control_count"
                    ></span>
                    <button
                      class="basket-control_plus"
                      @click="incrementProduct(el)"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                      >
                        <path
                          d="M16.0001 6.6665V25.3332M6.66675 15.9998H25.3334"
                          stroke="#1B1B1A"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <button
                    :class="[
                      'buttons-group_basket basket',
                      { active: isBasketEmpty(el) },
                    ]"
                    @click="addInBasket(el)"
                  >
                    <svg
                      v-if="isBasketEmpty(el)"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M21 11.1771V12.0051C20.9989 13.9459 20.3704 15.8344 19.2084 17.3888C18.0463 18.9432 16.413 20.0804 14.5518 20.6307C12.6907 21.1809 10.7015 21.1149 8.88102 20.4423C7.06051 19.7697 5.50619 18.5266 4.44986 16.8985C3.39354 15.2704 2.89181 13.3444 3.01951 11.4078C3.14721 9.47126 3.89749 7.62784 5.15845 6.15252C6.41942 4.67719 8.1235 3.649 10.0166 3.22128C11.9096 2.79357 13.8902 2.98925 15.663 3.77915M21 4.80515L12 13.8141L9.3 11.1141"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <svg
                      v-else
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

                    <span class="basket_text" v-if="isBasketEmpty(el)"
                      >в кошику</span
                    >
                    <span class="basket_text" v-else>в кошик</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="product_img product-img">
            <div class="product-img_wrap">
              <img :src="getImg(el.img)" alt="" @click="activeModal" />
            </div>
          </div>

          <div class="product_information product-information">
            <div class="product-information_head information-head">
              <div
                :class="[
                  'information-head_item',
                  { active: informBlockActive === i3 + 1 },
                ]"
                @click="informBlockActive = i3 + 1"
                v-for="(el3, i3) in tabs"
                :key="i3"
                v-html="el3"
                v-show="showTab(el, i3 + 1)"
              ></div>
            </div>

            <div class="product-information_main information-main">
              <div
                class="information-main_item main-item"
                v-show="informBlockActive === 1"
                v-text="el.description"
              ></div>
              <div
                class="information-main_item main-item"
                v-show="informBlockActive === 2"
              >
                <div
                  class="main-item_row item-row"
                  v-for="(el2, i2) in el.productDetails"
                  :key="i2"
                >
                  <div class="item-row_title" v-text="el2.name"></div>
                  <div class="item-row_text" v-text="el2.value"></div>
                </div>
              </div>
              <div
                class="information-main_item main-item"
                v-show="
                  informBlockActive === 3 && el.wholesaleConditions.length > 0
                "
                v-text="el.wholesaleConditions"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="product_component">
      <Products
        :setting="{
          title: 'Також рекомендуємо',
          text: '',
          showMoreBtn: false,
        }"
        :slider_setting="{
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: false,
          infinite: false,
          adaptiveHeight: false,
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
                centerMode: true,
                centerPadding: '30px',
              },
            },
          ],
        }"
      />
    </div>
  </div>
</template>


<script>
import Products from "@/components/Products.vue";
import ModalImg from "@/components/ModalImg.vue";

export default {
  name: "OneProduct",
  components: {
    Products,
    ModalImg
  },
  data() {
    return {
      informBlockActive: 1,
      product: [],
      showModal: false,
      tabs: ["ОПИС", "ДЕТАЛІ", "ОПТОВІ УМОВИ"],
    };
  },
  computed: {
    getProduct() {
      let prod = this.$store.getters.getOneProduct(this.$route.params.id);
      let category = this.$store.getters.getCategoryName(this.$route.params.id);

      if (prod !== "undefined" && prod.length > 0 && category !== "undefined") {
        this.product = prod;
        this.$emit("breadCrumbs", {
          product: prod[0].title,
          category: category.categoryName,
          category_link: category.categoryLink,
        });
      }

      return prod;
    },
  },
  methods: {
    activeModal(){     
      this.showModal = true;
      console.log(this.showModal);
    },
    hideModal(){
      this.showModal = false;
      console.log('hideModal');
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

    getImg(rout) {     
      return `${this.$store.getters.getServerLink}/storage/${rout}`;
    },
    weightText(name) {
      if (name === "1000") {
        return "1 кг";
      } else {
        return `${name} г`;
      }
    },
    showBasketCnt(el) {
      let result = this._findElInBasket(el, function (element) {
        return element.cnt;
      });
      return result ? result : 0;
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

      if (basketArr) {
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
      }
    },
    calcPrise(id) {
      let resultPrise = "";
      this.product.forEach((element) => {
        if (element.id === id) {
          console.log(element);
          let choosedTypeArr = element["priseStructure"][element.typeChoosed];
          let choosedWeightArr = choosedTypeArr["prises"];
          resultPrise = choosedWeightArr[element.weightChoosed];

          if (element.addedInBasket.length > 0) {
            element.addedInBasket.forEach((el) => {
              if (
                el.typeChoosed === element.typeChoosed &&
                el.weightChoosed === element.weightChoosed
              ) {
                if (!isNaN(+resultPrise)) {
                  resultPrise = resultPrise * el.cnt;
                }
              }
            });
          }
        }
      });

      if (!isNaN(+resultPrise)) {
        return resultPrise + " грн";
      } else {
        return resultPrise;
      }
    },
    showTab(el, i) {
      if (i === 3) {
        el.wholesaleConditions === null ? false : true;
      } else {
        return true;
      }
    },
  },
};
</script>


<style lang="scss" scoped>
.product {
  margin-bottom: -50px;
  @include max-w(1299) {
    margin-bottom: 0;
  }
  &_component {
    padding: 146px 0 100px;
    @include max-w(1199) {
      padding: 100px 0 80px;
    }
  }
  &_wrap {
    max-width: 1784px;
    padding: 0 20px;
    margin: 0 auto 0;
  }
  &_container {
    display: flex;
    align-items: stretch;
    @include max-w(1299) {
      flex-wrap: wrap;
    }
    @include max-w(767) {
      display: block;
    }
  }
  &_main {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    width: 25%;
    min-width: 400px;
    @include max-w(1299) {
      width: 50%;
      order: 1;
      min-width: auto;
    }
    @include max-w(767) {
      display: block;
      width: auto;
    }
  }

  .product-main {
    &_markers {
      margin-bottom: 26px;
    }
    .markers {
      display: flex;
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
    &_title {
      font-family: "Cuprum";
      font-style: normal;
      font-weight: 400;
      font-size: 46px;
      line-height: 54px;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      color: #1b1b1a;

      margin-bottom: 16px;
      @include max-w(899) {
        font-size: 32px;
        line-height: 36px;
        margin-bottom: 8px;
      }
    }
    &_text {
      font-family: "Raleway";
      font-style: normal;
      font-weight: 300;
      font-size: 18px;
      line-height: 22px;
      color: #1b1b1a;
      opacity: 0.8;

      margin-bottom: 40px;
      @include max-w(899) {
        font-size: 16px;
        line-height: 20px;

        margin-bottom: 30px;
      }
    }

    .buttons-group {
      &_basket-group {
        display: flex;
      }

      &_price {
        font-family: "Cuprum";
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 36px;

        letter-spacing: 0.02em;
        text-transform: uppercase;

        color: #f2000e;
        border: none;

        margin-bottom: 30px;

        ::v-deep .new {
          color: #ff8000;
          margin-right: 8px;
        }
        ::v-deep .old {
          color: #c2c2c2;
          text-decoration: line-through;
        }

        @include max-w(899) {
          font-size: 24px;
          line-height: 28px;
          margin-bottom: 20px;
        }
      }

      .basket-control {
        display: flex;
        align-items: center;

        margin-right: 32px;
        @include max-w(899) {
          margin-right: 28px;
        }

        &_minus,
        &_plus {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 56px;
          height: 56px;
          background: #ffffff;
          border: 1px solid #d8d8d8;
        }
        &_count {
          display: flex;
          justify-content: center;
          width: 60px;

          font-family: "Cuprum";
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 22px;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          color: #1b1b1a;
          @include max-w(899) {
            width: 52px;
          }
        }
      }

      .basket {
        display: flex;
        justify-content: center;
        align-items: center;

        font-family: "Cuprum";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: #1b1b1a;

        padding: 10px;
        width: 171px;
        height: 56px;
        border: 2px solid #f2000e;
        cursor: pointer;
        @include max-w(899) {
          width: 151px;
        }
        svg {
          margin-right: 11px;
        }
        &.active {
          background: #1b1b1a;
          color: #ffffff;
          border: none;
        }
      }
    }

    &_choose {
      margin-bottom: 40px;
    }

    .choose {
      padding: 30px 0;
      border-top: 1px solid #d8d8d8;
      border-bottom: 1px solid #d8d8d8;
      @include max-w(899) {
        padding: 16px 0;
        margin-bottom: 30px;
      }

      input {
        position: absolute;
        visibility: hidden;
      }
      label {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 28px;
        border-radius: 50px;
        font-family: "Cuprum";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        color: #1b1b1a;
        padding: 2px 15px;
        border: 1px solid #d8d8d8;
        margin: 0 4px;
        &.active {
          background: #1b1b1a;
          color: #ffffff;
        }

        @include max-w(767) {
          font-size: 14px;
          line-height: 16px;
        }
      }
      &_wrap {
        display: flex;
        justify-content: center;
        margin-bottom: 17px;
      }
      &-weight {
        display: flex;
        align-items: center;
        padding-right: 3px;
        margin-bottom: 20px;
      }
      &-type {
        display: flex;
      }
      &_title {
        display: flex;
        align-items: center;
        font-family: "Raleway";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 18px;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: #000000;
        min-width: 80px;
      }
    }
  }

  &_img {
    width: 50%;
    flex-shrink: 1;
    @include max-w(1299) {
      width: 50%;
      order: 2;
    }
    @include max-w(767) {
      width: 100%;
      max-width: none;
    }
    img {
      display: block;
      // max-width: 100%;
      height: auto;
      max-width: 640px;
      margin: 0 auto;
      cursor: pointer;
    }
  }
  &-img {
    &_wrap {
      margin: 0 auto;
    }
  }

  &_information {
    padding-top: 22%;
    width: 25%;
    flex-shrink: 0;
    @include max-w(1299) {
      padding-top: 40px;
      width: 100%;
      order: 3;
      max-width: none;
    }
    @include max-w(767) {
      width: 100%;
    }
  }

  .information-head {
    display: flex;
    padding-bottom: 32px;
    border-bottom: 1px solid #d8d8d8;
    margin: 0 -12px;
    &_item {
      font-family: "Cuprum";
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 28px;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      color: #666666;
      margin: 0 12px;
      &.active {
        color: #f2000e;
      }
    }
  }

  .information-main {
    padding-top: 32px;
    &_item {
      font-family: "Raleway";
      font-style: normal;
      font-weight: 300;
      font-size: 18px;
      line-height: 22px;
      color: #1b1b1a;
      opacity: 0.8;
    }
    &_row {
    }

    .item-row {
      display: flex;
      justify-content: space-between;

      // border-top: 1px solid #D8D8D8;
      border-bottom: 1px solid #d8d8d8;
      &:nth-child(1) {
        padding-bottom: 18px;
      }
      &:nth-child(n + 2) {
        padding: 18px 0;
      }

      &_title {
        font-family: "Raleway";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 18px;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: #000000;
      }

      &_text {
        font-family: "Raleway";
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        line-height: 22px;
        text-align: right;
        color: #1b1b1a;
        opacity: 0.8;
      }
    }
  }
}
</style>