<template>
    <div class="container-create">
      <input type="file" @change="selectFile" v-if="!uploaded" />
      <div class="buttonContainer">
        <v-btn rounded="lg" color="hsla(160, 100%, 37%, 1)" @click="uploadFile(file, PI_Bucket)" v-if="!uploaded">Enviar</v-btn><br>
        <v-btn rounded="lg" color="hsla(160, 100%, 37%, 1)" @click="goBack" v-if="!uploaded">Voltar</v-btn>
      </div>
      <img v-if="publicUrl" :src="publicUrl" alt="Uploaded file" />
  
      <div v-if="uploaded">
        <v-sheet class="mx-auto" width="300">
          <v-form class="form" v-model="valid">
            
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
              label="Cidade/Endereço"
              v-model="city"
              hide-details
              required
              variant="solo-filled"
            ></v-text-field><br>
  
            <v-select
              for="genero"
              id="genero"
              label="Sexo"
              v-model="genero"
              :items="['Macho', 'Fêmea']"
              variant="solo-filled"
            ></v-select>
  
            <v-select
              for="specie"
              id="specie"
              label="Espécie"
              v-model="specie"
              :items="['Cachorro', 'Gato', 'Outro']"
              variant="solo-filled"
            ></v-select>
  
            <div id="map" style="height: 400px; width: 400px; margin-top: 20px;"></div>
          </v-form>
        </v-sheet>
  
        <div class="buttonContainer">
          <v-btn rounded="lg" color="hsla(160, 100%, 37%, 1)" @click="create">Enviar</v-btn>
          <v-btn rounded="lg" color="hsla(160, 100%, 37%, 1)" @click="goBack">Voltar</v-btn>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, watch } from 'vue';
  import { supabase } from '../supabase';
  import { useRouter } from 'vue-router';
  import L from 'leaflet';
  import 'leaflet/dist/leaflet.css';
  
  let name = ref('');
  let description = ref('');
  let file = ref([]);
  let publicUrl = ref('');
  let genero = ref('');
  let specie = ref('');
  let city = ref('');
  let latitude = ref(null);
  let longitude = ref(null);
  let uploaded = ref(false);
  let router = useRouter();
  
  const PI_Bucket = 'PI_Bucket';
  
  const selectFile = (event) => {
    file.value = event.target.files[0];
  };
  
  function goBack() {
    router.go(-1);
  }
  
  const uploadFile = async (file, storage) => {
    const fileName = file.name;
    const { error } = await supabase.storage.from(PI_Bucket).upload(fileName, file, {
      cacheControl: '3600',
      upsert: false,
    });
    console.log(file.name);
    const publicUrl = await getUrlPublic(fileName, storage);
    if (error) throw error;
    return publicUrl;
  };
  
  const getUrlPublic = async () => {
    const { data, error } = await supabase.storage.from(PI_Bucket).getPublicUrl(file.value.name);
    console.log(file.value.name);
    if (error) throw error;
    publicUrl.value = data.publicUrl;
    uploaded.value = true;
  };
  
  async function create() {
    const { error } = await supabase.from('tabela2').insert({
      name: name.value,
      description: description.value,
      photo_url: publicUrl.value,
      genero: genero.value,
      specie: specie.value,
      city: city.value,
      latitude: latitude.value,
      longitude: longitude.value,
    });
  
    if (!error) {
      router.push('/contato');
    } else {
      console.error('Erro ao salvar no Supabase:', error);
    }
  }
  
  watch(uploaded, (newVal) => {
    if (newVal) {
      setTimeout(() => {
        const map = L.map('map').setView([-22.2479, -46.7327], 13);
  
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);
  
        let marker = L.marker([-22.2479, -46.7327], { draggable: true }).addTo(map);
  
        latitude.value = -22.2479;
        longitude.value = -46.7327;
  
        marker.on('dragend', () => {
          const pos = marker.getLatLng();
          latitude.value = pos.lat;
          longitude.value = pos.lng;
        });
  
        map.on('click', (e) => {
          const { lat, lng } = e.latlng;
          latitude.value = lat;
          longitude.value = lng;
  
          if (marker) map.removeLayer(marker);
          marker = L.marker([lat, lng], { draggable: true }).addTo(map);
  
          marker.on('dragend', () => {
            const pos = marker.getLatLng();
            latitude.value = pos.lat;
            longitude.value = pos.lng;
          });
        });
      }, 100); // pequeno delay para garantir que o DOM já renderizou
    }
  });
  
  </script>
  
  <style>
  .container-create {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 200px 0;
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
  
  .buttonContainer {
    display: flex;
    flex-direction: row;
  }
  
  </style>
  