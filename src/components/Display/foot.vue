<template>
  <div :class="{ dark: isDarkMode }">
    <h1>Vue.js Dark Mode Example</h1>
    <button @click="toggleDarkMode">Toggle Dark Mode</button>
    <p>This is some content in your application.</p>
    <h5>Lorem ipsum dolor sit amet.</h5>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isDarkMode = ref(false);

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
};

</script>

<style lang="scss" scoped>
.dark {
  background-color: #1a1a1a;
  color: #fff;
  h5{
    color: aqua;
  }
}
h5{
  color: coral;
}
</style>
