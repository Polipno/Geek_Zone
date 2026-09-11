<template>
  <div class="menuReview">
    <div class="LogoGameReview">
      <router-link to="/">
        <img
          src="../assets/Logo_Geek_Zone.png"
          alt="Logo de Geek Zone"
          class="Image pc-only"
        />
      </router-link>
    </div>
    <h1>{{ pageTitle }}</h1>

    <nav>
      <ul>
        <li><router-link to="#Information">Information</router-link></li>
        <li><router-link to="#Histoire">Histoire</router-link></li>
        <li><router-link to="#MonRessenti">Mon ressenti</router-link></li>
        <li>
          <router-link to="#CaptureEcran">Capture d'écran</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'MenuGameReviewComponent',
  computed: {
    pageTitle() {
      return this.$route.meta.title;
    },
  },
};
</script>
