<template>
  <div class="container">
    <Header />
    <div class="delivery">
      <BreadCrumbs :items="breadCrumbs" />
      <TitleCoffee title="Оплата і доставка" />
      <DeliveryInfo />
    </div>
    <Footer />
  </div>
</template>

<script>
import BreadCrumbs from "../components/common/BreadCrumbs";
import TitleCoffee from "../components/common/TitleCoffee";
import DeliveryInfo from "../components/DeliveryInfo";

export default {
  components: { DeliveryInfo, TitleCoffee, BreadCrumbs },
  data() {
    return {
      breadCrumbs: [
        {
          name: "Головна",
          link: "/",
        },
        {
          name: "Оплата і доставка",
          link: "/paym-and-delivery",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.container{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
