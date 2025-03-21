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
          <li><a href="#Histoire">Histoire</a></li>
          <li><a href="#Mon ressentit">Mon ressentit</a></li>
          <li><a href="#Capture d'écran">Capture d'écran</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "MenuGameReviewComponent",
  computed: {
    pageTitle() {
      const titles = {
        "/another_code_recollection": "Another Code Recollection",
        "/mario_vs._donkey_kong": "Mario vs. Donkey Kong",
        "/princess_peach_showtime": "Princess Peach Showtime",
        "/paper_mario_la_porte_millenaire": "Paper Mario La Porte Millénaire",
        "/luigis_mansion_2_hd": "Luigi's Mansion 2 HD",
        "/zelda_echoes_of_wisdom": "Zelda Echoes Of Wisdom",
        "/mario_party_jamboree": "Mario Party Jamboree",
        "/mario_&_luigi_lepopee_fraternelle":
          "Mario & Luigi L'époppé Fraternelle",
        "/donkey_kong_returns_hd": "Donkey Kong Returns HD",
      };
      return titles[this.$route.path];
    },
  },
};
</script>
