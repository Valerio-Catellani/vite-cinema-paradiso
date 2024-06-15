import { createRouter, createWebHistory } from 'vue-router';
import HomePageComponent from './pages/HomePageComponent.vue'
import MoviesListComponent from './pages/MoviesListComponent.vue';
import ProjectionsListComponent from './pages/ProjectionsListComponent.vue';
import MovieDetailsComponent from './pages/MovieDetailsComponent.vue';
import ProjectionDetailsComponent from './pages/ProjectionDetailsComponent.vue';
import RoomDetailsComponent from './pages/RoomDetailsComponent.vue';
import NotFoundComponent from './pages/NotFoundComponent.vue';
import RoomsListComponent from './pages/RoomsListComponent.vue';
import ContactComponent from './pages/ContactComponent.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', //path della rotta
            name: 'home', //nome della rotta
            meta: {
                visible: true
            },
            component: HomePageComponent
        },
        {
            path: '/movies',
            name: 'movies',
            meta: {
                visible: true
            },
            component: MoviesListComponent
        },
        {
            path: '/projections',
            name: 'projections',
            meta: {
                visible: true
            },
            component: ProjectionsListComponent
        },
        {
            path: '/rooms',
            name: 'rooms',
            meta: {
                visible: true
            },
            component: RoomsListComponent
        },
        {
            path: '/projections/:id',
            name: 'projections-details',
            meta: {
                visible: false
            },
            component: ProjectionDetailsComponent
        },
        {
            path: '/movies/:slug',
            name: 'movie-details',
            meta: {
                visible: false
            },
            component: MovieDetailsComponent
        },
        {
            path: '/rooms/:id',
            name: 'rooms-details',
            meta: {
                visible: false
            },
            component: RoomDetailsComponent
        },
        {
            path: '/contacts',
            name: 'contacts',
            meta: {
                visible: true
            },
            component: ContactComponent
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            meta: {
                visible: false
            },
            component: NotFoundComponent
        } 
    ]
});
export { router };