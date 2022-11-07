<template>
  <div class="container">
    <Header />
    <div class="contacts">
      <BreadCrumbs :items="breadCrumbs" />
      <TitleCoffee :title="getPage().title" />
      <ContactBlock />
      <div class="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d632.8593981177113!2d26.250634255371168!3d50.618987269116396!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472f13520b4e8bb7%3A0x40a6a9e7626f702b!2sFortissimo!5e0!3m2!1sru!2sus!4v1653041185621!5m2!1sru!2sus"
          width="100%"
          height="500"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import BreadCrumbs from "../components/common/BreadCrumbs";
import TitleCoffee from "../components/common/TitleCoffee";
import ContactBlock from "../components/ContactBlock";

export default {
  components: { ContactBlock, TitleCoffee, BreadCrumbs },
  data() {
    return {
      breadCrumbs: [
        {
          name: "Головна",
          link: "/",
        },
        {
          name: "Контакти",
          link: "/contacts",
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
          if (item.id === 8) {
            page = item;
          }
        }
        return page;
      }
    },
  },

};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.contacts {
  .map {
    margin: 160px 0 20px;

    @include max-w(900) {
      margin-top: 100px;
    }
  }
}
</style>
