<template>
  <p>Un podcast où des invités parlent de leur jeu de cœur.</p>
  <div class="bordure-texte">
    <img
      src="../../assets/Podcast/Passion_Pixel_Affiche.jpeg"
      alt="Affiche de Passion Pixel"
      class="Image"
    />
  </div>
  <h4>Minecraft - Nerwaak</h4>
  <p>
    Pour ce premier podcast de Geek Zone on acceuil Nerwaak qui va nous parler
    de son jeu d'enfance Minecraft.
  </p>
  <audio controls>
    <source
      src="../../audio/Podcast/Passion_Pixel/Passion_Pixel_Minecraft.mp3"
      type="audio/mpeg"
    />
  </audio>
  <p>Enregistré le 24.01.2025</p>
</template>

<script>
export default {
  name: "PassionPixelComponent",
};
</script>
