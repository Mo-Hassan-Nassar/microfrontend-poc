// src/main.ts
import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';

// Vuetify setup
import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
  components,
  directives,
});

const pinia = createPinia(); // Create Pinia instance

const app = createApp(App);

app.use(vuetify);
app.use(pinia); // Use Pinia

app.mount('#app');
