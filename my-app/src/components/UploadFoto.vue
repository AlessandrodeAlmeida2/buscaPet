<template>
  <div>
    <input type="file" @change="selectFile" />
    <button @click="updateFile(file, PI_Bucket)">Enviar</button><br>
    <img v-if="publicUrl" :src="publicUrl" alt="Uploaded file" />
    {{ publicUrl }}
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { supabase } from '../supabase'

let file = ref([])
let publicUrl = ref('')

const selectFile = (event) => {
  file.value = event.target.files[0]
}

const PI_Bucket = 'PI_Bucket';

const updateFile = async (file, storage) => {
    const fileName = file.name
    const { error } = supabase
      .storage
      .from(PI_Bucket)
      .update(fileName, file, {
        cacheControl: '3600',
        upsert: true
      })
    console.log(file.name)
    const publicUrl = await getUrlPublic(fileName, storage)
    if (error) throw error
    return publicUrl
  }

  const getUrlPublic = async () => {
    const { data, error } = await supabase
      .storage
      .from(PI_Bucket)
      .getPublicUrl(file.value.name)
      console.log(file.value.name)
    if (error) throw error
    publicUrl.value = data.publicUrl
}
  
</script>
  