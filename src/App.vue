<script setup>
import Navbar from './components/Display/Navbar.vue';
import Footer from './components/Display/Footer.vue';

</script>
  

<template>
  <div>
    <Navbar />
    <router-view v-slot="{ Component }">
      <transition appear name="fade-page" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <Footer/>
  </div>
</template>

<style lang="scss" scoped>
.fade-page-enter-active,
.fade-page-leave-active {
  transition: all 0.4s ease;
  visibility: hidden;
  transition-delay: 0.1s;
}

.fade-page-enter-from,
.fade-page-leave-to {
  opacity: 0;
  visibility: visible;
}
</style>
