<template>
  <div class="team-section">
    <div class="team-member">
      <div class="bordure-texte">
        <h3>Passion Pixel</h3>
        <p>Écoutez des invités parler de leur jeu de cœur.</p>
        <div class="bordure-texte">
          <router-link to="/passion_pixel">
            <img
              src="../assets/Podcast/Passion_Pixel_Affiche.jpeg"
              alt="Affiche de Passion Pixel"
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
  name: "PodcastComponent",
};
</script>
