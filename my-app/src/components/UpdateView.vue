<script setup>
  import { ref, onMounted } from 'vue'
  import { supabase } from '../supabase'
  import { useRouter } from 'vue-router';

  const route = useRouter()
  const itemId = route.currentRoute.value.params.itemId


  const item = ref(null)

  onMounted(async () => {
    const { data } = await supabase.from('tabela1').select().eq('id', itemId)
    item.value = data[0]
    console.log(itemId)
  })

  const updateItem = async () => {
    const { data, error } = await supabase
      .from('tabela1')
      .update({ name: item.value.name, description: item.value.description, recompensa: item.value.recompensa, genero: item.value.genero, specie: item.value.specie, situation: item.value.situation })
      .eq('id', itemId)

    if (error) {
      console.log(error)
    } else {
      route.push('/read');
    }
  }
</script>

<template>
  <div v-if="item">

    <label for="situation">Situação</label>
    <input id="situation" v-model="item.situation" />

    <label for="name">Nome</label>
    <input id="name" v-model="item.name" />

    <label for="description">Descrição</label>
    <input id="description" v-model="item.description" />

    <label for="genero">Gênero</label>
    <input id="genero" v-model="item.genero" />

    <label for="specie">Espécie</label>
    <input id="specie" v-model="item.specie" />
    
    <label for="recompensa">recompensa</label>
    <input id="recompensa" v-model="item.recompensa" />

    <button @click="updateItem">Atualizar</button>
  </div>
</template>
