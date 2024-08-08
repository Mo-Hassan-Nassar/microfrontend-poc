<script setup lang="ts">
import { defineProps } from 'vue';


import 'vuetify/styles'


defineProps<{ msg: string }>()
</script>

<template>
  <v-app>
    <v-main>
      <h1>{{ msg }}</h1>
      <p class="read-the-docs">
        Click on the Vite and Vue logos to learn more
      </p>
      <v-btn color="primary">Vuetify Button</v-btn>
    </v-main>
  </v-app>
</template>

<style scoped>
.read-the-docs {
  color: green;
}
</style>