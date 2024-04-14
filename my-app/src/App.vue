<script setup>
  import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <div>
          <img src="@/assets/img/OIG2.png" alt="Logo">
        </div>
        <div>
          <RouterLink to="home">Home</RouterLink>
          <RouterLink to="login">Login</RouterLink>
          <RouterLink to="read">Visualizar</RouterLink>
          <RouterLink to="create">Postar</RouterLink>
        </div>
      </nav>
    </div>
  </header>
  <main>
    <div class="content">
      <RouterView/>
    </div>
  </main>
</template>

<style>

</style>
