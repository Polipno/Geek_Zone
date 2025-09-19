<template>
  <div style="max-width: 600px; margin: 0 auto;">
    <div class="bordure-texte" style="padding: 20px;">
      <img
        src="../../assets/Podcast/Passion_Pixel_Affiche.png"
        alt="Affiche de Passion Pixel"
        class="Image"
        style="display: block; margin: 0 auto;"
      />
    </div>
    <div class="bordure-texte" style="margin-top: 10px; padding: 20px;">
      <h4 style="text-align: center;">Minecraft - Nerwaak</h4>
      <p style="text-align: center;">
        Pour ce premier podcast de Geek Zone on accueille Nerwaak qui va nous parler
        de son jeu d'enfance Minecraft.
      </p>
      <div style="display: flex; justify-content: center;">
        <audio controls>
          <source
            src="../../audio/Podcast/Passion_Pixel/Passion_Pixel_Minecraft.mp3"
            type="audio/mpeg"
          />
        </audio>
      </div>
      <p style="text-align: center;">Enregistré le 24.01.2025</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PassionPixelComponent",
};
</script>
