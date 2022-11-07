<template>
  <section class="productsSlider">
    <div class="productsSlider_wrapper">
      <div class="slider-item_slider">     
        <VueSlickCarousel
          ref="carousel"
          @beforeChange="bfChange"
          v-bind="{
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            infinite: true,
            autoplay: true,
            adaptiveHeight: false,
            fade: true,
          }"
        >
          <div
            :class="['slider-item_container', { topIndex: changeIndex(i) }]"
            v-for="(el, i) in getSliders"
            :key="el.id"
          >
            <div class="productsSlider_item slider-item" ref="sliderItem">
              <div class="slider-item_img">
                <img :src="getImg(`${el.image}`)" alt="" />
              </div>
              <div class="slider-item_info item-info">
                <div class="item-info_title">
                  <h4 v-html="el.title"></h4>
                </div>
                <div class="item-info_prise prise">
                  <span class="prise_int">{{ el.red_subtitle }}</span>
                  <span>&nbsp;</span>
                  <span class="prise_text">/ {{ el.black_subtitle}}</span>
                </div>
                <div class="item-info_propose propose">
                  <p class="propose_text" v-html="el.description">
                    Важко обрати каву? – Спробуйте кілька варіантів та оберіть
                    для себе найкращий смак. В набір входить:
                  </p>
                  <nav class="propose_links propose-links">
                    <router-link
                      class="propose-links_item"
                      tag="a"
                      :to="`/productPage:${el2.id}`"
                      v-for="(el2, i2) in el.products"
                      :key="i2"
                      v-html="el2.meta_title"
                    >
                    </router-link>
                  </nav>

                  <div class="control">
                    <router-link
                      class="control_detail"
                      tag="a"
                      :to="el.button_link"
                      v-text="el.button_text"
                    >                      
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
                          v-html="getSliders.length"
                        ></span>
                      </div>
                      <div class="control-slides_group">
                        <button class="control-slides_prev" @click="prev">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <g clip-path="url(#clip0_211_600)">
                              <path
                                d="M0.22528 12.8042C0.568878 13.1766 1.11035 13.4496 1.51858 13.7336C2.42116 14.362 8.49003 18.5699 8.2635 18.2961C9.00877 19.1958 10.27 17.8965 9.5308 17.0028C9.21931 16.6268 8.60919 16.3611 8.2149 16.104C7.29669 15.5048 3.9192 13.3138 3.14583 12.8182C4.27759 12.8954 10.1627 13.006 11.9727 13.0451C15.5901 13.1231 19.2875 13.4319 22.9011 13.2422C24.365 13.165 24.3675 10.9945 22.9011 10.9175C19.2877 10.7275 15.5901 11.0364 11.9727 11.1146C10.226 11.1524 4.15194 11.2533 2.86686 11.3626C3.64213 10.6447 4.42453 9.93612 5.20807 9.2275C6.35816 8.18958 7.99633 7.19114 8.79419 5.84076C8.92491 5.61993 8.70845 5.34369 8.46918 5.40989C6.93811 5.82846 5.48727 7.30565 4.24635 8.27754C2.86796 9.35791 1.5392 10.5088 0.225405 11.6718C-0.100877 11.9621 -0.0482042 12.5077 0.22528 12.8042Z"
                                fill="white"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_211_600">
                                <rect width="24" height="24" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </button>

                        <button class="control-slides_next" @click="next">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <g clip-path="url(#clip0_211_600)">
                              <path
                                d="M0.22528 12.8042C0.568878 13.1766 1.11035 13.4496 1.51858 13.7336C2.42116 14.362 8.49003 18.5699 8.2635 18.2961C9.00877 19.1958 10.27 17.8965 9.5308 17.0028C9.21931 16.6268 8.60919 16.3611 8.2149 16.104C7.29669 15.5048 3.9192 13.3138 3.14583 12.8182C4.27759 12.8954 10.1627 13.006 11.9727 13.0451C15.5901 13.1231 19.2875 13.4319 22.9011 13.2422C24.365 13.165 24.3675 10.9945 22.9011 10.9175C19.2877 10.7275 15.5901 11.0364 11.9727 11.1146C10.226 11.1524 4.15194 11.2533 2.86686 11.3626C3.64213 10.6447 4.42453 9.93612 5.20807 9.2275C6.35816 8.18958 7.99633 7.19114 8.79419 5.84076C8.92491 5.61993 8.70845 5.34369 8.46918 5.40989C6.93811 5.82846 5.48727 7.30565 4.24635 8.27754C2.86796 9.35791 1.5392 10.5088 0.225405 11.6718C-0.100877 11.9621 -0.0482042 12.5077 0.22528 12.8042Z"
                                fill="white"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_211_600">
                                <rect width="24" height="24" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </VueSlickCarousel>
      </div>
    </div>
  </section>
</template>


<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";

export default {
  name: "ProductsSlider",
  components: { VueSlickCarousel },
  data() {
    return {
      slideActive: 1,
      products: [],
      propose: [],
    };
  },
  methods: {
    getImg(rout) {
      return`./storage/${rout}`;
    },
    isShow(i) {
      return this.slideActive === i;
    },
    prev() {
      this.$refs.carousel.prev();
    },
    next() {
      this.$refs.carousel.next();
    },
    bfChange(prev, next) {
      this.slideActive = next + 1;
    },
    changeIndex(i) {
      return i + 1 === this.slideActive;
    },
  },
  computed:{
    getSliders(){
      let res = this.$store.getters.getSliders;
      console.log(res[0].slides);
      return res[0].slides;
    }
  }

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
    z-index: 1;

    @include max-w(767) {
      display: block;
      padding: 50px 0 100px;
    }

    &_container {
      position: relative;
      z-index: -2;
      &.topIndex {
        z-index: 1;
      }
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
          max-height: 50vh;
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

        &:hover{
          background: #F2000E;
        }
        &:active{
          background: #D9000D;
        }

        @include max-w(767) {
          padding: 15px 30px;
        }

        @include max-w(500){
          padding: 15px 5px;
          font-size: 16px;
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
          display: flex;
          justify-content: center;
          align-items: center;
          width: 52px;
          height: 56px;
          background: transparent;
          border: 1px solid #666666;
          cursor: pointer;
          &:hover {
            border: 1px solid #f2000e;
          }
          &:active{
            svg{
              path{
                fill: #f2000e;
              }
            }
          }
        }
        &_next {
          border-left: none;
          svg {
            transform: rotate(180deg);
          }
        }

        &_counter {
          margin-right: 30px;
          margin-left: 10px;
          flex-shrink: 0;
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