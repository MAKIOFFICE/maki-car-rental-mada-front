<template>
    <div>
        <div class="container divcont mt-5 mb-5 tarif">
            <h1>Tarif à la semaine</h1>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4" >
                <div class="col" v-for="(item, index) in dataAuto" :key="index">
                    <div class="cardOn">
                        <div class="box">
                            <img class="imagebox" :src="item.image" alt="Card image cap" draggable="false"/>
                            <div class="overlay" @click="voitureBtn" title="Renault twingo"><i class="bi bi-plus-circle"></i>
                            </div>
                        </div>
                        <div class="card-body cardone">
                            <div class="cardivision">
                                <h5 class="card-title">{{ item.title }}</h5>
                                <p class="card-text">{{ item.description }}</p>
                            </div>
                            <h5 class="card-title h5division">{{ item.price }}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import UrlImgOne from '../../assets/image/HomeImg/photos1.jpg';
import UrlImgTwo from '../../assets/image/HomeImg/photos2.webp';
import UrlImgThree from '../../assets/image/HomeImg/photos3.jpg';
import UrlImgfor from '../../assets/image/HomeImg/photos4.jpg';

const dataAuto =[
    {
        image : UrlImgOne,
        title : "Renault Twingo",
        description : "Par exemple, pour 7jours de location",
        price : "135$",
    },
    {
        image :UrlImgTwo,
        title : "Renault Twingo",
        description : "Par exemple, pour 7jours de location",
        price : "135$",
    },
    {
        image :UrlImgThree,
        title : "Renault Twingo",
        description : "Par exemple, pour 7jours de location",
        price : "135$",
    },
    {
        image :UrlImgfor,
        title : "Renault Twingo",
        description : "Par exemple, pour 7jours de location",
        price : "135$",
    }
]

const router = useRouter();

const voitureBtn = () => {
    router.push('/about');
}
</script>

<style lang='scss' scoped>
.divcont{
  // background-color: #74881c;
  padding: 0px 50px;
  margin-top: 50px;
}
.imagebox {
    width: 100%;
    height: 180px;
}

.box:hover .imagebox {
    transform: scale(1.1);
}
.box {
    position: relative;
    overflow: hidden;
}

.cardOn {
    background-color: #fff;
}
.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(67, 181, 194, 0.5);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0;
    transform-style: preserve-3d;
    transition: all 500ms ease;
}

.box:hover .overlay {
    opacity: 1;
    transform: rotateY(180deg);
}
.bi-plus-circle {
    font-size: 3rem;
}
.tarif h1 {
    /* background-color: #786333; */
    padding: 20px 0px;
    font-size: 20px;
}

</style>