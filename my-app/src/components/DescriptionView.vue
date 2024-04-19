<script setup>
  import { ref, onMounted } from 'vue'
  import { supabase } from '../supabase'
  import { useRoute } from 'vue-router';

  const route = useRoute() // use useRoute to access the current route
  const getId = route.params.getId // use getId instead of itemId

  const item = ref(null)
  const userPhone = ref('');
  const userId = ref(null);

  //seeCurrentUser
  async function seeUser() { 
    const { data, error } = await supabase.from('tabela1').select('user_id').eq('id', getId)

        if (!error) {
            userId.value = data[0].user_id
            console.log(userId.value);
        } else {
            console.log('No active session');
        }
}

  async function seePhoneUser() {
    const { data, error } = await supabase
      .from('usuario')
      .select('cel').eq('id', userId.value)
      
    if (!error) {
      userPhone.value = data[0].cel;
      console.log(userPhone.value);
    } else {
        console.log( error);
    }
  }


  onMounted(async () => {
    const { data } = await supabase.from('tabela1').select().eq('id', getId)
    item.value = data[0]
    console.log(getId)
    await seeUser()
    await seePhoneUser()
  })
</script>

<template>
    <div class="container-description" v-if="item">
        <img :src="item.photo_url" alt="Country Image" />
        <div class="text-description">
            Situação: {{ item.situation }}<br>
            Nome: {{ item.name }}<br>
            Gênero: {{ item.genero }}<br>
            Espécie: {{ item.specie }}<br>
            Descrição:<br>
            {{ item.description }}<br>
            Recompensa: {{ item.recompensa }}<br>
            Telefone para contato: {{ userPhone }}
        </div>
        <v-btn rounded="lg" color="hsla(160, 100%, 37%, 1)" @click="seeUser">Create</v-btn>
    </div>
    <div v-else>
    Carregando...
  </div>
</template>

<style>
.container-description {
    display: flex;
    align-items: center;
    flex-direction: column;
}

.container-description img {
    width: 400px;
}

.text-description {
    width: 400px;
}
</style>
