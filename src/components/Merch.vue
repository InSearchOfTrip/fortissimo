<template>
  <section class="merch" ref="merch">
    <div class="merch_wrapper">
      <div class="container">
        <div class="merch_info merch-info">
          <h5 class="merch-info_title">брендова продукція</h5>
          <div class="merch-info_text">
            Доповність свій образ стильною сумкою нашого бренду! Або ж придбайте
            термокухоль, щоб кава зігрівала довше.<br />
            <br />
            А також є ще багато крутих речей:
          </div>
          <nav class="merch-info_links merch-links">
            <router-link tag="a" to="/" class="merch-links_item">
              склянки та термокухлі
            </router-link>
            <router-link tag="a" to="/" class="merch-links_item">
              сумки шопери
            </router-link>
            <router-link tag="a" to="/" class="merch-links_item">
              футболки та худі
            </router-link>
            <router-link tag="a" to="/" class="merch-links_item">
              канцелярія
            </router-link>
          </nav>

          <div class="merch-info_details merch-details">
            <router-link tag="a" to="/" class="merch-details_link">
              детальніше
            </router-link>
          </div>
        </div>

        <div class="merch_stuff merch-stuff">
          <div class="merch-stuff_group">
            <div class="merch-stuff_img-wrap" ref="flyLeft">
              <img
                class="merch-stuff_img left"
                src="../assets/images/merch/merch_1.png"
                alt=""
              />
            </div>

            <div class="merch-stuff_img-wrap" ref="flyRight">
              <img
                class="merch-stuff_img right"
                src="../assets/images/merch/merch_2.png"
                alt=""
              />
            </div>
          </div>

          <div class="merch-stuff_mob">
              <img
                class="merch-stuff_all"
                src="../assets/images/merch/allMerch.png"
                alt=""
              />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Merch",
  data(){
    return{
      screenWidth: 0,
    }
  },
  methods: {
    fly(el, offset, dir) {
      let direction = dir === "left" ? "-" : "";
      el.style.transform = `translate3d(${direction}${offset}px , ${direction}${offset}px , 0)`;
    },
    setAnimation() {
      let left = this.$refs.flyLeft;
      let right = this.$refs.flyRight;

      let merchHeight = this.$refs.merch.offsetHeight;
      let merchOffsetTop = this.$refs.merch.offsetTop;

      window.addEventListener("scroll", (e) => {
        if (
          window.pageYOffset + window.screen.height >= merchOffsetTop &&
          window.pageYOffset < merchOffsetTop + merchHeight
        ) {
          let scrollAfterEvent =
            window.pageYOffset + window.screen.height - merchOffsetTop;

          this.fly(left, scrollAfterEvent / 40, "left");
          this.fly(right, scrollAfterEvent / 40, "right");
        }
      });
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.setAnimation();
    });
  },
};
</script>

<style scoped lang="scss">
$rout: "../assets/images/merch/";
.merch {
  padding: 202px 0 192px;
  background: #1b1b1a;

  background-image: url("../assets/images/merch/beans.png");
  background-repeat: no-repeat;
  background-position: 87.5% 51%;
  background-size: 36%;
  overflow: hidden;

  @include max-w(1399) {
    padding: 150px 0 140px;
  }
  @include max-w(991) {
    padding: 100px 0;
  }
  @include max-w(767) {
    background-image: none;
  }
  &_wrapper {
    max-width: 1888px;
    margin: 0 auto;
    padding: 0 16px;
  }

  .container {
    display: flex;
    justify-content: space-between;
    @include max-w(767) {
      display: block;
    }
  }

  &-info {
    max-width: 578px;
    margin-left: 11.3%;
    @include max-w(1199) {
      margin-left: 40px;
    }
    @include max-w(991) {
      margin-left: 20px;
      max-width: 300px;
    }
    @include max-w(767) {
      max-width: none;
      margin-left: 0;
    }
    &_title {
      font-family: "Cuprum";
      font-style: normal;
      font-weight: 400;
      font-size: 46px;
      line-height: 54px;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      color: #ffffff;

      margin-bottom: 16px;

      @include max-w(991) {
        font-size: 32px;
        line-height: 36px;
      }
    }

    &_text {
      font-family: "Raleway";
      font-style: normal;
      font-weight: 300;
      font-size: 18px;
      line-height: 22px;
      color: #ffffff;
      opacity: 0.8;
      margin-bottom: 40px;
      max-width: 510px;
      @include max-w(991) {
        margin-bottom: 30px;
      }
    }
    &_links {
      margin-bottom: 39px;
      @include max-w(991) {
        margin-bottom: 30px;
      }
    }

    .merch-links {
      &_item {
        position: relative;
        display: block;
        font-family: "Cuprum";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 20px;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: #ffffff;
        padding-left: 36px;
        margin-bottom: 16px;
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

    .merch-details {
      &_link {
        display: inline-block;
        font-family: "Cuprum";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: #ffffff;

        padding: 15px 30px;
        border: 2px solid #f2000e;

        @include max-w(767) {
          padding: 15px 30px;
          margin-bottom: 80px;
        }
      }
    }
  }

  &_stuff {
    width: 50%;
    @include max-w(767) {
      width: auto;
    }
  }

  &-stuff {
    position: relative;
    &_group {
      width: 100%;
      height: 100%;
      @include max-w(767) {
        display: none;
      }
    }

    &_img {
      position: absolute;
      transform: translate(-50%, -50%);
      @include max-w(767) {
        position: static;
      }
      &-wrap {
        position: absolute;
        width: 100%;
        height: 100%;
        transition: transform 0.1s linear;
        @include max-w(767) {
          position: static;
        }
      }

      &.left {
        left: 39.5%;
        top: 49%;
        width: 108%;
        @include max-w(1199) {
          width: 129%;
        }
        @include max-w(767) {
          width: auto;
        }
      }

      &.right {
        left: 71%;
        top: 76%;
        width: 70.5%;
        @include max-w(767) {
          width: auto;
        }
      }
    }

    &_all{
      display: none;
      margin: 0 auto;
      max-width: 100%;
      object-fit: cover;
      height: auto;
       @include max-w(767) {
        display: block;
       
      }
    }
  }
}
</style>

  