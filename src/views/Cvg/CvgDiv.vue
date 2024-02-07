<template>
<div>
        <div class="container mt-5">
            <div class="row">
                <div class="col-md-4">
                    <h2 class="title-header">Conditions générales de vente</h2>
                    <div class="divsearch">
                        <h3 class="search-title">Recherche dans nos CGV</h3>
                        <div class="divisionsear">
                            <input type="text" class="form-control" aria-label="Amount"
                                placeholder="Faite votre recherche ici">
                            <span class="spanserch" ><i class="bi bi-search"></i></span>
                        </div>
                    </div>
                    <ul class="ulsearch">
                        <li class="lisearch" >Généralités</li>
                        <li class="lisearch">Conditions de restitution du véhicule</li>
                        <li class="lisearch">Permis de conduire</li>
                        <li class="lisearch">Tarifs et modes de paiement</li>
                        <li class="lisearch" >Assurance</li>
                        <li class="lisearch" >Accidents, dommages, et responsabilité du client</li>
                        <li class="lisearch">Politique de confidentialité</li>
                        <li class="lisearch">Divers</li>
                    </ul>
                </div>
                <!-- Contenu de la page avec les sections -->
                <div class="col-md-8">
                    <h2 class="title-header">Conditions générales de vente</h2>
                    <table class="table">
                        <tbody>
                            <tr >
                                <th scope="row">12</th>
                                <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam autem eaque eligendi reiciendis in quisquam, repellendus deleniti inventore quos sapiente sequi provident, ipsa iste ipsum at consequuntur vero fugit. Vel!</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup></script>

<style lang='scss' scoped>
.divsearch{
  background-color: #fff;
  padding: 20px;

}
.divisionsear{
  position: relative;
}
.spanserch{
  font-size: 1rem;
  position: absolute;
  top: 0;
  left: 85%;
  width: 15%;
  height: 100%;
  background-color: #899e27 ;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.form-control{
  background-color: #f5f5f5;
}
.search-title{
  font-size: 20px;
  padding: 8px 0px;
  color: #2d3e52;
}
.ulsearch{
  background-color: #fff;
  margin-top: 20px;
  padding: 20px;
  position: sticky;
  top: 70px;
}
.lisearch{
  margin-top: 5px;
  padding: 5px 10px;
  cursor: pointer;
  color: #2d3e52;
}
.lisearch:hover{
  color: #4a9fef;
  border-left: 1px solid #4a9fef;
}
.divsearch h5{
  background-color: #6dace6;
  font-size: 20px;
}
.divsearch p{
  background-color: cyan;
}
.table td{
  text-align: justify;
}
</style>