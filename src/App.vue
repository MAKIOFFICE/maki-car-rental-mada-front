<script setup>
import HelloWorld from './components/HelloWorld.vue';
import Home from './views/Home.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const handleBtn = () => {
  router.push('/about');
}
</script>
  

<template>
  <div>
    <Home />
   <button @click="handleBtn">btn</button>
  </div>

</template>

<style scoped>

</style>
