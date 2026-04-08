<template>
  <div class="menuReview">
    <div class="LogoGameReview">
      <router-link to="/">
        <img
          src="../assets/Logo_Geek_Zone.png"
          alt="Logo de Geek Zone"
          href="index.html"
          class="Image pc-only"
        />
      </router-link>
    </div>
    <h1>{{ pageTitle }}</h1>
    <nav>
      <ul>
        <li><router-link to="#Information">Information</router-link></li>
        <li><router-link to="#LetsPlay">Let's Play</router-link></li>
        <li><router-link to="#MonRessenti">Mon ressentit</router-link></li>
        <li><router-link to="#CaptureEcran">Capture d'écran</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'MenuLetsPlayComponent',
  computed: {
    pageTitle() {
      const titles = {
        '/lets_play_reanimal': 'REANIMAL',
        '/lets_play_a_highland_song': 'A Highland Song',
        '/lets_play_a_short_hike': 'A Short Hike',
      };
      return titles[this.$route.path];
    },
  },
};
</script>
