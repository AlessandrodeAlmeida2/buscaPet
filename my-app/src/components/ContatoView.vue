<template>
    <div id="app">
      <h1>Celular para contato</h1>
      <v-sheet class="mx-auto" width="300">
        <v-form v-model="valid">
            
            <v-text-field
                v-model="nameUser"
                :rules="nameRules"
                label="Digite seu nome"
                hide-details
                required
            ></v-text-field>

            <v-text-field
                v-model="userPhone"
                :counter="10"
                label="Insira um telefone para contato"
                required
            ></v-text-field>
            
        </v-form>
      </v-sheet>
      <input v-model="nameUser" placeholder="Insira o seu nome" />
      <input v-model="userPhone" placeholder="Insira um número de celular" />
      <v-btn rounded="lg" @click="updateUserPhone">Cadastrar</v-btn>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { supabase } from '../supabase';
  import { useRouter } from 'vue-router';
  
  const userPhone = ref('');
  let nameUser = ref('');
  let router = useRouter();
  
  const updateUserPhone = async() => {   
    const { data, error } = await supabase
      .from('usuario')
      .upsert({ nameUser: nameUser.value, cel: userPhone.value })
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
  /* Adicione estilos conforme necessário */
  </style>
  