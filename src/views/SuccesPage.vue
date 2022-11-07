<template>
  <div>
    <Header />
    <div class="about">
      <AboutSlider />
      <BlockText
        white
        text="наша Дружня команда Запрошує спробувати авторські кавові напої у закладі"
      />
      <AboutBlock />
    </div>
    <Footer />
  </div>
</template>

<script>
import BreadCrumbs from "../components/common/BreadCrumbs";
import AboutSlider from "../components/AboutSlider";
import BlockText from "../components/BlockText";
import AboutBlock from "../components/AboutBlock";

export default {
  components: { AboutBlock, BlockText, AboutSlider, BreadCrumbs },
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.about {
  position: relative;
}
</style>
