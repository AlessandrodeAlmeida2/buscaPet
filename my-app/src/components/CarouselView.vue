<template>
  <v-carousel v-if="items.length > 0" show-arrows="hover">
    <v-carousel-item
      v-for="(item, index) in items"
      :key="index"
      :src="item.photo_url"
      class=".carousel-image"
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
.carousel-image {
  width: 300px;
}
</style>

  