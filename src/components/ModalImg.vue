<template>
  <div class="modalImg"  @click="$emit('closeModal')">
    <div class="modalImg_overlay"></div>
    <div class="modalImg_main">
      <img :src="getImg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalImg",
  props: ["product" , "isShowModal"],

  computed: {
    getImg() {
      return `${this.$store.getters.getServerLink}/storage/${this.product[0].img}`;
    },
  },
};
</script>

<style scoped lang="scss">
.modalImg {
  &_overlay {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.85);
    z-index: 3;
  }
  &_main {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 5;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    img {
      display: block;
      max-height: 100vh;
      max-width: 100%;
      object-fit: cover;     
    }
  }
}
</style>
