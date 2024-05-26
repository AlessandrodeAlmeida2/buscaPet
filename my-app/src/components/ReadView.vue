<template>
  <div class="container-read">
    <div class="option">
      <v-select
        v-model="categoria"
        label="Categorias"
        :items="[' ', 'Perdido', 'Encontrado']"
        variant="solo-filled"
      ></v-select>
    </div>
    <ul>
      <li v-for="item in items" :key="item.id">
          <a @click="getItem(item.id)">
            <h3>{{ item.city }}</h3>
            <img :src="item.photo_url" alt="Image" />
            <h3 class="bottom">Situação: {{ item.situation }}</h3><br>
          </a>
      </li>
    </ul>
  </div>
</template>
  
  <script setup>
    import { ref, onMounted } from 'vue'
    import { supabase } from '../supabase'
    import { useRouter } from 'vue-router'
    import useItems from '@/Composable/useItems'

    const { items, categoria, getItems } = useItems(' ')
    const getId = ref(null)
    const router = useRouter()

    function getItem(id) {
      getId.value = id
      router.push({ name: 'description', params: { getId: getId.value } })
    }


    onMounted(async () => {
      await getItems()
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
}
</style>
  