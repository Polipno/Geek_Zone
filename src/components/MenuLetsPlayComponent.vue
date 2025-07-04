<template>
  <header>
    <div class="menuReview">
      <div class="LogoGameReview">
        <router-link to="/">
          <img
            src="../assets/Logo_Geek_Zone.png"
            alt="Logo de Geek Zone"
            href="index.html"
            class="Image"
          />
        </router-link>
      </div>
      <h1>{{ pageTitle }}</h1>
      <nav>
        <ul>
        <li><router-link to="#Information">Information</router-link></li>
        <li><router-link to="#Lets play">Let's Play</router-link></li>
        <li><router-link to="#Mon ressentit">Mon ressentit</router-link></li>
        <li><router-link to="#Images">Images</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "MenuLetsPlayComponent",
  computed: {
    pageTitle() {
      const titles = {
        "/lets_play_inside": "Inside",
        "/lets_play_gris": "Gris",
      };
      return titles[this.$route.path];
    },
  },
};
</script>
