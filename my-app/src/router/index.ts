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

let localUser;

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: LoginView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
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
