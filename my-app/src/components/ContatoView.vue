<template>
    <div id="container-contato">
      <h3>Celular para contato</h3>
      <v-sheet class="mx-auto" width="300">
        <v-form class="form" v-model="valid">
            
            <v-text-field
                v-model="nameUser"
                :rules="nameRules"
                label="Digite seu nome"
                hide-details
                variant="solo-filled"
                required
            ></v-text-field><br>

            <v-text-field
                v-model="userPhone"
                :counter="10"
                label="Insira um telefone para contato"
                variant="solo-filled"
                required
            ></v-text-field>

            <v-text-field
                v-model="city"
                label="Insira a cidade"
                variant="solo-filled"
                required
            ></v-text-field>
            
        </v-form>
      </v-sheet>
      <v-btn rounded="lg" color="hsla(160, 100%, 37%, 1)" @click="updateUserPhone">Cadastrar</v-btn>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { supabase } from '../supabase';
  import { useRouter } from 'vue-router';
  
  const userPhone = ref('');
  let nameUser = ref('');
  let city = ref('');
  let router = useRouter();
  
  const updateUserPhone = async() => {   
    const { data, error } = await supabase
      .from('usuario')
      .upsert({ nameUser: nameUser.value, cel: userPhone.value, city: city.value })
      .select()

    if (error) {
      console.log('Erro ao atualizar o número de telefone:', error);
    } else {
      router.push('/read');
      console.log('Número de telefone atualizado com sucesso:', data);
    }
  };
  </script>
  
  <style>
  #container-contato {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #container-contato h3 {
    color: hsla(160, 100%, 37%, 1);
    margin: 15px;
  }

  #container-contato .form {
    background-color: var(--background-color);
  }

  </style>
  