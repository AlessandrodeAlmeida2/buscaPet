<template>
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
            <img :src="item.photo_url" alt="Country Image" />
            Situação: {{ item.situation }}<br>
          </a>
          <div class="bottons">
            <v-btn rounded="lg" dark color="hsla(160, 100%, 37%, 1)" @click="deleteItem">Deletar</v-btn>
            <v-btn id="delete" rounded="lg" dark color="hsla(160, 100%, 37%, 1)" @click="() => updateItem(item.id)">Atualizar</v-btn>
          </div>
      </li>
    </ul>
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
  
    async function deleteItem(id) {
      const item = items.value.find(item => item.id === id);
      if (item) {
        // Extrai o nome do arquivo da URL
        const path = item.photo_url.split('/').pop();

        // Remove a imagem do bucket do Supabase
        await supabase.storage.from('PI_Bucket').remove([path]);

        // Deleta o item da tabela
        await supabase.from('tabela1').delete().eq('id', id);
        getItems(); // Atualiza a lista após deletar o item
      }
    }

    function updateItem(id) {
      itemId.value = id
      router.push({ name: 'update', params: { itemId: itemId.value } }) // Passa itemId como um parâmetro de rota
    }

    function getItem(id) {
      getId.value = id // Defina getId.value em vez de itemId.value
      router.push({ name: 'description', params: { getId: getId.value } }) // Agora getId.value contém o valor correto
    }


    onMounted(() => {
      getItems()
    })
  </script>

<style>
.option {
  width: 300px;
  margin-left: 20%;
}

ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;
}

li {
  display: flex;
  flex-direction: column;
  margin: 10px;
  width: 250px;
  
  
}

li img {
  border-radius: 5px;
  width: 99%;
}

li a {
  background: hsla(160, 100%, 37%, 1);
  border: 5px solid hsla(160, 100%, 37%, 1);
  border-radius: 10px;
  color: #fff;
}

li .bottons {
  display: flex;
  flex-direction: row;
  align-items: space-around;
}

.v-btn {
  margin: 2px;
}

@media (max-width: 768px) {
.option {
  width: 200px;
  margin-left: 30px;
}

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  li {
    width: 80%;
  }
}
</style>
  