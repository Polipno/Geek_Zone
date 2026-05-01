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
    <p v-if="showNoResults" class="no-results-message">Aucun resultat pour cette recherche.</p>
    <div class="team-section">
      <div class="team-member">
        <div class="bordure-texte" v-show="matches('REANIMAL')">
          <h3>REANIMAL</h3>

          <router-link to="/lets_play_reanimal">
            <img
              src="../assets/Lets_Play/Reanimal/Affiche_REANIMAL.jpg"
              alt="Affiche de REANIMAL"
              class="Image"
            />
          </router-link>
        </div>
        <div class="bordure-texte" v-show="matches('A Highland Song')">
          <h3>A Highland Song</h3>
          <router-link to="/lets_play_a_highland_song">
            <img
              src="../assets/Lets_Play/A_Highland_Song/Affiche_A_Highland_Song.jpg"
              alt="Affiche de A Highland Song"
              class="Image"
            />
          </router-link>
        </div>
        <div class="bordure-texte" v-show="matches('A Short Hike')">
          <h3>A Short Hike</h3>
          <router-link to="/lets_play_a_short_hike">
            <img
              src="../assets/Lets_Play/A_Short_Hike/Affiche_A_Short_Hike.jpg"
              alt="Affiche de A Short Hike"
              class="Image"
            />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LetsPlayComponent',
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
