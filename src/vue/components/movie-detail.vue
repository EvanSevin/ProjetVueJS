<template>
  <div class="card">
    <div class="card-block">
      <h4 class="card-title"> {{ movie.title }}</h4>
      <h6 class="card-subtitle mb-2 text-muted">{{ movie.releaseDate }}</h6>
      <p class="card-text">{{ movie.langue }}</p>
      <p class="card-text">realisateur : {{movie.realisateur.nom}} {{movie.realisateur.prenom}}</p>
      <router-link class="btn btn-info" :to="{ name: 'edit', params: { id: id }}">edit</router-link>
      <button type="button" @click="btnRemoveMovie"class="btn btn-danger">Remove</button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      id :  0,
      movie : {}
    }
  },
    methods: {
        btnRemoveMovie(){
          this.$store.dispatch('removeMovieToAPI',this.movie);
          this.$router.push("/");
        }
    },
    mounted(){
      this.id = this.$route.params.id;
      this.movie = this.$store.state.movies[this.id];
    }
  }
</script>
