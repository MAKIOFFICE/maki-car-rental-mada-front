<template>
  <div>
    <div class="divbg">
      <div class="container">
        <div class="text-center">
          <div
            id="carouselExampleSlidesOnly"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <h1>{{ $t("welcome") }}</h1>

            <div class="carousel-inner">
              <div class="carousel-item active">
                <img :src="Voiture2" alt="voiture" />
              </div>
              <div class="carousel-item">
                <img :src="Voiture3" alt="voiture" />
              </div>
              <div class="carousel-item">
                <img :src="Voiture1" alt="voiture" />
              </div>
              <div class="carousel-item">
                <img :src="Voiture4" alt="voiture" />
              </div>
              <div class="carousel-item">
                <img :src="Voiture" alt="voiture" />
              </div>
            </div>
          </div>
        </div>
        <div class="divform">
          <div class="container divcont">
            <div
              class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4"
            >
              <div class="custom-column">
                <div>
                  <label for="exampleInputEmail1" class="form-label"
                    >Lieu de depart</label
                  >
                  <div class="divisionseardate">
                    <select
                      class="form-select formcont"
                      aria-label="Default select example"
                    >
                      <option value="1">One</option>
                      <option value="2">Two</option>
                    </select>
                    <span class="spandate"
                      ><i class="bi bi-caret-down-fill"></i
                    ></span>
                  </div>
                </div>
              </div>
              <div class="custom-column">
                <div>
                  <label for="exampleInputEmail1" class="form-label"
                    >Lieu de retour</label
                  >
                  <div class="divisionseardate">
                    <select
                      class="form-select formcont"
                      aria-label="Default select example"
                    >
                      <option value="1">One</option>
                      <option value="2">Two</option>
                    </select>
                    <span class="spandate"
                      ><i class="bi bi-caret-down-fill"></i
                    ></span>
                  </div>
                </div>
              </div>
              <div class="custom-column">
                <div>
                  <label for="exampleInputEmail1" class="form-label"
                    >Date et heure de retour</label
                  >
                  <div class="divisionseardate">
                    <input
                      type="datetime-local"
                      class="form-control formcont"
                      placeholder="Date de retour"
                      value="2022-01-01T12:00"
                    />
                    <span class="spandate"><i class="bi bi-clock"></i></span>
                  </div>
                </div>
              </div>
              <div class="custom-column">
                <div>
                  <label for="exampleInputEmail1" class="form-label"
                    >Date et heure de depart</label
                  >
                  <div class="divisionseardate">
                    <input
                      type="datetime-local"
                      class="form-control formcont"
                      placeholder="Date de depart"
                      value="2022-01-01T12:00"
                    />
                    <span class="spandate"><i class="bi bi-clock"></i></span>
                  </div>
                </div>
              </div>
              <div class="custom-btn">
                <button>NOUVELLE RECHERCHE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-col"></div>
  </div>
</template>

<script setup>
import Voiture2 from "../../assets/image/HomeImg/voiture2.png";
import Voiture3 from "../../assets/image/HomeImg/voiture3.png";
import Voiture1 from "../../assets/image/HomeImg/voiture1.png";
import Voiture4 from "../../assets/image/HomeImg/voiture4.png";
import Voiture from "../../assets/image/HomeImg/voiture.png";
</script>

<style lang="scss" scoped>
.divbg {
  // background-image: linear-gradient(to right,  #001e33, #002e4d , #003d66,#005c99, #001f33,  #002e4d , #003d66,);
  background: linear-gradient(0deg, rgba(149, 19, 170, 0.10) 0%, rgba(149, 19, 170, 0.10) 100%), linear-gradient(90deg, #090829 3.28%, #211E79 49.79%,#000 87.09%);
  width: 100%;
  height: auto;
  padding-bottom: 50px;
}
h1 {
  text-align: center;
  padding-top: 80px;
  color: #fff;
}
img {
  // background-color: red;
  padding: 0px;
  width: 720px;
}
.head {
  background-color: #fff;
  border-radius: 18px;
}
.divcont {
  padding: 10px 30px;
}
.divcont h1 {
  // background-color: #8da044;
  font-size: 25px;
  padding: 25px 0px;
  color: #fdb714;
}
.custom-column {
  padding: 10px;
  border-radius: 10px;
  // background-color: #f5f5f5;
  margin: 0px;
  height: 110px;
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
  left: 80%;
  width: 20%;
  height: 100%;
  background-color: #fff;
  border: 1px solid #b4b0b0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fdb714;
  border-radius: 8px;
}
.formcont {
  border-radius: 8px;
  height: 50px;
}
.formcont::-webkit-calendar-picker-indicator {
  position: relative;
  z-index: 20;
  cursor: pointer;
  opacity: 0;
}
label {
  font-weight: 500;
  white-space: nowrap;
}
.custom-btn {
  padding: 40px 10px;
  border-radius: 10px;
  height: 110px;
  // background-color: red;
  margin: 0px;
}
.custom-btn button {
  width: 90%;
  height: 50px;
  background-color: #8da044;
  color: #fff;
  border: none;
  border-radius: 5px;
}
.divform {
  background-color: rgba(255, 255, 255, 0.608);
  border-radius: 18px;
  padding-top: 30px;
}
img{
  width: 450px;
}
.carousel-item{
  // background-color: red;
  height: 320px;
}
</style>
