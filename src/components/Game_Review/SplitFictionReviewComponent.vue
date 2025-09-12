<template>
  <div class="review-container">
    <h1>Split Fiction</h1>
    <img src="@/assets/Split_Fiction/cover.jpg" alt="Split Fiction Cover" class="review-cover" />
    <p>
      <strong>Split Fiction</strong> est un jeu d'aventure narratif où chaque choix du joueur influence le déroulement de l'histoire. Plongez dans un univers où vos décisions façonnent le destin des personnages et découvrez plusieurs fins possibles. Avec une direction artistique soignée et une bande-son immersive, Split Fiction propose une expérience unique à chaque partie.
    </p>
    <ul>
      <li><strong>Genre :</strong> Aventure narrative</li>
      <li><strong>Développeur :</strong> Fictional Games Studio</li>
      <li><strong>Date de sortie :</strong> 2025</li>
      <li><strong>Plateformes :</strong> PC, Switch, PlayStation, Xbox</li>
    </ul>
    <h2>Notre avis</h2>
    <p>
      Split Fiction séduit par la richesse de son scénario et la profondeur de ses personnages. Les choix moraux sont souvent difficiles et impactent réellement l'histoire, offrant une excellente rejouabilité. On regrette parfois quelques lenteurs dans le rythme, mais l'ensemble reste captivant et original.
    </p>
  </div>
</template>

<script>
export default {
  name: "SplitFictionReviewComponent"
};
</script>

<style scoped>
.review-container {
  max-width: 700px;
  margin: 2rem auto;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  padding: 2rem;
}
.review-cover {
  width: 100%;
  max-width: 350px;
  display: block;
  margin: 1rem auto 2rem auto;
  border-radius: 8px;
}
h1 {
  text-align: center;
  margin-bottom: 1rem;
}
</style>
