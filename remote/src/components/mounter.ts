import { createApp } from 'vue';
import HelloWorld from './HelloWorld.vue';

// Vuetify setup
import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

// Pinia setup
import { createPinia } from 'pinia';

const vuetify = createVuetify({
  components,
  directives,
});

// @ts-ignore
const mount = (el) => {
  const app = createApp(HelloWorld);

  const pinia = createPinia();

  // Use Vuetify and Pinia
  app.use(vuetify).use(pinia).mount(el);
};

const fetch_el = document.getElementById("dev-vue");

if (fetch_el) {
  mount(fetch_el);
}

export { mount };
