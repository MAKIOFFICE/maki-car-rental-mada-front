<template>
  <div class="divmes">
    <div class="container divcont">
      <h4>FOIRES AUX QUESTIONS</h4>
      <h1>Questions et Reponse</h1>
      <div class="diviscollapse">
        <ul
          class="ulquest"
          data-bs-toggle="collapse"
          href="#collapseExample"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
          @click="toggleIconNext(1)"
        >
          <li class="lititle">Lorem ipsum dolor sit amet.</li>
          <li class="liicn">
            <span
              ><i
                :class="{
                  'bi-dash-circle-fill': isIconChangedn1,
                  'bi-plus-circle-fill': !isIconChangedn1,
                }"
              ></i
            ></span>
          </li>
        </ul>
      </div>
      <div class="collapse mb-4" id="collapseExample">
        <div class="card card-body colFont">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quam
          ab velit, sequi aspernatur cupiditate et veniam fugit commodi est
          aliquam tempore dolore eius. Laboriosam veritatis alias soluta
          quibusdam suscipit.
        </div>
      </div>
      <!--  -->
      <div>
        <ul
          class="ulquest"
          data-bs-toggle="collapse"
          href="#collapseEx"
          role="button"
          aria-expanded="false"
          aria-controls="collapseEx"
          @click="toggleIconNext(2)"
        >
          <li class="lititle">Lorem ipsum dolor sit amet.</li>
          <li class="liicn">
            <span
              ><i
                :class="{
                  'bi-dash-circle-fill': isIconChangedn2,
                  'bi-plus-circle-fill': !isIconChangedn2,
                }"
              ></i
            ></span>
          </li>
        </ul>
      </div>
      <div class="collapse mb-4" id="collapseEx">
        <div class="card card-body colFont">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          natus facere ullam, illo hic odit quo optio officiis aperiam, delectus
          aspernatur exercitationem nemo cumque deserunt error distinctio
          dolore. Unde, distinctio?
        </div>
      </div>
      <!--  -->
      <div>
        <ul
          class="ulquest"
          data-bs-toggle="collapse"
          href="#collapseExa"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExa"
          @click="toggleIconNext(3)"
        >
          <li class="lititle">Lorem ipsum dolor sit amet.</li>
          <li class="liicn">
            <span
              ><i
                :class="{
                  'bi-dash-circle-fill': isIconChangedn3,
                  'bi-plus-circle-fill': !isIconChangedn3,
                }"
              ></i
            ></span>
          </li>
        </ul>
      </div>
      <div class="collapse" id="collapseExa">
        <div class="card card-body colFont">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
          commodi animi sunt cum atque ipsum, repellendus molestiae in ad
          quidem, expedita consequatur dignissimos quae! Doloremque nostrum
          officia neque molestiae perspiciatis.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isIconChangedn1 = ref(false);
const isIconChangedn2 = ref(false);
const isIconChangedn3 = ref(false);

const toggleIconNext = (buttonNumber) => {
  if (buttonNumber === 1) {
    isIconChangedn1.value = !isIconChangedn1.value;
  } else if (buttonNumber === 2) {
    isIconChangedn2.value = !isIconChangedn2.value;
  } else if (buttonNumber === 3) {
    isIconChangedn3.value = !isIconChangedn3.value;
  }
};
</script>

<style lang="scss" scoped>
.divmes {
//   background: blue;
  padding: 50px 0px;
  margin-top: 50px;
}
.divcont {
//   background-color: #74881c;
  padding: 0px 40px;
}
.divcont h4 {
  // background-color: red;
  font-size: 16px;
  color: #4995dd;
  text-align: center;
  padding: 5px 0px;
}
.divcont h1 {
  // background-color: #4995dd;
  font-size: 2rem;
  text-align: center;
  color: #333;
}
.diviscollapse {
  margin-top: 30px;
}
.ulquest {
  background-color: #fff;
  padding: 0;
  display: flex;
  padding: 10px 0px;
  border-radius: 8px;
}
.lititle {
  width: 94%;
//   background-color: red;
  padding: 5px 15px;
}
.liicn {
  width: 6%;
  text-align: center;
//   background-color: darkorange;
}
.liicn span{
    font-size: 1.5rem;
    color: #4995dd;
}
</style>
