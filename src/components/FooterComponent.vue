<template>
  <div class="footer">
    <p>&copy; 2025 Geek Zone</p>
    <p>Contactez le webmaster : cgerber35@outlook.com</p>
    <p>
      <router-link to="/impressum">Impressum</router-link> |
      <router-link to="/condition_d'utilisation"
        >Conditions d'utilisation</router-link
      >

      <!-- <router-link to="/protection_des_données">Protection des donnée</router-link> -->
    </p>
  </div>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>
