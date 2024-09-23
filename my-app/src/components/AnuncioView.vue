<template>
    <div>  
      <img class="dog__campanha" alt="" src="../assets/img/header9.png">
        <section>
          <header class="title__anuncio">         
            <h1>Encontre seu Pet!</h1>
          </header>
          <p>No Buscapet, entendemos como é angustiante perder um amigo de quatro patas. Para aumentar suas chances de reencontrá-lo, oferecemos campanhas pagas que podem fazer toda a diferença:</p>
          <h3>Campanha nas Redes Sociais</h3>
          <p>Ao escolher nossa campanha nas redes sociais, sua solicitação será amplamente divulgada. Isso significa que mais pessoas estarão cientes de que seu pet está desaparecido, aumentando as chances de que alguém o veja e entre em contato. A visibilidade nas redes sociais é crucial nos dias de hoje!</p>
          <h3>Campanha com Carro de Som</h3> 
          <p>Se você deseja uma abordagem ainda mais impactante, nossa campanha com carro de som é a solução ideal. Seu pedido será levado diretamente às ruas, alcançando pessoas que podem ter visto seu pet. Essa estratégia garante que sua mensagem chegue a um público ainda maior, de forma imediata e eficaz.</p>
          <p>Invista na sua tranquilidade e ajude a reunir sua família novamente! Cada segundo conta, e essas campanhas podem ser o impulso que você precisa para encontrar seu amado pet. Não hesite, faça a escolha certa hoje mesmo!</p>
      </section>
      <div>
        <h2 class="tittle__alfa-slab-one-regular">Clique no botão para começar uma campanha</h2>
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

  .title__anuncio{
    background-color: transparent;
  }

  section {

  border: 1px solid #ddd; 
  border-radius: 8px; 
  padding: 20px; 
  margin: 20px 0; 
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); 
}

section h1 {
  font-size: 24px; 
  color: #333; 
  margin-bottom: 15px; 
}

section h3 {
  font-size: 20px; 
  color: black; 
  margin-top: 20px; 
}

section p {
  font-size: 16px; 
  color: black; 
  line-height: 1.6; 
  margin-bottom: 15px; 
}  
  </style>