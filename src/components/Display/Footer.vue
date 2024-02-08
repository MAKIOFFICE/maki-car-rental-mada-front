<template>
    <div>
        <div class="elfsight-app-3f56ca84-0676-4116-b0f2-c122e5a57342" data-elfsight-app-lazy></div>
        <footer class="container-fluid text-light p-4">
        <div class="container">
            <div class="row">
            <!-- Colonne 1 -->
            <div class="col-md-4">
                <img routerLink="" src="https://d12ittivwictyd.cloudfront.net/images/logo.png" alt="Maki Car Rental Logo">
            </div>

            <!-- Colonne 2 -->
            <div class="col-md-4 d-flex justify-content-end">
                <p>© 2009 – {{ currentYear  }} Maki Car Rental</p>

            </div>

            <!-- Colonne 3 -->
            <div class="col-md-4 d-flex justify-content-end">
                <a @click="scrollToTop">
                <i class="bi bi-arrow-up-circle iconeTop"></i>
                </a>
            </div>
            </div>
        </div>
        </footer>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const currentYear = ref(new Date().getFullYear());

onMounted(() => {
  // Mettre à jour l'année toutes les secondes
  setInterval(() => {
    currentYear.value = new Date().getFullYear();
  }, 1000);
});

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
</script>

<style lang='scss' scoped>
p {
    /* background-color: aquamarine; */
    padding: 15px;
    color: rgba(0, 0, 0, 0.649);
}

.iconeTop {
    font-size: 2.5rem;
    color: #68b5de;
    cursor: pointer;
}
img{
    cursor: pointer;
}</style>