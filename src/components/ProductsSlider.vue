<template>
  <div class="productsSlider">
    <div class="productsSlider_weapper">
      <div
        class="productsSlider_item slider-item"
        v-for="(el, i) in products"
        :key="el.id"
      >
        <div class="slider-item_img">
          <img :src="getImg(`${el.img}`)" alt="" />
        </div>
        <div class="slider-item_info item-info">
          <div class="item-info_title">
            <h4 v-text="el.title"></h4>
          </div>
          <div class="item-info_prise prise">
            <span class="prise_int" v-text="el.prise_int"></span>
            <span>&nbsp;</span>
            <span class="prise_text" v-text="el.prise_text"></span>
          </div>
          <div class="item-info_propose propose">
            <p class="propose_text">
              Важко обрати каву? – Спробуйте кілька варіантів та оберіть для
              себе найкращий смак. В набір входить:
            </p>
            <nav class="propose_links propose-links">
              <router-link
                class="propose-links_item"
                tag="a"
                :to="el2.href"
                v-for="(el2, i2) in propose "
                :key="i2"
                 v-text="el2.name">
              </router-link>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "productsSlider",
  data() {
    return {
      products: [],
      propose: [],
    };
  },
  methods: {
    getImg(rout) {
      return require(`../assets/images/${rout}`);
    },
  },
  mounted() {
    this.products = this.$store.getters.getProducts;
    this.propose = this.$store.getters.getPropose;
  },
};
</script>

<style scoped lang="scss">
.productsSlider {
  background: #1b1b1a;

  &_wrapper {
  }

  .slider-item {
    display: flex;
    padding: 7.2% 0;
    &_img {
      width: 54%;
      img {
        display: block;
        width: 85%;
        height: auto;
        object-fit: cover;
        margin: 0 auto;
      }
    }

    .item-info {
      max-width: 567px;
      &_title {
        font-family: "Cuprum";
        font-style: normal;
        font-weight: 400;
        font-size: 60px;
        line-height: 69px;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: #ffffff;

        margin-bottom: 16px;
      }
      &_prise {
        font-family: "Cuprum";
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 36px;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        margin-bottom: 40px;
      }
      .prise {
        &_int {
          color: #f2000e;
        }
        &_text {
          color: #c2c2c2;
        }
      }
    }

    .propose {
      font-family: "Raleway";
      font-style: normal;
      font-weight: 300;
      font-size: 18px;
      line-height: 22px;
      color: #ffffff;
      opacity: 0.8;
      &_text{
        margin-bottom: 24px;
      }
      &-links{
        &_item{
          display: block;
          font-family: 'Cuprum';
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 22px;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          color: #FFFFFF;
          margin-bottom: 16px;
        }
      }
    }
  }
}
</style>