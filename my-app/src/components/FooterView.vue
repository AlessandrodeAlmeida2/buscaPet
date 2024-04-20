<template>
  <v-app>
    <v-footer class="bg-grey-lighten-1 custom-footer">
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="link in links"
          :key="link.text"
          class="mx-2"
          color="white"
          rounded="lg"
          variant="text"
          :href="link.path.startsWith('http') ? link.path : undefined"
          :to="!link.path.startsWith('http') ? link.path : undefined"
          target="_blank"
        >
          {{ link.text }}
        </v-btn>
        <v-col class="text-center mt-4" cols="12">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    links: [
      {text: 'Home', path: '/home'},
      {text: 'About Us', path: '/about'},
      {text: 'Team', path: '/team'},
      {text: 'Services', path: '/services'},
      {text: 'Blog', path: 'https://alessandrodealmeida.dev.br/'},
      {text: 'Contact Us', path: 'contact'},
    ],
  }),
}
</script>

<style scoped>.custom-footer {
  margin-top: 50px;
}
</style>