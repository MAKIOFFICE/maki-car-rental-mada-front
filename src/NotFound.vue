<template>
  <div>
    <div class="container">
      <div class="containt">
        <img :src="NotFound" alt="icon" />
        <h1>Not Found</h1>
        <p>
            La page que vous recherchez est peut-être en construction ou n'existe pas.
        </p>
        <button @click="HomeBtn">Go to Home</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

import NotFound from "../src/assets/icons/404.svg";
const router = useRouter();
const HomeBtn = () => {
  router.push("/");
};
</script>

<style scoped>
.containt {
  text-align: center;
  /* background-color: aqua; */
  padding: 20px 0px 50px 0px;
}
h1,
p {
  color: #333;
}
button{
    padding: 8px 15px;
    border: none;
    background-color: #6dace6;
    color: #fff;
}
</style>
