<template>
    <div>
        <h1>Nav</h1>
        <button @click="handleBtn">test</button>
    </div>
</template>
  
<script setup>
import { useRouter } from 'vue-router';
import HomeService from '@/service/test';
import { ref } from 'vue';

const router = useRouter();

async function handleBtn() {
    router.push('/about');
    try {
        const data = await HomeService.getHomeData();
        console.log(data);
    } catch (error) {

    }
}

</script>
  
<style></style>