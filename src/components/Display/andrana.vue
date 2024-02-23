<template>
  <div>
    <div class="row">
      <div class="container col-md-3">
        <div class="buttonpage">
          <button @click="showPage(1)">Ajout</button>
          <button @click="showPage(2)">Affichage de Location</button>
          <button @click="showPage(3)">Affichage de voiture</button>
          <button @click="showPage(4)">page 4</button>
        </div>
      </div>
      <div class="col-md-9">
        <div v-if="currentPage === 1">
          <!-- page 1-->
          <div class="signup-container">
            <form>
              <div class="row">
                <h2 class="text-center mb-4">Inscription</h2>
                <hr />
                <div class="col-md-6">
                  <div class="mb-3">
                    <label class="form-label">Marque</label>
                    <input
                      v-model="formData.marque"
                      type="text"
                      class="form-control"
                      placeholder="Marque"
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <label for="text" class="form-label"
                      >Boite de vitesse</label
                    >
                    <select
                      v-model="formData.boite"
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>---</option>
                      <option value="Manuel">Manuel</option>
                      <option value="Automatique">Automatique</option>
                    </select>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Puissance</label>
                    <input
                      v-model="formData.puissance"
                      type="text"
                      class="form-control"
                      placeholder="Puissance"
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Tarif</label>
                    <input
                      v-model="formData.tarif"
                      type="number"
                      class="form-control"
                      placeholder="Tarif"
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Frais Livraison</label>
                    <input
                      v-model="formData.frais"
                      type="number"
                      class="form-control"
                      placeholder="Frais Livraison"
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Lieu dispo</label>
                    <input
                      v-model="formData.lieu"
                      type="boolean"
                      class="form-control"
                      placeholder="Lieu dispo"
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Radio</label>
                    <input
                      v-model="formData.radio"
                      type="text"
                      class="form-control"
                      placeholder="Radio"
                      required
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mb-3">
                    <label class="form-label">Place</label>
                    <input
                      v-model="formData.place"
                      type="number"
                      class="form-control"
                      placeholder="Place"
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Coffre</label>
                    <input
                      v-model="formData.coffre"
                      type="number"
                      class="form-control"
                      placeholder="Coffre"
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <label for="text" class="form-label">Traction</label>
                    <select
                      v-model="formData.traction"
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>---</option>
                      <option value="2x2">2 motrices</option>
                      <option value="4x4">4 motrices</option>
                    </select>
                  </div>
                  <div class="mb-3">
                    <label for="text" class="form-label">Moteur</label>
                    <select
                      v-model="formData.moteur"
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>---</option>
                      <option value="Essence">Essence</option>
                      <option value="Diesel">Diesel</option>
                      <option value="Electrique">Electrique</option>
                    </select>
                  </div>
                  <div class="mb-3">
                    <label for="formFileMultiple" class="form-label"
                      >Image</label
                    >
                    <input
                      class="form-control"
                      type="file"
                      id="formFileMultiple"
                      @change="handleFileChange"
                    />
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-check mb-3">
                        <input
                          v-model="formData.clim"
                          class="form-check-input"
                          type="checkbox"
                          value=""
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Clim
                        </label>
                      </div>
                      <div class="form-check mb-3">
                        <input
                          v-model="formData.gps"
                          class="form-check-input"
                          type="checkbox"
                          value=""
                        />
                        <label class="form-check-label" for="flexCheckChecked">
                          Gps
                        </label>
                      </div>
                      <div class="form-check mb-3">
                        <input
                          v-model="formData.rehausseur"
                          class="form-check-input"
                          type="checkbox"
                          value=""
                        />
                        <label class="form-check-label" for="flexCheckChecked">
                          Rehausseur
                        </label>
                      </div>
                      <div class="form-check mb-3">
                        <input
                          v-model="formData.bebe"
                          class="form-check-input"
                          type="checkbox"
                          value=""
                        />
                        <label class="form-check-label" for="flexCheckChecked">
                          Bebe
                        </label>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-check mb-3">
                        <input
                          v-model="formData.decapotable"
                          class="form-check-input"
                          type="checkbox"
                          value=""
                        />
                        <label class="form-check-label" for="flexCheckChecked">
                          Decapotable
                        </label>
                      </div>
                      <div class="form-check mb-3">
                        <input
                          v-model="formData.utilitaire"
                          class="form-check-input"
                          type="checkbox"
                          value=""
                        />
                        <label class="form-check-label" for="flexCheckChecked">
                          Utilitaire
                        </label>
                      </div>
                      <div class="form-check mb-3">
                        <input
                          v-model="formData.dispo"
                          class="form-check-input"
                          type="checkbox"
                          value=""
                        />
                        <label class="form-check-label" for="flexCheckChecked">
                          Dispo
                        </label>
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    class="btn btn-primary btn-block mt-3 w-100"
                    @click="handleSubmit"
                  >
                    S'inscrire
                  </button>
                </div>
              </div>
            </form>
          </div>
          <!--  -->
        </div>
        <div v-if="currentPage === 2">
          <!-- page 2 -->
          <div class="signup-container">
            <div>
              <div class="col-md-6 mt-2 mb-3 d-flex ms-auto">
                <input type="text" placeholder="Search" class="form-control" />
              </div>
            </div>
            <hr />
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">Image</th>
                  <th scope="col">Marque</th>
                  <th scope="col">Dispo</th>
                  <th scope="col">Lieu</th>
                  <th scope="col">Date</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Lorem ipsum</td>
                  <td>Lorem ipsum</td>
                  <td>Lorem ipsum</td>
                  <td>Lorem ipsum</td>
                  <td>Lorem ipsum</td>
                  <td class="tdbtn">
                    <a
                      class="adrIcplus"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      >Detail</a
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!--  -->
        </div>
        <div v-if="currentPage === 3">
          <div class="signup-container">
            <div>
              <div class="col-md-6 mt-2 mb-3 d-flex ms-auto">
                <input type="text" placeholder="Search" class="form-control" />
              </div>
            </div>
            <hr />
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">Image</th>
                  <th scope="col">Marque</th>
                  <th scope="col">Dispo</th>
                  <th scope="col">Lieu</th>
                  <th scope="col">Date</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Lorem ipsum</td>
                  <td>Lorem ipsum</td>
                  <td>Lorem ipsum</td>
                  <td>Lorem ipsum</td>
                  <td>Lorem ipsum</td>
                  <td class="tdbtn">
                    <a class="adrIcEd" @click="showPage(1)"
                      ><i class="bi bi-pencil-square"></i
                    ></a>
                    <a class="adrIcSup"><i class="bi bi-trash-fill"></i></a>
                    <a
                      class="adrIcplus"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      >Detail</a
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- Modal -->
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-lg modal-dialog-scrollable">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Liste de Voiture
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>id</th>
                        <td scope="row">1</td>
                      </tr>
                      <tr>
                        <th>Image</th>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <th>Marque</th>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <th>Boite</th>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <th>Puissance</th>
                        <td>lorem</td>
                      </tr>
                      <tr>
                        <th>Tarif</th>
                        <td>lorem</td>
                      </tr>
                      <tr>
                        <th>Frais</th>
                        <td>lorem</td>
                      </tr>
                      <tr>
                        <th>Lieu</th>
                        <td>lorem</td>
                      </tr>
                      <tr>
                        <th>Radio</th>
                        <td>lorem</td>
                      </tr>
                      <tr>
                        <th>Place</th>
                        <td>lorem</td>
                      </tr>
                      <tr>
                        <th>Coffre</th>
                        <td>lorem</td>
                      </tr>
                      <tr>
                        <th>Traction</th>
                        <td>lorem</td>
                      </tr>
                      <tr>
                        <th>Moteur</th>
                        <td>lorem</td>
                      </tr>
                      <tr>
                        <th>Clim</th>
                        <td>lorem</td>
                      </tr>
                      <tr>
                        <th>Decapotable</th>
                        <td>lorem</td>
                      </tr>
                      <tr>
                        <th>Gps</th>
                        <td>lorem</td>
                      </tr>
                      <tr>
                        <th>Utilitaire</th>
                        <td>lorem</td>
                      </tr>
                      <tr>
                        <th>Rehausseur</th>
                        <td>lorem</td>
                      </tr>
                      <tr>
                        <th>Dispo</th>
                        <td>lorem</td>
                      </tr>
                      <tr>
                        <th>Bebe</th>
                        <td>lorem</td>
                      </tr>
                      <tr>
                        <th>Date</th>
                        <td>lorem</td>
                      </tr>
                    </tbody>
                  </table>
                  <!--  -->
                  <div class="signup-container">
                    <form @submit.prevent="handleSubmitIm" class="row g-3 mb-5">
                      <div class="col-auto">
                        <label for="formFileMultiple" class="form-label p-2"
                          >Ajout Images :</label
                        >
                      </div>
                      <div class="col-auto">
                        <input
                          class="form-control"
                          type="file"
                          id="imageInput"
                          ref="imageInput"
                          multiple
                          @change="handleFileChange"
                        />
                      </div>
                      <div class="col-auto">
                        <button class="btn btn-primary btn-block" type="submit">
                          Upload Images
                        </button>
                      </div>
                    </form>

                    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                      <div
                        class="card m-0"
                        v-for="(image, index) in images"
                        :key="index"
                      >
                        <div class="cardOn">
                          <div class="box">
                            <img
                              class="w-100"
                              :src="image.url"
                              alt="Uploaded Image"
                            />
                          </div>
                        </div>
                        <div class="divrem">
                          <span
                            ><i
                              class="bi bi-trash-fill"
                              @click="handleRemove(index)"
                            ></i
                          ></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!--  -->
                </div>
              </div>
            </div>
          </div>
          <!--  -->
        </div>
        <div v-if="currentPage === 4"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const currentPage = ref(1);

const showPage = (page) => {
  currentPage.value = page;
};

// Add image
const images = ref([]);

const handleFileChange = (event) => {
  const files = event.target.files;

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const imageUrl = URL.createObjectURL(file);

    images.value.push({ file, url: imageUrl });
  }
  event.target.value = null;
};

const handleRemove = (index) => {
  images.value.splice(index, 1);
};

const handleSubmitIm = () => {
  const imagesJSON = JSON.stringify(images.value);
  console.log(imagesJSON);
};
// add inscription
const formData = ref({
  marque: "",
  boite: "",
  puissance: "",
  tarif: "",
  frais: "",
  lieu: "",
  radio: "",
  place: "",
  coffre: "",
  traction: "",
  moteur: "",
  clim: "",
  gps: "",
  rehausseur: "",
  bebe: "",
  decapotable: "",
  utilitaire: "",
  dispo: "",
});
const handleSubmit = () => {
  const jsonData = {
    marque: formData.marque,
    boite: formData.boite,
    puissance: formData.puissance,
    tarif: formData.tarif,
    frais: formData.frais,
    lieu: formData.lieu,
    radio: formData.radio,
    place: formData.place,
    coffre: formData.coffre,
    traction: formData.traction,
    moteur: formData.moteur,
    clim: formData.clim,
    gps: formData.gps,
    rehausseur: formData.rehausseur,
    bebe: formData.bebe,
    decapotable: formData.decapotable,
    utilitaire: formData.utilitaire,
    dispo: formData.dispo,
    // Ajoutez d'autres champs d'entrée au besoin
  };

  // Faites ce que vous voulez avec jsonData (par exemple, envoyez-le à votre backend)
  console.log(jsonData, "text");
};
</script>

<style scoped>
.signup-container {
  width: 100%;
  margin-left: -10px;
  margin-bottom: 20px;
  background-color: #ffffff;
  padding: 20px;
}
.buttonpage {
  background-color: #000;
  padding: 20px 0px;
  height: 500px;
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

.allpage3 {
  width: 100%;
  background-color: chartreuse;
}
.allpage4 {
  background-color: gold;
}
.divrem {
  margin-top: auto;
}
.divrem span {
  display: inline-block;
  padding: 5px;
  color: red;
  font-size: 18px;
  cursor: pointer;
}
.tdbtn {
  display: flex;
  justify-content: space-between;
}
.adrIcplus,
.adrIcSup,
.adrIcEd {
  color: #fff;
  padding: 6px 15px;
  border-radius: 8px;
  cursor: pointer;
}
.adrIcEd {
  background-color: rgb(7, 185, 7);
}
.adrIcSup {
  background-color: rgb(223, 24, 24);
}
.adrIcplus {
  background-color: rgb(21, 131, 209);
}
</style>
