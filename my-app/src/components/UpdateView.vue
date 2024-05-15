<script setup>
  import { ref, onMounted } from 'vue'
  import { supabase } from '../supabase'
  import { useRouter } from 'vue-router';

  const route = useRouter()
  const itemId = route.currentRoute.value.params.itemId


  const item = ref(null)

  onMounted(async () => {
    const { data } = await supabase.from('tabela1').select().eq('id', itemId)
    item.value = data[0]
    console.log(itemId)
  })

  const updateItem = async () => {
    const { data, error } = await supabase
      .from('tabela1')
      .update({ name: item.value.name, description: item.value.description, recompensa: item.value.recompensa, genero: item.value.genero, specie: item.value.specie, situation: item.value.situation, city: item.value.city })
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
            ></v-text-field>
            
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
