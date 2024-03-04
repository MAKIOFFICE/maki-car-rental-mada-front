<template>
  <div>
    <!-- {{ dataCar }} -->
    <input type="datetime-local">
  </div>
</template>
<script setup>
import { onMounted, ref, watch } from "vue";
import CarService from "../../service/carService";

// const dataCar = ref([]);

// watch(
//   () => dataCar.value,
//   (data) => {
//     dataCar.value = data;
//   },
//   { immediate: true, deep: true }
// );

onMounted(() => {
  getAllCarByPlace();
});

async function getAllCarByPlace() {
  try {
    const response = await CarService.getCarListByPlace("Majunga");
    console.log("hey Data =====>", response);
  } catch (error) {
    console.error(error);
  }
}
</script>
<style scoped></style>
