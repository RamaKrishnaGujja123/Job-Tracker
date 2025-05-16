import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import router from './router';

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// ✅ Import Bootstrap JavaScript and Popper.js
import 'bootstrap'; // This includes both bootstrap.js and Popper (via dependency)

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount('#app');
