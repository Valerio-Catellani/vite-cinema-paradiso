<template>
  <div>
    <div class="section section-carusel sepia-gradient">
      <div class="container">
        <TitleComponent></TitleComponent>
        <div class="row">
          <div class="col-12 col-lg-5 pb-5 pb-lg-1">
            <h3>Storia e Gestione</h3>
            <p class="fs-5">Cinema Paradiso è un vero e proprio gioiello nel panorama dei cinema di Roma, conosciuto e
              apprezzato sia
              dai residenti che dai turisti. Inaugurato nel 1950, questo cinema ha una lunga storia di passione per il
              cinema e di impegno nella promozione della cultura cinematografica. Situato in un elegante edificio
              storico
              nel cuore della città, il cinema è stato recentemente rinnovato per integrare le più moderne tecnologie
              audiovisive, pur mantenendo il fascino e l'eleganza del suo design originale. Il Cinema Paradiso è
              orgogliosamente gestito dalla proprietaria Bianca Sala, una figura rinomata nel panorama culturale di
              Roma.
              Con una forte passione per il cinema e un impegno costante nella promozione della cultura cinematografica,
              Bianca ha trasformato Cinema Paradiso in un punto di riferimento per gli amanti del cinema di tutte le
              età.</p>
          </div>
          <div class="col-12 col-lg-7 pt-5 pt-lg-1 d-flex justify-content-center">
            <MyCarusel />
          </div>
        </div>
      </div>
    </div>
    <div class="fixed-background">
      <div class="container info-container d-flex flex-column gap-5">
        <div
          class="d-flex flex-column flex-lg-row info-animate w-100 rounded-5 bg-light my-5 p-3  justify-content-center align-items-center sepia-gradient">
          <div class="img-container rounded-circle overflow-hidden me-4">
            <img class="img-fluid" src="/images/salarossa.jpg" alt="logo" />
          </div>
          <div class="p-2">
            <h3>Architerrettura e Design</h3>
            <p class="fs-5">
              L'architettura di Cinema Paradiso combina elementi classici e moderni. La facciata esterna è
              caratterizzata da elementi in stile Art Deco, con insegne al neon che evocano la gloriosa epoca d'oro del
              cinema. All'interno, gli spettatori vengono accolti da un'ampia hall con soffitti alti, decorazioni
              eleganti e dettagli in marmo, creando un'atmosfera di lusso e comfort.
            </p>
          </div>
        </div>
        <div
          class="d-flex w-100 flex-column flex-lg-row info-animate rounded-5 bg-light my-5 p-3 justify-content-center align-items-center align-self-end sepia-gradient">
          <div class="img-container rounded-circle overflow-hidden me-4 order-lg-2">
            <img class="img-fluid" src="/images/cinema.jpg" alt="logo" />
          </div>
          <div class="order-lg-1 p-2">
            <h3>Atmosfera e Comfort</h3>
            <p class="fs-5">
              L'atmosfera di Cinema Paradiso è intima e accogliente. Le sale di proiezione sono progettate per offrire
              il massimo del comfort, con sedili ergonomici, ampi spazi per le gambe e una disposizione che garantisce
              una visione perfetta da qualsiasi angolo. Le luci soffuse e i toni caldi delle decorazioni interne
              contribuiscono a creare un ambiente rilassante e piacevole.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../store";
import MyCarusel from "../components/MyCarusel.vue";
import TitleComponent from "../components/TitleComponent.vue";

export default {
  name: "HomePageComponent",
  components: {
    MyCarusel,
    TitleComponent,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

.section {
  background-color: white;
  padding: 20px;
}

.fixed-background {
  background-image: url('public/images/facciata_paradiso_(2).jpeg');
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
}

.section-carusel {
  padding: 50px 10px 30px 10px;
}

.img-container {
  min-width: 300px;
  width: 300px;
  min-height: 300px;
  height: 300px;
}

.info-container {
  padding: 5rem 10px;

  .info-animate {
    @media screen and (min-width: 992px) {
      width: 75% !important;
      ;
    }
  }
}
</style>