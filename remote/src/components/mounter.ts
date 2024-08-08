import { createApp } from "vue";
import HelloWorld from './HelloWorld.vue';

const fetch_el = document.getElementById("dev-vue");

// Vuetify setup
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
});

// @ts-ignore
const mount = (el) => {
  const app = createApp(HelloWorld)
  app.use(vuetify).mount(el);
}

if(fetch_el){
  mount(fetch_el);
}

export { mount }