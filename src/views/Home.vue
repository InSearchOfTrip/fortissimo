<template>
  <div>
    <Header />
    <div class="home">
      <ProductsSlider />
      <div class="home_products-component">
        <Products
          :setting="{
            title: '100% арабіка',
            text: 'Має багатий, насичений смак та аромат, містить менше кофеїну ніж у робусті, проте має більше солоду у своєму складі',
            showMoreBtn: true,
          }"
          :slider_setting="{
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
            infinite: false,
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
                  centerMode: true,
                  centerPadding: '30px',
                },
              },
            ],
          }"
        />
      </div>
      <Gallery />
      <BlockText :text="getText()" />

      <Merch />
    </div>
    <Footer />
  </div>
</template>

<script>
import ProductsSlider from "@/components/ProductsSlider.vue";
import Products from "@/components/Products.vue";
import Merch from "@/components/Merch.vue";
import Gallery from "../components/Gallery";
import BlockText from "../components/BlockText";

export default {
  name: "Home",
  components: {
    BlockText,
    Gallery,
    ProductsSlider,
    Products,
    Merch,
  },
  data() {
    return {
      images: null,
    };
  },
  methods: {
    getText() {
      let text = this.$store.getters.getBlockText[0].text;
      if (text) {
        return text;
      }
    },
  },
  beforeCreate(){
    this.$store.dispatch("loadBlockText");
  }

};
</script>

<style lang="scss" scoped>
.home {
  &_products-component {
    padding: 146px 0;
    @include max-w(1199) {
      padding: 100px 0;
    }
  }
}
</style>
