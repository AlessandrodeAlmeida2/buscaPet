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
      .update({ name: item.value.name, description: item.value.description })
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
    <label for="name">Nome</label>
    <input id="name" v-model="item.name" />

    <label for="description">Descrição</label>
    <input id="description" v-model="item.description" />

    <button @click="updateItem">Atualizar</button>
  </div>
</template>
