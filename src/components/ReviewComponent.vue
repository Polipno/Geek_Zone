<template>
  <div class="review">
    <div class="search-bar" style="margin-bottom: 16px">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Rechercher un jeu..."
        class="search-input"
        style="width: 95%; max-width: 3000px; padding: 15px; margin-top: 20px"
      />
    </div>
    <p v-if="showNoResults" class="no-results-message">Aucun résultat pour cette recherche.</p>
    <div class="team-section">
      <div class="team-member">
        <div class="bordure-texte" v-show="matches('Another Code Recollection')">
          <h3>Another Code Recollection</h3>

          <router-link to="/another_code_recollection">
            <img
              src="../assets/Another_Code_Recollection/Affiche_Another_Code_Recollection.jpeg"
              alt="Affiche de Another Code Recollection"
              class="Image"
            />
          </router-link>
        </div>

        <div class="bordure-texte" v-show="matches('Mario vs. Donkey Kong')">
          <h3>Mario vs. Donkey Kong</h3>
          <router-link to="/mario_vs_donkey_kong">
            <img
              src="../assets/Mario_vs_Donkey_Kong/Affiche_Mario_vs_Donkey_Kong.jpeg"
              alt="Affiche de Mario vs. Donkey Kong"
              class="Image"
            />
          </router-link>
        </div>

        <div class="bordure-texte" v-show="matches('Princess Peach Showtime !')">
          <h3>Princess Peach Showtime&nbsp;!</h3>
          <router-link to="/princess_peach_showtime">
            <img
              src="../assets/Princess_Peach_Showtime/Affiche_Princess_Peach_Showtime.jpeg"
              alt="Affiche de Princess Peach Showtime&nbsp;!"
              class="Image"
            />
          </router-link>
        </div>

        <div class="bordure-texte" v-show="matches('Paper Mario: La Porte Millénaire')">
          <h3>Paper Mario&nbsp;: La Porte Millénaire</h3>
          <router-link to="/paper_mario_la_porte_millenaire">
            <img
              src="../assets/Paper_Mario_La_Porte_Millenaire/Affiche_Paper_Mario_La_Porte_Millenaire.jpeg"
              alt="Affiche de Paper Mario&nbsp;: La Porte Millénaire"
              class="Image"
              loading="lazy"
            />
          </router-link>
        </div>

        <div class="bordure-texte" v-show="matches('Luigi\'s Mansion 2 HD')">
          <h3>Luigi's Mansion 2 HD</h3>
          <router-link to="/luigis_mansion_2_hd">
            <img
              src="../assets/Luigis_Mansion_2_HD/Affiche_Luigis_Mansion_2_HD.jpeg"
              alt="Affiche de Luigi's Mansion 2 HD"
              class="Image"
              loading="lazy"
            />
          </router-link>
        </div>

        <div class="bordure-texte" v-show="matches('Zelda Echoes of Wisdom')">
          <h3>Zelda Echoes of Wisdom</h3>
          <router-link to="/zelda_echoes_of_wisdom">
            <img
              src="../assets/Zelda_Echoes_Of_Wisdom/Affiche_Zelda_Echoes_Of_Wisdom.jpeg"
              alt="Affiche de Zelda Echoes of Wisdom"
              class="Image"
              loading="lazy"
            />
          </router-link>
        </div>

        <div class="bordure-texte" v-show="matches('Super Mario Party Jamboree')">
          <h3>Super Mario Party Jamboree</h3>
          <router-link to="/super_mario_party_jamboree">
            <img
              src="../assets/Super_Mario_Party_Jamboree/Affiche_Super_Mario_Party_Jamboree.jpeg"
              alt="Affiche de Mario Party Jamboree"
              class="Image"
              loading="lazy"
            />
          </router-link>
        </div>

        <div class="bordure-texte" v-show="matches('Mario & Luigi : L’épopée fraternelle')">
          <h3>Mario & Luigi&nbsp;: L’épopée fraternelle</h3>
          <router-link to="/mario_and_luigi_lepopee_fraternelle">
            <img
              src="../assets/Mario_and_Luigi_Lepopee_Fraternelle/Affiche_Mario_and_Luigi_Lepopee_Fraternelle.jpeg"
              alt="Affiche de Mario & Luigi&nbsp;: L’épopée fraternelle"
              class="Image"
              loading="lazy"
            />
          </router-link>
        </div>

        <div class="bordure-texte" v-show="matches('Donkey Kong Country Returns HD')">
          <h3>Donkey Kong Country Returns HD</h3>
          <router-link to="/donkey_kong_returns_hd">
            <img
              src="../assets/Donkey_Kong_Country_Returns_HD/Affiche_Donkey_Kong_Country_Returns_HD.jpeg"
              alt="Affiche de Donkey Kong Country Returns HD"
              class="Image"
              loading="lazy"
            />
          </router-link>
        </div>
        <div class="bordure-texte" v-show="matches('Mario Kart World')">
          <h3>Mario Kart World</h3>
          <router-link to="/mario_kart_world">
            <img
              src="../assets/Mario_Kart_World/Affiche_Mario_Kart_World.jpeg"
              alt="Affiche de Mario Kart World"
              class="Image"
              loading="lazy"
            />
          </router-link>
        </div>
        <div class="bordure-texte" v-show="matches('Donkey Kong Bananza')">
          <h3>Donkey Kong Bananza</h3>
          <router-link to="/donkey_kong_bananza">
            <img
              src="../assets/Donkey_Kong_Bananza/Affiche_Donkey_Kong_Bananza.jpeg"
              alt="Affiche de Donkey Kong Bananza"
              class="Image"
              loading="lazy"
            />
          </router-link>
        </div>
        <div class="bordure-texte" v-show="matches('Super Mario Galaxy 1 + 2')">
          <h3>Super Mario Galaxy 1 + 2</h3>
          <router-link to="/super_mario_galaxy_and_super_mario_galaxy_2">
            <img
              src="../assets/Super_Mario_Galaxy_and_Super_Mario_Galaxy_2/Affiche_Super_Mario_Galaxy_and_Super_Mario_Galaxy_2.jpeg"
              alt="Affiche de Super Mario Galaxy + Super Mario Galaxy 2"
              class="Image"
              loading="lazy"
            />
          </router-link>
        </div>
        <div class="bordure-texte" v-show="matches('Kirby Air Riders')">
          <h3>Kirby Air Riders</h3>
          <router-link to="/kirby_air_riders">
            <img
              src="../assets/Kirby_Air_Riders/Affiche_Kirby_Air_Riders.jpeg"
              alt="Affiche de Kirby Air Riders"
              class="Image"
              loading="lazy"
            />
          </router-link>
        </div>

        <div class="bordure-texte" v-show="matches('Split Fiction')">
          <h3>Split Fiction</h3>
          <router-link to="/split_fiction">
            <img
              src="../assets/Split_Fiction/Affiche_Split_Fiction.jpeg"
              alt="Affiche de Split Fiction"
              class="Image"
              loading="lazy"
            />
          </router-link>
        </div>

        <div class="bordure-texte" v-show="matches('Planet of Lana')">
          <h3>Planet of Lana</h3>
          <router-link to="/planet_of_lana">
            <img
              src="../assets/Planet_Of_Lana/Affiche_Planet_Of_Lana.jpeg"
              alt="Affiche de Planet of Lana"
              class="Image"
              loading="lazy"
            />
          </router-link>
        </div>

        <div class="bordure-texte" v-show="matches('Silent Hill f')">
          <h3>Silent Hill f</h3>
          <router-link to="/silent_hill_f">
            <img
              src="../assets/Silent_Hill_f/Affiche_Silent_Hill_f.jpeg"
              alt="Affiche de Silent Hill f"
              class="Image"
              loading="lazy"
            />
          </router-link>
        </div>

        <div class="bordure-texte" v-show="matches('Little Nightmares III')">
          <h3>Little Nightmares III</h3>
          <router-link to="/little_nightmares_iii">
            <img
              src="../assets/Little_Nightmares_III/Affiche_Little_Nightmares_III.jpeg"
              alt="Affiche de Little Nightmares III"
              class="Image"
              loading="lazy"
            />
          </router-link>
        </div>

        <div class="bordure-texte" v-show="matches('Mario Tennis Fever')">
          <h3>Mario Tennis Fever</h3>
          <router-link to="/mario_tennis_fever">
            <img
              src="../assets/Mario_Tennis_Fever/Affiche_Mario_Tennis_Fever.jpeg"
              alt="Affiche de Mario Tennis Fever"
              class="Image"
              loading="lazy"
            />
          </router-link>
        </div>

        <div class="bordure-texte" v-show="matches('Resident Evil Requiem')">
          <h3>Resident Evil Requiem</h3>
          <router-link to="/resident_evil_requiem">
            <img
              src="../assets/Resident_Evil_Requiem/Affiche_Resident_Evil_Requiem.jpeg"
              alt="Affiche de Resident Evil Requiem"
              class="Image"
              loading="lazy"
            />
          </router-link>
        </div>

        <div class="bordure-texte" v-show="matches('Yoshi et le Livre Mystérieux')">
          <h3>Yoshi et le Livre Mystérieux</h3>
          <router-link to="/yoshi_et_le_livre_mysterieux">
            <img
              src="../assets/Yoshi_Et_Le_Livre_Mysterieux/Affiche_Yoshi_Et_Le_Livre_Mysterieux.jpeg"
              alt="Affiche de Yoshi et le livre Mystérieux"
              class="Image"
              loading="lazy"
            />
          </router-link>
        </div>

        <div class="bordure-texte" v-show="matches('Directive 8020')">
          <h3>Directive 8020</h3>
          <router-link to="/directive_8020">
            <img
              src="../assets/Directive_8020/Affiche_Directive_8020.jpeg"
              alt="Affiche de Directive 8020"
              class="Image"
              loading="lazy"
            />
          </router-link>
        </div>

        <div class="bordure-texte" v-show="matches('Star Fox')">
          <h3>Star Fox</h3>
          <router-link to="/star_fox">
            <img
              src="../assets/Star_Fox/Affiche_Star_Fox.jpeg"
              alt="Affiche de Star Fox"
              class="Image"
              loading="lazy"
            />
          </router-link>
        </div>

        <div class="bordure-texte" v-show="matches('It Takes Two')">
          <h3>It Takes Two</h3>
          <router-link to="/it_takes_two">
            <img
              src="../assets/It_Takes_Two/Affiche_It_Takes_Two.jpeg"
              alt="Affiche de It Takes Two"
              class="Image"
              loading="lazy"
            />
          </router-link>
        </div>

        <div class="bordure-texte" v-show="matches('Marsupilami 2: Salsa Palombia')">
          <h3>Marsupilami 2&nbsp;: Salsa Palombia</h3>
          <router-link to="/marsupilami_2">
            <img
              src="../assets/Marsupilami_2/Affiche_Marsupilami_2.jpeg"
              alt="Affiche de Marsupilami 2&nbsp;: Salsa Palombia"
              class="Image"
              loading="lazy"
            />
          </router-link>
        </div>

        <div class="bordure-texte" v-show="matches('The Legend of Zelda : Ocarina of Time')">
          <h3>The Legend of Zelda&nbsp;: Ocarina of Time</h3>
          <router-link to="/zelda_ocarina_of_time">
            <img
              src="../assets/Zelda_Ocarina_Of_Time/Affiche_Zelda_Ocarina_Of_Time.jpeg"
              alt="Affiche de The Legend of Zelda&nbsp;: Ocarina of Time"
              class="Image"
              loading="lazy"
            />
          </router-link>
        </div>

        <div class="bordure-texte" v-show="matches('Stranger Than Heaven')">
          <h3>Stranger Than Heaven</h3>
          <router-link to="/stranger_than_heaven">
            <img
              src="../assets/Stranger_Than_Heaven/Affiche_Stranger_Than_Heaven.jpeg"
              alt="Affiche de Stranger Than Heaven"
              class="Image"
              loading="lazy"
            />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReviewComponent',
  data() {
    return {
      searchQuery: '',
      hasResults: true,
    };
  },
  computed: {
    normalizedQuery() {
      return (this.searchQuery || '').trim().toLowerCase();
    },
    showNoResults() {
      return Boolean(this.normalizedQuery) && !this.hasResults;
    },
  },
  watch: {
    searchQuery() {
      this.$nextTick(() => {
        this.updateHasResults();
      });
    },
  },
  mounted() {
    this.updateHasResults();
  },
  methods: {
    matches(name) {
      if (!this.normalizedQuery) return true;
      return name.toLowerCase().includes(this.normalizedQuery);
    },
    updateHasResults() {
      if (!this.$el) {
        this.hasResults = true;
        return;
      }

      const cards = Array.from(this.$el.querySelectorAll('.bordure-texte'));
      this.hasResults = cards.some((card) => card.style.display !== 'none');
    },
  },
};
</script>
