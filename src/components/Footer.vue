<template>
  <footer class="footer">
    <div class="footer_logo footer-logo">
      <img :src="getImg('logo.png')" class="footer-logo_img" alt="" />
    </div>

    <nav class="footer_products products">
      <router-link
        class="products_link"
        active-class="products_link--active"
        tag="a"
        to="/all"
        >Всі товари</router-link
      >

      <router-link
        class="products_link"
        active-class="products_link--active"
        tag="a"
        to="/1"
        >Арабіка</router-link
      >
      <router-link
        class="products_link"
        active-class="products_link--active"
        tag="a"
        to="/2"
        >суміш арабіка/робуста</router-link
      >
      <router-link
        class="products_link"
        active-class="products_link--active"
        tag="a"
        to="/3"
        >Дегустаційні сети</router-link
      >
      <router-link
        class="products_link"
        active-class="products_link--active"
        tag="a"
        to="/4"
        >мерч</router-link
      >
    </nav>

    <nav class="footer_pages pages">
      <div class="pages_social social">
        <div class="social_wrap">
          <router-link class="social_link" tag="a"  :to="getSocial('instagram')" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M23.9344 7.05609C23.8782 5.78087 23.672 4.90417 23.3765 4.1445C23.0718 3.33813 22.603 2.61618 21.9887 2.01602C21.3885 1.40653 20.6618 0.932924 19.8648 0.632938C19.1007 0.33753 18.2286 0.131313 16.9534 0.0750881C15.6687 0.0141019 15.2608 0 12.0024 0C8.74391 0 8.33605 0.0141019 7.05608 0.0703264C5.78086 0.126551 4.90416 0.332952 4.14468 0.628176C3.33812 0.932924 2.61618 1.40177 2.01602 2.01602C1.40653 2.61618 0.933106 3.34289 0.632937 4.13992C0.33753 4.90417 0.131312 5.77611 0.075088 7.05133C0.0141019 8.33607 0 8.74392 0 12.0024C0 15.2608 0.0141019 15.6687 0.0703263 16.9487C0.126551 18.2239 0.332951 19.1006 0.628358 19.8603C0.933106 20.6666 1.40653 21.3886 2.01602 21.9887C2.61618 22.5982 3.34288 23.0718 4.13991 23.3718C4.90416 23.6672 5.7761 23.8734 7.0515 23.9297C8.33129 23.9861 8.73933 24 11.9978 24C15.2562 24 15.6641 23.9861 16.9441 23.9297C18.2193 23.8734 19.096 23.6672 19.8555 23.3718C21.4684 22.7482 22.7436 21.473 23.3672 19.8603C23.6624 19.096 23.8688 18.2239 23.9251 16.9487C23.9813 15.6687 23.9954 15.2608 23.9954 12.0024C23.9954 8.74392 23.9906 8.33607 23.9344 7.05609ZM21.7731 16.8549C21.7215 18.027 21.5246 18.66 21.3605 19.0819C20.9572 20.1275 20.1274 20.9573 19.0819 21.3606C18.6599 21.5247 18.0224 21.7215 16.8549 21.773C15.589 21.8294 15.2094 21.8433 12.0071 21.8433C8.80489 21.8433 8.42048 21.8294 7.15918 21.773C5.98708 21.7215 5.35414 21.5247 4.93218 21.3606C4.41188 21.1683 3.93827 20.8635 3.55386 20.465C3.15534 20.0758 2.8506 19.607 2.6583 19.0867C2.4942 18.6647 2.29733 18.027 2.24586 16.8597C2.18946 15.5938 2.17554 15.214 2.17554 12.0117C2.17554 8.80949 2.18946 8.42507 2.24586 7.16396C2.29733 5.99185 2.4942 5.35891 2.6583 4.93695C2.8506 4.41646 3.15534 3.94304 3.55862 3.55844C3.94762 3.15993 4.41646 2.85518 4.93695 2.66306C5.3589 2.49897 5.9966 2.30209 7.16395 2.25045C8.42982 2.19422 8.80966 2.18012 12.0117 2.18012C15.2187 2.18012 15.5983 2.19422 16.8596 2.25045C18.0317 2.30209 18.6647 2.49897 19.0866 2.66306C19.6069 2.85518 20.0805 3.15993 20.465 3.55844C20.8635 3.94762 21.1682 4.41646 21.3605 4.93695C21.5246 5.35891 21.7215 5.99643 21.7731 7.16396C21.8294 8.42983 21.8435 8.80949 21.8435 12.0117C21.8435 15.214 21.8294 15.589 21.7731 16.8549ZM12.0024 5.83691C8.59873 5.83691 5.83714 8.59833 5.83714 12.0022C5.83714 15.4061 8.59873 18.1675 12.0024 18.1675C15.4063 18.1675 18.1677 15.4061 18.1677 12.0022C18.1677 8.59833 15.4063 5.83691 12.0024 5.83691ZM12.0024 16.0015C9.79428 16.0015 8.00316 14.2105 8.00316 12.0022C8.00316 9.79388 9.79428 8.00293 12.0024 8.00293C14.2107 8.00293 16.0017 9.79388 16.0017 12.0022C16.0017 14.2105 14.2107 16.0015 12.0024 16.0015ZM18.4114 7.03295C19.2065 7.03295 19.8509 6.38847 19.8509 5.59363C19.8509 4.79861 19.2065 4.15431 18.4114 4.15431C17.6166 4.15431 16.9721 4.79861 16.9721 5.59363C16.9721 6.38847 17.6166 7.03295 18.4114 7.03295Z"
                fill="#666666"
              />
            </svg>
          </router-link>

          <router-link class="social_link" tag="a"  :to="getSocial('facebook')" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 0C5.384 0 0 5.384 0 12C0 18.616 5.384 24 12 24C18.616 24 24 18.616 24 12C24 5.384 18.616 0 12 0ZM12 2C17.535 2 22 6.465 22 12C22.0024 14.394 21.144 16.709 19.5813 18.5226C18.0187 20.3362 15.856 21.5275 13.488 21.879V14.916H16.336L16.783 12.023H13.488V10.443C13.488 9.243 13.883 8.176 15.006 8.176H16.811V5.652C16.494 5.609 15.823 5.516 14.555 5.516C11.907 5.516 10.355 6.914 10.355 10.1V12.023H7.633V14.916H10.355V21.854C8.01975 21.4696 5.89724 20.2675 4.36669 18.4623C2.83615 16.6572 1.99729 14.3667 2 12C2 6.465 6.465 2 12 2Z"
                fill="#666666"
              />
            </svg>
          </router-link>
        </div>

        <div class="pages_banks pages_banks--mob">
          <div class="banks_item">
            <img src="../assets/images/footer/LIQPAY.png" alt="" />
          </div>
          <div class="banks_item">
            <img src="../assets/images/footer/visa.png" alt="" />
          </div>
          <div class="banks_item">
            <img src="../assets/images/footer/mastercard.png" alt="" />
          </div>
        </div>
      </div>

      <div class="pages_link-wrap">
        <router-link
          class="pages_link"
          active-class="pages_link--active"
          v-for="(el, i) in getPagesRouts"
          :key="i"
          tag="a"
          to="/link"
          v-text="el.title"
          >Контакти</router-link
        >
      </div>

      <div class="pages_banks pages_banks--dt">
        <div class="banks_item">
          <img src="../assets/images/footer/LIQPAY.png" alt="" />
        </div>
        <div class="banks_item">
          <img src="../assets/images/footer/visa.png" alt="" />
        </div>
        <div class="banks_item">
          <img src="../assets/images/footer/mastercard.png" alt="" />
        </div>
      </div>
    </nav>

    <div class="footer_bottom footer-bottom">
      <div class="footer-bottom_made">
        <span> Made by </span>
        <a href="">
          <img src="../assets/images/footer/domino.png" alt="Domino" />
        </a>
      </div>
      <button class="footer-bottom_scroll" @click="scrollTop">
        <img src="../assets/images/footer/arrow_top.png" alt="Scroll top" />
        <span> вгору </span>
      </button>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          text: "Умови використання",
          href: "/return",
        },
        {
          text: "Оплата і доставка",
          href: "/confidence",
        },
        {
          text: "Повернення товару",
          href: "/ofert",
        },
        {
          text: "Політика конфіденційності",
          href: "/contacts",
        },
        {
          text: "Договір публічної оферти",
          href: "/contacts",
        },
      ],
    };
  },
  methods: {
    getImg(rout) {
      return require(`../assets/images/footer/${rout}`);
    },
    scrollTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    getSocial(name) {
      let settingObj = this.$store.getters.getSetting;
      if (settingObj !== null) {       
        return settingObj.socials[name];
      } else {
        return "";
      }
    },
  },
  computed: {
    getPagesRouts() {
      return this.$store.getters.getPagesRouts;
    },
  },
  beforeCreate() {
    this.$store.dispatch("loadPagesRouts");
  },
};
</script>

<style scoped lang="scss">
.footer {
  &_logo {
    display: flex;
    justify-content: center;
    padding: 60px 0 37px;
    @include max-w(767) {
      padding: 60px 0 18px;
    }
  }
  &-logo {
    &_img {
      display: block;
    }
  }

  &_products {
    padding-bottom: 37px;
  }

  .products {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 88px;
    border-bottom: 1px solid #666666;

    @include max-w(767) {
      height: auto;
      flex-direction: column;
      padding: 43px 0;
    }
    &:before,
    &:after {
      content: "";
      display: block;
      width: 31px;
      height: 30px;
      background-image: url("../assets/images/footer/coffee.png");
      background-size: cover;
    }
    &:before {
      @include max-w(767) {
        margin-bottom: 20px;
      }
    }
    &::after {
      @include max-w(767) {
        margin-top: 3px;
      }
    }

    &_link {
      display: flex;
      align-items: center;
      height: 40px;
      font-family: "Cuprum";
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 24px;

      text-align: center;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      color: #666666;

      padding: 0px 1.65%;
      border-right: 1px solid #666666;
      @include max-w(992) {
        font-size: 19px;
      }
      @include max-w(767) {
        border: none;
        font-size: 24px;
        line-height: 24px;
        margin-bottom: 8px;
      }

      &--active {
        color: #f2000e;
      }
      &:last-of-type {
        border-right: none;
      }
    }
  }

  .pages {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 111px;
    max-width: 1761px;
    margin: 0 auto;

    @include max-w(1023) {
      flex-wrap: wrap;
      height: auto;
      justify-content: space-between;
      align-items: flex-start;
      align-items: stretch;
      padding: 56px 37px 61px 37px;
    }

    &_link {
      position: relative;
      font-family: "Cuprum";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 16px;
      color: #666666;
      margin: 0 12px;
      max-width: 200px;

      @include max-w(1199) {
        margin: 0 6px;
      }

      @include max-w(1023) {
        font-size: 16px;
        line-height: 16px;
        margin: 11px 6px;
      }

      &:before {
        content: "";
        position: absolute;
        left: 0;
        top: calc(100% + 4px);
        display: block;
        height: 1px;
        width: 0%;
        background: #f2000e;
        transition: width 0.3s ease-in-out;
      }

      &--active {
        color: #1b1b1a;
        &:before {
          width: 100%;
        }
      }

      &-wrap {
        margin: 0 0.6%;
        @include max-w(992) {
          margin: 0 6px;
        }
        @include max-w(1023) {
          margin: -11px 0;
          width: 46%;
          &:nth-of-type(odd) {
            width: 46%;
          }
          &:nth-of-type(even) {
            width: 62%;
          }
        }
      }
    }

    &_social {
      display: flex;

      svg {
        display: block;
      }
    }
    .social {
      &_wrap {
        display: flex;
        align-items: center;
        justify-content: space-between;
        @include max-w(1023) {
          justify-content: flex-start;
          margin: 0 -10px;
        }
      }
      &_link {
        margin: 0 10px;
        &:hover {
          svg {
            path {
              fill: #f2000e;
            }
          }
        }
      }
    }

    &_banks {
      display: flex;
      &--mob {
        display: none;
        @include max-w(1023) {
          display: flex;
        }
      }
      &--dt {
        @include max-w(1023) {
          display: none;
        }
      }
      @include max-w(767) {
        margin: -7px 0;
      }
    }

    .banks {
      &_item {
        display: flex;
        margin: 0 8px;
        @include max-w(1199) {
          margin: 0 4px;
        }
        @include max-w(767) {
          margin: 7px 4px;
        }
      }
    }
  }

  &_pages {
    @include max-w(1023) {
      justify-content: space-around;
      height: auto;
      .pages_link-wrap {
        display: flex;
        flex-direction: column;
        order: 1;
        width: 60%;
      }
      .pages_social {
        flex-direction: column;
        order: 2;
        max-width: 200px;
        justify-content: space-between;
        width: 30%;
      }
      .pages_banks {
        flex-direction: column;
      }
    }
  }

  &-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #1b1b1a;
    padding: 30px 80px;
    @include max-w(767) {
      padding: 16px 20px;
    }
    &_made {
      display: flex;
      align-items: center;
      span {
        font-family: "Raleway";
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 20px;
        color: #c2c2c2;
        padding-right: 8px;
      }
      img {
        display: block;
      }
    }

    &_scroll {
      display: flex;
      align-items: center;
      background: transparent;
      border: none;
      cursor: pointer;
      img {
        display: block;
        margin-right: 12px;
      }
      span {
        font-family: "Cuprum";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: #c2c2c2;
      }
    }
  }
}
</style>