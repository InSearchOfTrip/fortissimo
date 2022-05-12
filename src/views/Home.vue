<template>
  <div class="home">
    <ProductsSlider />  
    <Products />  
    <Merch />
    
  </div>
</template>

<script>
import ProductsSlider from "@/components/ProductsSlider.vue";
import Products from "@/components/Products.vue";
import Merch from "@/components/Merch.vue";

export default {
  name: "Home",
  components: {
    ProductsSlider,
    Products,
    Merch,
  },
};
</script>
