<template>
  <header>
    <div :class="{'wrapper': true, 'active-class': route.name === 'read' || route.name === 'description'}" >      
      <div class="logo" v-if="route.name === 'home'">
        <img src="@/assets/img/OIG2.png" alt="Logo">
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
        <img src="@/assets/img/header6.png" alt="Logo">
      </div>
      <div class="header" v-else-if="route.name === 'update'">
        <img src="@/assets/img/header3.png" alt="Logo">
      </div>
      <div class="header" v-else-if="route.name === 'contato'">
        <img src="@/assets/img/header4.jpeg" alt="Logo">
      </div>
      <div class="header" v-else-if="route.name === 'account'">
        <img src="@/assets/img/header7.jpeg" alt="Logo">
      </div>
      <div class="header" v-else-if="route.name === 'upload'">
        <img src="@/assets/img/header8.jpeg" alt="Logo">
      </div>
      <nav v-if="route.name != 'about'">        
        <div v-if="showNav" class="nav-links">
          <RouterLink class="separator1" to="/home">Início</RouterLink>
          <RouterLink class="separator3" to="/read">Buscar um pet</RouterLink>
          <RouterLink class="separator3" to="/read">Registrar um pet</RouterLink>
          <RouterLink class="separator4" to="/account"><i class="fa-solid fa-user"></i></RouterLink>
          <RouterLink v-if="!isLoggedIn" class="separator2" to="/login">Entrar</RouterLink>
          <a v-else class="separator2" @click="signOut">Sair</a>
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
  import { supabase } from './supabase';
  import FooterView from '@/components/FooterView.vue';

  const isLoggedIn = ref(false)

  supabase.auth.onAuthStateChange((event, session) => {
    isLoggedIn.value = event === 'SIGNED_IN' || event === 'USER_UPDATED';
  });

  //logout
  async function signOut() {
      const { error } = await supabase.auth.signOut();

      if (error) {
          console.log(error);
      } else {
          console.log("Logout has been successful")
      }
  }

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
    width: 600px;
    margin-left: 60px;
    animation: slideRight 3s ease forwards;
}

div.logo {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px 50px;
  animation: slideRight 2s ease forwards;
}

div.wrapper {
  display: flex;
  justify-content: space-between;
}

.active-class {
  background-color: rgba(218, 218, 218, 0.322);
}

nav {
  display: flex;
  justify-content: space-between; 
  gap: 8px;
}

.separator1 {
  animation: zoomIn 2s ease forwards;
}

.separator2 {
  animation: zoomIn 3s ease forwards;
}

.separator3 {
  animation: zoomIn 4s ease forwards;
}

.separator4 {
  animation: zoomIn 5s ease forwards;
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
    background-color: #BBE1A3;
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
