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
import AboutView from '@/components/AboutView.vue';
import AccountView from '@/components/AccountView.vue'

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
      component: CreateView
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
      path: '/account',
      name: 'account',
      component: AccountView,
      meta: { requiresAuth: true }
    }
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
