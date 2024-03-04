<template>
  <div>
    <div class="container divcont">
      <div class="row g-3">
        <!-- one -->
        <div class="col-md-2 col-sm-4">
          <div class="stepBox text-center">
            <h1><i class="bi bi-shield-check"></i></h1>
            <p>{{ $t("assurances") }}</p>
          </div>
        </div>
        <!-- two -->
        <div class="col-md-2 col-sm-4">
          <div class="stepBox text-center">
            <h1><i class="bi bi-truck"></i></h1>
            <p>{{$t("livraison")}}</p>
          </div>
        </div>
        <!-- three -->
        <div class="col-md-2 col-sm-4">
          <div class="stepBox text-center">
            <h1><i class="bi bi-geo-alt"></i></h1>
            <p>{{ $t("gps") }}</p>
          </div>
        </div>
        <!-- four -->
        <div class="col-md-2 col-sm-4">
          <div class="stepBox text-center">
            <h1><i class="bi bi-speedometer"></i></h1>
            <p>{{ $t("kilometrage") }}</p>
          </div>
        </div>
        <!-- five -->
        <div class="col-md-2 col-sm-4">
          <div class="stepBox text-center">
            <h1><i class="bi bi-person-plus-fill"></i></h1>
            <p>{{$t("conducteur")}}
                 <!-- offert -->
                </p>
          </div>
        </div>
        <!-- six -->
        <div class="col-md-2 col-sm-4">
          <div class="stepBox text-center">
            <h1><i class="bi bi-clock"></i></h1>
            <p>{{$t("annulation")}} 
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
  padding-top: 80px;
  // margin-top: 80px;
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
