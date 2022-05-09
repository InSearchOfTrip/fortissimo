<template>
  <div class="home">
    <ProductsSlider />
    <Merch />
  </div>
</template>

<script>
import ProductsSlider from "@/components/ProductsSlider.vue";
import Merch from "@/components/Merch.vue";

export default {
  name: "Home",
  components: {
    ProductsSlider,
    Merch,
  },
};
</script>
