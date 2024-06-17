<template>
    <router-link :to="`/movies/${props.slug}`">

        <div class="movie-component d-flex flex-column ">
            <div class="ciack-1 shadow">
            </div>
            <div class="ciack-2 text-white d-flex align-items-end border-5 overflow-hidden shadow rounded-bottom-5">
                <div class="img-container hype-h-90x100 position-relative">
                    <div class="info h-100 pt-2 w-100 position-absolute top-0 d-flex flex-column">
                        <h2 class="text-center hype-text-shadow ">{{
                            props.title
                        }}
                        </h2>
                        <div class="rating d-flex justify-content-center gap-1"><i
                                v-for="index in Math.floor(props.avarage_rating)" :key="index"
                                class="fa-solid fa-star hype-text-shadow text-warning"></i>
                        </div>
                        <div class="mt-auto px-2 py-2">
                            <h5 class="info-lang">Lingua Originale: {{ props.original_language }}</h5>
                            <h6 class="info-link text-decoration-underline">Visualizza tutti i dettagli relativi alle
                                proiezioni</h6>
                        </div>

                    </div>

                    <img class="img-fluid h-100" :src="props.backdrop_path">
                </div>

            </div>
        </div>
    </router-link>


</template>

<script>
export default {

    name: 'MovieCardComponent',

    props: ['props'],

    data() {
        return {
        }
    },

    methods: {
        getDayOfWeek(date) {
            console.log(date);
            const daysOfWeek = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];
            const dateObj = new Date(date);
            // Ottenere il giorno della settimana come numero (0 per Domenica, 1 per Lunedì, ..., 6 per Sabato)
            const dayIndex = dateObj.getDay();
            console.log(dayIndex);
            // Ottenere il nome del giorno della settimana usando l'array definito sopra
            return daysOfWeek[dayIndex];
        }
    },

    mounted() {
    }
}
</script>

<style lang="scss" scoped>
.movie-component {
    margin-top: 60px;
    transform: rotate(-15deg);
    transition: transform 0.5s ease-in-out;

    &:hover {
        transform: rotate(0deg);
        transition: transform 0.5s ease-in-out;

        .ciack-1 {
            transform: rotate(0deg) translateY(0);
            transition-delay: 0.6s;
        }

        .ciack-2 {

            .rating,
            .info-lang,
            .info-link {
                opacity: 1;
                transition: opacity 0.5s ease-in-out;
            }

            .rating {
                transition-delay: 0.6s;
            }

            .info-lang {
                transition-delay: 0.8s;
            }

            .info-link {
                transition-delay: 1s;
            }
        }
    }

    .ciack-1 {
        height: 30px;
        width: 450px;
        background-image: url('../images/movie-component/ciack-2.png');
        background-size: cover;
        transform: rotate(-5deg) translateY(-20px);

    }

    .ciack-2 {
        height: 300px;
        width: 450px;
        background-image: url('../images/movie-component/ciack-1.png');
        background-size: cover;

        .rating,
        .info-lang,
        .info-link {
            opacity: 0;
        }
    }
}
</style>