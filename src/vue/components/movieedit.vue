<template>
  <div>
    <div class="input-group input-group-sm mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="inputGroup-sizing-sm">Titre</span>
      </div>
      <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" v-model="movie.title">
    </div>
    <div class="input-group input-group-sm mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="inputGroup-sizing-sm">Release Date</span>
      </div>
      <input type="date" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" v-model="movie.releaseDate">
    </div>
    <div class="input-group input-group-sm mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="inputGroup-sizing-sm">Langue</span>
      </div>
      <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" v-model="movie.langue">
    </div>
    <div class="input-group input-group-sm mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="inputGroup-sizing-sm">Genre</span>
      </div>
      <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" v-model="movie.genre">
    </div>
    <div class="input-group input-group-sm mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="inputGroup-sizing-sm">Realisateur</span>
      </div>
      <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" v-model="movie.realisateur.nom">
      <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" v-model="movie.realisateur.prenom">
      <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" v-model="movie.realisateur.nationalite">
      <input type="date" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" v-model="movie.realisateur.date">
    </div>
    <button type="button" class="btn btn-primary" @click="btnAddMovie">modif</button>
  </div>
</template>

<script>
export default {
    data(){
      return {
          id : 0
        }
    },
    mounted(){
      this.id = this.$route.params.id;
      this.$store.dispatch('getMovieById',this.id);

    },
    computed: {
      movie(){
        return this.$store.state.movie;
      }
    },
    methods: {
      btnAddMovie() {
        var movie ={
          id : this.movie.title,
          title : this.movie.title,
          releaseDate : this.movie.releaseDate,
          langue : this.movie.langue,
          genre : this.movie.genre,
          realisateur : {
            nom : this.movie.nom,
            prenom : this.movie.prenom,
            nationalite : this.movie.nationalite,
            date : this.movie.date
          }
        }
        this.$store.dispatch('updateMovieToAPI',movie);
        this.$router.push("/");

      }
  }
}
</script>
