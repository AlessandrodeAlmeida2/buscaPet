<template>
    <div>
      <label for="">Categoria: </label>
      <select v-model="categoria">
          <option value="todas">Todas</option>
          <option value="perdido">Animais Perdidos</option>
          <option value="encontrato">Animais Procurando o tutor</option>
      </select><br>
    </div>
    <ul>
      <li v-for="item in items" :key="item.id">
        <img :src="item.photo_url" alt="Country Image" />
        Situação: {{ item.situation }}<br>
        Nome: {{ item.name }}<br>
        Gênero: {{ item.genero }}<br>
        Espécie: {{ item.specie }}<br>
        Descrição:<br>
        {{ item.description }}<br>
        Recompensa: {{ item.recompensa }}
        
        <button @click="deleteItem(item.id)">Delete</button>
        <button @click="updateItem(item.id)">Update</button>
      </li>
    </ul>
  </template>
  
  <script setup>
    import { ref, onMounted, provide, watch } from 'vue'
    import { supabase } from '../supabase'
    import { useRouter } from 'vue-router'

    const items = ref([])
    const itemId = ref(null)
    const router = useRouter()
    const categoria = ref('todas')
  
    provide('itemId', itemId)
  
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

  
    onMounted(() => {
      getItems()
    })
  </script>

<style>
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
  width: 200px;
  border: 2px solid hsla(160, 100%, 37%, 1);
}

li img {
  width: 196px;
}

@media (max-width: 768px) {
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
  