<template>
    <ul>
      <li v-for="item in items" :key="item.id">
        <img :src="item.photo_url" alt="Country Image" />
        {{ item.name }}: {{ item.description }}
        
        <button @click="deleteItem(item.id)">Delete</button>
        <button @click="updateItem(item.id)">Update</button>
      </li>
    </ul>
  </template>
  
  <script setup>
    import { ref, onMounted, provide } from 'vue'
    import { supabase } from '../supabase'
    import { useRouter } from 'vue-router'

    const items = ref([])
    const itemId = ref(null)
    const router = useRouter()
  
    provide('itemId', itemId)
  
    async function getItems() {
      const { data } = await supabase.from('tabela1').select()
      items.value = data
    }
  
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
      console.log(itemId.value)
    }

  
    onMounted(() => {
      getItems()
    })
  </script>

<style>
ul {
  display: flex;
  margin-top: 30px;
}

li {
  display: flex;
  flex-direction: column;
  margin: 5px;
}

@media (max-width: 768px) {
  ul {
    display: flex;
    flex-direction: column;
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
  