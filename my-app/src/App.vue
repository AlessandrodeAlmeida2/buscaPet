<script setup>
  import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="home">Home</RouterLink>
        <RouterLink to="login">Login</RouterLink>
        <RouterLink to="secret">Secret</RouterLink>
        <RouterLink to="read">Visualizar</RouterLink>
        <RouterLink to="create">Postar</RouterLink>
        <RouterLink to="update">Atualizar</RouterLink>
        <RouterLink to="upload">Enviar Foto</RouterLink>
      </nav>
    </div>
    <div class="content">
      <RouterView/>
    </div>
</header>
</template>

<style>

</style>