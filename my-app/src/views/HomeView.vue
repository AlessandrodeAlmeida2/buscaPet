<script setup lang="ts">

</script>

<template>
  <h1 class="tittle"><a href="/anunciar-pet-perdido">Encontre seu pet perdido</a></h1>
  <h2 >Utilize ferramentas de busca de pets. Crie seu anúncio gratuito agora mesmo para ter acesso ao<i> Painel de Busca</i>.</h2>
  <div class="container">
    <div id="search">
      <img alt="lupa" width="45" src="../assets/img/lupa_branca.jpg" style="color: transparent;">
      <div class="flex flex-col">
        <p><RouterLink to="/buscar-pet">Perdi meu Pet</RouterLink></p>
        <p>Quero buscar meu pet</p>
      </div>
    </div>
    <div id="find">
      <img alt="lupa" width="45" src="../assets/img/lupa_verde.jpg" style="color: transparent;">
      <div class="flex flex-col">
        <p><RouterLink to="/buscar-tutor">Achei um Pet</RouterLink></p>
        <p>Quero buscar o tutor</p>
      </div>
    </div>
  </div>
</template>

<style>
div.container {
  display: flex;
  align-items: flex-start;
  margin-left: 30px;
}

h1.tittle {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h2 {
  margin: 10px;
}

div#search {
  display: flex;
  background: hsla(160, 100%, 37%, 1);
  margin: 5px;
  padding: 5px;
  border-radius: 10px;
  color: #fff;
  height: 90px;
}

div#find {
  display: flex;
  border: solid 1px  hsl(160, 100%, 37%);
  margin: 5px;
  padding: 5px;
  border-radius: 10px;
  color: hsla(160, 100%, 37%, 1);
  height: 90px;
}

#search a {
  color: #fff;
}
</style>
