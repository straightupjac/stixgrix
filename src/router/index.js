import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '@/components/HomePage.vue';
import About from '@/components/HomePage.vue';
import Work from '@/components/HomePage.vue';
import Art from '@/components/HomePage.vue';
import Fun from '@/components/HomePage.vue';
import NotFound from '@/components/HomePage.vue';

Vue.use(Router);

const routes = [
  {
    path:'/',
    name:'Home',
    component: HomePage,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/work",
    component: Work,
  },
  {
    path: "/art",
    component: Art,
  },
  {
    path: "/fun",
    component: Fun,
  },
  {
    path: "/*",
    component: NotFound,
  },
];

const router = new Router({
  mode: 'history',
  routes,
});

export default router;
