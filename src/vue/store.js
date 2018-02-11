import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios';
Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        movies: [],
        movie: {}
    },
    mutations: {
      addMovie(state, movie) {

        movie.id = state.movies.length;
        state.movies.push(movie);
      },
      removeMovie(state, movies) {
          state.movies = movies;
      },
      updateMovie(state, movies) {
        state.movies = movies;
      },
      getMovie(state,id) {
        state.movies.forEach(function(element){
          if(element.id == id){
            state.movie = element
          }
        });
      },
      getAllMovies(state,movies) {
        state.movies = movies
      }
    },
    actions: {
      addMovieToAPI(context,movie) {
        axios.post('/api/movies',movie)
        .then(function (response) {
          movie.id = JSON.parse(response.request.response).id
          context.commit('addMovie',movie);
        })
        .catch(function (error) {
          console.log(error);
        });

      },
      removeMovieToAPI(context,movie) {
        axios.delete('/api/movies/'+movie.id,movie)
        .then(function (response) {
          context.commit('removeMovie', JSON.parse(response.request.response));
        })
        .catch(function (error) {
          console.log(error);
        });
      },
      updateMovieToAPI(context,movie) {
        axios.post('/api/movies/'+movie.id,movie)
        .then(function (response) {
          context.commit('updateMovie', JSON.parse(response.request.response));
        })
        .catch(function (error) {
          console.log(error);
        });
      },
      getMovieById(context,id){
        context.commit('getMovie',id);
      },
      getMovies(context){
        axios.get('/api/movies/')
        .then(function (response) {
          context.commit('getAllMovies',JSON.parse(response.request.response));
        })
        .catch(function (error) {
          console.log(error);
        });
      }
    }
})
