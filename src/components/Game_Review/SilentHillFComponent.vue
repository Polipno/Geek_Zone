<template>
  <div class="bordure-image mobile-only">
    <img
      src="../../assets/Silent_Hill_f/Affiche_Silent_Hill_f_2.jpg"
      alt="Affiche de Silent Hill f"
      class="Image"
    />
  </div>
  <audio ref="audioPlayer" :src="bgm" preload="auto"></audio>
  <section id="Information">
    <div class="bordure-texte">
      <h2>Information</h2>
      <p>
       ...
      </p>
    </div>
  </section>

  <section id="Histoire">
    <div class="bordure-texte">
      <h2>Histoire</h2>
      <p>
       ...
      </p>
    </div>
  </section>
  <section id="MonRessenti">
    <div class="bordure-texte">
      <h2>Mon ressentit</h2>
      <p>
      ...
      </p>
    </div>
  </section>

  <section id="CaptureEcran">
    <div class="bordure-texte">
      <h2>Capture d'écran</h2>
      <p>
      ...
      </p>
    </div>
  </section>
</template>

<script>
import bgm from "@/audio/SILENT_HILL_f_Shichibi_no_Tasogare.mp3"
export default {
  name: "SilentHillFComponent",
    data() {
    return {bgm};
  },
  mounted() {
    const audio = this.$refs.audioPlayer;
    audio.volume = 0.8;
    
  
    audio.play().catch(() => {
      
      const playOnClick = () => {
        audio.play();
        window.removeEventListener("click", playOnClick);
      };
      window.addEventListener("click", playOnClick);
    });
  },
};
</script>
