import Vue from 'vue' //librairie "vue" dans node_modules
import VueRouter from 'vue-router'
import app from './app.vue' //fichier app.vue local
import movieedit from './components/movieedit.vue' //fichier app.vue local
import movieadd from './components/movieadd.vue'
import moviedetail from './components/movie-detail.vue'
import {store} from './store'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        components: {
            default: app,
        }
    },
    {
        path: '/add',
        components: {
            default: movieadd,
        }
    },
    {
        name: 'edit',
        path: '/edit/:id',
        components: {
            default: movieedit,
        },
    },
    {
        name: 'show',
        path: '/show/:id',
        components: {
            default: moviedetail,
        },
    }

]

const router = new VueRouter({
    routes
})

new Vue({
    el: '#app',
    router: router,
    store,
    created(){
      this.$store.dispatch('getMovies')
    }

})
