<template>
  <div>
    <div class="container divcont">
      <div class="row g-3">
        <!-- one -->
        <div class="col-md-2 col-sm-4">
          <div class="stepBox text-center">
            <h1><i class="bi bi-shield-check"></i></h1>
            <p>Assurance tous risques</p>
          </div>
        </div>
        <!-- two -->
        <div class="col-md-2 col-sm-4">
          <div class="stepBox text-center">
            <h1><i class="bi bi-truck"></i></h1>
            <p>Livraison</p>
          </div>
        </div>
        <!-- three -->
        <div class="col-md-2 col-sm-4">
          <div class="stepBox text-center">
            <h1><i class="bi bi-geo-alt"></i></h1>
            <p>GPS gratuit</p>
          </div>
        </div>
        <!-- four -->
        <div class="col-md-2 col-sm-4">
          <div class="stepBox text-center">
            <h1><i class="bi bi-speedometer"></i></h1>
            <p>Kilométrage illimité</p>
          </div>
        </div>
        <!-- five -->
        <div class="col-md-2 col-sm-4">
          <div class="stepBox text-center">
            <h1><i class="bi bi-person-plus-fill"></i></h1>
            <p>Conducteur additionnel
                 <!-- offert -->
                </p>
          </div>
        </div>
        <!-- six -->
        <div class="col-md-2 col-sm-4">
          <div class="stepBox text-center">
            <h1><i class="bi bi-clock"></i></h1>
            <p>Annulation gratuite 
                <!-- jusqu'à 48 heures avant la livraison. -->
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.divcont {
  // padding: 10px 50px;
  margin-top: 80px;
}
.row {
  align-items: stretch;
}
.stepBox {
  background: #2b2a2a;
  padding: 18px 12px;
  border-radius: 12px;
  height: 100%;
  p {
    color: #fff;
    font-weight: 500;
    font-size: 14px;
  }
  h1 i {
    font-size: 4rem;
    color: #fff;
  }
}
</style>
