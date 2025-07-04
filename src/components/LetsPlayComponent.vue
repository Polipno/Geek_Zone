<template>
  <div class="review">
    <div class="team-section">
      <div class="team-member">
        <div class="bordure-texte">
          <h3>Inside</h3>

          <router-link to="/lets_play_inside">
            <img
              src="../assets/Lets_Play/Inside/Affiche_INSIDE.jpeg"
              alt="Affiche de Inside"
              class="Image"
            />
          </router-link>
        </div>
        <div class="bordure-texte">
          <h3>Gris</h3>
          <router-link to="/lets_play_gris">
            <img
              src="../assets/Lets_Play/Gris/Affiche_Gris.jpg"
              alt="Affiche du jeu Gris"
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
  name: "LetsPlayComponent",
};
</script>
