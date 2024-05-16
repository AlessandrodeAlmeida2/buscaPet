<template>
  <v-app>
    <v-footer class="custom-footer">
      <v-row class="row" justify="center">
        <div class="footer-items">
          <h3 class="busca-pet">BuscaPet</h3>
          <RouterLink class="custom-row" to="/home">Início</RouterLink>
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

<script>

export default {
  methods: {
    scrollToTop(){
      window.location.reload();
    }
  }
}

</script>

<style scoped>

.custom-footer {
  background-color: #BBE1A3;
  width: 100%;
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
  padding: 25px;
  cursor: pointer;
}

.custom-row:hover {
  background-color: var(--secondary-color);
  
  border-radius: 10px;
}

@media (max-width: 768px) {
  .footer-items {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  font-size: 0.8em;
}
}

</style>