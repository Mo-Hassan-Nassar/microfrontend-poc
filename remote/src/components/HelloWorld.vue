<script setup lang="ts">
import { defineProps } from 'vue';
import useCounterStore from '../store/useCounterStore.ts'

defineProps<{ msg: string }>();

const counterStore = useCounterStore();

</script>

<template>
  <v-app>
    <v-main>
      <h1>{{ msg }}</h1>
      <p class="read-the-docs">
        Click on the Vite and Vue logos to learn more
      </p>
      <v-btn color="primary" @click="counterStore.increment">Increment Counter</v-btn>
      <p>Counter: {{ counterStore.counter }}</p>
    </v-main>
  </v-app>
</template>

<style scoped>
.read-the-docs {
  color: green;
}
</style>
