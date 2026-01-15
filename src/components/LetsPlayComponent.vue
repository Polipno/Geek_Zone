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
          <h3>Gris</h3>
          <router-link to="/lets_play_gris">
            <img
              src="../assets/Lets_Play/Gris/Affiche_Gris.jpg"
              alt="Affiche du ?"
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
