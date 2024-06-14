<template>
    <div>
        <section class="section" id="card-movie">

        </section>
        <div class="fixed-background">

        </div>
        <section class="section" id="cinema-par-info">

        </section>

    </div>
</template>

<script>
import { store } from '../store';
    export default {
        name: 'HomePageComponent',
    }
</script>

<style lang="scss" scoped>
.section {
  background-color: white;
  height: 700px;
  padding: 20px;
}
.fixed-background {
  background-image: url('public/images/wrapper_paradiso_2.jpeg');
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  height: 500px; 
}
</style>