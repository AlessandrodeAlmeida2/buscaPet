<template>
  <div class="container-upload">
    <h2>Atualizar foto</h2>
    <input type="file" @change="selectFile" />
    <v-btn rounded="lg" color="hsla(160, 100%, 37%, 1)" @click="updateFile(file, PI_Bucket)" v-if="!uploaded">Enviar</v-btn><br>
    <img v-if="publicUrl" :src="publicUrl" alt="Uploaded file" /> 
  </div>
  <div v-if="uploaded">
    <v-btn rounded="lg" color="hsla(160, 100%, 37%, 1)" @click="create">Atualizar</v-btn>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../supabase'
import { useRoute, useRouter } from 'vue-router';

const route = useRoute() // use useRoute to access the current route
const router = useRouter()
const getId = route.params.getId

let file = ref([])
let publicUrl = ref('')
let item = ref('')
let uploaded = ref(false);

const selectFile = (event) => {
  file.value = event.target.files[0]
}

const PI_Bucket = 'PI_Bucket';

const updateFile = async (file, storage) => {
  const fileName = file.name
  const filePath = `${fileName}` // Use a unique path for each image
  const { error } = await supabase
    .storage
    .from(storage)
    .upload(filePath, file, { 
      cacheControl: '3600',
      upsert: false
    })
  if (error) throw error
  const { data, error: urlError } = await supabase
    .storage
    .from(storage)
    .getPublicUrl(filePath)
  if (urlError) throw urlError
  publicUrl.value = data.publicUrl
  console.log(publicUrl.value)
  uploaded.value = true
}

async function create() {
  const { error } = await supabase.from('tabela1').update({ photo_url: publicUrl.value }).eq('id', getId).single()
  if (!error) {
    // Optional: Delete the old image
    const oldFilePath = item.value.photo_url.split('/').pop()
    if (oldFilePath !== file.value.name) { // If the file name has changed
      await supabase.storage.from(PI_Bucket).remove([oldFilePath])
    }
    router.push('/account')
  }
}

onMounted(async () => {
    const { data } = await supabase.from('tabela1').select().eq('id', getId)
    item.value = data[0]
    console.log(getId)
  })
  
</script>

<style>
.container-upload {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px 0;
}
.container-upload h2 {
  color: hsla(160, 100%, 37%, 1);
  text-align: center;
  margin: 50px;
}
</style>
