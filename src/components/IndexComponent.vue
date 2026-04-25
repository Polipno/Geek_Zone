<template>
  <div class="index">
    <h2>Bienvenue dans Geek Zone</h2>

    <p>Un espace dédié à ma passion pour les <strong>jeux vidéo</strong>.</p>

    <div class="bordure-image">
      <img
        src="../assets/Affiche_Geek_Zone.jpg"
        alt="Affiche de Geek Zone"
        class="Image ImageAcceuil"
      />
    </div>
    <br />
    <br />
    <h3>Trailer de Geek Zone</h3>
    <div class="bordure-image bordure-video">
      <div class="responsive-video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/eiMvdlV2IC8?si=BeMu3pPsfnl-ri3q"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>

    <br />
    <h3>Progression majeure du site</h3>

    <table class="centered-table">
      <tbody>
        <tr>
          <th>Date</th>
          <th>Détail</th>
        </tr>
        <tr>
          <td>15.01.2024</td>
          <td>Lancement du site</td>
        </tr>

        <tr>
          <td>15.03.2024</td>
          <td>Responsive pour les formats téléphone et tablette</td>
        </tr>
        <tr>
          <td>26.07.2024</td>
          <td>Amélioration graphique et de lisibilité majeure</td>
        </tr>
        <tr>
          <td>03.03.2025</td>
          <td>Refonte du site en Vue</td>
        </tr>
        <tr>
          <td>15.04.2026</td>
          <td>Dernière actualisation du site</td>
        </tr>
      </tbody>
    </table>
    <br />
    <h3>Aimez-vous le site web&nbsp;?</h3>

    <button
      @click="toggleLike"
      :class="{ liked: isLiked, disabled: isProcessing }"
      :disabled="isProcessing"
    >
      {{ isLiked ? '❤️' : '🤍' }}
    </button>
    <p>Nombre de likes : {{ likeCount }}</p>
  </div>
</template>

<script>
import { db, ref, get, set, onValue } from '../firebase';

export default {
  name: 'IndexComponent',
  data() {
    return {
      likeCount: 0,
      isLiked: false,
      userId: '',
      isProcessing: false,
    };
  },
  async created() {
    if (this.isE2E()) {
      this.likeCount = 0;
      this.isLiked = false;
      return;
    }

    this.userId = this.getUserId();
    this.listenLikes();
    await this.fetchLikes();
  },
  methods: {
    isE2E() {
      return typeof window !== 'undefined' && window.Cypress;
    },
    async incrementLike() {
      this.likeCount++;
      await set(ref(db, 'likes/global'), this.likeCount);
    },
    getUserId() {
      let userId = localStorage.getItem('userId');
      if (!userId) {
        userId = 'user-' + Math.random().toString(36).substr(2, 9);
        localStorage.setItem('userId', userId);
      }
      return userId;
    },
    listenLikes() {
      const likeRef = ref(db, 'likes/global');
      onValue(likeRef, (snapshot) => {
        if (snapshot.exists()) {
          this.likeCount = snapshot.val();
        }
      });
    },
    async checkUserLike() {
      const userLikeRef = ref(db, `likes/users/${this.userId}`);

      const userSnapshot = await get(userLikeRef);
      if (userSnapshot.exists()) {
        this.isLiked = true;
      }
    },
    async fetchLikes() {
      const likeRef = ref(db, 'likes/global');
      const userLikeRef = ref(db, `likes/users/${this.userId}`);
      // Récupère le compteur global
      const snapshot = await get(likeRef);
      if (snapshot.exists()) {
        this.likeCount = snapshot.val();
      }

      const userSnapshot = await get(userLikeRef);
      if (userSnapshot.exists()) {
        this.isLiked = true;
      }
    },

    async toggleLike() {
      if (this.isProcessing) return;
      this.isProcessing = true;

      if (this.isE2E()) {
        this.likeCount += this.isLiked ? -1 : 1;
        this.isLiked = !this.isLiked;
        this.isProcessing = false;
        return;
      }

      const likeRef = ref(db, 'likes/global');
      const userLikeRef = ref(db, `likes/users/${this.userId}`);
      try {
        if (this.isLiked) {
          this.likeCount--;
          await set(userLikeRef, null);
        } else {
          this.likeCount++;
          await set(userLikeRef, true);
        }

        await set(likeRef, this.likeCount);

        this.isLiked = !this.isLiked;
      } catch (error) {
        console.error('Error updating like: ', error);
      }
      this.isProcessing = false;
    },
  },
};
</script>
