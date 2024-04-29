<template>
  <v-app>
    <v-footer class="custom-footer">
      <v-row class="row" justify="center">
        <div class="footer-items">
          <h3 class="busca-pet">BuscaPet</h3>
          <RouterLink class="custom-row" to="#">Início</RouterLink>
          <RouterLink class="custom-row" to="/About">Quem somos?</RouterLink>
          <a class="custom-row" href="https://alessandrodealmeida.dev.br/" target="_blank">Blog</a>
        </div>
      </v-row>     
    </v-footer>
    
  </v-app>
</template>

<script setup>
import { RouterLink } from 'vue-router';

</script>

<style scoped>

.custom-footer {
  background-color: #BBE1A3;
  color: var(--black);
  font-size: 24px;
}

.footer-items {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
}

.busca-pet {
  color: var(--primary-color);
}

.custom-row {
  color: var(--black);
  display: flex;
  cursor: pointer;
}

.custom-row:hover {
  background-color: var(--secondary-color);
  padding: 16px;
  border-radius: 10px;
}

</style>