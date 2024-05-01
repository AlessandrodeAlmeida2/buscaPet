<template>
    <div class="tittle-carousel">
      <h1>Pets encontrados</h1>
    </div>
    
    <div class="carousel-container">
      <v-carousel class="carousel" v-if="items.length > 0" height="800">
        <div class="pet">
          <v-carousel-item
            v-for="(item, index) in items"
            :key="index"
            :src="item.photo_url"
          ></v-carousel-item>
        </div>
      </v-carousel>
      </div>
  </template>
  
  <script setup>
      import { ref, onMounted, provide, watch } from 'vue'
      import { supabase } from '../supabase'
  
      const items = ref([])
      const itemId = ref(null)
      const getId = ref(null)
      const categoria = ref('encontrado')
    
      provide('itemId', itemId)
      provide('getId ', getId)
    
      async function getItems() {
      let query = supabase.from('tabela1').select();

        if (categoria.value !== 'todas') {
            query = query.eq('situation', categoria.value);
        }
    
        const { data } = await query;
        items.value = data;
      }
  
      watch(categoria, getItems);
    
      onMounted(() => {
        getItems()
      })
      
    </script>
  
  <style>
  .tittle-carousel h1 {
    margin: 50px 0 50px 4%;
    color: var(--primary-color);
    font-size: 60px;
    font-family: "Alfa Slab One", serif;
    font-weight: 600;
    font-style: normal;
    text-align: left;
  }
  
  .carousel {
    margin: 0 5% 80px 5%;
    gap: 16px;
    width: 100%;
    overflow: hidden;
  }
  
  .v-carousel-item img {
    width: 400px; 
    height: 600px;
    border-radius: 16px;
    object-fit: cover; 
    object-position: center;
  }
  
  .v-carousel__controls {
    background: transparent !important;
  }
  
  @media (max-width: 768px) {
    .tittle-carousel h1 {
      font-size: 2rem;
    }
  }
  </style>
  
    