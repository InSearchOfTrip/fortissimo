<template>
  <div class="container">
    <Header />
    <div class="orderPage">
      <BreadCrumbs :items="breadCrumbs" />
      <Order />
    </div>
    <Footer />
  </div>
</template>

<script>
import Order from "@/components/Order.vue";
import BreadCrumbs from "../components/common/BreadCrumbs";

export default {
  name: "OrderPage",
  components: {
    Order,
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
          name: "Оформлення замовлення",
          link: "order",
        },
      ],
    };
  },
};
</script>


<style scoped>
</style>