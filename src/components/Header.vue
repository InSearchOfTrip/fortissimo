<template>
  <div>
    <header class="header">
      <div class="container">
        <div class="header_group">
          <div
            :class="['header_burger burger', { active: showMenu }]"
            @click="swithBurger"
          >
            <div class="burger_container">
              <div class="line"></div>
            </div>
          </div>

          <a class="phone border" href="tel:+380984040430">
            <svg
              class="phone_img"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.9993 17.4712V20.7831C23.0006 21.0906 22.9375 21.3949 22.814 21.6766C22.6906 21.9583 22.5096 22.2112 22.2826 22.419C22.0556 22.6269 21.7876 22.7851 21.4958 22.8836C21.2039 22.9821 20.8947 23.0187 20.5879 22.991C17.1841 22.6219 13.9145 21.4611 11.0418 19.6019C8.36914 17.9069 6.10319 15.6455 4.40487 12.9781C2.53545 10.0981 1.37207 6.81909 1.00898 3.40675C0.981336 3.10146 1.01769 2.79378 1.11572 2.50329C1.21376 2.2128 1.37132 1.94586 1.57839 1.71947C1.78546 1.49308 2.03749 1.31221 2.31843 1.18836C2.59938 1.06451 2.90309 1.0004 3.21023 1.00011H6.52869C7.06551 0.994834 7.58594 1.18456 7.99297 1.53391C8.4 1.88326 8.66586 2.36841 8.74099 2.89892C8.88106 3.9588 9.14081 4.99946 9.5153 6.00106C9.66413 6.39619 9.69634 6.82562 9.60812 7.23847C9.51989 7.65131 9.31494 8.03026 9.01753 8.33042L7.61272 9.73245C9.18739 12.4963 11.4803 14.7847 14.2496 16.3562L15.6545 14.9542C15.9552 14.6574 16.3349 14.4528 16.7486 14.3648C17.1622 14.2767 17.5925 14.3089 17.9884 14.4574C18.992 14.8312 20.0348 15.0904 21.0967 15.2302C21.6341 15.3058 22.1248 15.576 22.4756 15.9892C22.8264 16.4024 23.0128 16.9298 22.9993 17.4712Z"
                stroke="#8D8D8C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span class="phone_text">098 404 04 30</span>
          </a>
        </div>

        <router-link to="/" tag="a" class="logo">
          <picture>
            <source
              media="(max-width: 768px)"
              srcset="../assets/images/header/logo-mobile.png"
            />
            <img src="../assets/images/header/logo.jpg" alt="Fortissimo" />
          </picture>
        </router-link>

        <div class="header_group">
          <div :class="['basket border', { active: basket.count }]">
            <svg
              class="basket_img"
              width="22"
              height="26"
              viewBox="0 0 22 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.1187 5V5.34984C18.5888 5.61682 20.5424 7.73416 20.6989 10.3787L21.2399 19.5216C21.4227 22.6117 19.0972 25.25 16.1309 25.25H5.86905C2.90284 25.25 0.577238 22.6117 0.760089 19.5216L1.30108 10.3787C1.45754 7.73431 3.41094 5.61706 5.8809 5.34989V5C5.8809 2.66586 7.67556 0.75 9.91781 0.75H12.0818C14.324 0.75 16.1187 2.66586 16.1187 5ZM14.5367 5V5.32143H7.46287V5C7.46287 3.54705 8.5747 2.39286 9.91781 2.39286H12.0818C13.4248 2.39286 14.5367 3.54705 14.5367 5ZM2.88007 10.4795C2.9977 8.49159 4.55425 6.96429 6.41004 6.96429H15.5899C17.4457 6.96429 19.0023 8.49159 19.1199 10.4795L19.6609 19.6224C19.7895 21.7958 18.1576 23.6071 16.1309 23.6071H5.86905C3.84242 23.6071 2.21047 21.7958 2.33908 19.6224L2.88007 10.4795ZM7.46287 9.32143H5.8809V10.7143C5.8809 13.0484 7.67556 14.9643 9.91781 14.9643H12.0818C14.324 14.9643 16.1187 13.0484 16.1187 10.7143V9.32143H14.5367V10.7143C14.5367 12.1672 13.4248 13.3214 12.0818 13.3214H9.91781C8.57471 13.3214 7.46287 12.1672 7.46287 10.7143V9.32143Z"
                fill="#8D8D8C"
              />
            </svg>

            <div
              :class="['basket_text', { active: basket.count }]"
              v-if="basket.count > 0"
            >
              <span class="basket_count">{{ basket.count }}</span> -
              <span style="basket_prise">{{ basket.sum }}</span>
            </div>
            <div class="basket_text" v-else>кошик</div>
          </div>
        </div>
      </div>
    </header>
    <BergerMenu :showMenu="showMenu" />
  </div>
</template>

<script>
import BergerMenu from "./BurgerMenu.vue";

export default {
  name: "Header",
  components: {
    BergerMenu,
  },
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    swithBurger() {
      this.showMenu = !this.showMenu;
    },
  },
  computed: {
    basket() {
      console.log("do");
      let productsInBasket = this.$store.getters.getBasket;
      let sumPrise = 0;
      let prodCount = 0;

      if (productsInBasket.length > 0) {
        productsInBasket.forEach((element) => {        
          prodCount += element.addedInBasket;
          let choosedTypeArr = element["priseStructure"][element.typeChoosed];
          let choosedWeightArr = choosedTypeArr["prises"] ;
         

          let resultPrise = choosedWeightArr[element.weightChoosed];

          if (typeof resultPrise === "object") {
            sumPrise += +resultPrise.new * element.addedInBasket;
          } else {
            sumPrise += (+resultPrise * element.addedInBasket);
          }
        });
      }
      return {
        count: prodCount,
        sum: sumPrise,
      };
    },
  },
};
</script>

<style scoped lang="scss">
* {
  font-family: "Cuprum";
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}
.header {
  position: relative;
  z-index: 2;
  background: #1b1b1a;
  border-bottom: 1px solid #6d6d6d;
  height: 80px;
  @include max-w(767) {
    height: 60px;
  }
  &_group {
    display: flex;
    align-items: center;
    height: 100%;
  }

  .burger {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 28px;
    cursor: pointer;
    &_container {
      position: relative;
      display: flex;
      justify-content: center;

      height: 24px;
      width: 20px;
    }
    .line {
      position: absolute;
      left: 0;
      top: 50%;
      height: 1.5px;
      width: 20px;
      background: #ffffff;
      &:before,
      &:after {
        position: absolute;
        left: 0;
        top: -7px;
        content: "";
        display: block;
        height: 1.5px;
        width: 24px;
        background: #ffffff;
        transition: transform 0.2s ease-in-out;
      }
      &:after {
        top: 7px;
        transform-origin: 0% 50%;
      }
      &:before {
        transform-origin: 0% 50%;
      }
    }
    &.active {
      .line {
        background: transparent;
        &:before {
          transform: rotate(45deg);
          left: 1px;
          top: -10px;
        }
        &:after {
          transform: rotate(-45deg);
        }
      }
    }
  }

  .phone {
    display: flex;
    align-items: center;

    height: 100%;
    padding: 0 24px;

    &_img {
    }

    &_text {
      font-family: "Raleway";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 18px;

      letter-spacing: 0.02em;
      text-transform: uppercase;
      color: #8d8d8c;

      margin-left: 13px;

      @include max-w(768) {
        display: none;
      }
    }

    &:hover {
      .phone {
        &_img {
          path {
            stroke: #ffffff;
            transition: stroke 0.2s ease-in-out;
          }
        }
        &_text {
          color: #ffffff;
          transition: color 0.2s ease-in-out;
        }
      }
    }
  }
}

.basket {
  display: flex;
  align-items: center;
  padding: 0 30px;
  height: 100%;
  cursor: pointer;

  &_img {
    margin-right: 13px;
  }

  &_text {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;

    text-transform: uppercase;
    color: #8d8d8c;
  }

  &:hover {
    .basket {
      &_img {
        path {
          fill: #ffffff;
          transition: fill 0.2s ease-in-out;
        }
      }
      &_text {
        color: #ffffff;
        transition: color 0.2s ease-in-out;
      }
    }
  }

  &.active {
    .basket {
      &_img {
        path {
          fill: #ffffff;
          transition: fill 0.2s ease-in-out;
        }
      }
      &_count{
        color: #FFFFFF
      }
    }
  }
}

.border {
  border-left: 1px solid #494948;
  border-right: 1px solid #494948;
}
</style>
