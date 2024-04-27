<template>
  <v-app>
    <v-footer class="custom-footer">
      <v-row class="row" justify="center">
        <h3 class="busca-pet">BuscaPet</h3>
        <RouterLink class="custom-row" to="/home">Home</RouterLink>
        <RouterLink class="custom-row" to="/About">Quem somos?</RouterLink>
        <a class="custom-row" href="https://alessandrodealmeida.dev.br/" target="_blank">Blog</a>
        <v-col class="text-center">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-col>
      </v-row>     
    </v-footer>
    
  </v-app>
</template>

<script setup>
import { RouterLink } from 'vue-router';

</script>

<style scoped>

footer {
  height: 10%;
}

.custom-footer {
  background-color: #BBE1A3;
  color: var(--black);
  font-size: 32px;
  text-align: center;
}

.busca-pet {
  color: var(--primary-color);
  display: flex;
  align-items: center;
  margin-right: 10%;
}

.custom-row {
  margin: 0 2%;
  color: var(--black);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.custom-row:hover {
  background-color: #BBE1A3;
  border-radius: 10px;
}

.v-footer {
  display: flex;
  flex-direction: column;
}

</style>