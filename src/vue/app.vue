<template>
    <div>
        <mynav></mynav>
        <input type="text" v-model="searchMovie">
        <div class="list-group">
          <movieitem v-for="movie in movies" v-bind:movie="movie"></movieitem>
        </div>
        <button type="button"  class="btn btn-primary btn-lg" @click="btnAddMovie">Add</button>
    </div>
</template>

<script>
import mynav from './components/my-nav.vue'
import MovieEditComponent from './components/movieedit.vue'
import movieitem from './components/movie-item.vue'

export default {
    data() {
      return {
        searchMovie : "",
        selectedMovies : {}

      }
    },
    components: {
        movieitem,
        mynav
    },
    computed : {
      movies(){
        if(this.searchMovie !== "") {
          return this.$store.state.movies .filter(x => x.title.indexOf(this.searchMovie) >= 0);
        } else {
          return this.$store.state.movies;
        }

      }
    },
    methods: {
        btnAddMovie() {
            this.$router.push("/add");
        },
    }
}
</script>

<style>
#msg {
    color: red;
}
</style>
