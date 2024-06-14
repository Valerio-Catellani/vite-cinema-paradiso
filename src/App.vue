<template>
  <HeaderComponent></HeaderComponent>
   <main class="vh-100">
    <router-view></router-view>
  </main>
  <FooterComponent></FooterComponent>
</template>

<script>
import { store } from './store';
import CardComponent from './components/CardComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';

  export default {
    name: 'App',
  components: {
    HeaderComponent,
    CardComponent,

  },
  data() {
    return {
      store
    }
  },
}
</script>

<style lang="scss" scoped>

</style>