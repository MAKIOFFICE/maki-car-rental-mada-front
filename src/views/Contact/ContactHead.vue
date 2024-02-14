<template>
  <div>
    <header class="container divcont mt-3">
      <div class="row">
        <div class="col-md-8 cont">
          <div class="containToas">
            <h5>Contactez-nous</h5>
            <p class="paraToas">
              Cher client, afin que nous puissions vous envoyer un devis, vous
              devez d'abord utiliser notre système pour vérifier la
              disponibilité des voitures. Vous y trouverez instantanément la
              liste des voitures disponibles, prêtes à être réservées, ainsi que
              leurs prix, incluant l'assurance et les frais de livraison.
            </p>
          </div>
          <form class="contForm">
            <div class="mb-3">
              <label class="form-label formlab1">VOTRE NOM</label>
              <input type="name" class="form-control" placeholder="Votre nom" />
            </div>
            <div class="mb-3">
              <label class="form-label formlab1">VOTRE ADRESSE EMAIL </label>
              <input
                type="email"
                class="form-control"
                placeholder="Votre adresse email"
              />
            </div>
            <div class="mb-3">
              <label class="form-label formlab1"
                >VOTRE NUMÉRO DE TÉLÉPHONE*</label
              >
              <input
                type="tel"
                class="form-control"
                placeholder="votre numero de telephone"
              />
            </div>
            <div class="mb-3">
              <label class="form-label formlab1">VOTRE DEMANDE</label>
              <textarea
                class="form-control"
                rows="3"
                placeholder="Ecrire ..."
              ></textarea>
              <div id="emailHelp" class="form-text">* = facultatif</div>
            </div>
            <div class="d-flex justify-content-end">
              <button type="submit" class="btn">Envoyer</button>
            </div>
          </form>
        </div>

        <div class="col-md-4">
          <div class="dividivi">
            <h5>Contactez-nous</h5>
            <p>Retrouvez nos offres et bénéficiez de conseils d'experts</p>
            <div class="divhead">
              <div class="divflex">
                <div class="divicnspan">
                  <span><i class="bi bi-house-fill"></i></span>
                </div>
                <div class="divnumberphone">
                  <h6>Adresse</h6>
                  <p>+49-931-663984-98</p>
                </div>
              </div>
              <div class="divflex">
                <div class="divicnspan">
                  <span><i class="bi bi-telephone-fill"></i></span>
                </div>
                <div class="divnumberphone">
                  <h6>Phone</h6>
                  <p>+49-931-663984-98</p>
                </div>
              </div>
              <div class="divflex">
                <div class="divicnspan">
                  <span><i class="bi bi-envelope-fill"></i></span>
                </div>
                <div class="divnumberphone">
                  <h6>Email</h6>
                  <p>booking@maki-car-rental.com</p>
                </div>
              </div>
            </div>
          </div>

          <div class="dividivi">
            <h5>Nos horaires d'ouverture</h5>
            <p>
              Notre centre d'appel est ouvert de
              <span
                >lundi à vendredi de 8 h à 18 h a Samedi de 10 h à 15 h</span
              >
              (Heure d’Europe centrale).
            </p>
            <p>
              Après avoir complété votre réservation, vous recevrez le numéro de
              notre centre d'appels. Ce numéro est disponible 24/24 et7/7.
            </p>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.divcont {
  padding: 10px 50px 50px 50px;
}
.cont {
  padding: 20px 50px;
}

.containToas {
  padding: 15px 0px;
}
.paraToas {
  text-align: justify;
}
.formlab1 {
  font-size: 16px;
  font-weight: 500;
}
button {
//   width: 20%;
//   height: 40px;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  background-color: #4995dd;
  color: #fff;
}
button:hover {
  color: #fff;
}
.dividivi {
  background-color: #e6faff;
  padding: 15px;
  margin-top: 25px;
  border-radius: 20px;
}
.divflex {
  display: flex;
  width: 100%;
  gap: 5px;
  margin-top: 10px;
}
.divicnspan {
  padding: 5px 2px;
  display: grid;
}
.divicnspan span {
  background-color: #4995dd;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding: 8px 12px;
  font-size: 1.5rem;
  position: relative;
  color: #fff;
}
.divnumberphone {
  padding-top: 3px;
}
p{
    text-align: justify;
}
</style>
