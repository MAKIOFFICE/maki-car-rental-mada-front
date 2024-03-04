<template>
  <div>
    <div class="banner">
      <div class="container">
        <div class="header text-center">
          <h1>{{ $t("welcome") }}</h1>
          <p>
            {{ $t("choisir") }}
          </p>
        </div>
      </div>
      <div class="container">
        <div class="container div-form">
          <h3>
            {{ $t("formulaireHome") }}
          </h3>
          <hr />
          <!--  -->
          <div class="container mt-4">
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
              <!-- Colonne 1 -->
              <div class="col">
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label"
                    >{{ $t("lieudepart")}}</label
                  >
                  <div class="divisionseardate">
                    <select
                      name="departure_place"
                      class="form-select formcont"
                      @change="handleChange"
                    >
                      <option selected>Open this select menu</option>
                      <option value="Majunga">Majunga</option>
                      <option value="Antananarivo">Antananarivo</option>
                      <option value="Toamasina">Toamasina</option>
                    </select>
                    <span class="spandate"
                      ><i class="bi bi-caret-down-fill"></i
                    ></span>
                  </div>
                </div>
              </div>

              <!-- Colonne 2 -->
              <div class="col">
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label"
                    >{{$t("lieuretour")}}</label
                  >
                  <div class="divisionseardate">
                    <select
                      name="return_place"
                      class="form-select formcont"
                      @change="handleChange"
                    >
                      <option selected>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <span class="spandate"
                      ><i class="bi bi-caret-down-fill"></i
                    ></span>
                  </div>
                </div>
              </div>

              <!-- Colonne 3 -->
              <div class="col">
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label"
                    >{{$t("dateheuredepart")}}</label
                  >
                  <div class="divisionseardate">
                    <input
                      type="datetime-local"
                      class="form-control formcont"
                      name="departure_date"
                      @change="handleChange"
                    />
                    <span class="spandate"><i class="bi bi-clock"></i></span>
                  </div>
                </div>
              </div>

              <!-- Colonne 4 -->
              <div class="col">
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label"
                    >{{ $t("dateheureretour") }}</label
                  >
                  <div class="divisionseardate">
                    <input
                      type="datetime-local"
                      class="form-control formcont"
                      name="return_date"
                      @change="handleChange"
                    />
                    <span class="spandate"><i class="bi bi-clock"></i></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
              <div class="ms-auto">
                <button class="button" @click="clickCarBtn">
                  {{$t("offres")}}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">New message</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3">
                <div class="divisionseardate">
                  <input
                    type="text"
                    class="form-control formcont"
                    placeholder="Faite votre recherche ici"
                  />
                  <span class="spandate"><i class="bi bi-search"></i></span>
                </div>
              </div>
              <div class="mb-3">
                <ul class="list-group">
                  <li class="list-group-item">An item</li>
                  <li class="list-group-item">A second item</li>
                  <li class="list-group-item">A third item</li>
                  <li class="list-group-item">A fourth item</li>
                  <li class="list-group-item">And a fifth one</li>
                </ul>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- modal fin -->
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import { useToast } from "vue-toastification";
import { useStore } from "vuex";

const router = useRouter();
const store = useStore();
const toast = useToast();

const params = ref(null);
// const params = ref(store.state.search);

function handleChange(value) {
  const inputValue = value.target.value;
  const inputName = value.target.name;
  params.value = {
    ...params.value,
    [inputName]: inputValue,
  };
  console.log("params", params.value);
}
const clickCarBtn = () => {
  try {
    store.commit("setSearch", params.value);

    if (!store.state.search) {
      toast.error("Il y a une erreur !", {
        position: "top-right",
        timeout: 5000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: false,
        closeButton: "button",
        icon: true,
        rtl: false,
      });
    } else {
      console.log(store.state.search);
      store.commit("setpageLoad", "btn");
      router.push("/about");
    }
  } catch (error) {
    console.error(error);
  }
};
</script>

<style scoped>
.divcont {
  padding: 10px 50px;
}
.banner {
  width: 100%;
  padding: 80px 0px;
  background: url("../../assets/image/HomeImg/banner-bg.png");
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;
  min-height: 100vh;
  /* margin: 0; */
}

h1 {
  font-size: 52px;
  color: white;
  text-align: center;
  font-weight: bold;
  /* background: red; */
  padding: 20px 0;
}
p {
  color: #e2dfdf;
  font-size: 16px;
  /* background: grey; */
  padding: 20px 0;
}
.div-form {
  background-color: #fff;
  padding: 25px;
  border-radius: 8px;
  margin-top: 5rem;
}
h3 {
  color: #212529;
  font-size: 18px;
  margin: 0px 0px 8px;
}
.button {
  color: #fff;
  background-color: #8da044;
  padding: 10px;
  width: 100%;
  border: none;
  border-radius: 8px;
}
.divisionseardate {
  position: relative;
  margin: 15px 0px;
  top: -15px;
  bottom: 0px;
}

.spandate {
  font-size: 1.2rem;
  position: absolute;
  z-index: 5;
  top: 0;
  left: 80%;
  width: 20%;
  height: 100%;
  background-color: #fff;
  border: 1px solid #b4b0b0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fdb714;
  border-radius: 8px;
  cursor: pointer;
}
.formcont {
  border-radius: 8px;
  height: 50px;
}
.formcont::-webkit-calendar-picker-indicator {
  position: relative;
  z-index: 20;
  cursor: pointer;
  left: 15px;
  font-size: 3rem;
  opacity: 0;
}
label {
  font-weight: 500;
  white-space: nowrap;
}
</style>
