<template>
  <div class="oneProduct">
    <div class="oneProduct_wrap">
      <div class="oneProduct_container">
        <div class="oneProduct_main">
            
        </div>

        <div class="oneProduct_img">

        </div>

        <div class="oneProduct_information">

        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "OneProduct",
  data() {
    return {};
  },
  beforeCreate(){
      console.log(this.$route.params.id);
  }
};
</script>


<style lang="scss" scoped>
</style>