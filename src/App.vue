<template>
  <div id="app">
    <component :is="currentMenuComponent" @changeComponent="changeComponent" />

    <router-view />

    <Footer />
  </div>
</template>

<script>
import Menu from "./components/MenuComponent.vue";
import Footer from "./components/FooterComponent.vue";
import GameReviewMenu from "./components/MenuGameReviewComponent.vue";

export default {
  name: "App",
  components: {
    Menu,
    Footer,
    GameReviewMenu,
  },
  data() {
    return {
      currentComponent: "Index",
      currentMenuComponent: "Menu",
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
    changeComponent(component) {
      this.currentComponent = component;
    },
    changeMenuComponent(route) {
      const menuType = route.meta.menu;

      this.currentMenuComponent =
        menuType === "game" ? "GameReviewMenu" : "Menu";
    },
  },
};
</script>

<style>
@import "/src/styles/Style.css";
</style>
