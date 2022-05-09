<template>
  <div id="app">
    <Header />
    <router-view>

    </router-view>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src

import "@/style/main.scss";

import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';


export default {
  components: {
    Header ,
    Footer   
  }
}
</script>

<style lang="scss">

</style>
