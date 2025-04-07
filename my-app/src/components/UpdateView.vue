<script setup>
  import { ref, onMounted, watch } from 'vue'
  import { supabase } from '../supabase'
  import { useRouter } from 'vue-router';
  import L from 'leaflet'

  const route = useRouter()
  const itemId = route.currentRoute.value.params.itemId
  const map = ref(null)
  const marker = ref(null)


  const item = ref(null)

  watch(async () => {
  const { data } = await supabase.from('tabela1').select().eq('id', itemId)
  item.value = data[0]

  // Tenta obter localização do usuário
  navigator.geolocation.getCurrentPosition((position) => {
    const userLat = position.coords.latitude
    const userLng = position.coords.longitude

    const lat = item.value.latitude ? parseFloat(item.value.latitude) : userLat
    const lng = item.value.longitude ? parseFloat(item.value.longitude) : userLng

    setTimeout(() => {
      map.value = L.map('update-map').setView([lat, lng], 14)

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
      }).addTo(map.value)

      if (item.value.latitude && item.value.longitude) {
        marker.value = L.marker([lat, lng], { draggable: true }).addTo(map.value)
      }

      map.value.on('click', (e) => {
        const { lat, lng } = e.latlng

        if (marker.value) {
          marker.value.setLatLng([lat, lng])
        } else {
          marker.value = L.marker([lat, lng], { draggable: true }).addTo(map.value)
        }

        item.value.latitude = lat
        item.value.longitude = lng
      })
    }, 300)

  }, (error) => {
    console.error('Erro ao obter localização do usuário:', error)

    // Fallback caso o usuário não permita ou ocorra erro
    const fallbackLat = -22.19
    const fallbackLng = -46.74

    setTimeout(() => {
      map.value = L.map('update-map').setView([fallbackLat, fallbackLng], 14)

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
      }).addTo(map.value)

      map.value.on('click', (e) => {
        const { lat, lng } = e.latlng

        if (marker.value) {
          marker.value.setLatLng([lat, lng])
        } else {
          marker.value = L.marker([lat, lng], { draggable: true }).addTo(map.value)
        }

        item.value.latitude = lat
        item.value.longitude = lng
      })
    }, 300)
  })
})

  const updateItem = async () => {
    const { data, error } = await supabase
      .from('tabela1')
      .update({ name: item.value.name, description: item.value.description, recompensa: item.value.recompensa, genero: item.value.genero, specie: item.value.specie, situation: item.value.situation, city: item.value.city, latitude: item.value.latitude, longitude: item.value.longitude })
      .eq('id', itemId)

    if (error) {
      console.log(error)
    } else {
      route.push('/read');
    }
  }
</script>

<template>
  <div class="container-update" v-if="item">
    <h1>Atualização</h1>
    <v-sheet class="mx-auto" width="300">
        <v-form class="form">

            <v-select
              for="situation"
              id="situation"
              label="Situação"
              v-model="item.situation"
              :items="['Perdido', 'Encontrado']"
              variant="solo-filled"
            ></v-select>

            <v-text-field
                for="name"
                id="name"
                label="Nome do animal"
                v-model="item.name"
                hide-details
                variant="solo-filled"
            ></v-text-field><br>

            <v-select
              for="specie"
              id="specie"
              label="Espécie"
              v-model="item.specie"
              :items="['Cachorro', 'Gato', 'Outro']"
              variant="solo-filled"
            ></v-select>

            <v-text-field
                for="description"
                id="description"
                label="Descrição"
                v-model="item.description"
                hide-details
                required
                variant="solo-filled"
            ></v-text-field><br>

            <v-text-field
                for="city"
                id="city"
                label="Cidade/Estado"
                v-model="item.city"
                hide-details
                variant="solo-filled"
            ></v-text-field><br>

            <v-select
              for="genero"
              id="genero"
              label="Sexo"
              v-model="item.genero"
              :items="['Macho', 'Fêmea']"
              variant="solo-filled"
            ></v-select>

            <v-text-field
                for="recompensa"
                id="recompensa"
                label="Recompensa"
                v-model="item.recompensa"
                hide-details
                variant="solo-filled"
            ></v-text-field><br>

            <p>Localização aproximada:</p>
            <div id="update-map" style="height: 300px; margin-top: 20px;"></div>

        </v-form>
      </v-sheet>
      
      <div class="btn-update">
        <v-btn rounded="lg" color="hsla(160, 100%, 37%, 1)" @click="updateItem">Atualizar</v-btn>
      </div>
  </div>
</template>

<style>
.container-update {
  margin-top: 50px;
  animation: rotateX 3s ease forwards;
}

.container-update h1 {
  text-align: center;
  color: hsla(160, 100%, 37%, 1);
  margin: 15px;
}

.container-update .form {
  background-color: var(--background-color);
}

.btn-update {
  display: flex;
  justify-content: center;
}
.v-btn {
  margin: 10px;
}
</style>
