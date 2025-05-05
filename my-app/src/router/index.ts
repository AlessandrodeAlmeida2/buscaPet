import { createRouter, createWebHistory, type NavigationGuardNext } from 'vue-router'
import HomeView from '../views/HomeView.vue'
//@ts-ignore
import LoginView from '@/views/LoginView.vue'
//@ts-ignore
import { supabase } from '../supabase'
import ReadView from '@/components/ReadView.vue';
import CreateView from '@/components/CreateView.vue';
import UpdateView from '@/components/UpdateView.vue';
import UploadFoto from '@/components/UploadFoto.vue';
import DescriptionView from '@/components/DescriptionView.vue';
import ContatoView from '@/components/ContatoView.vue';
import FooterView from '@/components/FooterView.vue';
import CarouselView from '@/components/CarouselView.vue';
import Carousel2View from '@/components/Carousel2View.vue';
import AboutView from '@/components/AboutView.vue';
import AccountView from '@/components/AccountView.vue'
import CadastroView from '@/components/CadastroView.vue';
import PaymentView from '@/components/PaymentView.vue';
import SuccessView from '@/components/SuccessView.vue';
import Campanhaview from '@/components/CampanhaView.vue';
import ContatoCampanhaView from '@/components/ContatoCampanhaView.vue';
import AnuncioView from '@/components/AnuncioView.vue';

let localUser;

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      alias: '/home'
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/signup',
      name: 'signup',
      component: CadastroView
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: LoginView
    },    
    {
      path: '/read',
      name: 'read',
      component: ReadView
    },
    {
      path: '/create',
      name: 'create',
      component: CreateView,
      meta: { requiresAuth: true }
    },
    {
      path: '/update/:itemId',
      name: 'update',
      component: UpdateView
    },
    {
      path: '/upload/:getId',
      name: 'upload',
      component: UploadFoto
    },
    {
      path: '/description/:getId',
      name: 'description',
      component: DescriptionView
    },
    {
      path: '/contato',
      name: 'contato',
      component: ContatoView
    },
    {
      path: '/footer',
      name: 'footer',
      component: FooterView
    },
    {
      path: '/carousel',
      name: 'carousel',
      component: CarouselView
    },
    {
      path: '/carousel2',
      name: 'carousel2',
      component: Carousel2View
    },
    {
      path: '/account',
      name: 'account',
      component: AccountView,
      meta: { requiresAuth: true }
    },
    {
      path: '/payment',
      name: 'payment',
      component: PaymentView
    },
    {
      path: '/success',
      name: 'success',
      component: SuccessView
    },
    {
      path: '/campanha',
      name: 'campanha',
      component: Campanhaview,
      meta: { requiresAuth: true }
    },
    {
      path: '/contato_campanha',
      name: 'contato_campanha',
      component: ContatoCampanhaView
    },
    {
      path: '/anuncio',
      name: 'anuncio',
      component: AnuncioView
    },
    {
      path: '/ongs',
      name: 'ongs',
      component: () => import('@/components/OngsParceiras.vue')
    },
    {
      path: '/cadastro_adocao',
      name: 'cadastro_adocao',
      component: () => import('@/components/CadastroAdocao.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/adocao',
      name: 'adocao',
      component: () => import('@/components/Adocao.vue')
    },
    {
      path: '/description2/:getId',
      name: 'description2',
      component: () => import('@/components/Description2.vue')
    },
  ]
})

//getUser
async function getUser(next: NavigationGuardNext) {
  localUser = await supabase.auth.getSession();

  if (localUser.data.session == null) {
    next('/login');
  } else {
    next();
  }
}

//auth requirements
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    getUser(next);
  } else {
    next();
  }
})

export default router
