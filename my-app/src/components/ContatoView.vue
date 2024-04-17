<template>
    <div id="app">
      <h1>Celular para contato</h1>
      <input v-model="userPhone" placeholder="Insira um número de celular" />
      <button @click="updateUserPhone">Cadastrar</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { supabase } from '../supabase';
  import { useRouter } from 'vue-router';
  
  const userPhone = ref('');
  let router = useRouter();
  
  const updateUserPhone = async() => {
    const { data, error } = await supabase.auth.updateUser({
      phone: userPhone.value
    })
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
  