<template>
  <SceneComponent :sceneInfo="'right'"></SceneComponent>
  <SceneComponent :sceneInfo="'left'"></SceneComponent>
  <!-- <PageLoader v-if="store.animation.changePage"></PageLoader> -->
  <HeaderComponent></HeaderComponent>
  <main>

    <router-view v-slot="{ Component }">
      <transition name="scale" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>

  </main>
  <FooterComponent></FooterComponent>
</template>

<script>
import { store } from './store';
import CardComponent from './components/CardComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import SceneComponent from './components/SceneComponent.vue';
import PageLoader from './components/PageLoader.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    CardComponent,
    FooterComponent,
    SceneComponent,
    PageLoader

  },
  data() {
    return {
      store
    }
  },
}
</script>

<style lang="scss" scoped>
.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>