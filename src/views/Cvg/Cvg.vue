<template>
   <div class="header">
    <CvgHeader/>
    <CvgDiv/>
    <CvgContact/>
   </div>
</template>
<script setup>
import CvgHeader from './CvgHeader.vue'
import CvgContact from './CvgContact.vue'
import CvgDiv from './CvgDiv.vue'
</script>
<style lang='scss' scoped>
.header{
   background-color: #fff;
}
</style>