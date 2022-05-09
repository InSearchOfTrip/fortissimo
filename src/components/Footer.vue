<template>
  <footer class="footer">
    <div class="footer_made">
      <span> Made by </span>
      <a href="">
        <img src="../assets/images/footer/domino.png" alt="Domino" />
      </a>
    </div>
    <button class="footer_scroll" @click="scrollTop">
      <img src="../assets/images/footer/arrow_top.png" alt="Scroll top" />
      <span> вгору </span>
    </button>
  </footer>
</template>

<script>
export default {
  methods: {
    scrollTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>

<style scoped lang="scss">
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #1b1b1a;
  padding: 30px 80px;
  @include max-w(767){
    padding: 16px 20px;
  }
  &_made {
    display: flex;
    align-items: center;
    span {
      font-family: "Raleway";
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      line-height: 20px;
      color: #c2c2c2;
      padding-right: 8px;
    }
    img {
      display: block;
    }
  }

  &_scroll {
    display: flex;
    align-items: center;
    background: transparent;
    border: none;
    cursor: pointer;
    img {
      display: block;
      margin-right: 12px;
    }
    span {
      font-family: "Cuprum";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      color: #c2c2c2;
    }
  }
}
</style>