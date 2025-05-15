import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import router from './router';

// Import Bootstrap CSS and Icons
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const app = createApp(App);

app.use(createPinia()); // Set up Pinia for state management
app.use(router); // Set up Vue Router for navigation

app.mount('#app'); // Mount the Vue application to the DOM