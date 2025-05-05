<template>
    <div class="container-read">
        <h1>Animais para Adoção</h1>
      <div class="option">
        <!-- <v-select
          v-model="categoria"
          label="Categorias"
          :items="[' ', 'Perdido', 'Encontrado']"
          variant="solo-filled"
        ></v-select> -->
      </div>
      <ul>
        <li v-for="item in items" :key="item.id">
            <a @click="getItem(item.id)">
              <h3>{{ item.city }}</h3>
              <img :src="item.photo_url" alt="Image" />
              <h3 class="bottom">Nome: {{ item.name }}</h3><br>
            </a>
        </li>
      </ul>

      <div class="separador">
        <span>Ou</span>
      </div>

      <div class="cadastro">
        <h2>Cadastre um animal para adoção</h2>
        <v-btn rounded="lg" color="hsla(160, 100%, 37%, 1)" @click="cadastroAdocao">Cadastrar</v-btn>
      </div>
      <div class="back">
        <v-btn rounded="lg" color="hsla(160, 100%, 37%, 1)" @click="goBack">Voltar</v-btn>
      </div>
    </div>
  </template>
    
    <script setup>
      import { ref, onMounted } from 'vue'
      import { supabase } from '../supabase'
      import { useRouter } from 'vue-router'
      import useItems from '@/Composable/useItems'
  
      const { items, categoria, getItems2 } = useItems(' ')
      const getId = ref(null)
      const router = useRouter()
  
      function getItem(id) {
        getId.value = id
        router.push({ name: 'description2', params: { getId: getId.value } })
      }

      function cadastroAdocao() {
        router.push('/cadastro_adocao')
      }
      
      function goBack() {
        router.go(-1);
      }
  
      onMounted(async () => {
        await getItems2()
      })
    </script>
  
  <style>
  .option {
    width: 300px;
    margin-left: 20%;
    margin-top: 80px;
    animation: slideLeft 2s ease forwards;
  }
  
  .container-read {
    margin-bottom: 50px;
  }
  
  .container-read h1 {
    text-align: center;
    margin-top: 50px;
    animation: slideLeft 2s ease forwards;
  }

  .separador {
    text-align: center;
    margin-top: 20px;
    animation: slideLeft 2s ease forwards;
  }

  .separador span {
    padding: 10px;
    border-radius: 5px;
    animation: slideLeft 2s ease forwards;
    color: var(--black-color);
    font-weight: bold;
    font-size: 20px;
    border-radius: 5px;
    padding: 10px;
    animation: slideLeft 2s ease forwards;
  }

  .cadastro {
    margin: auto;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 30%;
    margin-top: 20px;
    text-align: center;
    animation: slideLeft 2s ease forwards;
    margin-bottom: 20px;
  }

  .back {
    margin-top: 20px;
    text-align: right;
    animation: slideLeft 2s ease forwards;
  }
  
  .container-read ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 70px;
  }
  
  .container-read li {
    display: flex;
    flex-direction: column;
    margin: 10px;
    width: 250px;
    height: 350px;
    overflow: hidden;
    animation: zoomIn 2s ease forwards;
    
  }
  
  .container-read li img {
    border-radius: 5px;
    width: 250px;
    height: 220px;
    object-fit: cover;
  }
  
  .container-read li a {
    display: flex;
    flex-direction: column;
    background: hsla(160, 100%, 37%, 1);
    border: 5px solid hsla(160, 100%, 37%, 1);
    border-radius: 10px;
    color: #fff;
    height: 100%;
  }
  
  .container-read h3 {
    text-align: center;
    margin-top: 10px;
  }
  
  @media (max-width: 760px) {
  .option {
    width: 200px;
    margin-left: 30px;
  }

  .container-read h1 {
    font-size: 2em;
    margin-top: 80px;
  }
  
    .container-read ul {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  
    .container-read li {
      width: 80%;
    }
    .container-read li img {
      width: 105%;
    }

    .cadastro {
      width: 80%;
    }
  }
  </style>
    