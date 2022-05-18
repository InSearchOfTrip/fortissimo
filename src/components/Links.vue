<template>
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
</template>

<script>
export default {
    name: "Links",
};
</script>

<style scoped lang="scss">
.products {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 88px;
  border-bottom: 1px solid #D8D8D8;
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
    height: 28px;
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
    border-right: 1px solid #D8D8D8;
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
</style>
    