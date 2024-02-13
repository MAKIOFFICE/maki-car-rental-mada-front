<template>
  <div class="head">
    <div class="container divcont">
        <h1>Votre demande</h1>
      <div class="row justify-content-around">
        <div class="col-lg-2 col-md-3 col-sm-4 col-6 custom-column">
          <div class="mb-3">
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
        <div class="col-lg-2 col-md-3 col-sm-4 col-6 custom-column">
          <div class="mb-3">
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
        <div class="col-lg-2 col-md-3 col-sm-4 col-6 custom-column">
          <div class="mb-3">
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
        <div class="col-lg-2 col-md-3 col-sm-4 col-6 custom-column">
          <div class="mb-3">
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
        <div class="col-lg-2 col-md-3 col-sm-4 col-6 custom-btn">
          <button>NOUVELLE RECHERCHE</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.head {
  background-color: #fff;
}
.divcont {
  padding: 10px 30px;
}
.divcont h1{
    // background-color: #8da044;
    font-size: 25px;
    padding: 10px;
    color: #fdb714;
}
.custom-column {
  padding: 10px;
  border-radius: 10px;
  background-color: #fff;
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
  padding: 40px 0px;
  border-radius: 10px;
  height: 110px;
}
.custom-btn button {
  width: 90%;
  height: 50px;
  background-color: #8da044;
  color: #fff;
  border: none;
  border-radius: 5px;
}
</style>
