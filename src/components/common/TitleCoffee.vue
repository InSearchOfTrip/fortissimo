<template>
  <div v-if="title" class="title-coffee">
    <div class="container-wrapper">
      <div class="body">
        <h1 >{{ title }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    }
  }
}
</script>

<style scoped lang="scss">
.title-coffee {
  margin: 40px 0 60px;

  @include max-w(767) {
    margin: 30px 0 40px;
  }

  .body {
    display: flex;
    justify-content: center;

    h1 {
      display: inline-block;
      position: relative;
      font-family: 'Cuprum';
      font-weight: 400;
      font-size: 46px;
      line-height: 54px;
      text-align: center;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      color: #1B1B1A;
      padding: 0 55px;

      @include max-w(767) {
        font-size: 32px;
        line-height: 36px;
        padding: 0 45px;
      }

      @include max-w(500) {
        padding: 0 40px;
      }

      &::before,
      &::after {
        content: '';
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M29.9959 16.7099C28.6345 26.4193 15.1768 26.2498 15.1768 26.2498C3.37687 26.1274 0.649112 18.8495 1.39507 16.7994C2.12336 14.7995 5.64492 13.369 13.3269 15.7487C21.0094 18.1295 27.2049 16.3013 28.1517 15.8875C29.0979 15.4747 30.0712 15.663 29.9959 16.7099Z' fill='%231B1B1A'/%3E%3Cpath d='M0.00410668 13.2907C1.36623 3.58078 14.8241 3.75061 14.8241 3.75061C26.6252 3.87341 29.3522 11.1515 28.606 13.2013C27.8767 15.201 24.3558 16.6311 16.6738 14.2513C8.99229 11.8704 2.79651 13.6988 1.84937 14.1115C0.902931 14.5258 -0.071225 14.3376 0.00410668 13.2907Z' fill='%231B1B1A'/%3E%3C/svg%3E%0A");
        background-repeat: no-repeat;
        background-position: center;
        width: 30px;
        height: 30px;
      }

      &::before {
        left: 0;
      }

      &::after {
        right: 0;
      }
    }
  }
}
</style>
