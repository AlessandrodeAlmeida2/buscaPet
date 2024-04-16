<template>
  <div class="container">
    <input type="file" @change="selectFile" v-if="!uploaded"/>
    <button @click="uploadFile(file, PI_Bucket)" v-if="!uploaded">Enviar</button><br>
    <img v-if="publicUrl" :src="publicUrl" alt="Uploaded file" />
    
    <div v-if="uploaded">
      <div class="inputContainer">
        <label for="name">Nome <span>Opcional</span></label>
        <input type="name" id="name" v-model="name">
      </div>
      <div class="inputContainer">
        <label for="description">Descrição <span>Opcional</span></label>
        <input type="text_area" id="description" v-model="description">
      </div>
      <div class="inputContainer">
        <label for="recompensa">Recompensa <span>Opcional</span></label>
        <input type="number" id="recompensa" v-model="recompensa">
      </div>
      
      <div>
        <label for="">Situação</label>
        <select v-model="situation">
            <option value="perdido">Perdido</option>
            <option value="encontrato">Procurando o tutor</option>
        </select><br>
      </div>
      <div>
        <label for="">Epécie</label>
        <select v-model="specie">
            <option value="cachorro">Cachorro</option>
            <option value="gato">Gato</option>
            <option value="gato">Pássaro</option>
            <option value="gato">Outro</option>
        </select><br>
      </div>
      <div>
        <label for="">Gênero</label>
        <select v-model="genero">
            <option value="macho">Macho</option>
            <option value="femea">Fêmea</option>
            <option value="none">Não sei</option>
        </select><br>
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
let genero = ref('');
let specie = ref('');
let recompensa = ref('');
let situation = ref('');
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
  let reward = recompensa.value === "" ? null : recompensa.value;
  const { error } = await supabase.from('tabela1').insert({ name: name.value, description: description.value, photo_url: publicUrl.value, genero: genero.value, recompensa: reward, situation: situation.value, specie: specie.value })
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
