<template>
  <div class="header">
    <div class="container divcont">
      <h1 class="h1-price">
        Tous les prix affichés ci-dessous <u>incluent déjà</u>
      </h1>

      <div
        class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4"
      >
        <div class="col">
          <div>
            <div class="card-body divcardbody text-center">
              <h5 class="card-titleh5"><i class="bi bi-shield-check"></i></h5>
              <p class="card-text paragVoit">Assurance tous risques</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div>
            <div class="card-body divcardbody text-center">
              <h5 class="card-titleh5"><i class="bi bi-truck-flatbed"></i></h5>
              <p class="card-text paragVoit">Livraison au terminal</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div>
            <div class="card-body divcardbody text-center">
              <h5 class="card-titleh5"><i class="bi bi-speedometer"></i></h5>
              <p class="card-text paragVoit">Kilométrage illimité</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div>
            <div class="card-body divcardbody text-center">
              <h5 class="card-titleh5"><i class="bi bi-geo-alt"></i></h5>
              <p class="card-text paragVoit">GPS gratuit</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div>
            <div class="card-body divcardbody text-center">
              <h5 class="card-titleh5"><i class="bi bi-person-plus"></i></h5>
              <p class="card-text paragVoit">Un conducteur additionel</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.header{
    background-color: #fff;
    padding: 20px 0px;
}
.divcardbody {
  height: 80px;
  background-color: #f5f5f5;
  display: flex;
  padding: 8px;
  border-radius: 20px;
}
.divcont {
  padding: 10px 30px;
}
.h1-price {
  font-size: 25px;
  padding: 15px 10px;
  border-radius: 15px;
  color: #333;
}
.card-titleh5 {
  background-color: #4995dd;
  padding: 20px 20px;
  border-radius: 10px;
  color: #fff;
}
h5{
  margin-bottom: 0px;
}
.paragVoit {
  // background: grey;
  // padding: 10px 5px;
  height: 50px;
  margin-top: 7px;
  padding-left: 10px;

}
</style>
