import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import FooterView from '@/components/FooterView.vue'
import CarouselView from '@/components/CarouselView.vue'
import Carousel2View from '@/components/Carousel2View.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.component('FooterView', FooterView);
app.component('CarouselView', CarouselView);
app.component('Carousel2View', Carousel2View);

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
