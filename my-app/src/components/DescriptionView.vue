<script setup>
  import { ref, onMounted } from 'vue'
  import { supabase } from '../supabase'
  import { useRoute } from 'vue-router';

  const route = useRoute() // use useRoute to access the current route
  const getId = route.params.getId // use getId instead of itemId

  const item = ref(null)
  const userPhone = ref('');
  const nameUser = ref('');
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

  async function seeNameUser() {
    const { data, error } = await supabase
      .from('usuario')
      .select('nameUser').eq('id', userId.value)
      
    if (!error) {
      nameUser.value = data[0].nameUser
      console.log(nameUser.value);
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
    await seeNameUser()
  })
</script>

<template>
    <div class="container-description" v-if="item">
      <h1>{{ item.situation }}</h1>
        <img :src="item.photo_url" alt="Image" />
        <div class="text-description">
            Situação: {{ item.situation }}<br>
            Nome: {{ item.name }}<br>
            Gênero: {{ item.genero }}<br>
            Espécie: {{ item.specie }}<br>
            Descrição:<br>
            {{ item.description }}<br>
            Recompensa: {{ item.recompensa }}<br>
            <div class="text-center">
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

<style>
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
}

.container-description img {
    width: 400px;
    margin: 20px;
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
