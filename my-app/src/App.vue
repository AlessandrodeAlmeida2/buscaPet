<script setup>
  import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <div>
          <RouterLink to="home">Home</RouterLink>
          <RouterLink to="login">Login</RouterLink>
          <RouterLink to="read">Visualizar</RouterLink>
          <RouterLink to="create">Postar</RouterLink>
        </div>
      </nav>
    </div>
    <div class="content">
      <RouterView/>
    </div>
</header>
</template>

<style>

</style>