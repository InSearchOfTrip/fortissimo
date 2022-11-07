<template>
  <nav class="products">
    <router-link
      v-if="el.products.length > 0 || el.slug === 'vsi-tovari'"
      v-for="(el, i) in getCategories"
      :key="i"
      :class="[
        'products_link',
        { 'products_link--active': setActive(el.slug) },
      ]"
      tag="a"
      :to="`/catalog:${el.slug}`"
      v-text="el.name"
      >Всі товари</router-link
    >
  </nav>
</template>

<script>
export default {
  name: "Links",
  computed: {
    getCategories() {
      return this.$store.getters.getCategories;
    },
  },
  methods: {
    setActive(el) {
      if (this.$route.params.slug) {
        return el === this.$route.params.slug.slice(1);
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.products {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 88px;
  border-bottom: 1px solid #d8d8d8;
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
    border-right: 1px solid #d8d8d8;
    @include max-w(1299) {
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
    