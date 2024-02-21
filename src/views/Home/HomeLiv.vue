<template>
  <div>
    <div class="container divcont">
      <div class="box">
        <div class="bgimage">
          <div class="divliv">
            <h1>Livraison à l'hôtel dans Saint-Gilles-les-Bains !</h1>
            <p>
              Nous pouvons livrer votre voiture de location directement à votre
              hôtel. Il vous suffit donc de sélectionner votre hôtel dans cette
              liste, et de cliquer sur «Valider».
            </p>
            <div class="divform">
              <select
                class="form-select selec"
                aria-label="Default select example"
              >
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <button class="btnval">VALIDER</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.divcont {
  padding: 10px 50px;
  margin-top: 80px;
}
.bgimage {
  background-image: url("https://img.freepik.com/free-vector/yellow-white-futuristic-3d-background_52683-34616.jpg?w=1380&t=st=1708332905~exp=1708333505~hmac=2ec411bf1cc1f94abfb8fd863a1f0f6cdbe9091c98f6cb422c2313ca0b8a4201");
  height: auto;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;
  border-radius: 18px;
}

.divliv {
  width: 100%;
  background-color: #00000091;
  padding: 60px;
  border-radius: 18px;
}
.divliv h1 {
  font-size: 52px;
  color: white;
  text-align: center;
  font-weight: bold;
  padding: 20px 10px;
}
.divliv p {
  color: #fff;
  font-size: 16px;
  text-align: center;
  padding: 20px 10px;
}
.divform {
  margin: 0px auto;
  width: 50%;
  padding: 0px 20px;
}
.btnval,
.selec {
  width: 100%;
  height: 50px;
  font-size: 16px;
}
.btnval {
  // background-color: #8da044;
  background-color: rgb(32, 179, 32);
  border: none;
  margin-top: 20px;
  color: #fff;
}
/* Media query for small screens */
@media screen and (max-width: 767px) {
  .divliv {
  padding: 50px 30px;
}
  .divform {
  margin: 0px auto;
  width: 100%;
  padding: 0px 0px;
}
}
</style>
