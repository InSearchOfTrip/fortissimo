<template>
  <div class="text-privacy">
    <div class="container-wrapper narrow">
      <div class="text" v-html="text"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    }
  }
}
</script>

<style scoped lang="scss">
.text-privacy {
  margin: 40px 0 120px;

  ::v-deep .text * {
    all: revert;
  }

  @include max-w(767) {
    margin: 40px 0 80px;
  }

  ::v-deep .text {
    h3 {
      font-family: 'Cuprum';
      font-weight: 400;
      font-size: 24px;
      line-height: 28px;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      color: #1B1B1A;
      margin-bottom: 20px;

      &:not(:first-child) {
        margin-top: 40px;
      }
    }

    p {
      font-family: 'Raleway';
      font-weight: 300;
      font-size: 18px;
      line-height: 22px;
      color: #1B1B1A;

      @include max-w(767) {
        font-size: 20px;
        line-height: 26px;
      }
    }
  }
}
</style>
