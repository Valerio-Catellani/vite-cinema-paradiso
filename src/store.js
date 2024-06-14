import { reactive } from "vue";
import axios from "axios";
import { router } from "./router.js";

export const store = reactive({
   apiBaseUrl: "http://127.0.0.1:8000/api",
   imgBasePath: "http://127.0.0.1:8000/storage/",
   movies: [],





   methods: {
      // params = { page: 1, type: '' } da inserire dnetro alla funzione getMovies
      //
      getAllMovies() {
         axios.get(`${store.apiBaseUrl}/movies`).then((response) => {
            console.log(response.data.results.data);
            //   store.api_data.AllProjects.data = response.data.results.data;
            //   store.api_data.AllProjects.infoPagination = response.data.results;
         }).catch((error) => {
            console.log(error);
            router.push({ name: 'not-found' })
         })
      },
      getTypes() {
         axios.get(`${store.apiBaseUrl}/types`).then((response) => {
            store.api_data.allTypes.data = response.data.results;
         }).catch((error) => {
            console.log(error);
            router.push({ name: 'not-found' })
         })
      },
      getSingleProject(slug) {
         axios.get(`${store.apiBaseUrl}/projects/${slug}`).then((response) => {
            store.api_data.singleProject = response.data.results;
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