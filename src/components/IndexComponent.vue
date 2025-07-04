<template>
  <div class="index">
    <h2>Bienvenue dans Geek Zone</h2>

    <p>Un espace dédié à ma passion pour les <strong>jeux vidéo</strong>.</p>

    <div class="bordure-image">
      <img
        src="../assets/Affiche_Geek_Zone.jpg"
        alt="Affiche de Geek Zone"
        class="Image"
      />
    </div>
    <br />
    <h3>Trailer de Geek Zone</h3>
    <div class="bordure-image">
      <div class="responsive-video">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/eiMvdlV2IC8?si=BeMu3pPsfnl-ri3q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    </div>
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
          <td>04.03.2025</td>
          <td>Dernière actualisation du site</td>
        </tr>
      </tbody>
    </table>

    <h3>Aimez-vous le site web&nbsp;?</h3>

    <button
      @click="toggleLike"
      :class="{ liked: isLiked, disabled: isProcessing }"
      :disabled="isProcessing"
    >
      {{ isLiked ? "❤️" : "🤍" }}
    </button>
    <p>Nombre de likes : {{ likeCount }}</p>
  </div>
</template>

<script>
import { db, ref, get, set, onValue } from "../firebase";

export default {
  name: "IndexComponent",
  data() {
    return {
      likeCount: 0,
      isLiked: false,
      userId: "",
      isProcessing: false,
    };
  },
  async created() {
    this.userId = this.getUserId();
    this.listenLikes();
    await this.fetchLikes();
  },
  methods: {
    async incrementLike() {
      this.likeCount++;
      await set(ref(db, "likes/global"), this.likeCount);
    },
    getUserId() {
      let userId = localStorage.getItem("userId");
      if (!userId) {
        userId = "user-" + Math.random().toString(36).substr(2, 9);
        localStorage.setItem("userId", userId);
      }
      return userId;
    },
    listenLikes() {
      const likeRef = ref(db, "likes/global");
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
      const likeRef = ref(db, "likes/global");
      const userLikeRef = ref(db, `likes/users/${this.userId}`);
      // Récupère le compteur global
      const snapshot = await get(likeRef);
      if (snapshot.exists()) {
        this.likeCount = snapshot.val();
      }

      // Vérifie si l'utilisateur a déjà liké
      const userSnapshot = await get(userLikeRef);
      if (userSnapshot.exists()) {
        this.isLiked = true; // L'utilisateur a liké
      }
    },
    // 📌 3️⃣ Fonction pour liker ou enlever son like
    async toggleLike() {
      if (this.isProcessing) return;
      this.isProcessing = true;

      const likeRef = ref(db, "likes/global");
      const userLikeRef = ref(db, `likes/users/${this.userId}`);
      try {
        if (this.isLiked) {
          // ❌ L'utilisateur retire son like
          this.likeCount--;
          await set(userLikeRef, null); // Supprime l'entrée de l'utilisateur
        } else {
          // ✅ L'utilisateur ajoute un like
          this.likeCount++;
          await set(userLikeRef, true); // Stocke que l'utilisateur a liké
        }

        // Met à jour le compteur global
        await set(likeRef, this.likeCount);

        // Met à jour l'état local
        this.isLiked = !this.isLiked;
      } catch (error) {
        console.error("Error updating like: ", error);
      }
      this.isProcessing = false;
    },
  },
};
</script>
