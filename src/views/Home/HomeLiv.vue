<template>
    <div>
        <div class="divisionliv mb-2">
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-4">
                <div class="text-white">
                    <img src="../../assets/image/HomeImg/maki.jpg" class="imgmakiU">
                </div>
            </div>
            <div class="col-md-5">
                <div class="text-white pt-5">
                    <h1 class="h1hot">Livraison à l'hôtel dans Saint-Gilles-les-Bains !</h1>
                    <p class="p1hot">Nous pouvons livrer votre voiture de location directement à votre hôtel.
                        Il vous suffit donc de sélectionner votre hôtel dans cette liste, et de cliquer sur «Valider».
                    </p>
                </div>
            </div>
            <div class="col-md-3">
                <div class="text-white pt-5">
                    <div class="divisionseardate">
                        <select class="selec form-select form-select-lg formcont">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <span class="spandate"><i class="bi bi-caret-down-fill"></i></span>
                    </div>
                    <button class="validatebtn mb-3">VALIDER</button>
                </div>
            </div>
        </div>
    </div>

</div>

    </div>
</template>

<script setup></script>

<style lang='scss' scoped>
.divisionliv {
    width: 100%;
    /* background-color: #175289; */
    background-color: rgb(58, 31, 4);
}
.h1hot {
    font-size: 2em;
}

.p1hot {
    font-size: 14px;
}
.divisionseardate {
    position: relative;
    margin: 15px 0px;
    top: -15px;
    bottom: 0px;
}
.selec {
    width: 100%;
    height: 50px;
    font-size: 16px;
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

h5 span {
    height: 50px;
}
.validatebtn {
    width: 100%;
    height: 50px;
    border: none;
    background-color: rgb(32, 179, 32);
    color: #fff;
}

img {
    width: 100%;
    height: 100%;
}

</style>