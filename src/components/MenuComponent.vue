<template>
  <div class="menu">
    <div class="Logo">
      <router-link to="/">
        <img src="../assets/Logo_Geek_Zone.png" alt="Logo de Geek Zone" class="Image" />
      </router-link>
    </div>
    <h1>{{ pageTitle }}</h1>

    <nav>
      <ul>
        <router-link to="/"><button>Accueil</button></router-link>
        <router-link to="/contact"><button>Contact</button></router-link>
        <router-link to="/review"><button>Review</button></router-link>
        <router-link to="/letsplay"><button>Let's Play</button></router-link>
        <router-link to="/wishlist"><button>Wishlist</button></router-link>
        <router-link to="/question"><button>Question</button></router-link>
        <router-link to="/podcast"><button>Podcast</button></router-link>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'MenuComponent',
  computed: {
    pageTitle() {
      return this.$route.meta.title;
    },
  },
};
</script>
