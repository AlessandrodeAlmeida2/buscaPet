<script setup lang="ts">

</script>

<template>
  
  <div class="container-home">
    <div class="botao">
      <h1 class="tittle alfa-slab-one-regular">Aqui você pode <strong>encontrar o seu pet perdido</strong> ou <strong>ajudar alguém nessa missão!</strong></h1>
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
  <div>
    <CarouselView />
    <Carousel2View />
  </div>
  
</template>

<style>
div.container-home {
  margin: 4%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}


.container-home h1 {
  color: var(--black);
  font-size: 48px;
  font-family: "Alfa Slab One", serif;
  font-weight: 600;
  animation: slideLeft 3s forwards;
}

strong {
  color: var(--primary-color);
}

.botao {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  width: 50%;
}

.bottons {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

div.container-home img.dog {
  width: 50%;
  animation: zoomIn 3s ease forwards;
}

#find img, #search img {
  width: 50px;
  height: 50px;
  margin-top: 5px;
}

#search {
  display: flex;
  align-items: center;
  background: hsla(160, 100%, 37%, 1);
  margin: 5px;
  padding: 5px;
  border-radius: 10px;
  color: #fff;
}

#find {
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
    display: none;
  }

  h1.tittle {
    text-align: center;
    width: 80%;
    font-size: 2em;
    font-family: sans-serif;
  }

  .bottons {
    display: flex;
    flex-direction: row;
    margin-right: 0;
  }

  .botao {
    margin-top: 90px;
    width: 100%;
  }

  div#search, div#find {
    margin: 0;
    width: 230px;
  }

  #find img, #search img {
    width: 30%;
    height: auto;
    margin-top: 5px;
  }
}

@media (min-width: 769px) and (max-width: 970px) {
  div.container-home {
  display: flex;
  flex-direction: column;
  margin: 0 10%;
  align-items: center;
  }

  .bottons {
    display: flex;
    flex-direction: column;
  }

  #find img, #search img {
    width: 40%;
    margin-top: 5px;
  }
}

@media (min-width: 971px) and (max-width: 1200px) {
  div.container-home {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  }

  div.container-home img.dog {
  width: 50%;
  margin: 0 auto;
  }

  h1.tittle {
    font-size: 3em;
    font-family: sans-serif;
  }

  .bottons {
    display: flex;
    flex-direction: column;
    margin-right: 0;
  }

  div.botao {
    margin: 5%;
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
