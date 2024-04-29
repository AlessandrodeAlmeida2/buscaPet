<template>
  <div class="container-create">
    <input type="file" @change="selectFile" v-if="!uploaded"/>
    <v-btn rounded="lg" color="hsla(160, 100%, 37%, 1)" @click="uploadFile(file, PI_Bucket)" v-if="!uploaded">Enviar</v-btn><br>
    <img v-if="publicUrl" :src="publicUrl" alt="Uploaded file" />
    
    <div v-if="uploaded">
      <v-sheet class="mx-auto" width="300">
        <v-form class="form" v-model="valid">

            <v-select
              for="situation"
              id="situation"
              label="Situação"
              v-model="situation"
              :items="['perdido', 'encontrado']"
              variant="solo-filled"
              required
            ></v-select>

            <v-text-field
                for="name"
                id="name"
                label="Nome do animal"
                v-model="name"
                :rules="nameRules"
                hide-details
                variant="solo-filled"
            ></v-text-field><br>

            <v-text-field
                for="description"
                id="description"
                label="Descrição"
                v-model="description"
                hide-details
                required
                variant="solo-filled"
            ></v-text-field><br>

            <v-text-field
                for="city"
                id="city"
                label="Cidade"
                v-model="city"
                hide-details
                required
                variant="solo-filled"
            ></v-text-field><br>

            <v-select
              for="genero"
              id="genero"
              label="Gênero"
              v-model="genero"
              :items="['macho', 'femea']"
              variant="solo-filled"
            ></v-select>

            <v-select
              for="specie"
              id="specie"
              label="Espécie"
              v-model="specie"
              :items="['cachorro', 'gato', 'outro']"
              variant="solo-filled"
            ></v-select>

            <v-text-field
                for="recompensa"
                id="recompensa"
                label="Recompensa"
                v-model="recompensa"
                hide-details
                variant="solo-filled"
            ></v-text-field>
            
        </v-form>
      </v-sheet>

      <div class="buttonContainer">
        <v-btn rounded="lg" color="hsla(160, 100%, 37%, 1)" @click="create">Enviar</v-btn>
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
let city = ref('');
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
  const { error } = await supabase.from('tabela1').insert({ name: name.value, description: description.value, photo_url: publicUrl.value, genero: genero.value, recompensa: reward, situation: situation.value, specie: specie.value, city: city.value })
  if (!error) {
    router.push('/contato');
  }
}

onMounted(() => {
  
})
</script>

<style>
.container-create {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
  animation: zoomIn 3s forwards;
}

.container-create img {
  width: 250px;
  margin: 20px;
  border-radius: 15px;
}

.container-create .form {
  background-color: var(--background-color);
}

</style>
