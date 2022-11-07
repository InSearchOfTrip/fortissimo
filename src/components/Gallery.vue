<template>
  <section class="gallery">
    <div class="columns">
      <div v-for="item of getImages()" class="image">
        <img :src="`./storage/${item}`" alt="">
      </div>
    </div>

    <div class="mobile">
      <div class="container-wrapper">
        <VueSlickCarousel
          ref="carousel"
          @beforeChange="changeSlide"
          v-bind="{
            arrows: false,
            fade: true,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: false,
          }"
        >
          <div v-for="item of getImages()" class="image">
            <img :src="`./storage/${item}`" alt="">
          </div>
        </VueSlickCarousel>
        <div class="bottom">
          <div class="counter">
            <span class="current" v-html="slideActive"></span>
            /
            <span v-html="getImages().length"></span>
          </div>
          <div class="prev-btn btn" @click="prev">
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
          </div>
          <div class="next-btn btn" @click="next">
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
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'

export default {
  components: { VueSlickCarousel },
  data() {
    return {
      slideActive: 1,
    };
  },
  methods: {
    getImages() {
      let imagesObj = JSON.parse(this.$store.getters.getGallery[0].images)
      if (imagesObj) {
        return imagesObj
      }
    },
    prev() {
      this.$refs.carousel.prev();
    },
    next() {
      this.$refs.carousel.next();
    },
    changeSlide(prev, next) {
      this.slideActive = next + 1;
    },
  },
  beforeCreate() {
    this.$store.dispatch('loadGallery');
  }
}
</script>

<style scoped lang="scss">
.gallery {
  background: #1B1B1A;

  .columns {
    display: flex;

    @include max-w(767) {
      display: none;
    }

    .image {
      position: relative;
      height: 720px;
      width: 100%;

      @include max-w(1000) {
        height: 600px;
      }

      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .mobile {
    display: none;

    .container-wrapper {
      padding: 0;
    }

    @include max-w(767) {
      display: block;
    }

    .image {
      position: relative;
      height: 560px;
      width: 100%;

      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .bottom {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 50px;

      .counter {
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: #C2C2C2;
        margin-right: 30px;

        .current {
          color: #fff;
        }
      }

      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 52px;
        height: 56px;
        border: 1px solid #666666;

        &.next-btn {
          border-left: none;

          svg {
            transform: rotate(-180deg);
          }
        }
      }
    }
  }
}
</style>
