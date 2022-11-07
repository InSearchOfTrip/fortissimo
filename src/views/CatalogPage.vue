<template>
  <div>
    <Header />
    <div class="catalog">
      <BreadCrumbs :items="breadCrumbs" />
      <Links />
      <Sorter @setSortedOptions="setOptions" />
      <Catalog
        :setSortOptions="sortedOptions"
        :sliderSettings="{
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: false,
          swipe: false,
          dots: true,
          arrows: false,
          adaptiveHeight: false,
          responsive: [
            {
              breakpoint: 1600,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: false,
              },
            },
            {
              breakpoint: 1199,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: false,
              },
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false,
                rows: 8,
              },
            },
          ],
        }"
      />
    </div>
    <Footer />
  </div>
</template>

<script>
import Vue from "vue";

import Links from "@/components/Links.vue";
import Sorter from "@/components/Sorter.vue";
import Catalog from "@/components/Catalog.vue";
import BreadCrumbs from "../components/common/BreadCrumbs";

export default {
  name: "CatalogPage",
  components: {
    Links,
    Catalog,
    BreadCrumbs,
    Sorter,
  },
  data() {
    return {
      breadCrumbs: [
        {
          name: "Головна",
          link: "/",
        },
        {
          name: "Каталог",
          link: "catalog",
        },
      ],
      sortedOptions: {
        weight: [],
        type: [],
        sortType: "По замовчуванню",
      },
      sortedProducts: [],
    };
  },
  computed: {
    // getProducts() {
    //   let result;
    //   if (this.$route.params.slug.slice(1) === "vsi-tovari") {
    //     result = this.$store.getters.getAllProducts;
    //   } else {
    //     console.log("else");
    //     this.$store.getters.getCategories.forEach((el) => {
    //       if (el.slug === this.$route.params.slug.slice(1)) {
    //         result = el.products;
    //       }
    //     });
    //   }
    //   // result = this.sortedMain(this.sortedOptions, result);
    //   console.log(result);
    //    console.log("result");
    //   return result;
    // },
  },
  methods: {
    setOptions(val) {
      if (val) {
        this.sortedOptions = val;
      }
    },
    getSorterProducts() {
      if (this.products.length === 0) {
        console.log("true");
        this.products = this.$store.getters.getAllProducts;
      }

      return this.products;
    },
  }
};
</script>


<style scoped>
</style>