<script setup lang="ts">

</script>

<template>
  <h1 class="tittle">Encontre seu pet perdido</h1>
  <h2 >Utilize ferramentas de busca de pets. Crie seu anúncio gratuito agora mesmo para ter acesso ao<i> Painel de Busca</i>.</h2>
  <div class="container">
    <div class="botao">
      <RouterLink to="/create">
        <div id="search">
            <img alt="lupa" src="../assets/img/lupa_branca.png" style="color: transparent;">
          <div class="flex">
            <h3>Perdi meu Pet</h3>
            <p>Quero buscar meu pet</p>
          </div>
        </div>
      </RouterLink>
      <RouterLink to="/create">
        <div id="find">
            <img alt="lupa" src="../assets/img/lupa_verde.png" style="color: transparent;">
          <div class="flex">
            <h3>Achei um Pet</h3>
            <p>Quero buscar o tutor</p>
          </div>
        </div>
      </RouterLink>
    </div>
  <img class="dog" alt="" src="../assets/img/dog.jpg">
  </div> 
</template>

<style>
div.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 30px;
  align-items: flex-start;
}

h1.tittle {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: hsla(160, 100%, 37%, 1);
}

h2 {
  margin: 10px;
}

div.botao {
  display: flex;
  flex-direction: column;
}

div.container img.dog {
  width: 400px;
  margin-right: 250px;
  border-radius: 70px;
  border: solid 5px hsla(160, 100%, 37%, 1);
  margin-bottom: 10px;
}

#find img, #search img {
  width: 50px;
  height: 50px;
  margin-top: 5px;
}

#search:hover {
  background: hsla(160, 100%, 37%, 0.6);
}

#find:hover {
  background: hsla(160, 100%, 37%, 0.1);
}

div#search {
  display: flex;
  align-items: center;
  background: hsla(160, 100%, 37%, 1);
  margin: 5px;
  padding: 5px;
  border-radius: 10px;
  color: #fff;
}

div#find {
  display: flex;
  align-items: center;
  background: #fff;
  border: solid 2px  hsl(160, 100%, 37%);
  margin: 5px;
  padding: 5px;
  border-radius: 10px;
  color: hsla(160, 100%, 37%, 1);
}

#search a {
  color: #fff;
}

div.flex p {
  font-size: 10px;
  margin: 0 20px 0 0;
}

@media (max-width: 768px) {
  div.container {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  }

  div.container img.dog {
  width: 80%;
  margin: 0 auto;
}
}
</style>
