<template>
  <div class="bread-crumbs">
    <div class="container-wrapper large">
      <div class="body">
        <template v-for="item of items">
          <template v-if="item !== items[items.length - 1]">
            <RouterLink class="link" :to="item.link">
              {{ item.name }}
            </RouterLink>
            <span class="sep">/</span>
          </template>
          <span v-else class="current">{{ item.name }}</span>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style lang="scss" scoped>
.bread-crumbs {
  margin-top: 40px;

  @include max-w(767) {
    margin-top: 30px;
  }

  .body {
    display: flex;
    font-family: 'Cuprum';
    font-size: 14px;
    line-height: 16px;

    .link {
      color: #666666;
    }

    .sep {
      display: block;
      margin: 0 4px;
      color: #C2C2C2;
    }

    .current {
      color: #1B1B1A;
    }
  }
}
</style>
