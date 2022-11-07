<template>
  <div>        
    <div class="contacts">
      <div class="container-wrapper">
        <div class="body">
          <div class="left">
            <div class="col">
              <h2>контакти</h2>
              <a class="text link" href="#" v-text="setting.zaklad.address"></a>
              <p class="text" v-text="setting.zaklad.schedule"></p>
              <a class="text link" :href="`tel:${setting.contacts.phone}`" v-html="setting.contacts.phone"></a>
              <a class="mail link" :href="`mailto:${setting.contacts.email}`" v-html="setting.contacts.email"></a
              >
              <div class="links">
                <a href="#" class="link">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M23.9344 7.05609C23.8782 5.78087 23.672 4.90417 23.3765 4.1445C23.0718 3.33813 22.603 2.61618 21.9887 2.01602C21.3885 1.40653 20.6618 0.932924 19.8648 0.632938C19.1007 0.33753 18.2286 0.131313 16.9534 0.0750881C15.6687 0.0141019 15.2608 0 12.0024 0C8.74391 0 8.33605 0.0141019 7.05608 0.0703264C5.78086 0.126551 4.90416 0.332952 4.14468 0.628176C3.33812 0.932924 2.61618 1.40177 2.01602 2.01602C1.40653 2.61618 0.933106 3.34289 0.632937 4.13992C0.33753 4.90417 0.131312 5.77611 0.075088 7.05133C0.0141019 8.33607 0 8.74392 0 12.0024C0 15.2608 0.0141019 15.6687 0.0703263 16.9487C0.126551 18.2239 0.332951 19.1006 0.628358 19.8603C0.933106 20.6666 1.40653 21.3886 2.01602 21.9887C2.61618 22.5982 3.34288 23.0718 4.13991 23.3718C4.90416 23.6672 5.7761 23.8734 7.0515 23.9297C8.33129 23.9861 8.73933 24 11.9978 24C15.2562 24 15.6641 23.9861 16.9441 23.9297C18.2193 23.8734 19.096 23.6672 19.8555 23.3718C21.4684 22.7482 22.7436 21.473 23.3672 19.8603C23.6624 19.096 23.8688 18.2239 23.9251 16.9487C23.9813 15.6687 23.9954 15.2608 23.9954 12.0024C23.9954 8.74392 23.9906 8.33607 23.9344 7.05609ZM21.7731 16.8549C21.7215 18.027 21.5246 18.66 21.3605 19.0819C20.9572 20.1275 20.1274 20.9573 19.0819 21.3606C18.6599 21.5247 18.0224 21.7215 16.8549 21.773C15.589 21.8294 15.2094 21.8433 12.0071 21.8433C8.80489 21.8433 8.42048 21.8294 7.15918 21.773C5.98708 21.7215 5.35414 21.5247 4.93218 21.3606C4.41188 21.1683 3.93827 20.8635 3.55386 20.465C3.15534 20.0758 2.8506 19.607 2.6583 19.0867C2.4942 18.6647 2.29733 18.027 2.24586 16.8597C2.18946 15.5938 2.17554 15.214 2.17554 12.0117C2.17554 8.80949 2.18946 8.42507 2.24586 7.16396C2.29733 5.99185 2.4942 5.35891 2.6583 4.93695C2.8506 4.41646 3.15534 3.94304 3.55862 3.55844C3.94762 3.15993 4.41646 2.85518 4.93695 2.66306C5.3589 2.49897 5.9966 2.30209 7.16395 2.25045C8.42982 2.19422 8.80966 2.18012 12.0117 2.18012C15.2187 2.18012 15.5983 2.19422 16.8596 2.25045C18.0317 2.30209 18.6647 2.49897 19.0866 2.66306C19.6069 2.85518 20.0805 3.15993 20.465 3.55844C20.8635 3.94762 21.1682 4.41646 21.3605 4.93695C21.5246 5.35891 21.7215 5.99643 21.7731 7.16396C21.8294 8.42983 21.8435 8.80949 21.8435 12.0117C21.8435 15.214 21.8294 15.589 21.7731 16.8549ZM12.0012 5.83691C8.59753 5.83691 5.83594 8.59833 5.83594 12.0022C5.83594 15.4061 8.59753 18.1675 12.0012 18.1675C15.4051 18.1675 18.1665 15.4061 18.1665 12.0022C18.1665 8.59833 15.4051 5.83691 12.0012 5.83691ZM12.0012 16.0015C9.79307 16.0015 8.00195 14.2105 8.00195 12.0022C8.00195 9.79388 9.79307 8.00293 12.0012 8.00293C14.2095 8.00293 16.0005 9.79388 16.0005 12.0022C16.0005 14.2105 14.2095 16.0015 12.0012 16.0015ZM18.412 7.03294C19.207 7.03294 19.8515 6.38846 19.8515 5.59363C19.8515 4.79861 19.207 4.15431 18.412 4.15431C17.6171 4.15431 16.9727 4.79861 16.9727 5.59363C16.9727 6.38846 17.6171 7.03294 18.412 7.03294Z"
                      fill="#666666"
                    />
                  </svg>
                </a>
                <a href="#" class="link">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 0C5.384 0 0 5.384 0 12C0 18.616 5.384 24 12 24C18.616 24 24 18.616 24 12C24 5.384 18.616 0 12 0ZM12 2C17.535 2 22 6.465 22 12C22.0024 14.394 21.144 16.709 19.5813 18.5226C18.0187 20.3362 15.856 21.5275 13.488 21.879V14.916H16.336L16.783 12.023H13.488V10.443C13.488 9.243 13.883 8.176 15.006 8.176H16.811V5.652C16.494 5.609 15.823 5.516 14.555 5.516C11.907 5.516 10.355 6.914 10.355 10.1V12.023H7.633V14.916H10.355V21.854C8.01975 21.4696 5.89724 20.2675 4.36669 18.4623C2.83615 16.6572 1.99729 14.3667 2 12C2 6.465 6.465 2 12 2Z"
                      fill="#666666"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div class="col">
              <h2>Заклади партнери</h2>
              <p class="text">
                Придбати каву можна у будь-якому закладі мережі
              </p>
              <ul>
                <li class="item-list-coffee">Papa&Mama</li>
                <li class="item-list-coffee">Blues&Jazz</li>
                <li class="item-list-coffee">Porscheнь</li>
                <li class="item-list-coffee">Offroad</li>
              </ul>
            </div>
          </div>
          <div class="right">
            <h2>Завжди на зв’язку</h2>
            <form action="#" @submit.prevent="submit">
              <div class="inputs">
                <InputText
                  v-model.trim.lazy="$v.form.name.$model"
                  placeholder="Ім‘я"
                  :validClass="$v.form.name.$error"
                />

                <InputText
                  v-model.trim.lazy="$v.form.phone.$model"
                  placeholder="Телефон"
                  :validClass="$v.form.phone.$error"
                />
              </div>

              <Textarea
                v-model.trim.lazy="$v.form.comment.$model"
                placeholder="Побажання до замовлення"
                :validClass="$v.form.phone.$error"
              />

              <BaseButton text="Надіслати повідомлення" />
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";

import axios from "axios";

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

import InputText from "./common/InputText";
import Textarea from "./common/Textarea";
import BaseButton from "./common/BaseButton";

export default {
  components: { BaseButton, Textarea, InputText },
  data() {
    return {
      showPopup: false,
      form: {
        name: "",
        phone: "",
        comment: "",
      },
    };
  },
  methods: {
    submit() {
      this.$v.form.$touch();
      console.log(this.$v.form);

      if (this.$v.form.$invalid) {
        console.log(this.$v.form);
        window.scrollTo({
          top:
            this.$refs.form.offsetTop -
            document.querySelector(".header").offsetHeight,
          behavior: "smooth",
        });
      } else {
        console.log(this.form);

        axios
          .post("./api/feedback ", this.form)
          .then((data) => {
            console.log(data);
            if (data.status === 200) {
              this.showPopup = true;
              this.form = {
                name: "",
                phone: "",
                comment: "",
              };
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
  computed:{
    setting(){
      return this.$store.getters.getSetting;
    }
  },
  validations: {
    form: {
      name: {
        required,
        cyrillic,
        minLength: minLength(3),
      },
      phone: {
        required,
        validPhone,
      },
      comment: {
        required,
        minLength: minLength(3),
      },
    },
  },
};
</script>

<style scoped lang="scss">
.contacts {
  h2 {
    font-family: "Cuprum";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #1b1b1a;
    margin-bottom: 24px;
  }

  .text {
    font-family: "Raleway";
    font-weight: 300;
    font-size: 18px;
    line-height: 22px;
    color: #1b1b1a;
    margin-bottom: 12px;
  }

  .mail {
    font-family: "Cuprum";
    font-weight: 400;
    font-size: 18px;
    line-height: 20px;
    color: #666666;
    margin-bottom: 28px;
  }

  .link {
    transition: 0.3s ease;
    white-space: nowrap;

    &:hover {
      opacity: 0.6;
    }
  }

  .body {
    display: flex;
    justify-content: space-between;

    @include max-w(1300) {
      align-items: flex-start;
    }

    @include max-w(900) {
      flex-direction: column;
    }

    .left {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 85px;
      width: 100%;
      margin-right: 150px;

      @include max-w(1500) {
        margin-right: 100px;
      }

      @include max-w(1300) {
        grid-template-columns: 1fr;
        grid-row-gap: 40px;
        flex: 1 1 30%;
      }

      @include max-w(900) {
        grid-template-columns: 1fr 1fr;
        margin: 0 0 60px;
      }

      @include max-w(600) {
        grid-column-gap: 30px;
      }

      @include max-w(500) {
        grid-template-columns: 1fr;
        margin-bottom: 40px;
      }

      .col {
        display: flex;
        flex-direction: column;
        max-width: 240px;
        width: 100%;

        .links {
          display: flex;

          a {
            &:not(:last-child) {
              margin-right: 20px;
            }
          }
        }

        ul {
          margin-top: 20px;

          li {
            font-family: "Cuprum";
            font-size: 18px;
            line-height: 22px;
            letter-spacing: 0.02em;
            text-transform: uppercase;
            color: #1b1b1a;

            &:not(:last-child) {
              margin-bottom: 16px;
            }
          }
        }
      }
    }

    .right {
      border: 1px solid #d8d8d8;
      padding: 60px 80px;
      width: 100%;

      @include max-w(1500) {
        padding: 50px 60px;
      }

      @include max-w(1300) {
        flex: 1 1 70%;
      }

      @include max-w(600) {
        padding: 40px 20px;
      }

      h2 {
        margin-bottom: 35px;
        text-align: center;
      }

      .inputs {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 34px;
        margin-bottom: 34px;

        @include max-w(550) {
          grid-template-columns: 1fr;
          grid-row-gap: 34px;
        }
      }

      .textarea {
        margin-bottom: 34px;
      }

      .base-button {
        @include max-w(550) {
          width: 100%;
        }
      }
    }
  }
}
</style>
