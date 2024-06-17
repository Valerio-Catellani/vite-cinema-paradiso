import './assets/styles/general.scss'

import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { router } from './router.js'

createApp(App).use(router).mount('#app')
