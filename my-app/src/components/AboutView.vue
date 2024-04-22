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
            <h2>Aqui estão nosssos heróis</h2>
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
                  Curso Ciência de Dados
                </p>
                <!-- Social Media Buttons -->
                <div class="d-flex justify-space-evenly">
                  <button>
                    <!-- Icon -->
                    <i class="fa fa-envelope"></i>
                  </button>
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
            <div>
              <!-- Image -->
              <img
                alt="..."
                src="https://randomuser.me/api/portraits/women/64.jpg"
                class=""
                style="max-width: 120px;"
              />
              <div>
                <h5>Romina Hadid</h5>
                <p>
                  Marketing Specialist
                </p>
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
            <div>
              <!-- Image -->
              <img
                alt="..."
                src="https://randomuser.me/api/portraits/women/84.jpg"
                class="shadow-lg rounded-full max-w-full mx-auto"
                style="max-width: 120px;"
              />
              <div>
                <h5>Alexa Smith</h5>
                <p>
                  UI/UX Designer
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
          <!-- Item -->
          <div class="user-4">
            <div>
              <!-- Image -->
              <img
                alt="..."
                src="https://randomuser.me/api/portraits/women/27.jpg"
                class="shadow-lg rounded-full max-w-full mx-auto"
                style="max-width: 120px;"
              />
              <div>
                <h5>Jenna Kardi</h5>
                <p>
                  Founder and CEO
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
          <div class="user-5">
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
                  Curso Ciência de Dados
                </p>
                <!-- Social Media Buttons -->
                <div class="d-flex justify-space-evenly">
                  <button>
                    <!-- Icon -->
                    <i class="fa fa-envelope"></i>
                  </button>
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
          <div class="user-6">
            <div>
              <!-- Image -->
              <img
                alt="..."
                src="https://randomuser.me/api/portraits/women/64.jpg"
                class=""
                style="max-width: 120px;"
              />
              <div>
                <h5>Romina Hadid</h5>
                <p>
                  Marketing Specialist
                </p>
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
          <div class="user-7">
            <div>
              <!-- Image -->
              <img
                alt="..."
                src="https://randomuser.me/api/portraits/women/84.jpg"
                class="shadow-lg rounded-full max-w-full mx-auto"
                style="max-width: 120px;"
              />
              <div>
                <h5>Alexa Smith</h5>
                <p>
                  UI/UX Designer
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
      </div>
    </section>
</template>

<style>
.container-about {
  display: flex;
  flex-direction: column;
}
.flex-text {
  display: flex;
  width: 30%;
  margin: auto;
  margin-bottom: 80px;
  margin-top: 50px;
}

.flex-text h2 {
  animation: slideRight 2s;
}

.flex-text p {
  animation: slideLeft 2s;
}

.flex-img {
  display: flex;
  justify-content: space-around;
}

.flex-img2 {
  display: flex;
  justify-content: space-evenly;
  margin-top: 50px;
}

.flex-img a, .flex-img2 a {
  color: black;
  width: 30px;
}

.flex-img a:hover, .flex-img2 a:hover {
  color: white;
  background-color: black;
  border-radius: 50%;
}

.user-1 {
  animation: zoomIn 2s ease forwards, floatImageY 4s ease-in-out infinite;
  animation-delay: 0s, 3s;
}

.user-2 {
  animation: zoomIn 4s ease forwards, floatImageY 4s ease-in-out infinite;
  animation-delay: 0s, 5s;
}

.user-3 {
  animation: zoomIn 6s ease forwards, floatImageY 4s ease-in-out infinite;
  animation-delay: 0s, 3s;
}

.user-4 {
  animation: zoomIn 8s ease forwards, floatImageY 4s ease-in-out infinite;
  animation-delay: 0s, 5s;
}

.user-5 {
  animation: zoomIn 10s ease forwards, floatImageY 4s ease-in-out infinite;
  animation-delay: 0s, 6s;
}

.user-6 {
  animation: zoomIn 12s ease forwards, floatImageY 4s ease-in-out infinite;
  animation-delay: 0s, 4s;
}

.user-7 {
  animation: zoomIn 14s ease forwards, floatImageY 4s ease-in-out infinite;
  animation-delay: 0s, 6s;
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
    animation: zoomIn 2s ease forwards, floatImageX 4s ease-in-out infinite;
    animation-delay: 0s, 3s;
    margin: 5px;
  }

  .user-2 {
    animation: zoomIn 4s ease forwards, floatImageX 4s ease-in-out infinite;
    animation-delay: 0s, 5s;
    margin: 5px;
  }

  .user-3 {
    animation: zoomIn 6s ease forwards, floatImageX 4s ease-in-out infinite;
    animation-delay: 0s, 3s;
    margin: 5px;
  }

  .user-4 {
    animation: zoomIn 8s ease forwards, floatImageX 4s ease-in-out infinite;
    animation-delay: 0s, 5s;
    margin: 5px;
  }

  .user-5 {
    animation: zoomIn 2s ease forwards, floatImageX 4s ease-in-out infinite;
    animation-delay: 0s, 3s;
    margin: 5px;
  }

  .user-6 {
    animation: zoomIn 4s ease forwards, floatImageX 4s ease-in-out infinite;
    animation-delay: 0s, 5s;
    margin: 5px;
  }

  .user-7 {
    animation: zoomIn 6s ease forwards, floatImageX 4s ease-in-out infinite;
    animation-delay: 0s, 3s;
    margin: 5px;
  }
}
</style>
