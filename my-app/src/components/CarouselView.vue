<template>
  <div class="tittle-carousel">
    <h1>Animais desaparecidos</h1>
  </div>
  
  <v-carousel class="carousel" v-if="items.length > 0" height="300" show-arrows="hover">
    <v-carousel-item
      v-for="(item, index) in items"
      :key="index"
      :src="item.photo_url"
    ></v-carousel-item>
  </v-carousel>
</template>

<script setup>
    import { ref, onMounted, provide, watch } from 'vue'
    import { supabase } from '../supabase'

    const items = ref([])
    const itemId = ref(null)
    const getId = ref(null)
    const categoria = ref('todas')
  
    provide('itemId', itemId)
    provide('getId ', getId)
  
    async function getItems() {
    let query = supabase.from('tabela1').select();
  
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
  margin: 50px 0;
  color: hsla(160, 100%, 37%, 1);
  font-size: 60px;
  font-family: "Alfa Slab One", serif;
  font-weight: 600;
  font-style: normal;
  text-align: center;
  animation: slideLeft 4s ease forwards;
  animation-delay: 2s;
  visibility: hidden;
}

.carousel {
  animation: zoomIn 2s ease forwards;
  animation-delay: 2s;
  visibility: hidden;
  margin-bottom: 80px;
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

  