<template>
  <div class="container">
    <Header />
    <div class="privacy">
      <BreadCrumbs :items="breadCrumbs" />
      <TitleCoffee :title="getPage().title" />
      <TextPrivacy :text="getPage().description_first" />
    </div>
    <Footer />
  </div>
</template>

<script>
import BreadCrumbs from "../components/common/BreadCrumbs";
import TitleCoffee from "../components/common/TitleCoffee";
import TextPrivacy from "../components/TextPrivacy";

export default {
  components: { TextPrivacy, TitleCoffee, BreadCrumbs },
  data() {
    return {
      breadCrumbs: [
        {
          name: "Головна",
          link: "/",
        },
        {
          name: "Політика конфіденційності",
          link: "privacy",
        },
      ],
    };
  },
  methods: {
    getPage() {
      let pages = this.$store.getters.getPages;
      if (pages) {
        let page = null;
        for (let item of pages) {
          if (item.id === 6) {
            page = item;
          }
        }
        console.log(page);
        return page;
    
      }
    },
  },

};
</script>

<style scoped lang="scss">
.container{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
