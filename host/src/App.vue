<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import { mount } from 'pigeonTracker/vueApp';
// import useCounterStore from 'pigeonTracker/useCounterStore';

const container = ref<HTMLDivElement | null>(null);

// Access the shared counter store
// const counterStore = useCounterStore();

// Create a computed property to display the counter value
// const counterValue = computed(() => counterStore?.counter ?? 0);

onMounted(() => {
  if (container.value) {
    mount(container.value);
  }
});
</script>

<template>
  <div>
    <div>
      <div ref="container"/>
    </div>

    <div>
      <HelloWorld msg="Host Sara component in Host Host Host"/>
    </div>

    <!-- Directly display the counter value here -->
    <div>
      <!--<h2>Counter Value ( From Shared Remote Store ): {{ counterValue }}</h2>-->
    </div>
  </div>
</template>