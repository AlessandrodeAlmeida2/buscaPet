<template>
  <div class="container">
    <input type="file" @change="selectFile" v-if="!uploaded"/>
    <button @click="uploadFile(file, PI_Bucket)" v-if="!uploaded">Enviar</button><br>
    <img v-if="publicUrl" :src="publicUrl" alt="Uploaded file" />
    {{ publicUrl }}
    <div v-if="uploaded">
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
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../supabase'
import { useRouter } from 'vue-router';

let name = ref('');
let description = ref('');
let file = ref([]);
let publicUrl = ref('');
let uploaded = ref(false);
let router = useRouter();

const PI_Bucket = 'PI_Bucket';

const selectFile = (event) => {
  file.value = event.target.files[0]
}

const uploadFile = async (file, storage) => {
  const fileName = file.name
  const { error } = await supabase
    .storage
    .from(PI_Bucket)
    .upload(fileName, file, {
      cacheControl: '3600',
      upsert: false
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
  uploaded.value = true
}

async function create() {
  const { error } = await supabase.from('tabela1').insert({ name: name.value, description: description.value, photo_url: publicUrl.value })
  if (!error) {
    router.push('/read');
  }
}

onMounted(() => {
  
})
</script>

<style>
  .container {
    display: flex;
    align-items: center;
    flex-direction: column;
}
</style>
