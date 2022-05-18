<template>
  <div class="catalog">
    <Links /> 
    <Catalog />

  </div>
</template>

<script>
import Links from "@/components/Links.vue";
import Catalog from "@/components/Catalog.vue";

export default {
  name: "CatalogPage",
  components: {
    Links,
    Catalog
  },
};
</script>


<style scoped>

</style>