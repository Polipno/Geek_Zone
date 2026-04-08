<template>
  <div class="bordure-image mobile-only">
    <img
      src="../../assets/Lets_Play/A_Highland_Song/Affiche_A_Highland_Song.jpg"
      alt="Affiche de A Highland Song"
      class="Image"
    />
  </div>

  <section id="Information">
    <div class="bordure-texte">
      <h2>Information</h2>
      <p>Un jeu d'aventure narratif dévloppé par inkle sorti le 5 Decembre 2023.</p>
    </div>
  </section>

  <section id="LetsPlay">
    <div class="bordure-texte">
      <h2>Let's Play</h2>
      <div class="responsive-video">
        <iframe
          width="1080"
          height="630"
          src="https://www.youtube.com/embed/YKRI_q2ZbiA?si=gaLP42gNkY3D-yIY"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </section>

  <section id="MonRessenti">
    <div class="bordure-texte">
      <h2>Mon ressentit</h2>
      <p>
        Un très beau jeu dépaysant qui offre une immense liberté d’exploration, avec plusieurs
        chemins possibles pour rejoindre l’oncle Hamish.<br />
        Cet liberté rend le jeu trés rejouable notamment pour les joueurs qui voudront viser le 100
        %, que ce soit en cherchant le chemin le plus rapide pour atteindre Hamish ou en tentant de
        récupérer tous les collectibles.<br />
        Je me suis pas mal perdu durant le Let’s Play, mais ça m’a aussi permis de découvrir de joli
        endroits cachés, ce qui rend l’aventure encore plus immersive.<br />
        Toutes les musiques du jeu sont sublimes et collent parfaitement à l’ambiance ainsi qu’au
        gameplay du jeu.<br />
        Je recommande à tous ceux qui recherchent une aventure en pleine nature tout en restant à la
        maison.
      </p>
    </div>
  </section>

  <section id="CaptureEcran">
    <div class="bordure-texte">
      <h2>Capture d'écran</h2>
      <div class="image-gallery">
        <img
          src="../../assets/Lets_Play/A_Highland_Song/Image_1_A_Highland_Song.png"
          alt="Image 1 de A Highland Song"
          class="Image"
        />
        <br />
        <img
          src="../../assets/Lets_Play/A_Highland_Song/Image_2_A_Highland_Song.png"
          alt="Image 2 de A Highland Song"
          class="Image"
        />
        <br />
        <img
          src="../../assets/Lets_Play/A_Highland_Song/Image_3_A_Highland_Song.png"
          alt="Image 3 de A Highland Song"
          class="Image"
        />
        <br />
        <img
          src="../../assets/Lets_Play/A_Highland_Song/Image_4_A_Highland_Song.png"
          alt="Image 4 de A Highland Song"
          class="Image"
        />
      </div>

      <div class="image-gallery"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LetsPlayAHighlandSong',
};
</script>
