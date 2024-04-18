<template>
  <header>
    <div class="wrapper">
      <div class="logo" v-if="route.name === 'home'">
        <img src="@/assets/img/OIG2.png" alt="Logo">
        <h1 class="tittle alfa-slab-one-regular">Encontre seu pet perdido</h1>
      </div>
      <nav>        
        <div v-if="showNav" class="nav-links">
          <RouterLink to="/home">Home</RouterLink>
          <RouterLink to="/login">Login</RouterLink>
          <RouterLink to="/read">Visualizar</RouterLink>
          <RouterLink to="/create">Postar</RouterLink>
          <!-- Botão de fechar -->
          <div class="close" @click="showNav = !showNav">X</div>
        </div>
        <div class="hamburger" @click="showNav = !showNav">
          <span></span>
          <span></span>
          <span></span>
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

<script setup>
  import { RouterLink, RouterView, useRoute } from 'vue-router';
  import { ref, onMounted, watch } from 'vue';

  const showNav = ref(window.innerWidth > 768);
  let route = useRoute();

  watch(route, (newRoute) => {
    route = newRoute;
  });

  onMounted(() => {
    window.addEventListener('resize', () => {
      showNav.value = window.innerWidth > 768;
    });
  });
</script>

<style>
div.logo {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px 50px;
}

div.wrapper {
  display: flex;
  justify-content: space-between;
}

nav {
  margin: 20px 50px;
}

.hamburger, .close {
  display: none;
  cursor: pointer;
}

.hamburger span {
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  background-color: #333;
}

@media (max-width: 768px) {
  div.logo {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  div.wrapper {
    display: flex;
    justify-content: flex-end;
  }

  nav {
    margin: 20px 30px 0 0;
  }

  .nav-links {
    position: absolute;
    height: 92vh;
    top: 8vh;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    transform: translateX(-50%);
    transition: transform 0.3s ease-in-out;
  }

  .nav-links.show-nav {
    transform: translateX(0%);
  }

  .hamburger {
    display: block;
  }

  .close {
    font-size: 20px;
    display: block;
    position: absolute;
    top: 10px;
    left: 10px;
    color: black;
    font-weight: 600;
  }
}
</style>
