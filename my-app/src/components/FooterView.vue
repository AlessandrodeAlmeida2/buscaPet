<template>
  <v-app>
    <v-footer class="bg-grey-lighten-1 custom-footer">
      <v-row class="row" justify="center" no-gutters>
        <RouterLink class="custom-row fx1" to="/home">Home</RouterLink>
        <RouterLink class="custom-row fx2" to="/About">Quem somos?</RouterLink>
        <a class="custom-row fx3" href="https://alessandrodealmeida.dev.br/" target="_blank">Blog</a>
        <v-col class="text-center mt-4" cols="12">
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
.custom-footer {
  margin-top: 50px;
}

.custom-row {
  margin: 0 2%;
  color: aliceblue;
  width: 120px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.custom-row:hover {
  background-color: dimgray;
  border-radius: 10px;
}

.fx1 {
  animation: slideBottom 3s ease forwards;
  animation-delay: 4s;
  visibility: hidden;
}

.fx2 {
  animation: slideBottom 5s ease forwards;
  animation-delay: 4s;
  visibility: hidden;
}

.fx3 {
  animation: slideBottom 7s ease forwards;
  animation-delay: 4s;
  visibility: hidden;
}

.v-footer {
  display: flex;
  flex-direction: column;
  padding: 200px 0 0 0;
}

</style>