<template>
    <div>
        MoviesListComponent
       
         <input type="date" v-model="date" @change="getFilmFromDate()">
        <div class="col-12 col-lg-6" v-for="movie in store.api_data.movies.allMovies.data" :key="movie.id">
            <CardComponent :item="movie" />
        </div> 

        <div class="card" >
            <img src="/public/images/right-part.jpg" class="card-img-top"
                alt="" />
            <div class="card-body">
                <h5 class="card-title"></h5>
                <h6 v-if="item.alias"></h6>
                <p class="card-text">
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store';
import CardComponent from '../components/CardComponent.vue';
export default {

    name: 'MoviesListComponent',
    components: {

        CardComponent
    },
    data() {
        return {
            store,
            date: '',
           
        }
    },
    methods: {
        getFilmFromDate() {
            this.store.methods.getAllElements('movies', { date: this.date });
        }
    },
    created() {
        this.store.methods.getAllElements('movies');
        this.store.methods.getAllElements('projections'); 
        this.store.methods.getAllElements('movies', { date: this.date });
    }
}

</script>

<style lang="scss" scoped></style>