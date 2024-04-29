<template>
  <div class="container-read">
    <div class="option">
      <v-select
        v-model="categoria"
        label="Categorias"
        :items="['todas', 'perdido', 'encontrado']"
        variant="solo-filled"
      ></v-select>
    </div>
    <ul>
      <li v-for="item in items" :key="item.id">
          <a @click="getItem(item.id)">
            <h3>{{ item.city }}</h3>
            <img :src="item.photo_url" alt="Image" />
            <h3>Situação: {{ item.situation }}</h3><br>
          </a>
      </li>
    </ul>
  </div>
</template>
  
  <script setup>
    import { ref, onMounted, provide, watch } from 'vue'
    import { supabase } from '../supabase'
    import { useRouter } from 'vue-router'

    const items = ref([])
    const itemId = ref(null)
    const getId = ref(null)
    const router = useRouter()
    const categoria = ref('todas')
  
    provide('itemId', itemId)
    provide('getId ', getId)
  
    async function getItems() {
    let query = supabase.from('tabela1').select();
  
      if (categoria.value !== 'todas') {
        query = query.eq('situation', categoria.value);
      }
      
      const { data } = await query;
      items.value = data;
    }

    watch(categoria, getItems);

    function getItem(id) {
      getId.value = id
      router.push({ name: 'description', params: { getId: getId.value } })
    }


    onMounted(() => {
      getItems()
    })
  </script>

<style>
.container-read {
  background-color: rgba(218, 218, 218, 0.322);
}

.option {
  width: 300px;
  margin-left: 20%;
  animation: slideLeft 2s ease forwards;
}

.container-read ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;
}

.container-read li {
  display: flex;
  flex-direction: column;
  margin: 10px;
  width: 250px;
  animation: zoomIn 2s ease forwards;
  
}

.container-read li img {
  border-radius: 5px;
  width: 99%;
}

.container-read li a {
  background: hsla(160, 100%, 37%, 1);
  border: 5px solid hsla(160, 100%, 37%, 1);
  border-radius: 10px;
  color: #fff;
}

.container-read h3 {
  text-align: center;
  margin-top: 10px;
}

.container-read li .bottons {
  display: flex;
  flex-direction: row;
  align-items: space-around;
}

.container-read .v-btn {
  margin: 2px;
}

@media (max-width: 768px) {
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
}
</style>
  