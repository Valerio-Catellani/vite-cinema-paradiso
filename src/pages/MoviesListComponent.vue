<template>
    <div>
        MoviesListComponent
        <!-- <select name="" id="" class="form-select" v-model="date">
            <option value="">tutti i film</option>
            <option :value="today">oggi</option>
            <option :value="tomorrow">domani</option>
            <option :value="dayAfterTomorrow">dopodomani</option>
        </select> -->
        <input type="date" v-model="date" @change="getFilmFromDate()">
        <div class="col-12 col-lg-6" v-for="movie in store.api_data.movies.allMovies.data" :key="movie.id">
            <CardComponent :item="movie" />
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
            // today: '',
            // params: {
            //     date: this.date
            // }
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
    }
}

</script>

<style lang="scss" scoped></style>