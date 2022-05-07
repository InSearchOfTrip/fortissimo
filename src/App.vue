<template>
  <div id="app">
    <Header />
    <ProductsSlider />
  </div>
</template>

<script>
// @ is an alias to /src

import "@/style/main.scss";

import Header from '@/components/Header.vue';
import ProductsSlider from '@/components/ProductsSlider.vue';

export default {
  components: {
    Header,
    ProductsSlider
  }
}
</script>

<style lang="scss">

</style>
