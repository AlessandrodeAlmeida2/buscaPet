<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../supabase'
import { useRoute } from 'vue-router'
import L from 'leaflet'
import 'leaflet-routing-machine'

import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

// Corrige o caminho das imagens
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const route = useRoute()
const getId = route.params.getId

const item = ref(null)
const userPhone = ref('')
const nameUser = ref('')
const userId = ref(null)
const latitude = ref(null)
const longitude = ref(null)

async function seeUser() { 
  const { data, error } = await supabase.from('tabela1').select('user_id').eq('id', getId)
  if (!error && data.length > 0) {
    userId.value = data[0].user_id
  } else {
    console.log('Erro ao obter user_id:', error)
  }
}

async function seePhoneUser() {
  const { data, error } = await supabase
    .from('usuario')
    .select('cel')
    .eq('id', userId.value)
    
  if (!error && data.length > 0) {
    userPhone.value = data[0].cel
  } else {
    console.log('Erro ao obter celular:', error)
  }
}

async function seeNameUser() {
  const { data, error } = await supabase
    .from('usuario')
    .select('nameUser')
    .eq('id', userId.value)
    
  if (!error && data.length > 0) {
    nameUser.value = data[0].nameUser
  } else {
    console.log('Erro ao obter nome:', error)
  }
}

onMounted(async () => {
  const { data } = await supabase.from('tabela1').select().eq('id', getId)
  if (data && data.length > 0) {
    item.value = data[0]
    latitude.value = item.value.latitude
    longitude.value = item.value.longitude
    await seeUser()
    await seePhoneUser()
    await seeNameUser()

    setTimeout(() => {
      if (latitude.value && longitude.value) {
        const map = L.map('map-view').setView([latitude.value, longitude.value], 14)

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        }).addTo(map)

        L.marker([latitude.value, longitude.value]).addTo(map)
          .bindPopup('Local onde foi encontrado/visto')
          .openPopup()

        // Pega a localização do usuário e traça a rota
        navigator.geolocation.getCurrentPosition(position => {
          const userLatLng = L.latLng(position.coords.latitude, position.coords.longitude);
          const animalLatLng = L.latLng(latitude.value, longitude.value);

          const routingControl = L.Routing.control({
            waypoints: [
              userLatLng,
              animalLatLng
            ],
            routeWhileDragging: false,
            addWaypoints: false,
            draggableWaypoints: false,
            show: false, // <-- oculta o painel de texto
            createMarker: () => null
          }).addTo(map);

          // Remove o container HTML com instruções
          const routingContainer = document.querySelector('.leaflet-routing-container');
          if (routingContainer) {
            routingContainer.remove();
          }
        }, error => {
          console.error('Erro ao acessar localização do usuário:', error);
        });
      }
    }, 300); // Dá tempo pro DOM renderizar o mapa
  }
});

</script>

<template>
  <div class="container-description" v-if="item">
    <h1>{{ item.situation }}</h1>
    <img :src="item.photo_url" alt="Imagem" />
    
    <div class="text-description">
      Situação: {{ item.situation }}<br>
      Nome: {{ item.name }}<br>
      Gênero: {{ item.genero }}<br>
      Espécie: {{ item.specie }}<br>
      Descrição:<br>
      {{ item.description }}<br>
      Cidade: {{ item.city }}<br>
      Recompensa: {{ item.recompensa }}<br>

      <div v-if="latitude && longitude" class="mt-4">
        Localização aproximada:<br>
      </div>

      <div id="map-view" style="height: 300px; margin-top: 16px; border-radius: 8px;"></div>

      <div class="text-center mt-4">
        <v-menu transition="fab-transition">
          <template v-slot:activator="{ props }">
            <v-btn
              color="hsla(160, 100%, 37%, 1)"
              dark
              v-bind="props"
            >
              contato
            </v-btn>
          </template>
          <v-list>
            <v-list-item>
              <v-list-item-title>
                Nome: {{ nameUser }}
              </v-list-item-title>
              <v-list-item-title>
                celular: {{ userPhone }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </div>
  </div>
  <div v-else>
    Carregando...
  </div>
</template>

<style scoped>
#map-view {
  width: 100%;
  height: 300px;
}

.leaflet-routing-container {
  display: none !important;
}

.container-description {
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: rgba(218, 218, 218, 0.322);
    padding-bottom: 30px;
    padding-top: 50px;
}

.container-description h1 {
  color: hsla(160, 100%, 37%, 1);
  animation: zoomIn 3s;
}

.container-description img {
    width: 400px;
    margin: 20px;
    animation: rotateY 3s;
    border-radius: 15px;
    border: 10px solid hsla(160, 100%, 37%, 1);
}

.text-description {
  width: 400px;
}

@media (max-width: 768px) {
div.container-description img {
  width: 80%;
  margin: 5% auto;
}

.text-description {
  width: 80%;
  margin: 5% auto;
}
}
</style>
