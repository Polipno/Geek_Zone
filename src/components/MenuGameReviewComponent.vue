<template>
  

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
        <li><router-link to="#Histoire">Histoire</router-link></li>
        <li><router-link to="#Mon%20ressentit">Mon ressentit</router-link></li>
        <li><router-link to="#Capture%20d'écran">Capture d'écran</router-link></li>
        </ul>
      </nav>
    </div>

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
        "/mario_and_luigi_lepopee_fraternelle": "Mario & Luigi L'époppé Fraternelle",
        "/donkey_kong_returns_hd": "Donkey Kong Returns HD",
        "/mario_kart_world": "Mario Kart World",
        "/donkey_kong_bananza": "Donkey Kong Bananza",
        "/kirby_air_raiders": "Kirby Air Raiders",
      };

      return titles[this.$route.path];
    },
  },
};
</script>
