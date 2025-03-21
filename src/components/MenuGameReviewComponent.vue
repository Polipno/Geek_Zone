<template>
  <header>
    <div class="menu">
      <div class="Logo">
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
          <li><a href="#Information">Information</a></li>
          <li><a href="#Lets play">Let's Play</a></li>
          <li><a href="#Mon ressentit">Mon ressentit</a></li>
          <li><a href="#Images">Images</a></li>
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
      };
      return titles[this.$route.path];
    },
  },
};
</script>
