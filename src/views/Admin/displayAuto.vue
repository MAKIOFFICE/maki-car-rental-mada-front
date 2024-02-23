<template>
  <div>
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
            <th scope="col">Place</th>
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
              <a class="adrIcEd"
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
            <h5 class="modal-title" id="exampleModalLabel">Liste de Voiture</h5>
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
            <div>
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
  </div>
</template>
<script setup>
import { ref } from "vue";
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
</style>
