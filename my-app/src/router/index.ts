import { createRouter, createWebHistory, type NavigationGuardNext } from 'vue-router'
import HomeView from '../views/HomeView.vue'
//@ts-ignore
import LoginView from '@/views/LoginView.vue'
//@ts-ignore
import { supabase } from '../supabase'
import SecretView from '@/views/SecretView.vue';
import ReadView from '@/components/ReadView.vue';
import CreateView from '@/views/CreateView.vue';
import UpdateView from '@/components/UpdateView.vue';
import UploadFoto from '@/components/UploadFoto.vue';
import DescriptionView from '@/components/DescriptionView.vue';
import ContatoView from '@/components/ContatoView.vue';

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
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: LoginView
    },    
    {
        path: '/secret',
        name: 'secret',
        component: SecretView,
        meta: { requiresAuth: true }
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
      path: '/upload',
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
