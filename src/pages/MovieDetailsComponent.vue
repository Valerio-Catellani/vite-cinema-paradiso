<template>
    <div>
        <jumbo-component :img_name="store.api_data.movies.singleMovie.backdrop_path"></jumbo-component>
        <div class="container">
            <h1 class="text-center display-4 fw-bold text-white hype-text-shadow">{{
                store.api_data.movies.singleMovie.title }}</h1>
            <h2 class="text-center"
                v-if="store.api_data.movies.singleMovie && store.api_data.movies.singleMovie.avarage_rating">
                <i v-for="index in (Math.floor(store.api_data.movies.singleMovie.avarage_rating))" :key="index"
                    class="fa-solid fa-star hype-text-shadow text-warning"></i>
                <i v-for="index in (10 - Math.floor(store.api_data.movies.singleMovie.avarage_rating))" :key="index"
                    class="fa-solid fa-star hype-text-shadow text-white"></i>
            </h2>
            <div class="container">
                <div class="row mt-5">
                    <div class=" col-12 col-xl-5">
                        <img class="img-fluid w-100" :src="store.api_data.movies.singleMovie.poster_path"
                            :alt="store.api_data.movies.singleMovie.title">
                    </div>
                    <div class="col-12 col-xl-7">
                        <h3>Trama</h3>
                        <p class="overview py-3 pe-3">{{ store.api_data.movies.singleMovie.overview }}

                        </p>
                        <h3>Lingua</h3>
                        <p class="overview pe-3">{{ store.api_data.movies.singleMovie.original_language }}

                        </p>

                    </div>
                    <div class="col-12">
                        <div class="accordion" id="review-accordion">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Tutte Le Review
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show"
                                    data-bs-parent="#accordionExample">


                                    <div v-for="review in store.api_data.movies.singleMovie.reviews" :key="review.id"
                                        class="container rounded-2 hype-shadow-white p-5 container-table text-white mb-2">
                                        <h4>{{ review.author }}</h4>
                                        <p>{{ }}</p>
                                        <h6>{{ }}</h6>
                                        <h6>{{ }}</h6>
                                    </div>



                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store';
import JumboComponent from '../components/JumboComponent.vue';
export default {
    name: 'MovieDetailsComponent',
    data() {
        return {
            store,
        }
    },
    components: {
        JumboComponent
    },

    created() {
        //store.methods.getSingleMovie(this.$route.params.slug);
        store.methods.getFullMovieProjectionsDetails(this.$route.params.slug);
    }
}

</script>

<style lang="scss" scoped>
.overview {
    text-align: justify;
    max-height: 500px;
    overflow-y: auto;
}
</style>