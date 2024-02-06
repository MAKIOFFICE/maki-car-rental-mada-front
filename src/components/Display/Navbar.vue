<template>
    <div>
        <h1>Nav</h1>
        <button @click="handleBtn">test</button>
    </div>
</template>
  
<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const handleBtn = () => {
    router.push('/about');
}

</script>
  
<style></style>