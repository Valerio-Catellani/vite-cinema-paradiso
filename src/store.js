import { reactive } from "vue";
import axios from "axios";
import { router } from "./router.js";

export const store = reactive({
   apiBaseUrl: "http://127.0.0.1:8000/api",
   imgBasePath: "http://127.0.0.1:8000/storage/",


   api_data: {
      movies: {
         allMovies: {
            data: [],
            infoPagination: []
         },
         singleMovie: {}
      },
      rooms: {
         allRooms: {
            data: [],
            infoPagination: []
         },
         singleRoom: {}
      },
      reviews: {
         allReviews: {
            data: [],
            infoPagination: []
         },
         singleReview: {}
      },
      projections: {
         allProjections: {
            data: [],
            infoPagination: []
         },
         singleProjection: {}
      },
      slots: {
         allSlots: {
            data: [],
            infoPagination: []
         },
         singleSlot: {}
      },
   },


   animation: {
      changePage: true,
   },

   params: {

   },

   methods: {
      // params = { page: 1, type: '' } da inserire dnetro alla funzione getMovies
      //& elements =  'movies', 'rooms', 'reviews', 'projections', 'slots' }
      getAllElements(element, params = {}) {

         axios.get(`${store.apiBaseUrl}/${element}`, { params }).then((response) => {
            switch (element) {
               case 'movies': {
                  store.api_data.movies.allMovies.data = response.data.results.data;
                  store.api_data.movies.allMovies.infoPagination = response.data.results;
                  break;
               }
               case 'rooms': {
                  store.api_data.rooms.allRooms.data = response.data.results.data;
                  store.api_data.rooms.allRooms.infoPagination = response.data.results;
                  break;
               }
               case 'reviews': {
                  store.api_data.reviews.allReviews.data = response.data.results.data;
                  store.api_data.reviews.allReviews.infoPagination = response.data.results;
                  break;
               }
               case 'projections': {
                  store.api_data.projections.allProjections.data = response.data.results.data;
                  store.api_data.projections.allProjections.infoPagination = response.data.results;
                  break;
               }
               case 'slots': {
                  store.api_data.slots.allSlots.data = response.data.results.data;
                  store.api_data.slots.allSlots.infoPagination = response.data.results;
                  break;
               }
            }
            console.log('all api_data', store.api_data);
         }).catch((error) => {
            console.log(error);
            router.push({ name: 'not-found' })
         })
      },

      getSingleMovie(slug) {
         axios.get(`${store.apiBaseUrl}/movies/${slug}`).then((response) => {
            store.api_data.movies.singleMovie = response.data.results;
            console.log(response.data.results);
         })
      },

      getSingleRoom(id) {
         axios.get(`${store.apiBaseUrl}/movies/${id}`).then((response) => {
            store.api_data.singleRoom = response.data.results;
         })
      },

      getFullMovieProjectionsDetails(slug) {
         console.log(slug);
         axios.get(`${store.apiBaseUrl}/projections`, {
            params: {
               movieSlug: slug
            }
         }).then((response) => {
            store.api_data.movies.singleMovie = response.data.results.movie;
            store.api_data.movies.singleMovie.projections = response.data.results.projections;
            console.log(store.api_data.movies.singleMovie);
            //store.api_data.movies.singleMovie = response.data.results;
            console.log(response.data.results);
         })
      },

      getAllProjections() {
         axios.get(`${store.apiBaseUrl}/slots`).then((response) => {
            console.log(response);
            //   store.api_data.AllProjects.data = response.data.results.data;
            //   store.api_data.AllProjects.infoPagination = response.data.results;
         }).catch((error) => {
            console.log(error);
            router.push({ name: 'not-found' })
         })
      },



   },



});