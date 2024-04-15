<template>
  <header>
    <div class="wrapper">
      <nav>
        <div>
          <img src="@/assets/img/OIG2.png" alt="Logo">
        </div>
        <div v-if="showNav" class="nav-links">
          <RouterLink to="home">Home</RouterLink>
          <RouterLink to="login">Login</RouterLink>
          <RouterLink to="read">Visualizar</RouterLink>
          <RouterLink to="create">Postar</RouterLink>
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
  import { RouterLink, RouterView } from 'vue-router';
  import { ref, onMounted } from 'vue';

  const showNav = ref(window.innerWidth > 768);

  onMounted(() => {
    window.addEventListener('resize', () => {
      showNav.value = window.innerWidth > 768;
    });
  });
</script>

<style>
.content {
  margin-top: 50px;
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
  .nav-links {
    position: absolute;
    height: 92vh;
    top: 8vh;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    transform: translateX(100%);
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
  }
}
</style>
