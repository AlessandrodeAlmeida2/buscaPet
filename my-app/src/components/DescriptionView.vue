<script setup>
  import { ref, onMounted } from 'vue'
  import { supabase } from '../supabase'
  import { useRouter, useRoute } from 'vue-router';

  const router = useRouter()
  const route = useRoute() // use useRoute to access the current route
  const getId = route.params.getId // use getId instead of itemId

  const item = ref(null)

  onMounted(async () => {
    const { data } = await supabase.from('tabela1').select().eq('id', getId)
    item.value = data[0]
    console.log(getId)
  })
</script>

<template>
    <div class="container-description" v-if="item">
        <img :src="item.photo_url" alt="Country Image" />
        <div class="text-description">
            Situação: {{ item.situation }}<br>
            Nome: {{ item.name }}<br>
            Gênero: {{ item.genero }}<br>
            Espécie: {{ item.specie }}<br>
            Descrição:<br>
            {{ item.description }}<br>
            Recompensa: {{ item.recompensa }}
        </div>
    </div>
    <div v-else>
    Carregando...
  </div>
</template>

<style>
.container-description {
    display: flex;
    align-items: center;
    flex-direction: column;
}

.container-description img {
    width: 400px;
}

.text-description {
    width: 400px;
}
</style>
