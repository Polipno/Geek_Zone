<template>
  <div id="app">
    <component :is="currentMenuComponent" />

    <router-view />

    <Footer />
    <Lightbox />
  </div>
</template>

<script>
import Menu from './components/MenuComponent.vue';
import Footer from './components/FooterComponent.vue';
import Lightbox from './components/LightboxComponent.vue';
import GameReviewMenu from './components/MenuGameReviewComponent.vue';
import LetsPlayMenu from './components/MenuLetsPlayComponent.vue';

export default {
  name: 'App',
  components: {
    Menu,
    Footer,
    Lightbox,
    GameReviewMenu,
    LetsPlayMenu,
  },
  data() {
    return {
      currentMenuComponent: 'Menu',
    };
  },
  watch: {
    $route(to) {
      this.changeMenuComponent(to);
    },
  },
  mounted() {
    this.changeMenuComponent(this.$route);
  },
  methods: {
    changeMenuComponent(route) {
      const menuType = route.meta.menu;

      if (menuType === 'game') {
        this.currentMenuComponent = 'GameReviewMenu';
      } else if (menuType === 'letsplay') {
        this.currentMenuComponent = 'LetsPlayMenu';
      } else {
        this.currentMenuComponent = 'Menu';
      }
    },
  },
};
</script>

<style>
@import '/src/styles/Style.css';
</style>
