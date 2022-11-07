<template>
  <div>
    <Header />
    <BreadCrumbs :items="breadCrumbs" />
    <div class="productPage">
      <OneProduct @breadCrumbs="setBreadCrumbs" />
    </div>
    <Footer />
  </div>
</template>

<script>
import OneProduct from "@/components/OneProduct.vue";
import BreadCrumbs from "../components/common/BreadCrumbs";

export default {
  name: "ProductPage",
  components: {
    OneProduct,
    BreadCrumbs,
  },
  data() {
    return {
      breadCrumbs: [
        {
          name: "Головна",
          link: "/",
        },
        {
          name: "",
          link: "catalog",
        },
        {
          name: "",
          link: "catalog",
        },
      ],
    };
  },
  methods: {
    setBreadCrumbs(val) {   
      this.breadCrumbs[1].name = val.category;
      this.breadCrumbs[1].link = 'catalog:' + val.category_link;
      this.breadCrumbs[2].name = val.product;
    },
  },
};
</script>


<style scoped>
</style>