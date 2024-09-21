<template>
    <div>
        <img class="dog__campanha" alt="" src="../assets/img/header9.png">
      <div>
        <h1 class="tittle__alfa-slab-one-regular">Clique no botão para começar uma campanha</h1>
        <div class="buttonContainer__anunciar">
          <v-btn rounded="lg" color="hsla(160, 100%, 37%, 1)" @click="goCampaign">Anunciar</v-btn>
        </div>
      </div>
    </div>
  </template>
  
<script>
  import { useRouter } from 'vue-router';
  
  export default {
    setup() {
      const router = useRouter();
  
      const goCampaign = () => {
        router.push('/campanha');
      };
  
      return {
        goCampaign
      };
    }
  };
</script>
  <style>

  .dog__campanha{
    display: block;      
    margin: 0 auto;     
    max-width: 100%;    
    height: auto; 
  }

  .tittle__alfa-slab-one-regular{
    text-align: center; 
  
  }

  .buttonContainer__anunciar{
    display: flex;
    justify-content: center; 
      
  }

  
  </style>