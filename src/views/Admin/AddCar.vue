<template>
  <div>
    <div class="row">
      <div class="col-md-3">
        <div class="buttonpage">
          <button @click="showPage(1)">Ajout de voiture</button>
          <button @click="showPage(2)">Affichage de Location</button>
          <button @click="showPage(3)">Affichage de voiture</button>
          <button @click="showPage(4)">page 4</button>
          <button>Déconexion</button>
        </div>
      </div>
      <div class="col-md-8">
        <div v-if="currentPage === 1">
          <!-- page 1-->
          <div class="signup-container">
            <!-- <form> -->
            <div class="row">
              <h2 class="text-center mb-4">Inscription</h2>
              <hr />
              <div class="col-md-8 m-auto">
                <div v-for="(item, index) in dataAddCarForm" :key="index">
                  <div v-if="item.typeInput === 'text'" class="mb-3">
                    <label class="form-label">{{ item.label }}</label>
                    <input
                      v-model="params[item.name]"
                      @change="handleChange"
                      :name="item.name"
                      :type="item.typeInput"
                      class="form-control"
                      :placeholder="item.placeholder"
                      :required="item.required"
                    />
                  </div>
                  <div v-if="item.typeInput === 'number'" class="mb-3">
                    <label class="form-label">{{ item.label }}</label>
                    <input
                      v-model="params[item.name]"
                      @change="handleChange"
                      :name="item.name"
                      :type="item.typeInput"
                      class="form-control"
                      :placeholder="item.placeholder"
                      :required="item.required"
                    />
                  </div>
                  <div v-if="item.typeInput === 'select'" class="mb-3">
                    <label for="text" class="form-label">{{
                      item.label
                    }}</label>
                    <select
                      v-model="params[item.name]"
                      @change="handleChange"
                      class="form-select"
                      aria-label="Default select example"
                      :required="item.required"
                    >
                      <option selected>---</option>
                      <option
                        v-for="(i, idx) in item.option"
                        :key="idx"
                        :value="i.value"
                      >
                        {{ i.label }}
                      </option>
                    </select>
                  </div>
                  <div v-if="item.typeInput === 'file'" class="mb-3">
                    <label for="formFileMultiple" class="form-label">{{
                      item.label
                    }}</label>
                    <input
                      class="form-control"
                      :type="item.typeInput"
                      id="formFileMultiple"
                      :name="item.name"
                      :required="item.required"
                      @change="handleFileChangeImage"
                    />
                  </div>
                  <div
                    v-if="item.typeInput === 'checkbox'"
                    class="form-check mb-3"
                  >
                    <input
                      v-model="params[item.name]"
                      @change="handleChange"
                      class="form-check-input"
                      type="checkbox"
                      :required="item.required"
                      value=""
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      {{ item.label }}
                    </label>
                  </div>
                </div>
                <div class="col-md-8">
                  <button
                    class="btn btn-primary btn-block mt-3 w-100"
                    @click="handleSubmit"
                  >
                    Ajout +
                  </button>
                </div>
              </div>
            </div>
            <!-- </form> -->
          </div>
          <!--  -->
        </div>
        <div v-if="currentPage === 2">
          <!-- page 2 -->
          <displayLoc />
          <!--  -->
        </div>
        <div v-if="currentPage === 3">
          <displayAuto />
          <!--  -->
        </div>
        <div v-if="currentPage === 4"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { data as dataAddCarForm } from "./data/dataAddCarForm";
import AdminService from "../../service/admin.js";
import displayLoc from "./displayLoc.vue";
import displayAuto from "./displayAuto.vue";

const currentPage = ref(1);

const showPage = (page) => {
  currentPage.value = page;
};

// Add image

const params = ref({
  nom_voiture: "",
  puissance: "",
  place: "",
  radio: "",
  boite: "",
  traction: "",
  motorisation: "",
  tarif: "",
  frais_livraison: "",
  coffre: "",
  porte: "",
  clim: "",
  gps: "",
  rehausseur: "",
  decapotable: "",
  utilitaire: "",
  bebe: "",
  dispo: "",
});
const formData = new FormData();

function handleChange(event) {
  let name = event.target.name;
  let value = event.target.value;

  params.value = {
    ...params.value,
    [name]: value,
  };
  console.log("--------", params.value);
}

// add inscription

const handleFileChangeImage = (event) => {
  let name = event.target.name;
  let value = event.target.files[0];

  params.value = {
    ...params.value,
    [name]: value,
  };
};

async function handleSubmit() {
  for (const key in params.value) {
    formData.append(key, params.value[key]);
  }

  const imageFile = params.value.symbole;
  formData.append("image", imageFile);
  console.log("submit", formData);
  try {
    const data = await AdminService.createCar(formData);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
</script>

<style scoped>
.signup-container {
  width: 100%;
  /* height: 550px; */
  /* overflow-y: scroll; */
  margin-bottom: 20px;
  background-color: #ffffff;
  padding: 20px;
}
.buttonpage {
  background-color: #000;
  padding: 20px 0px;
  height: 500px;
  position: sticky;
  top: 0;
}
.buttonpage button {
  background-color: #f5f5f5;
  color: #333;
  border: none;
  padding: 8px 20px;
  display: block;
  margin: 20px auto;
  font-weight: 600;
  width: 80%;
}
</style>
./data/dataAddCarForm
