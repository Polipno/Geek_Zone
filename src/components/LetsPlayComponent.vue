<template>
  <div class="review">
    <div class="team-section">
      <div class="team-member">
        <div class="bordure-texte">
          <h3>REANIMAL</h3>

          <router-link to="/lets_play_reanimal">
            <img
              src="../assets/Lets_Play/Reanimal/Affiche_REANIMAL.jpg"
              alt="Affiche de REANIMAL"
              class="Image"
            />
          </router-link>
        </div>
        <div class="bordure-texte">
          <h3>A Highland Song</h3>
          <router-link to="/lets_play_a_highland_song">
            <img
              src="../assets/Lets_Play/A_Highland_Song/Affiche_A_Highland_Song.jpg"
              alt="Affiche de A Highland Song"
              class="Image"
            />
          </router-link>
        </div>
        <div class="bordure-texte">
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
};
</script>
