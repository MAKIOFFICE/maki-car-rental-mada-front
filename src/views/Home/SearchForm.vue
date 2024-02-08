<template>
  <div class="search-form">
    <h3 class="form-title">
      Remplissez ce formulaire pour connaître nos offres de location de voiture
    </h3>
    <!-- <a-divider /> -->
    <hr class="hr" />
    <div class="form">
      <Select
        class="form-child"
        label="Lieu de départ"
        placeholder="Selectionner"
        @on-focus="handleFocus"
      />
      <Select
        class="form-child"
        label="Lieu de retour"
        placeholder="Selectionner"
        @on-focus="handleFocus"
      />
      <Datepicker
        class="form-child"
        label="Date et heure de départ"
        placeholder="Ajouter une date"
      />
      <Datepicker
        class="form-child"
        label="Date et heure de retour"
        placeholder="Ajouter une date"
      />
    </div>

    <Modal :isShowModal="isShowModal" @onBack="handleBack" title="title">
      <div class="modal-body">
        <!-- Barre de Recherche -->
        <div class="input-group mb-3">
          <div class="divisionsear">
            <input
              type="text"
              class="form-control"
              aria-label="Amount"
              placeholder="Faite votre recherche ici"
            />
            <span class="spanserch"><i class="bi bi-search"></i></span>
          </div>
        </div>

        <!-- Options de la Modal (à remplacer par vos options) -->
        <ul class="list-group m-2">
          <li class="list-group-item">
            Praslin Island – Domestic airport (PRI)
          </li>
          <li class="list-group-item">Praslin Island – Anse Boudin</li>
          <li class="list-group-item">
            Praslin Island – Ferry terminal from Mahé
          </li>
        </ul>
      </div>
    </Modal>

    <Button @click="onSubmit" type="primary" label="Afficher les offres">
      <img :src="arrow" alt="arrow" />
    </Button>
  </div>
</template>
<script setup>
import Select from "@/components/Common/Select.vue";
import Datepicker from "@/components/Common/Datepicker.vue";
import Button from "@/components/Common/Button.vue";
import arrow from "../../assets/icons/arrow.svg";
import { useRouter } from "vue-router";
import Modal from "../../components/Display/Modal.vue";
import { ref } from "vue";

const router = useRouter();

const isShowModal = ref(false);

const handleChange = (value) => {
  console.log(value);
};

const handleFocus = () => {
  isShowModal.value = true;
};
const handleBack = () => {
  isShowModal.value = false;
};

const onSubmit = () => {
  console.log("submit");
  router.push("/about");
};
</script>

<style lang="scss" scoped>
.search-form {
  padding: 20px;
  border-radius: 8px;
  background-color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 12px;
  .form {
    display: flex;
    gap: 12px;
    width: 100%;
    flex-wrap: wrap;
    .form-child {
      flex-grow: 1;
    }
  }
  .form-title {
    width: 100%;
    font-size: 18px;
  }
}
.hr {
  border: 1px solid #c3c3c3;
  width: 100%;
}
.divisionsear {
  position: relative;
  width: 100%;
}
.spanserch {
  font-size: 1rem;
  position: absolute;
  top: 0;
  left: 85%;
  width: 15%;
  height: 100%;
  background-color: #899e27;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
</style>
