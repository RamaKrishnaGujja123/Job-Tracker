import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from './pages/Dashboard.vue';
import AddApplication from './pages/AddApplication.vue';
import TimelineView from './pages/TimelineView.vue';

const routes = [
  { path: '/', name: 'Dashboard', component: Dashboard },
  { path: '/add', name: 'AddApplication', component: AddApplication },
  { path: '/timeline', name: 'TimelineView', component: TimelineView },
];

const router = createRouter({
  history: createWebHistory(), // Uses HTML5 history mode (clean URLs)
  routes,
});

export default router;
