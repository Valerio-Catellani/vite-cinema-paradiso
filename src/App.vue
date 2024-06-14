<template>
  <HeaderComponent></HeaderComponent>
  <main>
    <router-view></router-view>
  </main>
  <footer>
    <FooterComponent></FooterComponent>
  </footer>
</template>

<script>
import { store } from './store';
import CardComponent from './components/CardComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    CardComponent,
    FooterComponent,

  },
  data() {
    return {
      store
    }
  },
}
</script>

<style lang="scss" scoped></style>