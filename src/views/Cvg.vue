<template>
   <div>
    <div class="head">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <h5 class="h5">CGV et mentions légales</h5>
            </div>
            <div class="col-md-6 divisquest">
                <ul class="d-flex">
                    <a>
                        <li class="li">ACCUEIL</li>
                    </a>
                    <a>
                        <li class="li">LOCATION DE VOITURES AU SEYCHELLES</li>
                    </a>
                    <li class="li1">CGV ET MENTIONS LÉGALES Mentions légales</li>
                </ul>
            </div>
        </div>
    </div>
</div>
<!-- fin head -->
<div class="container">
    <div class="row">
        <div class="col-md-4 mt-3">
            <h2 class="title-head">Mentions légales</h2>
            <h2 class="title-header">Contact en Allemagne</h2>
            <ul>
                <li class="mt-3">Maki Car Rental</li>
                <li>Exerzierplatz 3a </li>
                <li>D-97072 Wuerzburg </li>
                <li class="mt-4">Fon: +49 931 663984 98</li>
                <li>Fax: +49 931 663984 99</li>
            </ul>
            <p class="mt-5">E-Mail: <span><a class="addrs"
                        @click="contactBtn">booking(at)maki-car-rental(dot)com</a></span></p>
        </div>
        <div class="col-md-4 mt-3">
            <h2 class="title-head"></h2>
            <h2 class="title-header">L'entreprise est</h2>
            <ul>
                <li class="mt-3">Indian Ocean Travel Ltd. </li>
                <li>Avenue des Perroquets</li>
                <li>Flic en Flac </li>
                <li>Republic of Mauritus </li>
                <li class="mt-4">Directeur: Adeline Bach </li>
                <li>Numéro d'enregistrement: 069955 </li>
                <li>Numéro de TVA: 20376952
                </li>
            </ul>
        </div>
        <div class="col-md-4 mt-3">
            <h2 class="title-head"></h2>
            <h2 class="title-header">Siège social</h2>
            <ul>
                <li class="mt-3">Maki Car Rental </li>
                <li>Royal Road 363 </li>
                <li>D-97072 Wuerzburg </li>
                <li>Pointe aux Canonniers </li>
                <li>Republic of Mauritius </li>
            </ul>
        </div>
    </div>
</div>
<!-- section -->
<div class="container mt-5">
    <div class="row">
        <div class="col-md-4">
            <h2 class="title-header">Conditions générales de vente</h2>
            <div class="divsearch">
                <h3 class="search-title">Recherche dans nos CGV</h3>
                <div class="divisionsear">
                    <input type="text" class="form-control" aria-label="Amount"
                        placeholder="Faite votre recherche ici">
                    <span class="spanserch" ><i class="bi bi-search"></i></span>
                </div>
            </div>
            <ul class="ulsearch">
                <li class="lisearch" >Généralités</li>
                <li class="lisearch">Conditions de restitution du véhicule</li>
                <li class="lisearch">Permis de conduire</li>
                <li class="lisearch">Tarifs et modes de paiement</li>
                <li class="lisearch" >Assurance</li>
                <li class="lisearch" >Accidents, dommages, et responsabilité du client</li>
                <li class="lisearch">Politique de confidentialité</li>
                <li class="lisearch">Divers</li>
            </ul>
        </div>
        <!-- Contenu de la page avec les sections -->
        <div class="col-md-8">
            <h2 class="title-header">Conditions générales de vente</h2>
            <table class="table">
                <tbody>
                    <tr >
                        <th scope="row">12</th>
                        <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam autem eaque eligendi reiciendis in quisquam, repellendus deleniti inventore quos sapiente sequi provident, ipsa iste ipsum at consequuntur vero fugit. Vel!</td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</div>
   </div>
</template>
<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const contactBtn = () => {
    router.push('/contact');
}
</script>
<style lang='scss' scoped>

.head {
  width: 100%;
  background-color: #2d3e52;
  color: #fff;
}

.head a {
  color: #fff;
}
.head a:hover{
    color: #fff;
}
li {
  list-style: none;
}

.h5,
.li {
  /* background-color: aqua; */
  padding: 5px;
  margin-right: 5px;
}

.li {
  font-size: 12px;
  margin-top: 20px;
}
.h5 {
  margin-top: 15px;
  font-size: 1.3em;
}

.custom-hover:hover {
  color: #6dace6;
}

.li1 {
  color: darkorange;
  font-size: 12px;
  margin-top: 25px;
}

/* fin head */
.title-head{
  /* background-color: cadetblue; */
  font-size: 25px;
  color: #2d3e52;
  height: 30px;
  margin-top: 10px;
}
.title-header{
  font-size: 25px;
  color: #2d3e52;
  padding: 5px 0px;
}
ul{
  /* background-color: burlywood; */
  padding: 0px;
  color: #2d3e52;
}
p{
  /* background-color: gold; */
  color: #2d3e52;

}
.addrs{
  color: #4a9fef;
  cursor: pointer;
}
.addrs:hover{
  color: #246caf;
  cursor: pointer;
}

/* section */
.divsearch{
  background-color: #fff;
  padding: 20px;

}
.divisionsear{
  position: relative;
}
.spanserch{
  font-size: 1rem;
  position: absolute;
  top: 0;
  left: 85%;
  width: 15%;
  height: 100%;
  background-color: #899e27 ;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.form-control{
  background-color: #f5f5f5;
}
.search-title{
  font-size: 20px;
  padding: 8px 0px;
  color: #2d3e52;
}
.ulsearch{
  background-color: #fff;
  margin-top: 20px;
  padding: 20px;
  position: sticky;
  top: 70px;
}
.lisearch{
  margin-top: 5px;
  padding: 5px 10px;
  cursor: pointer;
  color: #2d3e52;
}
.lisearch:hover{
  color: #4a9fef;
  border-left: 1px solid #4a9fef;
}
.divsearch h5{
  background-color: #6dace6;
  font-size: 20px;
}
.divsearch p{
  background-color: cyan;
}
.table td{
  text-align: justify;
}
</style>