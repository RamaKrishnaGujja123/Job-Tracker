import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from './pages/Dashboard.vue';
import AddApplication from './pages/AddApplication.vue';
import TimelineView from './pages/TimelineView.vue';

const routes = [
  { path: '/', component: Dashboard },
  { path: '/add', component: AddApplication },
  { path: '/timeline', component: TimelineView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;