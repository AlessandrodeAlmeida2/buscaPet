<template>
    <section class="ongs-parceiras">
      <h2>
        Adoção responsável – uma segunda chance para os animais
      </h2>
      <p class="subtitle">
        Conheça nossos parceiros, dedicados a resgatar, cuidar e encontrar lares para animais em situação de vulnerabilidade.
      </p>
      <div class="ongs-list">
        <div class="ong-card">
          <a
            href="https://www.instagram.com/amoremquatropatas1?igsh=eWZjNXRkYmRvZWt0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://cdn-icons-png.flaticon.com/512/616/616408.png" alt="Cachorro e Gato"/>
            <div class="ong-info">
              <span class="ong-name">Amor em Quatro Patas</span>
              <span class="ong-instagram">@amoremquatropatas1</span>
            </div>
            <span class="instagram-icon"> <i class="fa-brands fa-instagram"></i> </span>
          </a>
        </div>
        <div class="ong-card">
          <a
            href="https://www.instagram.com/uparc_animalrc?igsh=MWRicHMybW0zNnJ3Zw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="../assets/img/uparc.jpg" alt="Cachorro e Gato"/>
            <div class="ong-info">
              <span class="ong-name">UPARC Animal RC</span>
              <span class="ong-instagram">@uparc_animalrc</span>
            </div>
            <span class="instagram-icon"> <i class="fa-brands fa-instagram"></i> </span>
          </a>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  // Componente simples, não há lógica JS por enquanto
  </script>
  
  <style scoped>
  .ongs-parceiras {
    background: linear-gradient(120deg, #fff 60%, #e3f2fd 100%);
    border-radius: 18px;
    padding: 2.5rem 1.5rem;
    margin: 2.5rem auto;
    box-shadow: 0 4px 24px rgba(25, 118, 210, 0.07);
    text-align: center;
    max-width: 600px;
  }
  .ongs-parceiras h2 {
    margin-bottom: 0.2rem;
    color: #1976d2;
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
  .icon-heart {
    font-size: 1.5rem;
  }
  .subtitle {
    color: #555;
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
  .ongs-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  .ong-card {
    width: 80%;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 2px 12px rgba(25, 118, 210, 0.09);
    transition: box-shadow 0.2s, transform 0.2s;
    padding: 1rem 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 420px;
    margin: 0 auto;
  }
  .ong-card:hover {
    box-shadow: 0 6px 24px rgba(25, 118, 210, 0.16);
    transform: translateY(-2px) scale(1.02);
  }
  .ong-card a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
    width: 100%;
    gap: 1rem;
  }
  .ong-card img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: #e3f2fd;
    border: 2px solid #bbdefb;
    object-fit: cover;
    box-shadow: 0 1px 4px rgba(25, 118, 210, 0.07);
  }
  .ong-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 1;
  }
  .ong-name {
    font-size: 1.15rem;
    font-weight: 600;
    color: #1976d2;
  }
  .ong-instagram {
    font-size: 0.98rem;
    color: #757575;
  }
  .instagram-icon {
    font-size: 1.45rem;
    color: #e1306c;
    margin-left: 0.5rem;
  }
  @media (max-width: 600px) {
    .ongs-parceiras {
      padding: 1.2rem 0.3rem;
      max-width: 100%;
    }
    .ongs-list {
      gap: 1rem;
    }
    .ong-card {
      padding: 0.7rem 0.5rem;
      max-width: 98vw;
    }
    .ong-card img {
      width: 44px;
      height: 44px;
    }
  }
  </style>
  