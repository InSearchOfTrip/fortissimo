<template>
  <div>
    <div :class="['overlay', { 'overlay--active': showMenu }]"></div>
    <div :class="['b-menu' , {'b-menu--active': showMenu }]">
      <div class="b-menu_row">
        <nav class="b-menu_products products">
          <router-link
            class="products_link"
            active-class="products_link--active"
            tag="a"
            to="/all"
            >Всі товари</router-link
          >
          |
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
          <router-link
            class="pages_link"
            active-class="pages_link--active"
            tag="a"
            to="/about"
            >Про нас</router-link
          >
          |
          <router-link
            class="pages_link"
            active-class="pages_link--active"
            tag="a"
            to="/payAndDelivery"
            >Оплата і доставка</router-link
          >
          <router-link
            class="pages_link"
            active-class="pages_link--active"
            tag="a"
            to="/rules"
            >Умови використання</router-link
          >
          <router-link
            class="pages_link"
            active-class="pages_link--active"
            tag="a"
            to="/return"
            >Повернення товару</router-link
          >
          <router-link
            class="pages_link"
            active-class="pages_link--active"
            tag="a"
            to="/confidence"
            >Політика конфіденційності</router-link
          >
          <router-link
            class="pages_link"
            active-class="pages_link--active"
            tag="a"
            to="/ofert"
            >Договір публічної оферти</router-link
          >
          <router-link
            class="pages_link"
            active-class="pages_link--active"
            tag="a"
            to="/contacts"
            >Контакти</router-link
          >
        </nav>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "BurgerMenu",
  props: ["showMenu"],
  data() {
    return {};
  },
};
</script>


<style scoped lang="scss">
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
  position: absolute;
  left: 0;
  width: 100%;
  top: -170px;
  background: #1b1b1a;
  border-bottom: 1px solid #6d6d6d;
  transition: top 0.3s ease-in-out;
  &--active{
    top: 81px;
  }
  .products {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 88px;
    border-bottom: 1px solid #6d6d6d;
    &:before,
    &:after {
      content: "";
      display: block;
      width: 31px;
      height: 24px;
      background-image: url("../assets/images/burgerMenu/coffee.png");
      background-size: cover;
    }

    &_link {
      display: flex;
      align-items: center;
      height: 40px;
      font-family: "Cuprum";
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 1px;

      text-align: center;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      color: #d8d8d8;

      padding: 0 32px;
      border-right: 1px solid #666666;

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

    &_link {
      position: relative;
      font-family: "Cuprum";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 16px;
      color: #c2c2c2;

      margin: 0 12px;

       &:before{
          content: "";
          position: absolute;
          left: 0;
          top: calc(100% + 4px);
          display: block;
          height: 1px;
          width: 0%;
          background: #F2000E;
          transition: width 0.3s ease-in-out;

       }

      &--active{       
        color: #FFFFFF;
        &:before{
          width: 100%;  
        }    
      }
    }
  }
}
</style>