<template>
  <div>
    <div class="order">
      <div class="order_wrap">
        <div class="order_title">
          <h1>Оформлення замовлення</h1>
        </div>
        <form class="order_content order-content" ref="form">
          <div class="order-content_fields order-fields">
            <div class="order-fields_contacts order-contacts">
              <div class="order-contacts_title order-title">Контактні дані</div>
              <div class="order-contacts_field-wrap">
                <div class="order-contacts_row">
                  <div
                    class="order-contacts_field input-wrap"
                    :class="{ error: $v.form.lastName.$error }"
                  >
                    <input
                      type="text"
                      v-model.trim.lazy="$v.form.lastName.$model"
                      placeholder="Прізвище"
                    />
                  </div>

                  <div
                    class="order-contacts_field input-wrap"
                    :class="{ error: $v.form.firstName.$error }"
                  >
                    <input
                      type="text"
                      v-model.trim.lazy="$v.form.firstName.$model"
                      placeholder="Ім‘я"
                    />
                  </div>

                  <div
                    class="order-contacts_field input-wrap"
                    :class="{ error: $v.form.phone.$error }"
                  >
                    <input
                      type="text"
                      v-model.trim.lazy="$v.form.phone.$model"
                      placeholder="Телефон"
                    />
                  </div>

                  <div
                    class="order-contacts_field input-wrap"
                    :class="{ error: $v.form.mail.$error }"
                  >
                    <input
                      type="text"
                      v-model.trim.lazy="$v.form.mail.$model"
                      placeholder="Email"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="order-fields_delivery order-delivery">
              <div class="order-delivery_title order-title">
                Спосіб доставки
              </div>
              <div class="order-delivery_company order-company">
                <label class="order-company_item radio input-wrap">
                  <input
                    type="radio"
                    value="Нова пошта кур’єр"
                    name="order-company"
                    v-model="form.deliveryCompany"
                  />
                  <div class="circle"></div>
                  Нова пошта кур’єр
                </label>

                <label class="order-company_item radio input-wrap">
                  <input
                    type="radio"
                    value="Нова пошта відділення"
                    name="order-company"
                    v-model="form.deliveryCompany"
                  />
                  <div class="circle"></div>
                  Нова пошта відділення
                </label>

                <label class="order-company_item radio input-wrap">
                  <input
                    type="radio"
                    value="Самовивіз"
                    name="order-company"
                    v-model="form.deliveryCompany"
                  />
                  <div class="circle"></div>
                  Самовивіз
                </label>
              </div>
              <div
                class="order-delivery_address order-address"
                v-if="orderType('Нова пошта кур’єр')"
              >
                <div class="order-address_row order-address_row">
                  <div
                    class="
                      order-address_input order-address_city order-address_item
                    "
                    :class="{ error: $v.form.city.$error }"
                  >
                    <label>
                      <span>Місто/Населений пункт</span>
                      <v-select
                        :value="form.city"
                        :options="cityesShow"
                        @search="searching"
                        label="Description"
                        @input="onSelectCity"
                      />
                    </label>
                  </div>
                  <div class="order-address_street order-address_item">
                    <label>
                      <span>Вулиця</span>
                      <div
                        class="order-address_input-wrap input-wrap"
                        :class="{ error: $v.form.street.$error }"
                      >
                        <input
                          type="text"
                          v-model.trim.lazy="$v.form.street.$model"
                        />
                      </div>
                    </label>
                  </div>
                </div>
                <div class="order-address_row order-address_row-house">
                  <div
                    class="order-address_item input-wrap"
                    :class="{ error: $v.form.house.$error }"
                  >
                    <input
                      type="text"
                      placeholder="№ будинку"
                      v-model.trim.lazy="$v.form.house.$model"
                    />
                  </div>
                  <div class="order-address_item input-wrap">
                    <input
                      type="text"
                      placeholder="№ квартири"
                      v-model.trim.lazy="form.apartmant"
                    />
                  </div>
                  <div class="order-address_item input-wrap">
                    <input
                      type="text"
                      placeholder="№ під’їзду"
                      v-model.trim.lazy="form.entrance"
                    />
                  </div>
                  <div class="order-address_item input-wrap">
                    <input type="text" placeholder="Код домофону" />
                  </div>
                </div>

                <textarea
                  name="wish"
                  placeholder="Побажання до замовлення"
                  v-model="form.comment"
                >
                </textarea>
              </div>
              <div
                class="order-delivery_department order-department"
                v-if="orderType('Нова пошта відділення')"
              >
                <div
                  class="order-department_item"
                  :class="{ error: $v.form.city.$error }"
                >
                  <label>
                    <span>Місто/Населений пункт</span>
                    <v-select
                      :value="form.city"
                      :options="cityesShow"
                      @search="searching"
                      label="Description"
                      @input="onSelectCity"
                    />
                  </label>
                </div>
                <div
                  class="order-department_item"
                  :class="{ error: $v.form.NpWarehouse.$error }"
                >
                  <label>
                    <span>Оберіть відділення</span>
                    <v-select
                      :value="form.NpWarehouse"
                      :options="NpWarehousesArr"
                      label="Description"
                      @input="onSelectDep"
                    />
                  </label>
                </div>
                <textarea
                  name="wish"
                  placeholder="Побажання до замовлення"
                  v-model="form.comment"
                >
                </textarea>
              </div>

              <div
                class="order-delivery_self order-self"
                v-if="orderType('Самовивіз')"
              >
                <div class="order-self_info">
                  Забирайте замовлення за адресою м. Рівне, вул. Івана Франка
                  11. Графік роботи 09:00–23:00, без вихідних.
                </div>
              </div>
            </div>

            <div class="order-fields_pay order-pay">
              <div class="order-pay_title order-title">Спосіб оплати</div>
              <div
                class="order-pay_payType order-payType"
                v-if="form.deliveryCompany !== 'Самовивіз'"
              >
                <label class="order-payType_item radio">
                  <input
                    type="radio"
                    value="Онлайн оплата карткою / Liqpay"
                    name="order-payType"
                    v-model="form.payType"
                  />
                  <div class="circle"></div>
                  Онлайн оплата карткою / Liqpay
                </label>

                <label class="order-payType_item radio">
                  <input
                    type="radio"
                    value="Накладений платіж (післяоплата)"
                    name="order-cpayType"
                    v-model="form.payType"
                  />
                  <div class="circle"></div>
                  Накладений платіж (післяоплата)
                </label>
              </div>
              <div class="order-pay_payType order-payType" v-else>
                <label class="order-payType_item radio">
                  <input
                    type="radio"
                    value="Онлайн оплата карткою / Liqpay"
                    name="order-payType"
                    v-model="form.payTypeSD"
                  />
                  <div class="circle"></div>
                  Онлайн оплата карткою / Liqpay
                </label>

                <label class="order-payType_item radio">
                  <input
                    type="radio"
                    value="Накладений платіж (післяоплата)"
                    name="order-cpayType"
                    v-model="form.payTypeSD"
                  />
                  <div class="circle"></div>
                  Готівка
                </label>
              </div>
            </div>
          </div>

          <div class="order-content_products order-products">
            <div class="order-products_products">
              <div class="order-products_title order-title">замовлення</div>

              <div class="order-products_main products-main">
                <div
                  class="products-main_row"
                  v-for="(el, i) in getBasket"
                  :key="i"
                >
                  <div
                    class="products-main_item products-item"
                    v-for="(el2, i2) in el.addedInBasket"
                    :key="i2"
                  >
                    <div class="products-item_img">
                      <img :src="getImg(el.img)" alt="" />
                    </div>

                    <div class="products-item_control products-control">
                      <div class="products-control_top">
                        <div class="products-control_title" v-text="el.title">
                          Бразилія Сантос 100% арабіка
                        </div>
                        <div class="products-control_choosed products-choosed">
                          <div
                            class="products-choosed_item"
                            v-for="(el, i) in productParams(el)"
                            :key="i"
                          ></div>
                        </div>
                      </div>
                      <div class="products-control_bottom">
                        <div
                          class="products-control_prise"
                          v-text="getPrise(el, el2)"
                        ></div>
                        <div class="products-control_group">
                          <div
                            class="products-control_minus"
                            @click="decrementProduct(el, el2)"
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
                          </div>
                          <div
                            class="products-control_count"
                            v-text="showBasketCnt(el2)"
                          >
                            0
                          </div>
                          <div
                            class="products-control_plus"
                            @click="incrementProduct(el, el2)"
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
                          </div>
                          <div
                            class="products-control_delete"
                            @click="basketDelete(el, el2)"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="22"
                              viewBox="0 0 20 22"
                              fill="none"
                            >
                              <path
                                d="M1 5.07544H3M3 5.07544H19M3 5.07544V19.0754C3 19.6059 3.21071 20.1146 3.58579 20.4897C3.96086 20.8647 4.46957 21.0754 5 21.0754H15C15.5304 21.0754 16.0391 20.8647 16.4142 20.4897C16.7893 20.1146 17 19.6059 17 19.0754V5.07544H3ZM6 5.07544V3.07544C6 2.54501 6.21071 2.0363 6.58579 1.66123C6.96086 1.28615 7.46957 1.07544 8 1.07544H12C12.5304 1.07544 13.0391 1.28615 13.4142 1.66123C13.7893 2.0363 14 2.54501 14 3.07544V5.07544"
                                stroke="#666666"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="order-products_prises order-prises">
              <div class="order-prises_item">
                <!-- <div class="order-prises_name">Доставка</div>
                <div class="order-prises_count">{{ deliveryPrise }} грн</div> -->
              </div>
              <div class="order-prises_item">
                <div class="order-prises_name">Товарів у кошику</div>
                <div
                  class="order-prises_count"
                  v-text="productsSum.sum + ' грн'"
                ></div>
              </div>
              <div class="order-prises_item order-prises_item--sum">
                <div class="order-prises_name">До оплати</div>
                <div
                  class="order-prises_count"
                  v-text="productsSum.sum + ' грн'"
                ></div>
              </div>
            </div>

            <div class="order-products_btns order-btns">
              <button type="button" class="order-btns_back" @click="goBack">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="14"
                  viewBox="0 0 22 13"
                  fill="none"
                >
                  <path
                    d="M0.206507 7.30637C0.521473 7.64494 1.01782 7.8931 1.39203 8.15132C2.2194 8.72259 7.78254 12.5479 7.57489 12.299C8.25805 13.1169 9.41414 11.9357 8.73658 11.1233C8.45104 10.7814 7.89177 10.5399 7.53034 10.3062C6.68865 9.76146 3.59261 7.76965 2.88368 7.31912C3.92113 7.3893 9.31582 7.48987 10.975 7.52536C14.2909 7.59632 17.6802 7.87705 20.9927 7.70454C22.3346 7.63436 22.3369 5.66118 20.9927 5.59122C17.6804 5.41851 14.2909 5.69924 10.975 5.7704C9.37385 5.80471 3.80595 5.89646 2.62796 5.99585C3.33862 5.34323 4.05583 4.69903 4.77407 4.05483C5.82832 3.11127 7.32998 2.20359 8.06135 0.975972C8.18119 0.775225 7.98276 0.524095 7.76343 0.584279C6.35994 0.964795 5.03 2.30769 3.8925 3.19123C2.62897 4.17339 1.41093 5.21968 0.206622 6.27691C-0.0924711 6.54079 -0.0441873 7.03682 0.206507 7.30637Z"
                    fill="#1B1B1A"
                  />
                </svg>
                <span>повернутись</span>
              </button>

              <button type="button" class="order-btns_order" @click="submit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="23"
                  viewBox="0 0 18 23"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.4945 4.39152V4.70566C15.6634 4.9454 17.3788 6.84668 17.5161 9.22139L17.9911 17.4313C18.1517 20.2061 16.1097 22.5752 13.5052 22.5752H4.49478C1.8903 22.5752 -0.151694 20.2061 0.00885851 17.4313L0.483873 9.22139C0.621254 6.84682 2.33644 4.94562 4.50519 4.70571V4.39152C4.50519 2.29556 6.081 0.575195 8.0498 0.575195H9.94986C11.9187 0.575195 13.4945 2.29556 13.4945 4.39152ZM12.1054 4.39152V4.68015H5.89424V4.39152C5.89424 3.08683 6.87049 2.05041 8.0498 2.05041H9.94986C11.1292 2.05041 12.1054 3.08683 12.1054 4.39152ZM1.87031 9.31193C1.97359 7.52683 3.34033 6.15537 4.9698 6.15537H13.0302C14.6597 6.15537 16.0264 7.52683 16.1297 9.31193L16.6048 17.5219C16.7176 19.4734 15.2848 21.1 13.5052 21.1H4.49478C2.7153 21.1 1.28237 19.4734 1.39529 17.5219L1.87031 9.31193ZM5.89424 8.27199H4.50519V9.52272C4.50519 11.6187 6.081 13.339 8.0498 13.339H9.94986C11.9187 13.339 13.4945 11.6187 13.4945 9.52272V8.27199H12.1054V9.52272C12.1054 10.8274 11.1292 11.8638 9.94986 11.8638H8.0498C6.87049 11.8638 5.89424 10.8274 5.89424 9.52272V8.27199Z"
                    fill="#1B1B1A"
                  />
                </svg>
                <span>оформити замовлення</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import SuccesOrder from "@/components/SuccesOrder.vue";

import axios from "axios";

import { required, minLength, email } from "vuelidate/lib/validators";

const validAddress = (value) => {
  let regExp = /[а-яА-ЯёЁіІїЇєЄҐ0-9\/.,\s]+$/;
  if (value.length > 0) {
    return regExp.test(value);
  } else {
    return true;
  }
};

const validPhone = (value) => {
  let regExp = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
  if (value.length > 0) {
    return regExp.test(value);
  } else {
    return true;
  }
};

const cyrillic = (value) => {
  let regExp = /[а-яА-ЯёЁіІїЇєЄҐґ.,\s]+$/;
  if (value.length > 0) {
    return regExp.test(value);
  } else {
    return true;
  }
};

export default {
  name: "Order",
  components: {
    vSelect,
    SuccesOrder,
  },
  data() {
    return {
      basket: [],
      form: {
        firstName: "",
        lastName: "",
        phone: "",
        mail: "",
        payType: "Онлайн оплата карткою / Liqpay",
        payTypeSD: "Онлайн оплата карткою / Liqpay",
        deliveryCompany: "Нова пошта кур’єр",
        city: "",
        street: "",
        house: "",
        apartmant: "",
        NpWarehouse: "",
        comment: "",
      },     
      orderNumber: null,

      citiesArr: [],
      cityesShow: [],
      NpWarehousesArr: [],
    };
  },
  computed: {
    getBasket() {
      let productsInBasket = this.$store.getters.getBasket;
      this.basket = productsInBasket;
      return productsInBasket;
    },
    productsSum() {
      let productsInBasket = this.$store.getters.getBasket;
      let sumPrise = 0;
      let prodCount = 0;

      if (productsInBasket.length > 0) {
        productsInBasket.forEach((element) => {
          element.addedInBasket.forEach(function (el) {
            let thisProdCnt = el.cnt;
            prodCount += thisProdCnt;

            let choosedTypeArr = element["priseStructure"][el.typeChoosed];
            let choosedWeightArr = choosedTypeArr["prises"];

            let resultPrise = choosedWeightArr[el.weightChoosed];

            if (typeof resultPrise === "object") {
              sumPrise += +resultPrise.new * thisProdCnt;
            } else {
              if (!isNaN(resultPrise)) {
                sumPrise += +resultPrise * thisProdCnt;
              }
            }
          });
        });
      }
      return {
        count: prodCount,
        sum: sumPrise,
      };
    },

    deliveryPrise() {
      return this.form.deliveryCompany === "Самовивіз" ? 0 : 60;
    },
  },
  methods: {
    getPrise(el, el2) {
      let sum = 0;
      for (let i = 0; i < el2.cnt; i++) {
        let typeArray = el.priseStructure[el2.typeChoosed];
        let apriseArray = typeArray.prises;
        let prise = apriseArray[el2.weightChoosed];
        if (!isNaN(+prise)) {
          sum += +prise;
        }
      }
      return sum + " грн";
    },

    orderType(type) {
      return type === this.form.deliveryCompany;
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
      return `./storage/${rout}`;
    },
    submit() {
      switch (this.form.deliveryCompany) {
        case "Нова пошта кур’єр":
          this.$v.form.NpWarehouse.$model = true;
          break;
        case "Нова пошта відділення":
          this.$v.form.house.$model = true;
          this.$v.form.street.$model = true;
          this.form.payTypeSD = "пусто";
          break;

        case "Самовивіз":
          this.$v.form.street.$model = true;
          this.$v.form.city.$model = true;
          this.$v.form.NpWarehouse.$model = true;
          this.$v.form.house.$model = true;
          this.form.payType = "пусто";
          break;
      }

      this.$v.form.$touch();
      if (this.$v.form.$invalid) {
        console.log(this.$v.form);
        window.scrollTo({
          top:
            this.$refs.form.offsetTop -
            document.querySelector(".header").offsetHeight,
          behavior: "smooth",
        });
      } else {
        let data = JSON.parse(JSON.stringify(this.form));
        for (let name in data) {
          if (typeof data[name] === "boolean" || data[name].length === 0) {
            data[name] = "пусто";
          }
        }
        if (this.basket.length > 0) {
          data.products = this.basket;
          console.log(data);
          axios
            .post("https://fortissimo-coffee.com.ua/api/order", data)
            .then((data) => {
              console.log(data);
              if (data.status === 200) {
                console.log(data.data);

                if (!isNaN(+data.data)) {  // if data is number of order

                  this.$router.push(`/order/success:${data.data}`);

                } else {
                  let div = document.createElement("div");
                  div.innerHTML = data.data;

                  document.querySelector("#app").appendChild(div);

                  setTimeout(() => {
                    document.querySelector("#coffee-liqpay").submit();
                  }, 0);
                }

                this.clearBasket();
               
              }
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          alert("Кошик пустий");
        }
      }
    },
    incrementProduct(el, el2) {
      this.$store.commit("incrProdInBasket", {
        id: el.id,
        typeChoosed: el2.typeChoosed,
        weightChoosed: el2.weightChoosed,
      });
    },
    decrementProduct(el, el2) {
      let setting = {
        id: el.id,
        typeChoosed: el2.typeChoosed,
        weightChoosed: el2.weightChoosed,
      };

      if (el2.cnt - 1 != 0) {
        this.$store.commit("decrProdInBasket", setting);
      } else {
        // basketArr.splice(i, 1);
        this.$store.commit("decrProdInBasket", setting);
      }

      // this.$store.commit("deleteFromBasket");
      // this.deleteFromBasket();
    },
    showBasketCnt(el) {
      return el.cnt;
    },
    productParams(el) {},

    basketDelete(el, el2) {
      this.$store.commit("deleteProduct", {
        id: el.id,
        typeChoosed: el2.typeChoosed,
        weightChoosed: el2.weightChoosed,
      });
    },
    goBack() {
      this.$router.go(-1);
    },
    onSelectCity(val) {
      if (val) {
        fetch(`https://fortissimo-coffee.com.ua/api/np_warehouses?ref=${val.Ref}`)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            this.NpWarehousesArr = data.data;
          });
        this.$v.form.city.$model = val.Description;
      } else {
        this.form.city = "";
        this.form.NpWarehouse = "";
      }
    },
    onSelectDep(val) {
      if (val) {
        this.$v.form.NpWarehouse.$model = val.Description;
      } else {
        this.$v.form.NpWarehouse = "";
      }
    },
    clearBasket() {
      this.basket = [];
      this.$store.commit("clearBasket");
      this.$store.commit("clearProductBasket");
    },
    searching(abc) {
      let letters = abc.toLowerCase();
      let res = this.citiesArr.filter((el) => {
        let word = el.Description.toLowerCase();
        word = word.slice(0, abc.length);
        return word.indexOf(letters) !== -1;
      });
      this.cityesShow = res;
    },
  },
  watch: {
    "form.deliveryCompany"() {
      this.form.street = "";
      this.form.city = "";
      this.form.NpWarehouse = "";
      this.form.house = "";
    },
  },
  validations: {
    form: {
      lastName: {
        required,
        cyrillic,
        minLength: minLength(3),
      },
      firstName: {
        required,
        cyrillic,
        minLength: minLength(3),
      },
      city: {
        required,
        minLength: minLength(3),
      },
      NpWarehouse: {
        required,
        minLength: minLength(3),
      },
      phone: {
        required,
        validPhone,
      },
      mail: {
        required,
        email,
      },
      street: {
        required,
        minLength: minLength(3),
      },
      house: {
        validAddress,
        required,
      },
    },
  },

  beforeCreate() {
    fetch("https://fortissimo-coffee.com.ua/api/np_cities")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.citiesArr = data.data;
        this.cityesShow = data.data;
      });
  },
};
</script>

<style scoped lang="scss">
.order {
  &_title {
    margin: 30px 0 60px;
    text-align: center;
    padding: 0px 60px;

    h1 {
      display: inline;
      position: relative;
      font-family: "Cuprum";
      font-style: normal;
      font-weight: 400;
      font-size: 46px;
      line-height: 54px;

      letter-spacing: 0.02em;
      text-transform: uppercase;
      color: #1b1b1a;
      width: max-content;
      margin: 0 auto;

      &:before,
      &:after {
        position: absolute;
        content: "";
        display: block;
        width: 30px;
        height: 30px;
        background-image: url("../assets/images/order/bean.png");
        background-size: cover;
        top: 50%;
        transform: translateY(-50%);
      }
      &::before {
        right: calc(100% + 24px);
      }
      &::after {
        left: calc(100% + 24px);
      }

      @include max-w(767) {
        font-size: 32px;
        line-height: 36px;
      }
    }
  }
  &_wrap {
    max-width: 1502px;
    padding: 0 20px;
    margin: 0 auto;
    @include max-w(1299) {
      padding: 0;
    }
  }
  &-content {
    display: flex;
    padding: 60px 5.22%;
    border: 1px solid #d8d8d8;
    @include max-w(1299) {
      padding: 40px 20px;
      border: none;
      border-top: 1px solid #d8d8d8;
      border-bottom: 1px solid #d8d8d8;
    }
    @include max-w(1150) {
      display: block;
    }
    &_fields {
      width: 50%;
      @include max-w(1150) {
        width: 100%;
      }
    }
    &_products {
      width: 50%;
      @include max-w(1150) {
        width: 100%;
      }
    }

    &_delivery {
    }
  }

  &-title {
    font-family: "Cuprum";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #1b1b1a;

    margin-bottom: 30px;
  }
  &-contacts {
    &_row {
      display: flex;
      flex-wrap: wrap;
      margin: 0 -15px;
    }
    &_field {
      width: calc(50% - 30px);
      margin: 0 15px 34px;
      @include max-w(767) {
        width: calc(50% - 16px);
        margin: 0 8px 34px;
      }
      @include max-w(576) {
        width: 100%;
      }
      input {
        display: block;
        font-family: "Raleway";
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 16px;
        color: #666666;

        width: 100%;
        padding: 12px 14px;
        border: 1px solid #d8d8d8;
      }
    }
  }

  &-delivery {
    margin-bottom: 40px;
  }

  &-company {
    display: flex;
    margin: 0 -12px 20px;
    @include max-w(575) {
      display: block;
    }
  }

  &-payType {
    display: flex;
    margin: 0 -12px 20px;
    @include max-w(767) {
      display: block;
    }
  }

  &-address {
    &_row {
      display: flex;
      flex-wrap: wrap;
      margin: 0 -15px 0;
      @include max-w(767) {
        margin: 0 -8px 0;
      }

      &-house {
        margin: 0 -8px 0;

        .order-address_item {
          margin: 0 8px 34px;
          width: calc(25% - 16px);
          @include max-w(576) {
            width: calc(50% - 16px);
          }
        }
      }
    }

    &_item {
      width: 50%;
      margin: 0 15px 34px;
      width: calc(50% - 30px);

      @include max-w(767) {
        margin: 0 8px 34px;
        width: calc(50% - 16px);
      }
      @include max-w(576) {
        width: 100%;
      }
      label {
        font-family: "Cuprum";
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        color: #1b1b1a;
      }
      span {
        padding-bottom: 4px;
      }

      input {
        border: 1px solid #d8d8d8;
        padding: 12px 14px;
        width: 100%;
      }
    }
  }

  &-self {
    padding-top: 15px;
    border-top: 1px solid #d8d8d8;
    &_info {
      font-family: "Raleway";
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      line-height: 20px;
      color: #1b1b1a;
    }
  }

  textarea {
    display: block;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    color: #666666;
    height: 80px;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 12px 14px;
    width: 100%;
    border: 1px solid #d8d8d8;
    resize: none;
  }

  ::v-deep .infinite-autocomplete-wrapper {
    input {
      font-family: "Raleway";
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      line-height: 16px;
      color: #1b1b1a;
      height: auto;
      border-radius: 0;
      border: 1px solid #d8d8d8;
      padding: 12px 14px;
    }
  }

  ::v-deep {
    .vs__dropdown-toggle {
      padding: 6px 14px;
      border-radius: 0;
    }
  }

  ::v-deep .error {
    label {
      position: relative;
      &:before {
        position: absolute;
        right: 0;
        top: 0;
        content: "Некоректне значення";
        display: block;
        font-family: "Cuprum";
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        color: #f2000e;
      }
    }
    .vs__dropdown-toggle {
      border-color: #f2000e;
      color: red;
    }
  }

  ::v-deep .v-select {
    ul {
      font-size: 16px;
      line-height: 18px;
    }
  }

  &-department {
    &_item {
      margin-bottom: 14px;
      label {
        font-family: "Cuprum";
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        color: #1b1b1a;
      }
      input {
        border: 1px solid #d8d8d8;
        padding: 12px 14px;
        width: 100%;
      }
    }
    textarea {
      margin-top: 34px;
    }
  }

  .radio {
    display: flex;
    font-family: "Cuprum";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-transform: uppercase;
    color: #1b1b1a;

    margin: 0 12px;
    @include max-w(575) {
      margin-bottom: 16px;
    }

    .circle {
      flex-shrink: 0;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      border: 1px solid #c2c2c2;
      transition: all 0.2s linear;
      margin-right: 10px;
    }
    input {
      position: absolute;
      visibility: hidden;
      &:checked ~ .circle {
        border-color: #1b1b1a;
        border-width: 4px;
      }
    }
  }

  // products

  &-products {
    padding-left: 5.22%;
    @include max-w(1299) {
      padding-left: 40px;
    }
    @include max-w(1150) {
      padding-left: 0;
    }
    &_prises {
      margin-bottom: 77px;
      @include max-w(575) {
        margin-bottom: 30px;
      }
    }
  }
  .products {
    &-control {
      width: 63%;
      &_title {
        font-family: "Cuprum";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: #1b1b1a;
        margin-bottom: 10px;
      }
      &_group {
        display: flex;
        align-items: center;
      }
      &_top {
        padding-bottom: 20px;
        border-bottom: 1px solid #d8d8d8;
      }
      &_bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 14px;
        @include max-w(575) {
          display: block;
        }
      }
      &_prise {
        font-family: "Cuprum";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        text-align: center;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: #f2000e;
        @include max-w(575) {
          text-align: left;
          margin-bottom: 16px;
        }
      }
      &_plus,
      &_minus,
      &_delete {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        border: 1px solid #d8d8d8;
        cursor: pointer;
        &:hover {
          border-color: #f2000e;
        }
        &:active {
          svg {
            path {
              stroke: #f2000e;
            }
          }
        }
      }
      &_delete {
        margin-left: 20px;
        cursor: pointer;
        @include max-w(575) {
          margin-left: auto;
        }
      }
      &_count {
        display: flex;
        justify-content: center;
        font-family: "Cuprum";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        letter-spacing: 0.02em;
        color: #1b1b1a;

        width: 48px;
      }
    }
    &-choosed {
      margin: 0 -3px;
      &_item {
        font-family: "Cuprum";
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        color: #ffffff;

        padding: 4px 10px;
        background: #1b1b1a;
        border-radius: 50px;
        margin: 0 3px;
      }
    }
    &-item {
      display: flex;
      align-items: center;
      width: 100%;
      padding: 30px 0;
      border-top: 1px solid #d8d8d8;
      &_img {
        width: 37%;
        padding-right: 15px;
        img {
          display: block;
          width: 100%;
          height: auto;
          object-fit: contain;
        }
      }
    }
    &-choosed {
      display: flex;
    }
  }

  &-prises {
    padding: 30px 0 16px;
    border-top: 1px solid #d8d8d8;
    border-bottom: 1px solid #d8d8d8;
    &_item {
      display: flex;
      justify-content: space-between;

      font-family: "Cuprum";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      color: #000000;
      resize: none;

      margin-bottom: 14px;

      &--sum {
        .order-prises_name {
          font-family: "Cuprum";
          font-style: normal;
          font-weight: 400;
          font-size: 24px;
          line-height: 28px;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          color: #000000;
        }
        .order-prises_count {
          font-family: "Cuprum";
          font-style: normal;
          font-weight: 400;
          font-size: 24px;
          line-height: 28px;

          letter-spacing: 0.02em;
          text-transform: uppercase;
          color: #f2000e;
        }
      }
    }
  }

  .input-wrap {
    &.error {
      position: relative;
      &:before {
        position: absolute;
        right: 0;
        bottom: 100%;
        content: "Некоректне значення";
        display: block;
        font-family: "Cuprum";
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        color: #f2000e;
      }
      input {
        border-color: #f2000e;
      }
    }
  }

  &-btns {
    display: flex;
    justify-content: space-between;
    @include max-w(575) {
      flex-direction: column;
    }
    &_back {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 56px;
      width: 197px;
      border: 2px solid #d8d8d8;
      background: transparent;
      cursor: pointer;

      &:hover {
        border: 2px solid #f2000e;
      }

      @include max-w(575) {
        order: 2;
        width: 100%;
      }
      svg {
        display: block;
        margin-right: 9px;
      }
      span {
        font-family: "Cuprum";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        text-align: center;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: #1b1b1a;
      }
    }
    &_order {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 287px;
      height: 56px;
      border: 2px solid #f2000e;
      background: transparent;
      cursor: pointer;

      @include max-w(575) {
        order: 1;
        width: 100%;
        margin-bottom: 16px;
      }
      svg {
        display: block;
        margin-right: 11px;
      }
      span {
        font-family: "Cuprum";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        /* identical to box height, or 122% */

        text-align: center;
        letter-spacing: 0.02em;
        text-transform: uppercase;

        /* bg color */

        color: #1b1b1a;
      }
    }
  }
}
</style>
