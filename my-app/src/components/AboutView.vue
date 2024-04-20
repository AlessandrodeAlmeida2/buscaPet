<script>
import AOS from 'aos';
import 'aos/dist/aos.css'; // Você também pode precisar importar o CSS do AOS

export default {
  name: 'SeuComponente',
  mounted() {
    this.$nextTick(function () {
      AOS.init({
        delay: 200, // values from 0 to 3000, with step 50ms
        duration: 1500, // values from 0 to 3000, with step 50ms
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
      });
    })
  },
  // ...
};
</script>

<template>
    <section>
      <!-- Section Container -->
      <div class="container-about">
        <!-- Text Box -->
        <div class="flex-text">
          <div>
            <h2>Here are our heroes</h2>
            <p>
              According to the National Oceanic and Atmospheric
              Administration, Ted, Scambos, NSIDClead scentist, puts the
              potentially record maximum.
            </p>
          </div>
        </div>
        <!-- Flex Row Container -->
        <div class="flex-img">
          <!-- Item -->
          <div data-aos="fade-in">
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
                  Web Developer
                </p>
                <!-- Social Media Buttons -->
                <div>
                  <button>
                    <!-- Icon -->
                    <i class="fab fa-twitter"></i>
                  </button>
                  <button>
                    <!-- Icon -->
                    <i class="fab fa-facebook-f"></i>
                  </button>
                  <button>
                    <!-- Icon -->
                    <i class="fab fa-dribbble"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- Item -->
          <div data-aos="fade-in" data-aos-delay="200">
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
                <div>
                  <button>
                    <!-- Icon -->
                    <i class="fab fa-google"></i>
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
          <div data-aos="fade-in" data-aos-delay="400">
            <div class="px-6">
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
                <div>
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
          <div data-aos="fade-in" data-aos-delay="600">
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
                <div>
                  <button>
                    <!-- Icon -->
                    <i class="fab fa-dribbble"></i>
                  </button>
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
  margin-bottom: 50px;
}
.flex-img {
  display: flex;
  justify-content: space-evenly;
}

.flex-img img {
  border-radius: 60px;
}
</style>
