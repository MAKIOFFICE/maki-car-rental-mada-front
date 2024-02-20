<template>
  <div class="divi">
    <HomeHead />
    <HomeIcon data-aos="fade-left" />
    <HomeSection data-aos="fade-right" />
    <Homegps data-aos="fade-left"/>
    <HomeAvantage data-aos="fade-right"/>
    <HomeTarif data-aos="fade-left"/>
    <HomeLiv data-aos="fade-right"/>
    <HomeTem data-aos="fade-left"/>
    <HommeTemoignage data-aos="fade-right"/>
    <HomeMarque data-aos="fade-left"/>
  </div>
</template>

<script setup>
import HomeHead from './HomeHead.vue';
import HomeIcon from './HomeIcon.vue';
import HomeSection from './HomeSection.vue';
import HomeMarque from './HomeMarque.vue'
import HomeLiv from './HomeLiv.vue'
import HomeTem from './HomeTem.vue'
import HomeTarif from './HomeTarif.vue'
import HomeAvantage from './HomeAvantage.vue';
import Homegps from './Homegps.vue';
import HommeTemoignage from './HommeTemoignage.vue';

AOS.init({
        offset: 400,
        duration: 1000,
      });
</script>

<style lang='scss' scoped>
.divi{
  overflow: hidden;
}
</style>