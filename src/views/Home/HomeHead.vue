<template>
    <div>
        <div class="banner">
    <!--debut division 1  -->
        <div class="container ">
            <div class="row">
                <div class="col-lg-6 formulaires">
                    <div class="welcome">
                        <div class="one">
                            <h1>Bienvenue chez Maki Car Rental Seychelles</h1>
                            <p>Remplissez ce formulaire pour connaître nos offres de location de voiture</p>
                        </div>
                        <div class="two"><i class="bi bi-car-front-fill"></i></div>
                    </div>
                    <form>
                        <div class="d-flex">
                            <div class="left">
                                <h5><span>Où</span></h5>
                                <label>LIEU DE DÉPART</label>
                                <div class="divisionseardate">
                                    <select class="form-control formcont" aria-label="Default select example"
                                        data-bs-toggle="modal" data-bs-target="#optionsModalOnes">
                                        <option selected>Open this select menu</option>
                                    </select>
                                    <span class="spandate"><i class="bi bi-caret-down-fill"></i></span>
                                </div>

                                <!-- <input type="text" placeholder="Mahé Island – Seychelles International Airport (SEZ)"> -->
                                <h5><span>Quand</span></h5>
                                <label>DATE ET HEURE DE DÉPART</label>
                                <!--  -->
                                <div class="divisionseardate">
                                    <input type="date" class="form-control formcont" id="form-control" value="2023-01-01">
                                    <span class="spandate"><i class="bi bi-calendar2-date"></i></span>
                                </div>
                                <!--  -->
                                <label>DATE ET HEURE DE RETOUR</label>
                                <!--  -->
                                <div class="divisionseardate">
                                    <input type="date" class="form-control formcont" id="form-control" value="2023-01-01">
                                    <span class="spandate"><i class="bi bi-calendar2-date"></i></span>
                                </div>
                                <!--  -->
                            </div>
                            <div class="right">
                                <h5 class="h5vide"><span></span></h5>
                                <label>LIEU DE RETOUR</label>
                                <div class="divisionseardate">
                                    <select class="form-control formcont" aria-label="Default select example"
                                        data-bs-toggle="modal" data-bs-target="#optionsModal">
                                        <option selected>Open this select menu</option>
                                    </select>
                                    <span class="spandate"><i class="bi bi-caret-down-fill"></i></span>
                                </div>

                                <!-- <input type="text" placeholder=""> -->
                                <h5 class="h5videspan"><span></span></h5>
                                <label></label>
                                <div class="divisionseardate">
                                    <input type="time" value="12:00" class="form-control formcont" id="form-control">
                                    <span class="spandate"><i class="bi bi-clock"></i></span>
                                </div>
                                <label></label>
                                <!--  -->
                                <div class="divisionseardate">
                                    <input type="time" class="form-control formcont" id="form-control" value="12:00">
                                    <span class="spandate"><i class="bi bi-clock"></i></span>
                                </div>
                                <!--  -->
                            </div>
                        </div>
                        <div class="boutton">
                            <button routerLink="voitures">AFFICHER LES OFFRES</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
        <!--fin division 1  -->
        <div class="modal fade" id="optionsModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Options</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <!-- Barre de Recherche -->
                        <div class="input-group mb-3">
                            <div class="divisionsear">
                                <input type="text" class="form-control" aria-label="Amount"
                                    placeholder="Faite votre recherche ici">
                                <span class="spanserch"><i class="bi bi-search"></i></span>
                            </div>
                        </div>

                        <!-- Options de la Modal (à remplacer par vos options) -->
                        <ul class="list-group m-2">
                            <li class="list-group-item">Praslin Island – Domestic airport (PRI)</li>
                            <li class="list-group-item">Praslin Island – Anse Boudin</li>
                            <li class="list-group-item">Praslin Island – Ferry terminal from Mahé
                            </li>
                        </ul>
                    </div>
                    <div class="modal-footer">
                    </div>
                </div>
            </div>
        </div>

        <!-- modal Ones -->
        <div class="modal fade" id="optionsModalOnes" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Options</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <!-- Barre de Recherche -->
                        <div class="input-group mb-3">
                            <div class="divisionsear">
                                <input type="text" class="form-control" aria-label="Amount"
                                    placeholder="Faite votre recherche ici">
                                <span class="spanserch"><i class="bi bi-search"></i></span>
                            </div>
                        </div>

                        <!-- Options de la Modal (à remplacer par vos options) -->
                        <ul class="list-group m-2">
                            <li class="list-group-item">Praslin Island – Domestic airport (PRI)</li>
                            <li class="list-group-item">Praslin Island – Anse Boudin</li>
                            <li class="list-group-item">Praslin Island – Ferry terminal from Mahé
                            </li>
                        </ul>
                    </div>
                    <div class="modal-footer">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style lang='scss' scoped>
.banner {
    background-image: url('../../assets/image/HomeImg/maki.png');
    // background-color: rgb(62, 62, 149);
    height: 600px;
    background-position: center top;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
}

.formulaires {
    margin-top: 40px;
    background-color: #fff;
    padding-bottom: 15px;
}

.welcome {
    width: 103.8%;
    background-color: #fdb714;
    display: flex;
    margin-left: -12px;
    padding-left: 10px;
}

.colFont {
    text-align: justify;
}

.one {
    width: 70%;
    height: auto;
    color: #fff;
    padding-top: 10px;
}

.two {
    width: 30%;
    height: 80px;
    text-align: center;
}

.two i {
    font-size: 3.5em;
    margin-top: -15px;
    color: #fff;
}

.one h1 {
    width: 100%;
    padding: 5px;
    font-size: 20px;
    padding-left: 20px;
    padding-top: 10px;
    font-weight: bolder;
}

.one p {
    width: 100%;
    height: auto;
    font-size: 13px;
    padding-left: 20px;
    margin-top: -8px;
    white-space: nowrap;
    /* background-color: red; */
}

.right,
.left {
    width: 50%;
    height: 330px;
    padding-left: 20px;
    padding-top: 15px;
}

.right {
    padding-right: 20px;
    padding-left: 10px;
}

input {
    width: 100%;
    height: 40px;
    padding-left: 10px;
}

h5 {
    width: 100%;
    height: 20px;
}

h5 span {
    width: 100%;
    height: 20px;
}

.h5vide {
    width: 100%;
    height: 20px;
    /* background-color: rgb(153, 93, 14); */
}

.h5videspan {
    width: 100%;
    height: 21px;
    /* background-color: darkorange; */
}

label {
    font-size: 12px;
    width: 100%;
    white-space: nowrap;
    /* height: 20px; */
    /* background-color: #6dace6; */
}


.boutton {
    width: 100%;
    height: 50px;
    margin-top: 40px;
    padding: 0px 20px;
}

.boutton button {
    width: 100%;
    height: 35px;
    border: none;
    background-color: #899e27;
    font-size: 12px;
    color: #fff;
}

.boutton button:hover {
    background-color: #74881c;
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
    left: 85%;
    width: 15%;
    height: 100%;
    background-color: #fdb714;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
}
.formcont::-webkit-calendar-picker-indicator {
    position: relative;
    z-index: 20;
    cursor: pointer;
    opacity: 0;
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

.iconpluschange {
    font-size: 1.2rem;
    /* background-color: #fdb714; */
    padding: 8px;
    color: #4995dd;
}

</style>