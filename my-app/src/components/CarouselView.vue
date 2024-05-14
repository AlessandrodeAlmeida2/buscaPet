<!-- eslint-disable vue/no-parsing-error -->
<template>
  <div class="tittle-carousel">
    <h1>Pets perdidos</h1>
  </div>
  <div id="carousel">
    <figure id="spinner">
      <img
            v-for="(item, index) in items"
            :key="index"
            :src="item.photo_url">
    </figure>
  </div>

<span style="float:left" class="ss-icon" @click="galleryspin('-')"><</span>
<span style="float:right" class="ss-icon" @click="galleryspin('')">></span>
</template>

<script setup>
    import { ref, onMounted, provide, watch } from 'vue'
    import { supabase } from '../supabase'

    const items = ref([])
    const itemId = ref(null)
    const getId = ref(null)
    const categoria = ref('perdido')
  
    provide('itemId', itemId)
    provide('getId ', getId)

    let angle = 0;
    const galleryspin = (sign) => { 
    let spinner = document.querySelector("#spinner");
    if (!sign) { angle = angle + 45; } else { angle = angle - 45; }
    spinner.setAttribute("style","-webkit-transform: rotateY("+ angle +"deg); -moz-transform: rotateY("+ angle +"deg); transform: rotateY("+ angle +"deg);");
    }
  
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
  margin: 50px 0;
  color: var(--primary-color);
  font-size: 60px;
  font-family: "Alfa Slab One", serif;
  font-weight: 600;
  font-style: normal;
  text-align: left;
}

div#carousel { 
  perspective: 1200px;
  padding-top: 10%; 
  font-size:0; 
  margin-bottom: 8rem; 
  overflow: hidden;

}
figure#spinner { 
  transform-style: preserve-3d; 
  height: 300px; 
  transform-origin: 50% 50% -500px; 
  transition: 2s; 
} 
figure#spinner img { 
  width: 40%; max-width: 425px; 
  height: 300px;
  position: absolute; left: 30%;
  transform-origin: 50% 50% -500px;
  outline:1px solid transparent; 
}
figure#spinner img:nth-child(1) { transform:rotateY(0deg); 
}
figure#spinner img:nth-child(2) { transform: rotateY(-45deg); }
figure#spinner img:nth-child(3) { transform: rotateY(-90deg); }
figure#spinner img:nth-child(4) { transform: rotateY(-135deg); }
figure#spinner img:nth-child(5){ transform: rotateY(-180deg); }
figure#spinner img:nth-child(6){ transform: rotateY(-225deg); }
figure#spinner img:nth-child(7){ transform: rotateY(-270deg); }
figure#spinner img:nth-child(8){ transform: rotateY(-315deg); }
div#carousel ~ span { 
  color: hsla(160, 100%, 37%, 1);; 
  margin: 5%; 
  display: inline-block; 
  text-decoration: none; 
  font-size: 3rem; 
  transition: 0.6s color; 
  position: relative; 
  margin-top: -16rem; 
  border-bottom: none; 
  line-height: 0; }
div#carousel ~ span:hover { color: #888; cursor: pointer; }

@media (max-width: 768px) {
  .tittle-carousel h1 {
    font-size: 2rem;
  }
}
</style>
  