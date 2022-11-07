<template>
  <RouterLink v-if="isLink" :to="link" class="base-button">
    {{ text }}
  </RouterLink>
  <button v-else class="base-button">
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    isLink: {
      type: Boolean,
      default: false,
    },
    link: {
      type: String,
      default: "/",
    },
    text: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.base-button {
  font-family: "Cuprum";
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #1b1b1a;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 19px 32px 17px;
  background: transparent;
  border: 2px solid #f2000e;
  cursor: pointer;
  &:hover {
    background: #f2000e;
    color: #FFFFFF;
  }
  &:active {
    background: #d9000d;
  }
}
</style>
