<template>
  <header>
    <div class="wrapper">      
      <div class="logo" v-if="route.name === 'home'">
        <img src="@/assets/img/OIG2.png" alt="Logo">
        <h1 class="tittle alfa-slab-one-regular">Encontre seu pet perdido</h1>
      </div>
      <div class="header" v-else-if="route.name === 'login'">
        <img src="@/assets/img/header.jpeg" alt="Logo">
      </div>
      <div class="header" v-else-if="route.name === 'read'">
        <img src="@/assets/img/header5.png" alt="Logo">
      </div>
      <div class="header" v-else-if="route.name === 'create'">
        <img src="@/assets/img/header2.jpeg" alt="Logo">
      </div>
      <div class="header" v-else-if="route.name === 'description'">
        <img src="@/assets/img/header4.jpeg" alt="Logo">
      </div>
      <div class="header" v-else-if="route.name === 'update'">
        <img src="@/assets/img/header3.png" alt="Logo">
      </div>
      <div class="header" v-else-if="route.name === 'contato'">
        <img src="@/assets/img/header6.png" alt="Logo">
      </div>
      <nav>        
        <div v-if="showNav" class="nav-links">
          <RouterLink class="separator" to="/home">Home</RouterLink><span> | </span>
          <RouterLink class="separator" to="/login">Login</RouterLink><span> | </span>
          <RouterLink class="separator" to="/read">Visualizar</RouterLink><span> | </span>
          <RouterLink class="separator" to="/create">Postar</RouterLink>
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
    <footer>
      <FooterView/>
    </footer>  
  </main>
</template>

<script setup>
  import { RouterLink, RouterView, useRoute } from 'vue-router';
  import { ref, onMounted, watch } from 'vue';
  import FooterView from '@/components/FooterView.vue';

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
.header img {
    width: 700px;
    margin-left: 60px;
}

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

.nav-links a {
  padding: 5px  13px;
}

.nav-links span {
    color: hsla(160, 100%, 37%, 1);
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

div.header img {
    width: 90%;
    margin-left: 0;
}

  nav {
    margin: 20px 30px 0 0;
  }

  .nav-links {
    position: fixed;
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

  .nav-links span {
    display: none;
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
