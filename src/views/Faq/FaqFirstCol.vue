<template>
  <div>
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-4">
          <div class="divsearch">
            <h3 class="search-title">Recherche dans notre FAQ</h3>
            <div class="divisionsear">
              <input
                type="text"
                class="form-control"
                aria-label="Amount"
                placeholder="Faite votre recherche ici"
                v-model="searchQuery"
              />
              <span class="spanserch"><i class="bi bi-search"></i></span>
            </div>
          </div>
          <ul class="ulsearch">
            <li class="lisearch">Le système de réservation en ligne</li>
            <li class="lisearch">Accidents et pannes</li>
            <li class="lisearch">Les règles de circulation routière</li>
            <li class="lisearch">Politique d'assurance et de responsabilité</li>
            <li class="lisearch">Tarifs et autres conditions de location</li>
            <li class="lisearch">Conditions de paiement</li>
            <li class="lisearch">À propos de Maki Car Rental</li>
          </ul>
        </div>
        <!-- Contenu de la page avec les sections -->
        <div class="col-md-8">
          <div class="divisionheadlist">
            <h2 class="title-header">
              Special COVID-19 cancellation and refund policy
            </h2>
            <h6>You may cancel your booking free of charge:</h6>
            <ul>
              <li class="listtext">
                If your flight is cancelled by the airline due to COVID-19
              </li>
              <li class="listtext">
                If you or members of your travel group are tested positive for
                COVID-19
              </li>
              <li class="listtext">
                If you need to go to quarantine or self-isolation
              </li>
              <li class="listtext">
                If you need to end your holiday early due to COVID-19
              </li>
              <li class="listtext">
                If you cannot use the car due to a government lockdown
              </li>
            </ul>
            <h6>
              Furthermore, as usual you may cancel your booking free of charge
              up to 48 hours before.
            </h6>
          </div>

          <div
            class="toast-body divi1"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
            v-show="isVisible"
          >
            <div class="div1">
              <span class="span1"
                ><i class="bi bi-exclamation-circle"></i
              ></span>
            </div>
            <div class="div2">
              <p class="param1">
                Vous êtes bien sur la version adaptée à la destination choisie :
                Île Maurice.
              </p>
            </div>
            <div class="div3">
              <span class="spanicone1"><i class="bi bi-x" @click="handleClick"></i></span>
            </div>
          </div>

          <div
            class="container p-0"
            v-for="(item, index) in filteredData"
            :key="index"
          >
            <p class="h1faq" @click="toggleIconNext(index)">
              <a
                data-bs-toggle="collapse"
                :href="'#collapseExample' + index"
                role="button"
                :aria-expanded="isIconChanged[index] ? 'true' : 'false'"
                :aria-controls="'collapseExample' + index"
              >
                {{ item.title }}
              </a>
              <span><i class="bi bi-chevron-down"></i></span>
            </p>
            <div
              :class="{
                collapse: isIconChanged[index],
                show: !isIconChanged[index],
              }"
              :id="'collapseExample' + index"
            >
              <div class="card card-body paramfaq">
                {{ item.message }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const dataAuto = [
  {
    title: "Le système de réservation en ligne",
    message: `1 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              eum debitis ab! Dolorum, illum unde amet animi quasi eaque rerum.
              Ipsum eius excepturi harum placeat qui obcaecati rem inventore
              soluta.`,
  },
  {
    title: "Accidents et pannes",
    message: `2 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              eum debitis ab! Dolorum, illum unde amet animi quasi eaque rerum.
              Ipsum eius excepturi harum placeat qui obcaecati rem inventore
              soluta.`,
  },
  {
    title: "Les règles de circulation routière",
    message: `2 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              eum debitis ab! Dolorum, illum unde amet animi quasi eaque rerum.
              Ipsum eius excepturi harum placeat qui obcaecati rem inventore
              soluta.`,
  },
];

const isIconChanged = ref(Array(dataAuto.length).fill(false));
const searchQuery = ref("");

const filteredData = computed(() => {
  return dataAuto.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

const toggleIconNext = (index) => {
  isIconChanged[index] = !isIconChanged[index];
};

const isVisible = ref(true);

const handleClick = () => {
  isVisible.value = false;
};
</script>

<style lang="scss" scoped>
.listtext::before {
  content: "\2022";
  color: #4a9fef;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
}
.custom-hover:hover {
  color: #6dace6;
}
.divsearch {
  background-color: #fff;
  padding: 20px;
  color: #2d3e52;
}
.divisionsear {
  position: relative;
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
.form-control {
  background-color: #f5f5f5;
}
.search-title {
  font-size: 20px;
  padding: 8px 0px;
  color: #2d3e52;
}
.ulsearch {
  background-color: #fff;
  margin-top: 20px;
  padding: 20px;
  position: sticky;
  top: 70px;
}
.lisearch {
  margin-top: 5px;
  padding: 5px 10px;
  cursor: pointer;
  color: #2d3e52;
}
.lisearch:hover {
  color: #4a9fef;
  border-left: 1px solid #4a9fef;
}
.title-header {
  /* background-color: darkorchid; */
  font-size: 25px;
  padding: 10px 0px;
}
.divisionheadlist h6 {
  /* background-color: chartreuse; */
  padding: 10px 0px;
  color: #2d3e52;
}
/* example */
.divi1 {
  background-color: #f5cf77;
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}
.div1 {
  /* background-color: #899e27; */
  width: 10%;
  padding: 5px;
}
.div2 {
  /* background-color: aquamarine; */
  width: 80%;
}
.div3 {
  /* background-color: crimson; */
  width: 5%;
}
.span1 {
  /* background-color: chartreuse; */
  font-size: 2rem;
  color: #2d3e52;
}
.param1 {
  /* background-color: lightpink; */
  padding: 15px 0px;
  font-weight: bold;
  color: #2d3e52;
}
.spanicone1 {
  /* background-color: slategray; */
  font-size: 2rem;
  cursor: pointer;
  color: #fff;
}
/* style param */
.h1faq {
  background-color: #f5f5f5;
  font-size: 25px;
  margin-top: 20px;
  color: #2d3e52;
  width: 100%;
  display: flex;
  border-radius: 10px;
}
.h1faq a {
  width: 90%;
  // background-color: red;
  padding: 5px 10px;
}
.h1faq span {
  width: 10%;
  // background-color: #f5cf77;
  font-size: 1.2rem;
  padding: 5px 15px;
  color: blue;
  text-align: center;
  padding: 10px 0px;
}
a {
  color: #333;
}
.paramfaq {
  // background-color: #f5cf77;
  margin-top: 10px;
  text-align: justify;
  border: none;
}
</style>
