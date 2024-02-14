<template>
  <div class="head">
    <MessageHeader />
    <AboutForm />
    <MessageContaint />
  </div>
</template>

<script setup>
import MessageHeader from "./MessageHeader.vue";
import MessageContaint from "./MessageContaint.vue";
import AboutForm from "../../Voiture/AboutForm.vue";
</script>

<style lang="scss" scoped>
.head{
  background-color: #fff;
}
</style>
