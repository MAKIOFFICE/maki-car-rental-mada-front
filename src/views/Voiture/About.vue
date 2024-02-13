<template>
  <div class="division">
    <AboutForm/>
    <AboutIcone />
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <AboutFirstCol/>
        </div>
        <div class="col-md-8 ">
          <AboutSecCol/>
        </div>
  </div>
 
</div>
  </div>
</template>

<script setup>
import AboutFirstCol from './AboutFirstCol.vue';
import AboutSecCol from './AboutSecCol.vue';
import AboutForm from './AboutForm.vue';
import AboutIcone from './AboutIcone.vue';


</script>

<style lang='scss' scoped>
.division{
  background-color: #fff;
}
</style>