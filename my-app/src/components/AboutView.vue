<script>
import '@fortawesome/fontawesome-free/css/all.css'

export default {
  name: 'AboutView',
  // other options...
}
</script>

<template>
    <section>
      <!-- Section Container -->
      <div class="container-about">
        <!-- Text Box -->
        <div class="flex-text">
          <div>
            <h2>Aqui estão nossos heróis</h2>
            <p>
              Somos alunos da Univesp, de vários cursos diferentes...
            </p>
          </div>
        </div>
        <!-- Flex Row Container 1 -->
        <div class="flex-img">
          <!-- Item -->
          <div class="user-1">
            <div>
              <!-- Image -->
              <img
                alt="..."
                src="@/assets/img/DSC03251.jpg"               
                class=""
                style="max-width: 120px;"
              />
              <div class="text-center">
                <h5>Alessandro de Almeida</h5>
                <p>
                  Ciência de Dados
                </p>
                <!-- Social Media Buttons -->
                <div class="d-flex justify-space-evenly">
                  <a href="https://codepen.io/AlessandrodeAlmeida2">
                    <button>
                      <!-- Icon -->
                      <i class="fab fa-codepen"></i>
                    </button>
                  </a>
                  <a href="https://github.com/AlessandrodeAlmeida2" target="_blank">
                    <button>
                      <!-- Icon -->
                      <i class="fab fa-github"></i>
                    </button>
                  </a>
                  <a href="https://www.linkedin.com/in/valter-alessandro-de-alameida-d-alvia-agostini/" target="_blank">
                    <button>
                      <!-- Icon -->
                      <i class="fab fa-linkedin"></i>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!-- Item -->
          <div class="user-2">
            <div class="image-about">
              <!-- Image -->
              <img
                alt="..."
                src="@/assets/img/ImagemWhatsApp.jpg"
                class=""
                style="max-width: 120px;"
              />
              <div class="text-center">
                <h5>Fernando Mayer</h5>
                <p>Tecnologia da informação</p>
                <p>Instrutor da Networking Academy programmer CPS</p>
                <p>Professor de Gestão e consultor nas áreas de administração  e recursos humanos.</p>
                <!-- Social Media Buttons -->
                <div class="d-flex justify-space-evenly">
                  <button>
                    <!-- Icon -->
                    <i class="fa fa-home fa-fw" aria-hidden="true"></i>
                  </button>
                  <button>
                    <!-- Icon -->
                    <i class="fab fa-facebook-f"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- Item -->
          <div class="user-3">
            <div class="image-about">
              <!-- Image -->
              <img
                alt="..."
                src="@/assets/img/matheusduarte.jpg"
                class=""
                style="max-width: 120px;"
              />
              <div class="text-center">
                <h5>Matheus Duarte</h5>
                <p>
                  Tecnologia da informação
                </p>
                <!-- Social Media Buttons -->
                <div class="d-flex justify-space-evenly">
                  <button>
                    <!-- Icon -->
                    <i class="fab fa-google"></i>
                  </button>
                  <button>
                    <!-- Icon -->
                    <i class="fab fa-twitter"></i>
                  </button>
                  <button>
                    <!-- Icon -->
                    <i class="fab fa-instagram"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Flex Row Container 2 -->
        <div class="flex-img2">
          <!-- Item -->
          
          <!-- Item -->
         
          <!-- Item -->
          
        </div>
      </div>
    </section>
</template>

<style>
.container-about {
  display: flex;
  flex-direction: column;
  margin: 0 0 60px 0;
}
.flex-text {
  display: flex;
  width: 30%;
  margin: auto;
  margin-bottom: 80px;
  margin-top: 90px;
}

.flex-text h2 {
  text-align: center;
  animation: slideRight 2s;
}

.flex-text p {
  animation: slideLeft 2s;
}

.flex-img {
  display: flex;
  justify-content: space-around;
  width: 94%;
  margin: 0 3%;
}

.flex-img2 {
  display: flex;
  justify-content: space-evenly;
  width: 90%;
  margin-top: 50px;
}

.flex-img a, .flex-img2 a {
  color: black;
  width: 30px;
}

.flex-img a:hover, .flex-img2 a:hover {
  color: white;
  background-color: rgba(227, 255, 208, 0.205);
  border-radius: 50%;
  box-shadow: 0 0 30px rgba(227, 255, 208, 0.205);
}

.image-about {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.flex-img img, .flex-img2 img {
  border-radius: 60px;
}

@media (max-width: 768px) {
  .flex-text {
    width: 80%;
  }

  .flex-img, .flex-img2 {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .flex-img2 {
    margin-top: 0;
  }

  .user-1 {
    margin: 5px;
  }

  .user-2 {
    margin: 5px;
  }

  .user-3 {
    margin: 5px;
  }

  .user-4 {
    margin: 5px;
  }

  .user-5 {
    margin: 5px;
  }

  .user-6 {
    margin: 5px;
  }

  .user-7 {
    margin: 5px;
  }
}
</style>
