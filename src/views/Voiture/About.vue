<template>
  <div class="division">
    <AboutForm @on-search="getAllCarByPlace" />
    <AboutIcone />
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <AboutFirstCol />
        </div>
        <div class="col-md-8">
          <AboutSecCol
            :data-search-store="dataStore"
            :data-available-car="availableCar"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AboutFirstCol from "./AboutFirstCol.vue";
import AboutSecCol from "./AboutSecCol.vue";
import AboutForm from "./AboutForm.vue";
import AboutIcone from "./AboutIcone.vue";
import { useStore } from "vuex";
import { onMounted, ref, watch } from "vue";
import CarService from "../../service/carService";

const store = useStore();
const availableCar = ref(null);
const dataStore = store.state.search;

watch(
  () => availableCar.value,
  (v) => {
    availableCar.value = v;
  },
  { immediate: true, deep: true }
);

onMounted(() => {
  if (store.state.pageLoad === "btn") {
    getAllCarByPlace();
  } else {
    getAllCar();
  }
  console.log("store state", store.state.pageLoad);
});

async function getAllCarByPlace() {
  console.log("888888888", dataStore);
  try {
    const response = await CarService.getCarListByPlace(
      dataStore.departure_place
    );
    availableCar.value = response.records.map((item) => item.fields);
    console.log("availableCar =====>", availableCar.value);
  } catch (error) {
    console.error(error);
  }
}

async function getAllCar() {
  try {
    const response = await CarService.getCarList();
    availableCar.value = response.records.map((item) => item.fields);
    console.log("availableCar =====>", availableCar.value);
  } catch (error) {
    console.error(error);
  }
}
</script>

<style lang="scss" scoped>
.division {
  background-color: #fff;
}
</style>
