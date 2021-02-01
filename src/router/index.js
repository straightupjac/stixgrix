import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '@/components/HomePage.vue';
import About from '@/components/About.vue';
import Work from '@/components/Work.vue';
import Art from '@/components/Art.vue';
import Fun from '@/components/Fun.vue';
import NotFound from '@/components/NotFound.vue';

Vue.use(Router);

const routes = [
  {
    path:'/',
    name:'Home',
    component: HomePage,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/work',
    component: Work,
  },
  {
    path: '/art',
    component: Art,
  },
  {
    path: '/fun',
    component: Fun,
  },
  {
    path: '/*',
    component: NotFound,
  },
];

const router = new Router({
  mode: "hash",
  routes,
  base: '.',
});

export default router;
