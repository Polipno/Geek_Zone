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
        Silent Hill f est un jeu d’horreur développé par NeoBards Entertainment et édité par
        Konami.<br />
        Il fait partie du renouveau de la licence Silent Hill et se démarque en proposant une
        histoire totalement inédite, située au Japon dans les années 1960.
      </p>
    </div>
  </section>

  <section id="Histoire">
    <div class="bordure-texte">
      <h2>Histoire</h2>
      <p>
        L’histoire se déroule dans un village isolé, soudainement envahi par une brume inquiétante
        et des phénomènes surnaturels.<br />
        Les habitants disparaissent peu à peu, laissant place à une atmosphère oppressante.<br />
        L’héroïne devra affronter ses peurs et découvrir la vérité derrière les événements
        horrifiques qui frappent le village.
      </p>
    </div>
  </section>
  <section id="MonRessenti">
    <div class="bordure-texte">
      <h2>Mon ressentit</h2>
      <p>
        Silent Hill f est un jeu d’horreur qui m’a beaucoup plu grâce à son ambiance très sombre et
        oppressante.<br />
        L’horreur est bien présente, le jeu fait réellement peur et instaure une tension
        constante.<br />
        Le cadre du Japon des années 60 renforce fortement le malaise et donne une identité unique
        au jeu.<br />
        Les animations sont propres et soignées, et les créatures sont très bien dessinées, à la
        fois dérangeantes et effrayantes.<br />
        Les énigmes sont bien réfléchies et le jeu propose un rythme d’avancement équilibré, sans
        temps morts excessifs.<br />
        L’histoire est assez profonde, mais aussi complexe: il est nécessaire de passer par une
        vidéo explicative sur YouTube pour bien tout comprendre.<br />
        Il existe 5 fins différentes, toutes débloquables en remplissant certains critères durant le
        jeu.<br />
        Cependant, obtenir toutes les fins demande pas mal de temps, car il est nécessaire de
        rejouer plusieurs fois l’aventure.
      </p>
    </div>
  </section>

  <section id="CaptureEcran">
    <div class="bordure-texte">
      <h2>Capture d'écran</h2>
      <p>...</p>
    </div>
  </section>
</template>

<script>
import bgm from '@/audio/SILENT_HILL_f_Shichibi_no_Tasogare.mp3';
export default {
  name: 'SilentHillFComponent',
  data() {
    return { bgm };
  },
  mounted() {
    const audio = this.$refs.audioPlayer;
    audio.volume = 0.8;

    audio.play().catch(() => {
      const playOnClick = () => {
        audio.play();
        window.removeEventListener('click', playOnClick);
      };
      window.addEventListener('click', playOnClick);
    });
  },
};
</script>
