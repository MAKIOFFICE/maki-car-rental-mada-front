<template>
  <div class="divmarque">
    <div class="container divcont">
      <h1 class="notmarq">Notre marque a été citée sur</h1>
      <div class="row justify-content-around">
        <div class="col-lg-2 col-md-3 col-sm-4 mb-4">
          <div class="border peg">
            <div class="flex-column-item">
              <img
                src="https://d12ittivwictyd.cloudfront.net/images/as-seen-on/telegraph-travel.jpg"
                alt="As Seen On"
                draggable="false"
                class="img-fluid imfluid"
                title="Telegraph travel"
              />
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-3 col-sm-4 mb-4">
          <div class="border peg">
            <div class="flex-column-item text-center">
              <img
                src="https://d12ittivwictyd.cloudfront.net/images/as-seen-on/merian.png"
                title="Merian"
                draggable="false"
                class="img-fluid"
              />
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-3 col-sm-4 mb-4">
          <div class="border peg">
            <div class="flex-column-item text-center">
              <img
                src="https://d12ittivwictyd.cloudfront.net/images/as-seen-on/petit-fute.png"
                alt="As Seen On"
                title="Petit futé"
                draggable="false"
                class="img-fluid"
              />
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-3 col-sm-4 mb-4">
          <div class="border peg">
            <div class="flex-column-item text-center">
              <img
                src="https://d12ittivwictyd.cloudfront.net/images/as-seen-on/gq-za.png"
                draggable="false"
                title="GQ South Africa"
                class="img-fluid"
              />
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-3 col-sm-4 mb-4">
          <div class="border peg">
            <div class="flex-column-item text-center">
              <img
                src="https://d12ittivwictyd.cloudfront.net/images/as-seen-on/trustpilot.png"
                alt="As Seen On"
                title="trustpilot"
                draggable="false"
                class="img-fluid"
              />
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-3 col-sm-4 mb-4">
          <div class="border peg">
            <div class="flex-column-item text-center">
              <img
                src="https://d12ittivwictyd.cloudfront.net/images/as-seen-on/routard.png"
                alt="As Seen On"
                title="Routar"
                draggable="false"
                class="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
<style lang="scss" scoped>
.divmarque{
    background-color: #fff;
    margin-top: 5rem;
}
.divcont {
  // background-color: #74881c;
  padding: 0px 50px;
}
.notmarq {
  /* background-color: #74881c; */
  padding: 20px 0px;
  font-size: 20px;
}
.peg {
  /* height: 100px; */
  background-color: #fff;
  border-radius: 10px;
  opacity: 0.5;
  filter: grayscale(100%);
}
.peg:hover {
  opacity: 1;
  filter: none;
}

.peg img {
  width: 80%;
  height: 100px;
}
.imfluid {
  border-radius: 5px;
}
</style>
