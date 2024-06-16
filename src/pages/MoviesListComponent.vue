<template>
    <div class=" sepia-gradient">
        <div class="container py-5">
            <input type="date" v-model="date" @change="getFilmFromDate()">
            <div class="movie-list container">
                <div class="row align-items-center">
                    <div class="col col-12 col-xxl-6 py-5 d-flex justify-content-center"
                        v-for="movie in store.api_data.movies.allMovies.data" :key="movie.id">
                        <MovieCardComponent :props="movie">
                        </MovieCardComponent>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store';
import MovieCardComponent from '../components/MovieCardComponent.vue';
export default {

    name: 'MoviesListComponent',
    components: {
        MovieCardComponent,

    },
    data() {
        return {
            store,
            date: '',
            currentDate: '',
            nextWeekDate: '',

        }
    },
    methods: {
        getFilmFromDate() {
            this.store.methods.getAllElements('movies', { date: this.date });
        },
    },
    created() {
        const today = new Date(); // Creazione di un oggetto Date con la data e l'ora attuali
        this.currentDate = today.toISOString().slice(0, 10);
        const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000); // Aggiungi 7 giorni in millisecondi
        this.nextWeekDate = nextWeek.toISOString().slice(0, 10); // Ottieni la data tra una settimana nel formato 'YYYY-MM-DD'
        // this.store.methods.getAllElements('movies');
        console.log(this.currentDate, this.nextWeekDate);
        this.store.methods.getAllElements('movies', { currentDate: this.currentDate, nextWeekDate: this.nextWeekDate });
    },

}

</script>

<style lang="scss" scoped></style>