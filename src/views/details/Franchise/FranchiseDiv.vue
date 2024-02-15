<template>
  <div>
    <div class="container">
      <div class="divhead">
        <div class="divIc">
          <span><i class="bi bi-exclamation-circle"></i></span>
        </div>
        <div class="divPar">
          <p>Les informations suivantes sont spécifiques à l'île Maurice.</p>
        </div>
      </div>
      <div class="sectit">
        <h1>Explications sur l'assurance et la franchise</h1>
        <p>
          La notion de franchise est difficile à comprendre pour un grand nombre
          de nos clients potentiels. Pour résumer : si vous payez un dépôt de
          garantie et que la voiture reste intacte, nous vous rembourserons
          l'intégralité de la somme. Vous pouvez aussi vous passer de la
          franchise et du dépôt de garantie si vous payez des frais
          supplémentaires non remboursables chaque jour (alias SCDW : Super
          Collision Damage Waiver). Nous vous rappelons que cette option n'est
          offerte que pour les réservations de 5 jours ou plus. Le graphique
          suivant tente de répondre à d'autres questions du type "que se
          passe-t-il si...." :
        </p>
        <div class="container">
          <img :src="Franchise" alt="icon" />
        </div>
        <p>
          Par ailleurs, à l'île Maurice, le montant de la franchise / du dépôt
          de garantie dépend du modèle de voiture que vous louez. Voici une
          liste :
        </p>
        <ul>
          <li>
            Franchise de <b>15 000 RsMU (~303 €)</b> (ou 5,05 € par jour) pour :
            Suzuki Alto, Suzuki Alto K10, Hyundai i10.
          </li>
          <li>
            Franchise de 25 000 RsMU (~505 €) (ou 9,09 € par jour) pour : Kia
            Picanto, Suzuki Spresso, Hyundai Grand i10, Mitsubishi Mirage,
            Nissan March, Suzuki Celerio, Suzuki Swift, Toyota Vitz, Honda Jazz,
            Hyundai i20, Suzuki Dzire Sedan, Toyota Yaris, Suzuki Ciaz, Toyota
            Yaris Sedan, Honda City, Hyundai Accent, Kia Cerato, Nissan Almera,
            Nissan Tiida, Toyota Corolla, Toyota Corolla Axio, Toyota Starlet,
            Nissan NP300, Suzuki Ertiga, Suzuki Fronx, Suzuki Vitara Brezza,
            Toyota Avanza, Toyota Corolla Fielder, Hyundai Creta, Nissan Juke,
            Nissan Qashqai, Honda Mobilio, Mitsubishi L200 D, Nissan NV 200,
            Mini Moke.
          </li>
          <li>
            Franchise de 35 000 RsMU (~707 €) (ou 13,14 € par jour) pour : Kia
            Seltos, Kia Carnival, Mitsubishi Sportero, Toyota Hilux, Hyundai
            ix35, Mini cabriolet, Nissan Navara, BMW X2, Toyota RAV4, BMW X1,
            Hyundai Tucson, Kia Sportage, Ford Fusion, Jaguar XF.
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import Franchise from "../../../assets/icons/franchise.svg";
</script>

<style lang="scss" scoped>
.divhead {
  background-color: #4995dd;
  display: flex;
  margin-top: 50px;
  gap: 20px;
}
.divIc {
  width: 5%;
  text-align: center;
  padding: 10px;
}
.divPar {
  padding-top: 20px;
  color: #fff;
}
.divIc span i {
  font-size: 2rem;
  color: #fff;
}
.sectit {
  margin-top: 20px;
  color: #2d3e52;
}
.sectit h1 {
  font-size: 25px;
}
.sectit p {
  font-size: 16px;
  text-align: justify;
}

ul {
  /* background-color: crimson; */
  padding: 0px;
  color: #2d3e52;
}
li {
  /* background-color: chartreuse; */
  list-style: none;
  text-align: justify;
}
</style>
