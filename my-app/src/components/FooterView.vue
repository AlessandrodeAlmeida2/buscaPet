<template>
  <v-app>
    <v-footer class="bg-grey-lighten-1 custom-footer">
      <v-row justify="center" no-gutters>
        <RouterLink class="custom-row" to="/home">Home</RouterLink>
        <RouterLink class="custom-row" to="/About">Quem somos?</RouterLink>
        <a class="custom-row" href="https://alessandrodealmeida.dev.br/" target="_blank">Blog</a>
        <RouterLink class="custom-row" to="/contact">Contact us</RouterLink>
        <v-col class="text-center mt-4 custom-date" cols="12">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import { RouterLink } from 'vue-router';

</script>

<style scoped>
.custom-footer {
  margin-top: 50px;
}

.custom-row {
  margin: 0 5%;
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

</style>