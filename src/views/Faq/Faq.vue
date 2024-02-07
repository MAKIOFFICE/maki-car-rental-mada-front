<template>
    <div>
        <div class="head">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <h5 class="h5">Foire aux questions</h5>
            </div>
            <div class="col-md-6 divisquest">
                <ul class="d-flex">
                    <a>
                        <li class="li" @click="locationbtn">ACCUEIL</li>
                    </a>
                    <a>
                        <li class="li" @click="locationbtn">MAKI CAR RENTAL</li>
                    </a>
                    <li class="li1">FOIRE AUX QUESTIONS</li>
                </ul>
            </div>
        </div>
    </div>
</div>
<!-- fin head -->

<div class="container mt-5">
    <div class="row">
        <div class="col-md-4">
            <div class="divsearch">
                <h3 class="search-title">Recherche dans notre FAQ</h3>
                <div class="divisionsear">
                    <input type="text" class="form-control" aria-label="Amount"
                        placeholder="Faite votre recherche ici">
                    <span class="spanserch"><i class="bi bi-search"></i></span>
                </div>
            </div>
            <ul class="ulsearch">
                <li class="lisearch">Le
                    système de réservation en ligne</li>
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
                <h2 class="title-header">Special COVID-19 cancellation and refund policy</h2>
                <h6>You may cancel your booking free of charge:</h6>
                <ul>
                    <li class="listtext">If your flight is cancelled by the airline due to COVID-19 </li>
                    <li class="listtext">If you or members of your travel group are tested positive for COVID-19 </li>
                    <li class="listtext">If you need to go to quarantine or self-isolation </li>
                    <li class="listtext">If you need to end your holiday early due to COVID-19 </li>
                    <li class="listtext">If you cannot use the car due to a government lockdown </li>
                </ul>
                <h6>Furthermore, as usual you may cancel your booking free of charge up to 48 hours before. </h6>
            </div>

            <div class="toast-body divi1" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="div1"><span class="span1"><i class="bi bi-exclamation-circle"></i></span></div>
                <div class="div2">
                    <p class="param1">Vous êtes bien sur la version adaptée à la destination choisie : Île
                        Maurice.</p>
                </div>
                <div class="div3">
                    <span class="spanicone1" ><i class="bi bi-x"></i></span>
                </div>
            </div>

            <div class="container p-0">
                <h1 class="h1faq">Lorem ipsum dolor sit amet.</h1>
                <p class="paramfaq">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores eum debitis ab! Dolorum, illum unde amet animi quasi eaque rerum. Ipsum eius excepturi harum placeat qui obcaecati rem inventore soluta.</p>
            </div>
        </div>

    </div>
</div>
    </div>
   
</template>
<script setup>
const locationbtn = () => {
    router.push('/');
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

li {
  list-style: none;
}
.listtext::before{
  content: "\2022";
    color: #4a9fef; 
    display: inline-block;
    width: 1em; 
    margin-left: -1em; 
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

/* section */
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
  /* background-color: #4a9fef; */
  font-size: 25px;
  margin-top: 20px;
  color: #2d3e52;
}

.paramfaq {
  /* background-color: #f5cf77; */
  margin-top: 10px;
  text-align: justify;

}
</style>
