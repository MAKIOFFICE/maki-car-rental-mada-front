<template>
  <div>
    <h1>page home</h1>
    <div class="banner">
    <!--debut division 1  -->
    <div class="container ">
        <div class="row">
            <div class="col-lg-6 formulaires">
                <div class="welcome">
                    <div class="one">
                        <h1>Bienvenue chez Maki Car Rental Seychelles</h1>
                        <p>Remplissez ce formulaire pour connaître nos offres de location de voiture</p>
                    </div>
                    <div class="two"><i class="bi bi-car-front-fill"></i></div>
                </div>
                <form>
                    <div class="d-flex">
                        <div class="left">
                            <h5><span>Où</span></h5>
                            <label>LIEU DE DÉPART</label>
                            <div class="divisionseardate">
                                <select class="form-control formcont" aria-label="Default select example"
                                    data-bs-toggle="modal" data-bs-target="#optionsModalOnes">
                                    <option selected>Open this select menu</option>
                                </select>
                                <span class="spandate"><i class="bi bi-caret-down-fill"></i></span>
                            </div>

                            <!-- <input type="text" placeholder="Mahé Island – Seychelles International Airport (SEZ)"> -->
                            <h5><span>Quand</span></h5>
                            <label>DATE ET HEURE DE DÉPART</label>
                            <!--  -->
                            <div class="divisionseardate">
                                <input type="date" class="form-control formcont" id="form-control" value="2023-01-01">
                                <span class="spandate"><i class="bi bi-calendar2-date"></i></span>
                            </div>
                            <!--  -->
                            <label>DATE ET HEURE DE RETOUR</label>
                            <!--  -->
                            <div class="divisionseardate">
                                <input type="date" class="form-control formcont" id="form-control" value="2023-01-01">
                                <span class="spandate"><i class="bi bi-calendar2-date"></i></span>
                            </div>
                            <!--  -->
                        </div>
                        <div class="right">
                            <h5 class="h5vide"><span></span></h5>
                            <label>LIEU DE RETOUR</label>
                            <div class="divisionseardate">
                                <select class="form-control formcont" aria-label="Default select example"
                                    data-bs-toggle="modal" data-bs-target="#optionsModal">
                                    <option selected>Open this select menu</option>
                                </select>
                                <span class="spandate"><i class="bi bi-caret-down-fill"></i></span>
                            </div>

                            <!-- <input type="text" placeholder=""> -->
                            <h5 class="h5videspan"><span></span></h5>
                            <label></label>
                            <div class="divisionseardate">
                                <input type="time" value="12:00" class="form-control formcont" id="form-control">
                                <span class="spandate"><i class="bi bi-clock"></i></span>
                            </div>
                            <label></label>
                            <!--  -->
                            <div class="divisionseardate">
                                <input type="time" class="form-control formcont" id="form-control" value="12:00">
                                <span class="spandate"><i class="bi bi-clock"></i></span>
                            </div>
                            <!--  -->
                        </div>
                    </div>
                    <div class="boutton">
                        <button routerLink="voitures">AFFICHER LES OFFRES</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
<!--fin division 1  -->

<!-- debut division 2 -->

<div class="container head">
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
        <div class="col-md-2 col-sm-4 ">
            <div class="stepBox text-center">
                <h1><i class="bi bi-speedometer"></i></h1>
                <p>Kilométrage illimité</p>
            </div>
        </div>
        <!-- five -->
        <div class="col-md-2 col-sm-4 ">
            <div class="stepBox text-center">
                <h1><i class="bi bi-person-plus-fill"></i></h1>
                <p>Un conducteur additionnel offert</p>
            </div>
        </div>
        <!-- six -->
        <div class="col-md-2 col-sm-4 ">
            <div class="stepBox text-center">
                <h1><i class="bi bi-clock"></i></h1>
                <p>Aucun frais d'annulation jusqu'à 48 heures avant la date de livraison</p>
            </div>
        </div>
    </div>
</div>

<!-- fin division 2 -->
<!-- debut division 3 -->

<!-- fin dividion 3 -->

<!-- ok -->

<section class="container">
    <div class="row divSection">
        <div class="col-md-8 onedivision">
            <!-- Votre contenu existant -->
            <div class="container mt-4">
                <div class="row gpsoffert">
                    <div class="col-md-6 imagegps">
                        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                                    class="active btnrondstyle" aria-label="Slide 1"></button>
                                <button class="btnrondstyle" type="button" data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button class="btnrondstyle" type="button" data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide-to="2" aria-label="Slide 3"></button>
                                <button class="btnrondstyle" type="button" data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide-to="3" aria-label="Slide 4"></button>
                                <button class="btnrondstyle" type="button" data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide-to="4" aria-label="Slide 5"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="https://d12ittivwictyd.cloudfront.net/images/gps/9fr1.jpg"
                                        class="img-fluid" alt="GPS Image" draggable="false">
                                </div>
                                <div class="carousel-item">
                                    <img src="https://d12ittivwictyd.cloudfront.net/images/gps/1fr2.jpg"
                                        draggable="false">
                                </div>
                                <div class="carousel-item">
                                    <img src="https://d12ittivwictyd.cloudfront.net/images/gps/1fr3.jpg"
                                        draggable="false">
                                </div>
                                <div class="carousel-item">
                                    <img src="https://d12ittivwictyd.cloudfront.net/images/gps/1fr4.jpg"
                                        draggable="false">
                                </div>
                                <div class="carousel-item">
                                    <img src="https://d12ittivwictyd.cloudfront.net/images/gps/1fr5.jpg"
                                        draggable="false">
                                </div>
                            </div>
                            <!-- <button class="carousel-control-prev" type="button"
                                data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button"
                                data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button> -->
                        </div>
                    </div>
                    <div class="col-md-6 parOffert">
                        <h1 class="mb-4">GPS offert pour toute location de voiture</h1>
                        <p>Aux Seychelles, toutes les locations de voitures réalisées sur notre site incluent un GPS gratuit. Certains locaux et habitués vous diront qu'il n'est pas nécessaire d'avoir un GPS aux Seychelles. Cela peut être vrai. Cependant, si c'est la première fois que vous vous rendez sur cette île, un GPS pourra s'avérer très utile, en particulier le premier jour lorsque vous pourriez avoir besoin de rejoindre votre hôtel depuis l'aéroport.</p>
                    </div>
                </div>
            </div>

            <!--  -->
            <div class="container">
                <div class="row conduire">
                    <div class="col-md-12">
                        <h1>Pourquoi conduire une voiture à Praslin ?</h1>
                        <img src="" alt="Anse Intendance Mahé" class="img-fluid">
                        <span>L</span>
                        <p>e fait d'avoir une voiture de location à votre disposition en arrivant à Mahé va vous faciliter la vie et vous permettra de découvrir les beautés de l'île. Tandis que la côte nord déploie un paysage impressionnant, la côte ouest vous dévoile ses splendides baies. L'excursion vers Sans Souci à travers les plantations de thé, et la visite de la capitale, Victoria, sont également des trajets qui valent le détour. Vous pouvez découvrir l'île en quelques heures, en vous arrêtant sur des plages ou tout autre point d'intérêt. Si vous avez opté pour un bed & breakfast, ou un logement indépendant, la meilleure façon d'aller faire les courses est d'utiliser une voiture. Cela vous permettra également d'accéder aux magasins fréquentés par les locaux, où les prix sont plus raisonnables que les petits commerces situés tout au long de la côte. Le Jardin Botanique de Victoria est un lieu à ne pas manquer, avec sa vaste collection de plantes exotiques réparties sur cinq hectares de jardins tropicaux, habitat des tortues géantes. Puis, sur la côte nord-ouest, se trouve la plage de Beau Vallon, l'une des plages les plus animées de Mahé. Pour les amateurs de surf et de grosses vagues, nous recommandons Anse Intendance ou Grand Anse. Les plus romantiques peuvent se rendre sur la plage d'Anse Takamaka. Ses plages de sable doré et ses vagues turquoises créent l'ambiance parfaite pour les jeunes mariés. Cependant, les routes de Mahé, escarpées et étroites, ont une circulation réduite, c'est pourquoi il faut toujours être vigilent.</p>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="row conduireTwo">
                    <div class="col-md-12">
                        <h1>Pourquoi conduire une voiture à Mahé ?</h1>
                        <img alt="Anse Kerlan Praslin" class="img-responsive" src="">
                        <span>L'</span>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta exercitationem saepe, inventore iste, fugit aliquam nulla in, repellendus ut laudantium reiciendis rem quo distinctio eaque hic enim modi quod commodi?</p>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="row conduireThree">
                    <div class="col-md-12">
                        <h1>Pourquoi louer une voiture aux Seychelles avec Maki Car Rental ?</h1>
                        <span>L'</span>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe corrupti aut deleniti dolorum numquam. Doloremque dignissimos, cumque maxime mollitia vitae numquam, ab delectus enim quae illo quod, qui quam laborum! <br> <br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta qui quam officiis quis odit ipsa illum in tempora fugit blanditiis, error, commodi debitis impedit odio praesentium adipisci laboriosam consequatur veniam? <br> <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia similique aperiam voluptas aliquam placeat odio et quo delectus sit, aliquid veniam in accusamus, nisi neque dicta voluptatum! Velit, iusto pariatur. </p>
                    </div>
                </div>
            </div>

        </div>
        <div class="col-md-4 twodivision">
            <div class="avantages">
                <h1>Encore plus d'avantages :</h1>
                <div class="divAv">
                    <div>
                        <ul>
                            <li><span><i class="bi bi-stopwatch"></i></span></li>
                            <li><span><i class="bi bi-piggy-bank-fill"></i></span></li>
                            <li><span><i class="bi bi-hand-thumbs-up-fill"></i></span></li>
                            <li class="lipic"><span><i class="bi bi-check-lg"></i></span></li>
                            <li><span><i class="bi bi-link"></i></span></li>
                        </ul>

                    </div>
                    <div>
                        <p class="pic1">Aucun frais d'annulation jusqu'à 48 heures avant la date de livraison</p>
                        <p class="pic1">Prix tout compris, aucun frais caché</p>
                        <p class="pic1 one1pi">Vous pouvez réserver un modèle précis, pas juste une catégorie</p>
                        <p class="pic">Uniquement des voitures récentes et de très bonne qualité</p>
                        <p class="pic2">Pas de frais supplémentaire pour les voitures automatiques</p>
                    </div>
                </div>
            </div>

            <div class="contactez">
                <h1>Contactez-nous</h1>
                <p class="param">Retrouvez nos offres et bénéficiez de conseils d'experts</p>

                <div class="divCont">
                    <div>
                        <p class="paraIcns"><span class="span"><i class="bi bi-telephone-inbound-fill"></i></span><span
                                class="pspanPh">+49-931-663984-98</span></p>
                        <p class="paraIcns"><span class="span"><i class="bi bi-telephone-fill"></i></span><span
                                class="pspanPh">+248-2603261</span></p>
                    </div>
                </div>

                <div class="imageCon">
                    <img alt="Live chat offline" routerLink="contact" style="cursor: pointer" id="chat"
                        src="https://d12ittivwictyd.cloudfront.net/images/locales/fr/chat_off.gif">
                </div>
            </div>

            <div class="disponible">
                <p>Nos coupons sont aussi disponibles sur l'application Wallet d'Apple ou sur l'application WalletPasses
                    d'Android.
                </p>
                <div class="dispIm">
                    <img alt="Wallet" src="https://d12ittivwictyd.cloudfront.net/images/passbook_hand.png">
                </div>
            </div>

            <div class="notrebureau">
                <h1>Notre bureau est situé à</h1>
                <ul>
                    <li>Maki Car Rental Mauritius</li>
                    <li>Royal Road 363</li>
                    <li>Pointe aux Canonniers</li>
                    <li>(near Grand Baie)</li>
                    <li>GPS: S20°0'30.24" E57°33'34.9194"</li>
                    <li class="margBur">Téléphone local: +230 5250 1260</li>
                    <li>(Ceci n'est pas un numéro d'urgence. Merci de l'utiliser seulement si vous nous appelez depuis
                        l'île Maurice ! Le numéro de téléphone d'urgence vous sera envoyé avec votre confirmation de
                        réservation.)</li>
                    <li class="margBur">Merci de nous appeler avant de venir nous voir, afin d'être sûrs que quelqu'un
                        sera là pour vous recevoir.</li>
                </ul>
            </div>
        </div>
    </div>

</section>
<!-- ok -->

<div class="container p-4">
    <h1 class="notmarq">Notre marque a été citée sur</h1>
    <div class="row justify-content-around">
        <div class="col-lg-2 col-md-3 col-sm-4 mb-4">
            <div class="border peg" >
                <div class="flex-column-item">
                    <img src="https://d12ittivwictyd.cloudfront.net/images/as-seen-on/telegraph-travel.jpg"
                        alt="As Seen On" draggable="false" class="img-fluid imfluid"
                        title="Telegraph travel">
                </div>
            </div>
        </div>
        <div class="col-lg-2 col-md-3 col-sm-4 mb-4">
            <div class="border peg" >
                <div class="flex-column-item text-center">
                    <img src="https://d12ittivwictyd.cloudfront.net/images/as-seen-on/merian.png" title="Merian"
                        draggable="false" class="img-fluid">
                </div>
            </div>
        </div>
        <div class="col-lg-2 col-md-3 col-sm-4 mb-4">
            <div class="border peg">
                <div class="flex-column-item text-center">
                    <img src="https://d12ittivwictyd.cloudfront.net/images/as-seen-on/petit-fute.png" alt="As Seen On"
                        title="Petit futé" draggable="false" class="img-fluid">
                </div>
            </div>
        </div>
        <div class="col-lg-2 col-md-3 col-sm-4 mb-4">
            <div class="border peg">
                <div class="flex-column-item text-center">
                    <img src="https://d12ittivwictyd.cloudfront.net/images/as-seen-on/gq-za.png" draggable="false"
                        title="GQ South Africa" class="img-fluid">
                </div>
            </div>
        </div>
        <div class="col-lg-2 col-md-3 col-sm-4 mb-4">
            <div class="border peg">
                <div class="flex-column-item text-center">
                    <img src="https://d12ittivwictyd.cloudfront.net/images/as-seen-on/trustpilot.png" alt="As Seen On"
                        title="trustpilot" draggable="false" class="img-fluid">
                </div>
            </div>
        </div>
        <div class="col-lg-2 col-md-3 col-sm-4 mb-4">
            <div class="border peg" >
                <div class="flex-column-item text-center">
                    <img src="https://d12ittivwictyd.cloudfront.net/images/as-seen-on/routard.png" alt="As Seen On"
                        title="Routar" draggable="false" class="img-fluid">
                </div>
            </div>
        </div>
    </div>
</div>





<div class="divisionliv mb-2">
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-4">
                <div class="text-white">
                    <img src="" class="imgmakiU">
                </div>
            </div>
            <div class="col-md-5">
                <div class="text-white pt-5">
                    <h1 class="h1hot">Livraison à l'hôtel dans Saint-Gilles-les-Bains !</h1>
                    <p class="p1hot">Nous pouvons livrer votre voiture de location directement à votre hôtel.
                        Il vous suffit donc de sélectionner votre hôtel dans cette liste, et de cliquer sur «Valider».
                    </p>
                </div>
            </div>
            <div class="col-md-3">
                <div class="text-white pt-5">
                    <div class="divisionseardate">
                        <select class="selec form-select form-select-lg formcont">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <span class="spandate"><i class="bi bi-caret-down-fill"></i></span>
                    </div>
                    <button class="validatebtn mb-3">VALIDER</button>
                </div>
            </div>
        </div>
    </div>

</div>





<!-- ok -->

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
                        <p class="trustpilot1 mt-2"><a routerLink="testimonials">Tous les témoignages</a></p>
                    </div>
                    <div class="carousel-item divcolpag">
                        <p>Viard a écrit le commentaire suivant sur <span class="trustpilot1">Trustpilot</span> :</p>
                        <i class="trustpilot">Notre expérience avec Maky s'est parfaitement déroulée. Échange facile
                            durant notre
                            séjour via une application. Voiture neuve et impeccable.</i>
                        <p class="trustpilot1 mt-2"><a routerLink="testimonials">Tous les témoignages</a></p>
                    </div>
                    <div class="carousel-item divcolpag">
                        <p>Viard a écrit le commentaire suivant sur <span class="trustpilot1">Trustpilot</span> :</p>
                        <i class="trustpilot">Notre expérience avec Maky s'est parfaitement déroulée. Échange facile
                            durant notre
                            séjour via une application. Voiture neuve et impeccable.</i>
                        <p class="trustpilot1 mt-2"><a routerLink="testimonials">Tous les témoignages</a></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-6 quesdiv">
            <h1>Foire aux questions</h1>

            <div class="coll">
                <p>
                    <a data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false"
                        aria-controls="collapseExample">
                        <i
                            class="bi {{ isIconChanged ? 'bi-dash-circle-fill' : 'bi-plus-circle-fill' }} iconpluschange"></i>
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
                        aria-controls="collapseEx" >
                        <i
                            class="bi {{ isIconChangedn ? 'bi-dash-circle-fill' : 'bi-plus-circle-fill' }} iconpluschange"></i>
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
                        aria-controls="collapseExa" >
                        <i
                            class="bi {{ isIconChangedne ? 'bi-dash-circle-fill' : 'bi-plus-circle-fill' }} iconpluschange"></i>
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

<!-- debut 1  -->

<div class="container mt-5 mb-5 tarif">
    <h1>Tarif à la semaine</h1>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        <div class="col">
            <div class="cardOn">
                <div class="box">
                    <img class="imagebox" src="" alt="Card image cap" draggable="false">
                    <div class="overlay" routerLink="voitures" title="Renault twingo"><i class="bi bi-plus-circle"></i>
                    </div>
                </div>
                <div class="card-body cardone">
                    <div class="cardivision">
                        <h5 class="card-title">Renault Twingo</h5>
                        <p class="card-text">Par exemple, pour 7jours de location</p>
                    </div>
                    <h5 class="card-title h5division">135$ </h5>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="cardOn">
                <div class="box">
                    <img class="imagebox" src="" alt="Card image cap" draggable="false">
                    <span class="overlay" routerLink="voitures"><i class="bi bi-plus-circle"></i></span>
                </div>
                <div class="card-body cardone">
                    <div class="cardivision">
                        <h5 class="card-title">Renault Twingo</h5>
                        <p class="card-text">Par exemple, pour 7jours de location</p>
                    </div>
                    <h5 class="card-title h5division">135$ </h5>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="cardOn">
                <div class="box">
                    <img class="imagebox" src="" alt="Card image cap" draggable="false">
                    <span class="overlay" routerLink="voitures"><i class="bi bi-plus-circle"></i></span>
                </div>

                <div class="card-body cardone">
                    <div class="cardivision">
                        <h5 class="card-title">Renault Twingo</h5>
                        <p class="card-text">Par exemple, pour 7jours de location</p>
                    </div>
                    <h5 class="card-title h5division">135$ </h5>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="cardOn">
                <div class="box">
                    <img class="imagebox" src="" alt="Card image cap" draggable="false">
                    <span class="overlay" routerLink="voitures"><i class="bi bi-plus-circle"></i></span>
                </div>
                <div class="card-body cardone">
                    <div class="cardivision">
                        <h5 class="card-title">Renault Twingo</h5>
                        <p class="card-text">Par exemple, pour 7jours de location</p>
                    </div>
                    <h5 class="card-title h5division">135$ </h5>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- fin 1 -->

<!-- modal -->
<div class="modal fade" id="optionsModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Options</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <!-- Barre de Recherche -->
                <div class="input-group mb-3">
                    <div class="divisionsear">
                        <input type="text" class="form-control" aria-label="Amount"
                            placeholder="Faite votre recherche ici">
                        <span class="spanserch"><i class="bi bi-search"></i></span>
                    </div>
                </div>

                <!-- Options de la Modal (à remplacer par vos options) -->
                <ul class="list-group m-2">
                    <li class="list-group-item">Praslin Island – Domestic airport (PRI)</li>
                    <li class="list-group-item">Praslin Island – Anse Boudin</li>
                    <li class="list-group-item">Praslin Island – Ferry terminal from Mahé
                    </li>
                </ul>
            </div>
            <div class="modal-footer">
            </div>
        </div>
    </div>
</div>

<!-- modal Ones -->
<div class="modal fade" id="optionsModalOnes" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Options</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <!-- Barre de Recherche -->
                <div class="input-group mb-3">
                    <div class="divisionsear">
                        <input type="text" class="form-control" aria-label="Amount"
                            placeholder="Faite votre recherche ici">
                        <span class="spanserch"><i class="bi bi-search"></i></span>
                    </div>
                </div>

                <!-- Options de la Modal (à remplacer par vos options) -->
                <ul class="list-group m-2">
                    <li class="list-group-item">Praslin Island – Domestic airport (PRI)</li>
                    <li class="list-group-item">Praslin Island – Anse Boudin</li>
                    <li class="list-group-item">Praslin Island – Ferry terminal from Mahé
                    </li>
                </ul>
            </div>
            <div class="modal-footer">
            </div>
        </div>
    </div>
</div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
/* css 1 */
.banner {
    background-image: url('../../../assets/locationImg/maki.png');
    height: 600px;
    background-position: center top;
    /* background-repeat: cover; */
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
}

.formulaires {
    margin-top: 40px;
    background-color: #fff;
    padding-bottom: 15px;
}

.welcome {
    width: 103.8%;
    background-color: #fdb714;
    display: flex;
    margin-left: -12px;
    padding-left: 10px;
}

.colFont {
    text-align: justify;
}

.one {
    width: 70%;
    height: auto;
    color: #fff;
    padding-top: 10px;
}

.two {
    width: 30%;
    height: 80px;
    text-align: center;
}

.two i {
    font-size: 3.5em;
    margin-top: -15px;
    color: #fff;
}

.one h1 {
    width: 100%;
    padding: 5px;
    font-size: 20px;
    padding-left: 20px;
    padding-top: 10px;
    font-weight: bolder;
}

.one p {
    width: 100%;
    height: auto;
    font-size: 13px;
    padding-left: 20px;
    margin-top: -8px;
    white-space: nowrap;
    /* background-color: red; */
}

.right,
.left {
    width: 50%;
    height: 330px;
    padding-left: 20px;
    padding-top: 15px;
}

.right {
    padding-right: 20px;
    padding-left: 10px;
}

input {
    width: 100%;
    height: 40px;
    padding-left: 10px;
}

h5 {
    width: 100%;
    height: 20px;
}

h5 span {
    width: 100%;
    height: 20px;
}

.h5vide {
    width: 100%;
    height: 20px;
    /* background-color: rgb(153, 93, 14); */
}

.h5videspan {
    width: 100%;
    height: 21px;
    /* background-color: darkorange; */
}

label {
    font-size: 12px;
    width: 100%;
    white-space: nowrap;
    /* height: 20px; */
    /* background-color: #6dace6; */
}


.boutton {
    width: 100%;
    height: 50px;
    margin-top: 40px;
    padding: 0px 20px;
}

.boutton button {
    width: 100%;
    height: 35px;
    border: none;
    background-color: #899e27;
    font-size: 12px;
    color: #fff;
}

.boutton button:hover {
    background-color: #74881c;
}

/* css 2 */
.head {
    padding-left: 60px;
    padding-top: 50px;
    background-color: #f5f5f5;
}

h1 i {
    font-size: 5rem;
    color: #74881c;
}

/* css 3 */
.gpsoffert {
    width: 98%;
    padding-top: 25px;
    background-color: #fff;
    border-radius: 10px;
}

.imagegps img {
    width: 100%;
    height: 220px;
}

.parOffert h1 {
    width: 100%;
    font-size: 20px;
}

.parOffert p {
    width: 100%;
    font-size: 14px;
    text-align: justify;
}

/* two */
.conduireThree,
.conduireTwo,
.conduire {
    padding: 20px 0px;
    margin-top: 20px;
    /* background-color: rgb(180, 70, 176); */
}

.tarif h1,
.quesdiv h1,
.marqueh1,
.conduireThree h1,
.conduireTwo h1,
.conduire h1 {
    /* background-color: #786333; */
    padding: 20px 0px;
    font-size: 20px;
}

.conduire img {
    width: 100%;
    max-width: 400px;
    /* Ajustez la largeur maximale en fonction de vos besoins */
    height: auto;
    float: right;
    margin-left: 20px;
    margin-bottom: 5px;
}

.conduireTwo img {
    width: 100%;
    max-width: 400px;
    /* Ajustez la largeur maximale en fonction de vos besoins */
    height: auto;
    float: left;
    margin-right: 20px;
    margin-bottom: 5px;
}

.conduireThree span,
.conduireTwo span,
.conduire span {
    font-size: 3em;
    /* Ajustez la taille de la police en fonction de vos besoins */
    color: aqua;
    float: left;
    margin-right: 10px;
    margin-top: -10px;
}

.conduireThree p,
.conduireTwo p,
.conduire p {
    text-align: justify;
}

/* two division */
.notrebureau,
.disponible,
.contactez,
.avantages {
    width: 100%;
    background-color: #fff;
    /* margin-left: 20px; */
    padding-right: 15px;
    margin-bottom: 40px;
    margin-top: 22px;
}

.notrebureau h1,
.contactez h1,
.avantages h1 {
    width: 100%;
    /* background-color: #fdb714; */
    padding: 10px 20px;
    font-size: 20px;
}

.divCont,
.divAv {
    width: 100%;
    /* background-color: dimgrey; */
    display: flex;
}

ul {
    margin-left: -20px;
}

li {
    list-style: none;
    margin-bottom: 30px;
}

.divAv .flexAv {
    width: 98%;
    /* display: block; */
}

/* soloina */
.paraIcns {
    /* background-color: #74881c; */
    display: flex;
    margin-left: 10px;
}

.paraIcns .span {
    /* background-color: aquamarine; */
    font-size: 1.2rem;
    padding: 10px;
    color: #fdb714;
}

.paraIcns .pspanPh {
    /* background-color: gold; */
    font-size: 1.5rem;
    padding-top: 5px;
    color: #6dace6;
}

/* soloina */
.divAv div span {
    padding: 6px 12px;
    display: inline-block;
    border-radius: 50%;
    border: 2px solid #fdb714;
    margin-right: 5px;
    /* background-color: darkcyan; */
}

.divAv li {
    /* background-color: darkkhaki; */
    margin: 0px;
    padding: 8px;
}

.divAv div span i {
    font-size: 1.2em;
    color: #fdb714;
}

.pic1 {
    padding-top: 11px;
}

.pic {
    padding-top: 5px;
}

.divAv div p {
    width: 100%;
    /* background-color: red; */
    font-size: 14px;
}

.disponible,
.contactez {
    margin-top: 20px;
}

.contactez .param {
    width: 80%;
    padding: 5px 20px;
    /* background-color: #899e27; */
    font-size: 14px;
}

.imageCon {
    width: 60%;
    height: 90px;
    /* background-color: #899e27; */
    margin: auto;
}

.notrebureau {
    padding-bottom: 10px;
    padding-top: 10px;
}

.notrebureau li {
    /* background-color: burlywood; */
    margin: 10px;
    font-size: 14px;
}

.margBur {
    padding-top: 20px;
}

.contactez {
    padding-bottom: 20px;
}

.imageCon img {
    width: 100%;
    height: 90px;

}

.disponible p {
    width: 80%;
    padding: 20px;
    /* background-color: #899e27; */
    font-size: 14px;
}

.disponible .dispIm {
    width: 75%;
    height: 300px;
    /* background-color: #74881c; */
    margin: auto;
}

.disponible .dispIm img {
    width: 100%;
    height: 300px;
}

.imfluid {
    border-radius: 5px;
}

/* fin */
.peg {
    /* height: 100px; */
    background-color: #fff;
    border-radius: 10px;
    opacity: 0.5;
    filter: grayscale(100%);
}

.custom-hover {
    opacity: 1;
    filter: none;
}

.peg img {
    width: 80%;
    height: 100px;
}

/*  */
.divisionliv {
    width: 100%;
    /* background-color: #175289; */
    background-color: rgb(58, 31, 4);
}

.validatebtn {
    width: 100%;
    height: 50px;
    border: none;
    background-color: rgb(32, 179, 32);
    color: #fff;
}

.selec {
    width: 100%;
    height: 50px;
    font-size: 16px;
}

.h1hot {
    font-size: 2em;
}

.p1hot {
    font-size: 14px;
}

/* anime */


img {
    width: 100%;
    height: 100%;
}



.notmarq {
    /* background-color: #74881c; */
    padding: 20px 0px;
    font-size: 20px;
}

.trustpilot {
    color: #6dace6;
}

.trustpilot1 {
    color: #4995dd;
}

/* animation voiture */
.box {
    position: relative;
    overflow: hidden;
}

.cardOn {
    background-color: #fff;
}

.imagebox {
    width: 100%;
    height: 200px;
}

.box:hover .imagebox {
    transform: scale(1.1);
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

.btnrondstyle {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 1px solid #333;
}

.active {
    background-color: #fdb714;
}

.img-fluid {
    cursor: pointer;
}

.coll,
.divcolpag {
    background-color: #fff;
    padding: 30px;
}

/* modal search */
.divisionsear {
    position: relative;
    width: 100%;
}

.spanserch {
    font-size: 1rem;
    position: absolute;
    top: 0;
    left: 85%;
    width: 15%;
    height: 100%;
    background-color: #899e27;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.iconpluschange {
    font-size: 1.2rem;
    /* background-color: #fdb714; */
    padding: 8px;
    color: #4995dd;
}

/*  */
.divisionseardate {
    position: relative;
    margin: 15px 0px;
    top: -15px;
    bottom: 0px;
}

.spandate {
    font-size: 1.2rem;
    position: absolute;
    z-index: 5;
    top: 0;
    left: 85%;
    width: 15%;
    height: 100%;
    background-color: #fdb714;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
}


.formcont::-webkit-calendar-picker-indicator {
    position: relative;
    z-index: 20;
    cursor: pointer;
    opacity: 0;
}

h5 span {
    height: 50px;
}

</style>