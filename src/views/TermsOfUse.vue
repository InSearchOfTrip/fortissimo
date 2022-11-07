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
          name: "Умови використання",
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
          console.log();
          if (
            item.link.split("/")[4] ===
            this.$router.history.current.path.slice(1)
          ) {
            page = item;
          }
        }

        return page;
      }
    },
  },

};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
