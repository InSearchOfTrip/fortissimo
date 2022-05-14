<template>
  <section class="productsSlider">
    <div class="productsSlider_wrapper">
      <div
        class="productsSlider_item slider-item"
        ref="sliderItem"
        v-for="(el, i) in products"
        :key="el.id"
        v-show="isShow(i + 1)"
      >
        <div class="slider-item_img">
          <img :src="getImg(`${el.img}`)" alt="" />
        </div>
        <div class="slider-item_info item-info">
          <div class="item-info_title">
            <h4 v-html="el.title"></h4>
          </div>
          <div class="item-info_prise prise">
            <span class="prise_int" >{{el.prise_int}} грн</span>
            <span>&nbsp;</span>
            <span class="prise_text" v-html="el.prise_text"></span>
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
                v-for="(el2, i2) in propose"
                :key="i2"
                v-html="el2.name"
              >
              </router-link>
            </nav>

            <div class="control">
              <router-link class="control_detail" tag="a" to="/details">
                детальніше
              </router-link>

              <div class="control_slides control-slides">
                <div class="control-slides_counter slides-counter">
                  <span
                    class="slides-counter_current"
                    v-html="slideActive"
                  ></span
                  >/
                  <span
                    class="slides-counter_max"
                    v-html="products.length"
                  ></span>
                </div>
                <div class="control-slides_group">
                  <button class="control-slides_prev" @click="prevSlide">
                    <img
                      src="../assets/images/productsSlide/arrow.png"
                      alt=""
                    />
                  </button>

                  <button class="control-slides_next" @click="nextSlide">
                    <img
                      src="../assets/images/productsSlide/arrow.png"
                      alt=""
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  name: "ProductsSlider",
  data() {
    return {
      slideActive: 1,
      products: [],
      propose: [],
    };
  },
  methods: {
    getImg(rout) {
      return require(`../assets/images/${rout}`);
    },
    isShow(i) {
      return this.slideActive === i;
    },
    nextSlide() {
      if (this.slideActive + 1 <= this.products.length) {
        this.slideActive++;
      } else {
        this.slideActive = 1;
      }
    },
    prevSlide() {
      if (this.slideActive - 1 > 0) {
        this.slideActive--;
      } else {
        this.slideActive = this.products.length;
      }
    },
    slideItemHeight() {
      this.$nextTick(() => {
        let maxHeight = 0;
        this.$refs["sliderItem"].forEach(function (el) {   
        });
      });
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
  $rout: "../assets/images/productsSlide/";

  background-color: #1b1b1a;
  background-image: url($rout + "beans.png");
  background-repeat: no-repeat;
  background-position: 28% 53%;
  background-size: 36%;
  @include max-w(1299) {
    background-position: 4% 37%;
    background-size: 51%;
  }
  @include max-w(767) {
    background-position: 39% 3%;
    background-size: 90%;
  }

  &_wrapper {
    max-width: 1888px;
    margin: 0 auto;
    padding: 0 16px;
    @include max-w(767) {
      padding: 0;
    }
  }

  .slider-item {
    display: flex;
    padding: 7.2% 0;

    @include max-w(767) {
      display: block;
      padding: 50px 0 100px;
    }

    &_img {
      position: relative;
      width: 53.5%;
      padding-bottom: 34%;

      @include max-w(991) {
      }

      @include max-w(767) {
        position: static;
        width: 100%;
        padding-bottom: 67px;
      }

      img {
        position: absolute;
        left: 0;
        top: 0;
        width: 98.5%;
        height: 100%;

        display: block;

        object-fit: contain;
        margin: 0 auto;
        @include max-w(1199) {
          width: 100%;
        }

        @include max-w(767) {
          position: static;
        }
      }
    }

    &_info {
      padding: 2.4% 0 0 5.3%;
      width: 46.5%;
      @include max-w(1399) {
        padding: 17px 0 0 16px;
      }
      @include max-w(767) {
        padding: 0 16px;
        width: auto;
      }
    }

    .item-info {
      max-width: 567px;

      @include max-w(767) {
        max-width: none;
      }
      &_title {
        font-family: "Cuprum";
        font-style: normal;
        font-weight: 400;
        font-size: 60px;
        line-height: 113%;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: #ffffff;

        margin-bottom: 16px;
        @include max-w(1399) {
          font-size: 40px;
          margin-bottom: 12px;
        }
        @include max-w(991) {
          font-size: 32px;
        }
        @include max-w(767) {
          margin-bottom: 9px;
        }
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

        @include max-w(1399) {
          font-size: 28px;
          margin-bottom: 30px;
        }
        @include max-w(767) {
          font-size: 24.5px;
          margin-bottom: 24px;
        }
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

      &_text {
        margin-bottom: 24px;
        max-width: 490px;
        opacity: 0.8;
      }
      &-links {
        padding-bottom: 44px;
        margin-bottom: 40px;
        border-bottom: 1px solid #666666;
        @include max-w(767) {
          padding-bottom: 23px;
          margin-bottom: 30px;
        }

        &_item {
          position: relative;
          display: block;
          font-family: "Cuprum";
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 22px;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          color: #ffffff;
          margin-bottom: 16px;
          padding-left: 36px;
          &::before {
            position: absolute;
            left: 0;
            top: 0;
            content: "";
            display: block;
            width: 20px;
            height: 16px;
            background-image: url($rout + "bean.png");
            background-size: cover;
          }
        }
      }
    }

    .control {
      display: flex;
      align-items: center;
      justify-content: space-between;
      &_detail {
        font-family: "Cuprum";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: #ffffff;

        padding: 17px 32px;
        border: 2px solid #f2000e;

        @include max-w(767) {
          padding: 15px 30px;
        }
      }
      &-slides {
        display: flex;
        align-items: center;

        font-family: "Cuprum";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        letter-spacing: 0.02em;
        text-transform: uppercase;

        &_group {
          display: flex;
        }

        &_prev,
        &_next {
          display: block;
          width: 52px;
          height: 56px;
          background: transparent;
          border: 1px solid #666666;
          cursor: pointer;
        }
        &_next {
          border-left: none;
          img {
            transform: rotate(180deg);
          }
        }

        &_counter {
          margin-right: 30px;
          @include max-w(991) {
            margin-right: 17px;
          }
        }
      }

      .slides-counter {
        &_current {
          padding-right: 10px;
          color: #ffffff;
        }
        &_max {
          color: #c2c2c2;
        }
      }
    }
  }
}
</style>