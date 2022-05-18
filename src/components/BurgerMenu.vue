<template>
  <section class="overflow">
    <!-- <div :class="['overlay', { 'overlay--active': showMenu }]"></div> -->
    <div :class="['b-menu', { 'b-menu--active': showMenu }]">
      <div class="b-menu_row">
        <nav class="b-menu_products products">
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
      </div>

      <div class="b-menu_row">
        <nav class="b-menu_pages pages">
          <div class="pages_link-wrap" v-for="(el, i) in getPagesRouts" :key="i">
            <router-link
              class="pages_link"
              active-class="pages_link--active"
              tag="a"
              to="/link"
              v-text="el.title"
              >Контакти</router-link
            >
          </div>
        </nav>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  name: "BurgerMenu",
  props: ["showMenu"],
  data() {
    return {
      linksPages: {
        desktop: [
          {
            text: "Про нас",
            href: "/about",
          },
          {
            text: "Оплата і доставка",
            href: "/payAndDelivery",
          },
          {
            text: "Умови використання",
            href: "/rules",
          },
          {
            text: "Повернення товару",
            href: "/return",
          },
          {
            text: "Політика конфіденційності",
            href: "/confidence",
          },
          {
            text: "Договір публічної оферти",
            href: "/ofert",
          },
          {
            text: "Контакти",
            href: "/contacts",
          },
        ],
        mobile: [
          {
            text: "Про нас",
            href: "/about",
          },
          {
            text: "Політика конфіденційності",
            href: "/confidence",
          },
          {
            text: "Оплата і доставка",
            href: "/payAndDelivery",
          },
          {
            text: "Договір публічної оферти",
            href: "/ofert",
          },
          {
            text: "Умови використання",
            href: "/rules",
          },
          {
            text: "Контакти",
            href: "/contacts",
          },
          {
            text: "Повернення товару",
            href: "/rules",
          },
        ],
      },
    };
  },
  computed: {
    getPagesLink() {
      if (window.screen.width > 768) {
        return this.linksPages.desktop;
      } else {
        return this.linksPages.mobile;
      }
    },
    getPagesRouts(){
      let a =  this.$store.getters.getPagesRouts;

      return a;
    }
  },
  beforeCreate() {
    this.$store.dispatch('loadPagesRouts');
  },
};
</script>


<style scoped lang="scss">
.overflow {
  overflow-y: hidden;
}
.overlay {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 0%;
  padding-bottom: 0%;
  background: #000000;
  opacity: 0.1;
  border-radius: 50%;
  transition: width 0.3s ease-in-out, padding-bottom 0.3s ease-in-out,
    opacity 0.3s ease-in-out;
  z-index: -1;

  &--active {
    width: 130%;
    padding-bottom: 130%;
    opacity: 0.9;
  }
}
.b-menu {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  top: -100%;
  background: #1b1b1a;
  border-bottom: 1px solid #6d6d6d;
  transition: top 0.3s ease-in-out;
  z-index: 1;

  overflow: hidden;
  &--active {
    top: 81px;
    @include max-w(767) {
      top: 61px;
    }
  }
  .products {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 88px;
    border-bottom: 1px solid #6d6d6d;
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
      height: 24px;
      background-image: url("../assets/images/burgerMenu/coffee.png");
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
      color: #d8d8d8;

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
    justify-content: center;
    height: 81px;
    @include max-w(767) {
      flex-wrap: wrap;
      height: auto;
      justify-content: flex-start;
      padding: 40px 0px 30px 24px;
    }

    &_link {
      position: relative;
      font-family: "Cuprum";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 16px;
      color: #c2c2c2;

      @include max-w(992) {
        font-size: 13px;
        line-height: 13px;
      }

      @include max-w(767) {
        font-size: 16px;
        line-height: 16px;
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
        color: #ffffff;
        &:before {
          width: 100%;
        }
      }

      &-wrap {
        margin: 0 0.6%;
        @include max-w(992) {
          margin: 0 6px;
        }
        @include max-w(767) {
          margin: 0 0 20px;
          width: 46%;
          &:nth-of-type(odd) {
            width: 46%;
          }
          &:nth-of-type(even) {
            width: 50%;
          }
        }
      }
    }
  }
}
</style>