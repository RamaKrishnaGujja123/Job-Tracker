import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import router from './router';

// Import Bootstrap CSS and Bootstrap Icons
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const app = createApp(App);

// Register Pinia store for state management
app.use(createPinia());

// Register Vue Router for routing/navigation
app.use(router);

// Mount the app to the HTML element with id 'app'
app.mount('#app');
