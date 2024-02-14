<template>
  <div>
    <div class="container divcont rowmargtop">
      <div class="row">
        <div class="col-md-6">
          <h2 class="firsttitle">Pourquoi conduire une voiture?</h2>
          <p class="firstparam">
            Le fait d'avoir une voiture de location à votre disposition en
            arrivant à Mahé va vous faciliter la vie et vous permettra de
            découvrir les beautés de l'île. Tandis que la côte nord déploie un
            paysage impressionnant, la côte ouest vous dévoile ses splendides
            baies. L'excursion vers Sans Souci à travers les plantations de thé,
            et la visite de la capitale, Victoria, sont également des trajets
            qui valent le détour. Vous pouvez découvrir l'île en quelques
            heures, en vous arrêtant sur des plages ou tout autre point
            d'intérêt. Si vous avez opté pour un bed & breakfast, ou un logement
            indépendant, la meilleure façon d'aller faire les courses est
            d'utiliser une voiture. Cela vous permettra également d'accéder aux
            magasins fréquentés par les locaux, où les prix sont plus
            raisonnables que les petits commerces situés tout au long de la
            côte.
          </p>
        </div>
        <div class="col-md-6 divimg">
          <img
            src="../../assets/image/HomeImg/isalo.jpg"
            alt="Anse Intendance Mahé"
            class="img-fluid imagleft"
          />
        </div>
      </div>
      <!--  -->
      <div class="row rowmargtop">
        <div class="col-md-6 divimg">
          <img
            src="../../assets/image/HomeImg/maki.png"
            alt="Anse Intendance Mahé"
            class="img-fluid"
          />
        </div>
        <div class="col-md-6">
          <h2 class="seconttitle">Pourquoi conduire une voiture?</h2>
          <p class="secondparam">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus,
            quisquam voluptatem? Dolore eligendi id laborum nemo delectus. Quia
            aut, nulla nesciunt accusantium eos est totam tenetur vero rerum
            nihil molestias laudantium nostrum tempora dolorem? Nulla, vitae.
            Explicabo adipisci voluptatibus facere molestias quaerat tempora!
            Tempora assumenda totam dolorum, quas quidem debitis voluptate
            accusamus vitae. Consequatur aspernatur ad, vel ipsam, numquam atque
            sit ab omnis eius suscipit fuga molestias accusamus recusandae cum
            dolorum quasi asperiores quas iure aperiam fugiat, animi ex
            temporibus molestiae obcaecati. Nulla quaerat dolorum natus
            asperiores nisi vitae commodi error in quasi. Quod, exercitationem
            corporis deserunt omnis nam tempore?
          </p>
        </div>
      </div>
      <!--  -->
      <div class="row rowmargtop">
        <div class="col-md-6">
          <h2 class="firsttitle">Pourquoi conduire une voiture?</h2>
          <p class="firstparam">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
            corrupti aut deleniti dolorum numquam. Doloremque dignissimos,
            cumque maxime mollitia vitae numquam, ab delectus enim quae illo
            quod, qui quam laborum! <br />
            <br />Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Soluta qui quam officiis quis odit ipsa illum in tempora fugit
            blanditiis.<br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            similique aperiam voluptas aliquam placeat odio et quo delectus sit,
            aliquid veniam in accusamus, nisi neque dicta voluptatum! Velit,
            iusto pariatur.
          </p>
        </div>
        <div class="col-md-6 divimg">
          <img
            alt="Anse Kerlan Praslin"
            class="img-responsive imagleft"
            src="../../assets/image/HomeImg/baobab.jpg"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.divcont {
  // background-color: #74881c;
  padding: 0px 50px;
}
.divimg {
  padding: 0;
  // background-color: red;

}
.divimg img {
  width: 95%;
  height: auto;
  border-radius: 50px;
  
}
.firsttitle {
  // background-color: aqua;
  font-size: 2rem;
  padding: 10px 50px 10px 0px;
}
.seconttitle {
  font-size: 2rem;
  padding: 10px 0px 10px 50px;
}
.firstparam {
  text-align: justify;
  // padding-right: 50px;
  // background: red;
}
.secondparam {
  text-align: justify;
  // padding-left: 50px;
}
.rowmargtop {
  margin-top: 5rem;
}
.imagleft{
  float: right;
}
</style>
