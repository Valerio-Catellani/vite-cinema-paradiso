<template>
  <div>
    <div class="section section-carusel sepia-gradient">
      <div class="container">
        <TitleComponent></TitleComponent>
        <div class="row">
          <div class="col-12 col-lg-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            quasi necessitatibus id laboriosam vitae. Accusamus quos soluta rerum
            illum repellat sit distinctio error ipsam incidunt vel facilis alias,
            necessitatibus aspernatur velit unde doloremque quae a veniam eaque
            expedita, corrupti possimus adipisci numquam nihil! Totam, earum.
            Repudiandae neque reiciendis hic adipisci officia laudantium. Tenetur
            veniam ratione error et sint nihil fugit culpa, labore recusandae nam,
            dolores, officia obcaecati nesciunt deleniti sequi nostrum! Libero
            dicta
          </div>
          <div class="col-12 col-lg-7">
            <!-- <MyCarusel /> -->
          </div>
        </div>
      </div>
    </div>
    <div class="fixed-background">
      <div class="container info-container d-flex flex-column gap-5">
        <div
          class="d-flex flex-column flex-lg-row info-animate w-100 rounded-5 bg-light my-5 p-3 gradient-white-top shadow-white justify-content-center align-items-center">
          <div class="img-container rounded-circle overflow-hidden me-4">
            <img class="img-fluid" src="/public/images/wrapper_paradiso_2.jpeg" alt="logo" />
          </div>
          <div class="p-2">
            <h3>About us</h3>
            <P>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Provident dolores iste, reiciendis vel maxime optio quos eaque,
              voluptatum nostrum magnam non numquam hic! Cumque quam temporibus,
              voluptates tempore asperiores consequuntur alias pariatur fuga
              numquam repellat sint, voluptatum laboriosam exercitationem fugit
              eius. Enim inventore ullam, blanditiis harum assumenda
              consequuntur placeat quos adipisci eius deleniti quasi! Ipsam,
              doloribus! Corrupti dicta soluta exercitationem blanditiis omnis,
              nemo possimus qui perferendis delectus similique hic in ipsum sed
              quas animi quod tenetur distinctio? Omnis doloribus voluptatibus
              labore, ab modi atque deserunt ullam veniam velit soluta molestias
              placeat cumque in iure quis saepe aliquid, ipsum, explicabo odio.
            </P>
          </div>
        </div>
        <div
          class="d-flex w-100 flex-column flex-lg-row info-animate rounded-5 bg-light my-5 p-3 gradient-white-top shadow-white justify-content-center align-items-center align-self-end">
          <div class="img-container rounded-circle overflow-hidden me-4 order-lg-2">
            <img class="img-fluid" src="/public/images/wrapper_paradiso_2.jpeg" alt="logo" />
          </div>
          <div class="order-lg-1 p-2">
            <h3>I Nostri Orari</h3>
            <P>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Provident dolores iste, reiciendis vel maxime optio quos eaque,
              voluptatum nostrum magnam non numquam hic! Cumque quam temporibus,
              voluptates tempore asperiores consequuntur alias pariatur fuga
              numquam repellat sint, voluptatum laboriosam exercitationem fugit
              eius. Enim inventore ullam, blanditiis harum assumenda
              consequuntur placeat quos adipisci eius deleniti quasi! Ipsam,
              doloribus! Corrupti dicta soluta exercitationem blanditiis omnis,
              nemo possimus qui perferendis delectus similique hic in ipsum sed
              quas animi quod tenetur distinctio? Omnis doloribus voluptatibus
              labore, ab modi atque deserunt ullam veniam velit soluta molestias
              placeat cumque in iure quis saepe aliquid, ipsum, explicabo odio.
            </P>
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