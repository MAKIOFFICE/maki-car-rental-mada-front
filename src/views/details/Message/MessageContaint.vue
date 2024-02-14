<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div
            class="commentclass"
            v-for="(item, index) in dataAuto"
            :key="index"
          >
            <p class="paramcomclass">
              {{ item.name }} a écrit le commentaire suivant sur
              <span class="spanlinkname">Trustpilot</span>:
            </p>
            <div>
              <div class="d-flex divisflexname">
                <span class="spannameic"><i class="bi bi-quote"></i> </span>
                <h4 class="h4classname">{{ item.title }}</h4>
              </div>
              <div class="divclassname">
                <p class="paramclassname">
                  {{ item.description }}
                  <span class="inverted-icon"><i class="bi bi-quote"></i></span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="diviscont">
            <h1 class="h1cont">Encore plus d'avantages :</h1>
            <ul>
              <li class="lispanassur">
                <span class="spnicnassur1"
                  ><i class="bi bi-shield-check"></i></span
                ><span class="spnicnassur2">Assurance tous risques</span>
              </li>
              <li class="lispanassur">
                <span class="spnicnassur1"><i class="bi bi-truck"></i></span
                ><span class="spnicnassur2">Livraison</span>
              </li>
              <li class="lispanassur">
                <span class="spnicnassur1"
                  ><i class="bi bi-geo-alt-fill"></i></span
                ><span class="spnicnassur2">GPS gratuit </span>
              </li>
              <li class="lispanassur">
                <span class="spnicnassur1"
                  ><i class="bi bi-speedometer"></i></span
                ><span class="spnicnassur2">Kilométrage illimité </span>
              </li>
              <li class="lispanassur">
                <span class="spnicnassur1"
                  ><i class="bi bi-person-fill-add"></i></span
                ><span class="spnicnassur2"
                  >Un conducteur additionnel offert
                </span>
              </li>
              <li class="lispanassur">
                <span class="spnicnassur1"><i class="bi bi-printer"></i></span
                ><span class="spnicnassur2">Sièges enfants gratuits </span>
              </li>
              <li class="lispanassur">
                <span class="spnicnassur1"><i class="bi bi-clock"></i></span
                ><span class="spnicnassur2 cursIcn">
                  Aucun frais d'annulation jusqu'à 48 heures avant la date de
                  livraison</span
                >
              </li>
              <li class="lispanassur">
                <span class="spnicnassur1"
                  ><i class="bi bi-piggy-bank-fill"></i></span
                ><span class="spnicnassur2 cursIcn"
                  >Prix tout compris, aucun frais caché</span
                >
              </li>
              <li class="lispanassur">
                <span class="spnicnassur1"><i class="bi bi-check-lg"></i></span
                ><span class="spnicnassur2 cursIcn"
                  >Vous pouvez réserver un modèle précis, pas juste une
                  catégorie</span
                >
              </li>
              <li class="lispanassur">
                <span class="spnicnassur1"
                  ><i class="bi bi-hand-thumbs-up-fill"></i></span
                ><span class="spnicnassur2"
                  >Uniquement des voitures récentes et de très bonne
                  qualité</span
                >
              </li>
              <li class="lispanassur">
                <span class="spnicnassur1"
                  ><i class="bi bi-sliders2-vertical"></i></span
                ><span class="spnicnassur2"
                  >Pas de frais supplémentaire pour les voitures
                  automatiques</span
                >
              </li>
            </ul>

            <div class="divibtncontact">
              <button @click="ContactBtn">Contactez-nous</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const dataAuto = [
  {
    name: "Jean doe",
    title: "Loueur sérieux",
    description: `Notre expérience avec Maky s'est parfaitement déroulée. Échange facile durant notre séjour via une application. Voiture neuve et impeccable.`,
  },
  {
    name: "Mohammud Ibrahim Javed Subdurally",
    title: "Service efficace",
    description: `Service efficace. La livraison a été effectuée à l'heure, la voiture a été propre et en bon état. La collection s'est bien passé. Je vais définitivement utiliser le service la prochain fois.`,
  },
  {
    name: "Jihane EJ",
    title: "Parfait !",
    description: `Parfait ! Très pratique Rapport qualité prix très correct.`,
  },
];

const router = useRouter();

const ContactBtn = () => {
  router.push("/contact");
};
</script>

<style lang="scss" scoped>
.commentclass {
  background-color: #fff;
  padding: 20px;
  margin-top: 20px;
}
.paramcomclass {
  color: #2d3e52;
  font-size: 16px;
}
.spanlinkname {
  color: #6dace6;
  cursor: pointer;
}
.spannameic {
  /* background-color: red; */
  display: inline-block;
  margin-top: -15px;
  padding-right: 10px;
}
.h4classname {
  /* background-color: burlywood; */
  font-size: 30px;
  color: #6dace6;
  font-style: italic;
}
.paramclassname {
  /* background-color: chartreuse; */
  padding: 0px 30px;
  position: relative;
  font-size: 20px;
  color: #6dace6;
  font-style: italic;
  text-align: justify;
}
.inverted-icon {
  /* background-color: #768c15; */
  transform: rotateX(150deg);
  transform: rotateY(150deg);
  display: inline-block;
  padding-right: 10px;
  position: absolute;
  bottom: 0;
}
.bi-quote {
  font-size: 1.4rem;
  color: #fdb714;
  display: inline-block;
  /* background-color: #6dace6; */
}
.diviscont {
  background-color: #fff;
  padding: 20px;
  margin-top: 20px;
}

ul {
  padding: 0px;
}

.h1cont {
  /* background-color: #6dace6; */
  padding-bottom: 15px;
  font-size: 25px;
}
/* 2em */
.lispanassur {
  display: flex;
  /* background-color: #6dace6; */
  margin-top: 20px;
}

.spnicnassur1 {
  width: 40px;
  height: 38px;
  text-align: center;
  padding-top: 4px;
  font-size: 1.2rem;
  border-radius: 50%;
  border: 2px solid #fdb714;
  color: #fdb714;
}

.spnicnassur2 {
  width: 95%;
  padding: 4px 10px;
  /* background-color: burlywood; */
}

.cursIcn {
  cursor: pointer;
}
.divibtncontact {
  margin-top: 30px;
  display: flex;
  justify-content: center;
}
.divibtncontact button {
  width: 100%;
  border: none;
  padding: 8px 12px;
  color: #fff;
  background-color: #333;
}
</style>
