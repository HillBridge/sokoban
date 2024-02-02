import { createRouter, createWebHistory } from 'vue-router';
import Game from '@/views/Game.vue';
import EditMap from '@/views/EditMap.vue';

const routes = [
  {
    path: '/',
    name: 'Game',
    component: Game
  },
  {
    path: '/editMap',
    name: 'EditMap',
    component: EditMap
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;