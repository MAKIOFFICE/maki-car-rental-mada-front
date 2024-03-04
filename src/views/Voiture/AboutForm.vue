<template>
  <div class="head">
    <div class="container divcont">
      <h1>Votre demande</h1>
      <div
        class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4"
      >
        <div class="custom-column">
          <div>
            <label for="exampleInputEmail1" class="form-label"
              >Lieu de depart</label
            >
            <div class="divisionseardate">
              <select
                class="form-select formcont"
                aria-label="Default select example"
                @change="handleChange"
                name="departure_place"
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
        <div class="custom-column">
          <div>
            <label for="exampleInputEmail1" class="form-label"
              >Lieu de retour</label
            >
            <div class="divisionseardate">
              <select
                class="form-select formcont"
                aria-label="Default select example"
                @change="handleChange"
                name="return_place"
              >
                <option value="1">One</option>
                <option value="2">Two</option>
              </select>
              <span class="spandate"
                ><i class="bi bi-caret-down-fill"></i
              ></span>
            </div>
          </div>
        </div>
        <div class="custom-column">
          <div>
            <label for="exampleInputEmail1" class="form-label"
              >Date et heure de retour</label
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
        <div class="custom-column">
          <div>
            <label for="exampleInputEmail1" class="form-label"
              >Date et heure de depart</label
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
        <div class="custom-btn">
          <button @click="clickCarBtn">NOUVELLE RECHERCHE</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { useRouter } from "vue-router";
import { ref } from "vue";
import { useToast } from "vue-toastification";
import { useStore } from "vuex";

// const router = useRouter();
const store = useStore();
const toast = useToast();
const emit = defineEmits(['onSearch']);

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
  // alert('test')
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
      console.log("heures",store.state.search);
      store.commit("setpageLoad", "btn");
      emit('onSearch');
      // router.push("/");
    }
  } catch (error) {
    console.error(error);
  }
};
</script>

<style lang="scss" scoped>
.head {
  background-color: #fff;
}
.divcont {
  padding: 10px 30px;
}
.divcont h1 {
  // background-color: #8da044;
  font-size: 25px;
  padding: 25px 0px;
  color: #fdb714;
}
.custom-column {
  padding: 10px;
  border-radius: 10px;
  margin: 0px;
  height: 110px;
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
}
.formcont {
  border-radius: 8px;
  height: 50px;
}
.formcont::-webkit-calendar-picker-indicator {
  position: relative;
  z-index: 20;
  cursor: pointer;
  opacity: 0;
}
label {
  font-weight: 500;
  white-space: nowrap;
}
.custom-btn {
  padding: 40px 10px;
  border-radius: 10px;
  height: 110px;
  margin: 0px;
}
.custom-btn button {
  width: 90%;
  height: 50px;
  background-color: #8da044;
  color: #fff;
  border: none;
  border-radius: 5px;
}
</style>
