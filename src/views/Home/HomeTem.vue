<template>
    <div>
        <div class="container">
    <div class="row">
        <div class="col-md-6 quesdiv">
            <!-- Contenu de la deuxième colonne -->
            <h1>Témoignages et avis clients</h1>
            <div id="carouselExampleIndicatorsOnes" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicatorsOnes" data-bs-slide-to="0"
                        class="active btnrondstyle" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicatorsOnes" data-bs-slide-to="1"
                        class="btnrondstyle" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicatorsOnes" data-bs-slide-to="2"
                        class="btnrondstyle" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active divcolpag">
                        <p>Viard a écrit le commentaire suivant sur <span class="trustpilot1">Trustpilot</span> :</p>
                        <i class="trustpilot">Notre expérience avec Maky s'est parfaitement déroulée. Échange facile
                            durant notre
                            séjour via une application. Voiture neuve et impeccable.</i>
                        <p class="trustpilot1 mt-2"><a @click="messageBtn">Tous les témoignages</a></p>
                    </div>
                    <div class="carousel-item divcolpag">
                        <p>Viard a écrit le commentaire suivant sur <span class="trustpilot1">Trustpilot</span> :</p>
                        <i class="trustpilot">Notre expérience avec Maky s'est parfaitement déroulée. Échange facile
                            durant notre
                            séjour via une application. Voiture neuve et impeccable.</i>
                        <p class="trustpilot1 mt-2"><a @click="messageBtn">Tous les témoignages</a></p>
                    </div>
                    <div class="carousel-item divcolpag">
                        <p>Viard a écrit le commentaire suivant sur <span class="trustpilot1">Trustpilot</span> :</p>
                        <i class="trustpilot">Notre expérience avec Maky s'est parfaitement déroulée. Échange facile
                            durant notre
                            séjour via une application. Voiture neuve et impeccable.</i>
                        <p class="trustpilot1 mt-2"><a @click="messageBtn">Tous les témoignages</a></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-6 quesdiv">
            <h1>Foire aux questions</h1>

            <div class="coll">
                <p>
                    <a data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false"
                        aria-controls="collapseExample" @click="toggleIconNext(1)">
                        <i :class="{ 'bi-dash-circle-fill': isIconChangedn1, 'bi-plus-circle-fill': !isIconChangedn1 }"></i>
                        Quelles sont les assurances incluse dans la location ?
                    </a>
                </p>
                <div class="collapse mb-4" id="collapseExample">
                    <div class="card card-body colFont">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quam ab velit, sequi aspernatur cupiditate et veniam fugit commodi est aliquam tempore dolore eius. Laboriosam veritatis alias soluta quibusdam suscipit.
                    </div>
                </div>
                <p>
                    <a data-bs-toggle="collapse" href="#collapseEx" role="button" aria-expanded="false"
                        aria-controls="collapseEx" @click="toggleIconNext(2)">
                        <i :class="{ 'bi-dash-circle-fill': isIconChangedn2, 'bi-plus-circle-fill': !isIconChangedn2 }"></i>
                        Dois-je verser un dépot de garantie ?
                    </a>
                </p>
                <div class="collapse mb-4" id="collapseEx">
                    <div class="card card-body colFont">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur natus facere ullam, illo hic odit quo optio officiis aperiam, delectus aspernatur exercitationem nemo cumque deserunt error distinctio dolore. Unde, distinctio?
                    </div>
                </div>
                <p>
                    <a data-bs-toggle="collapse" href="#collapseExa" role="button" aria-expanded="false"
                        aria-controls="collapseExa" @click="toggleIconNext(3)">
                        <i :class="{ 'bi-dash-circle-fill': isIconChangedn3, 'bi-plus-circle-fill': !isIconChangedn3 }"></i>
                        Dois-je verser un dépot de garantie ?
                    </a>
                </p>
                <div class="collapse" id="collapseExa">
                    <div class="card card-body colFont">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda commodi animi sunt cum atque ipsum, repellendus molestiae in ad quidem, expedita consequatur dignissimos quae! Doloremque nostrum officia neque molestiae perspiciatis.
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
  
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
const router = useRouter();

const messageBtn = () => {
    router.push('/message');
}

</script>

<style lang='scss' scoped>
.coll,
.divcolpag {
    background-color: #fff;
    padding: 30px;
}
.trustpilot {
    color: #6dace6;
}

.trustpilot1 {
    color: #4995dd;
}

.trustpilot1 a{
    cursor: pointer;
}
.btnrondstyle {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 1px solid #333;
}

button.active {
    background-color: #fdb714;
}

.img-fluid {
    cursor: pointer;
}
.quesdiv h1 {
    /* background-color: #786333; */
    padding: 20px 0px;
    font-size: 20px;
}


</style>