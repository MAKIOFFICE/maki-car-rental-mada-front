<template>
<div>
    <header class="container mt-3">
        <div class="row">
            <div class="col-md-8 cont">
                <div class="container containToas" v-show="isVisible">
                    <div role="alert" aria-live="assertive" aria-atomic="true">
                        <div class="toast-body d-flex">
                            <span class="spanToasts"><i class="bi bi-exclamation-circle"></i></span>
                            <p class="paraToas">Cher client, afin que nous puissions vous envoyer un devis, vous devez
                                d'abord utiliser notre système pour vérifier la disponibilité des voitures. Vous y trouverez
                                instantanément la liste des voitures disponibles, prêtes à être réservées, ainsi que leurs
                                prix, incluant l'assurance et les frais de livraison.</p>
                            <span class="icnX"><i class="bi bi-x" @click="handleClick"></i></span>
                        </div>
                    </div>
                </div>
                <form class="contForm col-md-6">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label formlab1">VOTRE NOM</label>
                        <input type="name" class="form-control" id="exampleInputEmail1">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label formlab1">VOTRE ADRESSE EMAIL
                        </label>
                        <input type="email" class="form-control" id="exampleInputPassword1">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label formlab1">VOTRE NUMÉRO DE TÉLÉPHONE*</label>
                        <input type="tel" class="form-control" id="exampleInputPassword1">
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label formlab1">VOTRE DEMANDE</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        <div id="emailHelp" class="form-text">* = facultatif</div>
                    </div>
                    <div class="d-flex justify-content-end">
                        <button type="submit" class="btn btn-primary">Envoyer</button>
                    </div>
                </form>
            </div>
        
            <div class="col-md-4">
                <div class="dividivi">
                    <h5>Contactez-nous</h5>
                    <p>Retrouvez nos offres et bénéficiez de conseils d'experts</p>
                    <div>
                        <div class="licontz"><span><i class="bi bi-telephone-fill"></i></span>+49-931-663984-98</div>
                        <div class="licontz"><span><i class="bi bi-telephone-fill"></i></span>+49-931-663984-98</div>
                        <div class="licontz"><span><i class="bi bi-telephone-fill"></i></span>+49-931-663984-98</div>
                        <div class="licontz"><span><i class="bi bi-telephone-fill"></i></span>+49-931-663984-98</div>
                        <div class="licontz"><span><i class="bi bi-telephone-fill"></i></span>+49-931-663984-98</div>
                        <div class="licontz"><span><i class="bi bi-telephone-fill"></i></span>+49-931-663984-98</div>
                        <div class="licontz"><span><i class="bi bi-telephone-fill"></i></span>+49-931-663984-98</div>
                        <div class="licontz"><span><i class="bi bi-envelope-fill"></i></span><a
                            >booking@maki-car-rental.com</a></div>
                    </div>
                </div>

            </div>
        </div>
    </header>
</div>
</template>

<script setup>
import { ref } from 'vue';
  
  const isVisible = ref(true);
    
  const handleClick = () => {
    isVisible.value = false;
  };
</script>

<style lang='scss' scoped>
.cont {
    background-color: #fff;
    padding: 20px;
}

.formlab1 {
    font-size: 12px;
}
.licontz {
    width: 100%;
    /* background-color: coral; */
    font-size: 20px;
    color: cornflowerblue;
}
.licontz span {
    font-size: 1rem;
    color: #fdb714;
    /* background-color: aquamarine; */
    padding: 5px;
}
.paraToas {
    text-align: justify;
}

.dividivi {
    background-color: #fff;
    padding: 20px;
}

/* toasts */
.containToas {
    background-color: #6dace6;
    /* margin-top: 20px; */
    padding: 0px;
    margin-bottom: 20px;
}

.licontz a {
    color: #6dace6;
    margin-left: 5px;
}

.spanToasts {
    /* background-color: chartreuse; */
    font-size: 2em;
    padding-right: 10px;
    color: #fff;
    margin: 0px;
}

.icnX {
    font-size: 1.5rem;
    /* background-color: #899e27; */
    margin-top: -15px;
    margin-left: 10px;
    padding: 5px;
    color: #fff;
}

.icnX i {
    /* background-color: #2d3e52; */
    cursor: pointer;
}

textarea,
input {
    background-color: #f5f5f5;
    border: none;
}
</style>