<template>
  <header>
    <div class="wrapper">      
      <div class="logo">
        <img src="@/assets/img/OIG2.png" alt="Logo">
      </div>
      <nav v-if="route.name != 'about'">        
        <div v-if="showNav" class="nav-links">
          <div class="close" @click="showNav = !showNav"><i>Menu</i></div>
          <RouterLink class="separator1" to="/home">Início</RouterLink>
          <RouterLink class="separator2" to="/read">Buscar um pet</RouterLink>
          <RouterLink class="separator3" to="/create">Registrar um pet</RouterLink>
          <RouterLink v-if="!isLoggedIn" class="separator6" to="/login"><i class="fa-solid fa-user"></i>Entrar</RouterLink>
          <RouterLink v-else class="separator6" to="/account"><i class="fa-solid fa-user"></i>Minha conta</RouterLink>                   
          <RouterLink v-if="!isLoggedIn" class="separator4" to="/signup">Cadastre-se</RouterLink>
          <a v-else class="separator4" @click="signOut">Sair</a>
        </div>
        <div class="hamburger" @click="showNav = !showNav">
          <i>Menu</i>
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

  onMounted(async () => {
    const { user } = await supabase.auth.getSession();
    isLoggedIn.value = user ? true : false;
    
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
}

div.logo {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px 50px;
  animation: slideRight 3s forwards;
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
  animation: zoomIn 1s forwards;
}

.separator2 {
  animation: zoomIn 2s forwards;
}

.separator3 {
  animation: zoomIn 3s forwards;
}

.separator4 {
  text-align: center;
  font-size: 20px;
  gap: 8px;
  color: var(--text-color);
  background-color: var(--secondary-color);
  margin-left: 6em;
  padding: 16px;
  border-radius: 24px;
  animation: zoomIn 4s forwards;
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
  animation: zoomIn 5s forwards;
}

.hamburger, .close {
  display: none;
  cursor: pointer;
}

.v-application__wrap {
    min-height: 10dvh;
    height: 300px;
}

@media (max-width: 768px) {
  div.logo {
    display: flex;
    align-items: center;
  }

  nav {
    margin: 12% 10% 0 15%;

  }

  .nav-links {
    position: fixed;
    bottom: 80px; 
    right: 80px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4); 
    z-index: 9999; 
    background-color: var(--primary-color);
    opacity: 0.8;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    padding: 24px 40px;
    gap: 10px;
    margin-left: 0;
    font-size: 2em;
  }

  .nav-links.show-nav {
    transform: translateX(0%);
  }

  .nav-links span {
    display: none;
  }

  .separator1,
  .separator2,
  .separator3 {
    color: var(--text-color);
    font-size: 0.5em;
  }

  .separator4 {
    margin: 0 auto;
    font-size: 0.5em;
    color: var(--secondary-color);
    background-color: transparent;
    padding: 0;
    order: 2;
  }

  .separator6 {
    margin: 0 auto;
    font-size: 0.5em;
    color: var(--secondary-color);
    background-color: transparent;
    border: none;
    padding: 0;
  }

  .hamburger {
    font-size: 1em;
    color: #fff;
    height: 80px;
    width: 80px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 40px; 
    right: 40px;
    background-color: var(--primary-color);
    padding: 16px;
    border-radius: 50%; 
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4); 
    z-index: 9999; 
}

  .close {
    font-size: 1.5em;
    color: white; 
    font-weight: 600;
  }
}

</style>
