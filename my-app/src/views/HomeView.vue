<script setup lang="ts">

</script>

<template>
  
  <div class="container-home">
    <div class="botao">
      <h3 class="subtittle">Utilize ferramentas de busca de pets. Crie seu anúncio gratuito agora mesmo para ter acesso ao<i> Painel de Busca</i>.</h3>
      <div class="bottons">
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
    </div>
  <img class="dog" alt="" src="../assets/img/dog2.png">
  </div> 
  
</template>

<style>
div.container-home {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
}

h1.tittle {
  color: hsla(160, 100%, 37%, 1);
  font-size: 60px;
  font-family: "Alfa Slab One", serif;
  font-weight: 600;
  font-style: normal;
}

.subtittle {
  margin: auto;
}

.bottons {
  display: flex;
  flex-direction: column;
  margin-right: 50%;
}

div.botao {
  display: flex;
  flex-direction: column;
  margin: 10px 90px;
}

div.container-home img.dog {
  width: 50%;
  margin: 0 30px 15px 30px;
}

#find img, #search img {
  width: 50px;
  height: 50px;
  margin-top: 5px;
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
  div.container-home {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  }

  div.container-home img.dog {
  width: 90%;
  padding-top: 8px;
  margin: 0 auto;
}

h1.tittle {
  font-size: 2em;
  font-family: sans-serif;
}

.bottons {
  display: flex;
  flex-direction: column;
  margin-right: 0;
}

div.botao {
  margin: 10%;
}

div#search, div#find {
  margin-right: 30%;
}

#find img, #search img {
  width: 40%;
  margin-top: 5px;
}

}
</style>
