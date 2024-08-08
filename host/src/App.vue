<script setup lang="ts">
import { ref, onMounted } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import { mount } from 'pigeonTracker/vueApp';

const container = ref<HTMLDivElement | null>(null);

onMounted(() => {
  if (container.value) {
    mount(container.value);
  }
});
</script>

<template>
  <!-- Use the ref on the div -->
  <div>
    <div>
      <div ref="container"/>
    </div>

    <div>
      <HelloWorld msg="Host Sara component in Host Host Host"/>
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
