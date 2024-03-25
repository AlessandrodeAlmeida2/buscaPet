<script setup>
  import { ref, onMounted } from 'vue'
  import { supabase } from '../supabase'

  let name = ref('');
  let description = ref ('');


  async function create() {
    const { error } = await supabase.from('tabela1').insert({ name: name.value ,description: description.value })
  }

  onMounted(() => {
    
  })
</script>

<template>
    <div class="inputContainer">
        <label for="name">Username</label>
        <input type="name" id="name" v-model="name">
    </div>
    <div class="inputContainer">
        <label for="description">Descrição</label>
        <input type="text_area" id="description" v-model="description">
    </div>
    <div class="buttonContainer">
        <button @click="create">Enviar</button>
    </div>
</template>