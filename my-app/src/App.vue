<template>
  <header>
    <div class="wrapper">      
      <div class="logo">
        <img src="@/assets/img/OIG2.png" alt="Logo">
      </div>
      <nav v-if="route.name != 'about'">        
        <div v-if="showNav" class="nav-links">
          <div class="close" @click="showNav = !showNav">X</div>
          <RouterLink class="separator1" to="/home">Início</RouterLink>
          <RouterLink class="separator2" to="/read">Buscar um pet</RouterLink>
          <RouterLink class="separator3" to="/create">Registrar um pet</RouterLink>
          <RouterLink class="separator6" to="/account"><i class="fa-solid fa-user"></i></RouterLink>
          <RouterLink v-if="!isLoggedIn" class="separator4" to="/signup">Cadastre-se</RouterLink>
          <RouterLink v-if="!isLoggedIn" class="separator5" to="/login">Entrar</RouterLink>
          <a v-else class="separator6" @click="signOut">Sair</a>
          <!-- Botão de fechar -->
          
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
  
    <footer>
      <FooterView/>
    </footer>  
  
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
header {
  background-color: var(--primary-color);
  height: 16%;
  display: flex;
}

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
  display: flex;
  justify-content: flex-end;
}

nav {
  display: flex;
  justify-content: space-between; 
  gap: 8px;
}

.nav-links {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 32px;
  margin-left: 80px;
  font-size: 20px;
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

.separator5 {
  text-align: center;
  font-size: 20px;
  gap: 8px;
  color: var(--text-color);
  background-color: var(--secondary-color);
  margin-left: 6em;
  padding: 16px;
  border-radius: 24px;
  animation: zoomIn 6s ease forwards;
}

.separator6 {
  order: 2;
  text-align: center;
  font-size: 16px;
  gap: 8px;
  border: 2px solid var(--secondary-color);
  color: var(--text-color);
  background-color: var(--secondary-color);
  padding: 16px;
  border-radius: 32px;
  animation: zoomIn 7s ease forwards;
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

.v-application__wrap {
    min-height: 10dvh;
    height: 300px;
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
    margin: 12% 10% 0 15%;

  }

  .nav-links {
    position: fixed;
    background-color: #BBE1A3;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-left: 0;
    width: 55%;
    transform: translateX(-45%);
    transition: transform 0.3s ease-in-out;
    font-size: 1em;
  }

  .nav-links.show-nav {
    transform: translateX(0%);
  }

  .nav-links span {
    display: none;
  }

  .separator1,
  .separator2,
  .separator3,
  .separator4 {
    color: var(--vt-c-black-soft);
  }

  .separator5 {
    font-size: 1em;
    padding: 0 20px;
    margin: 0;
    color: var(--vt-c-black-soft);
  }

  .separator6 {
    font-size: 1.5em;
    padding: 8px;
    color: var(--vt-c-black-soft);
    margin-bottom: 20px;
  }

  .hamburger {
    display: block;
  }

  .close {
    font-size: 20px;
    display: block;
    position: relative;
    top: 10px;
    right: 65px;
    color: black;
    font-weight: 600;
  }

}

</style>
