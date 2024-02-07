<template>
<div>
    <div class="container mt-3">
      <div class="row justify-content-around">
        <div class="col-md-6">
          <button type="button" class="btnvalidation" @click="returnBtn">⇦ Retour</button>
        </div>
        <div class="col-md-6">
          <button type="button" class="btnvalidation">Valider ⇨</button>
          <p class="parambtnval">
            Vous pourrez vérifier à nouveau vos informations à l'étape suivante, avant de
            finaliser votre réservation.
          </p>
        </div>
      </div>
    </div>
</div>
</template>
<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const returnBtn = () => {
    router.push("/about")
};
</script>
<style lang="scss" scoped>
.btnvalidation {
  background-color: #899e27;
  color: #fff;
  border: none;
  padding: 15px 30px;
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
}

.btnvalidation:hover {
  background-color: #546507;
}

.parambtnval {
  width: 400px;
  padding: 10px;
  margin-top: 10px;
}
</style>