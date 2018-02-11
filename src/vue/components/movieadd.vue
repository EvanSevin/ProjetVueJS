<template>
  <div>
    <div class="input-group input-group-sm mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="inputGroup-sizing-sm">Titre</span>
      </div>
      <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" v-model="title">
    </div>
    <div class="input-group input-group-sm mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="inputGroup-sizing-sm">Release Date</span>
      </div>
      <input type="date" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" v-model="releaseDate">
    </div>
    <div class="input-group input-group-sm mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="inputGroup-sizing-sm">Langue</span>
      </div>
      <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" v-model="langue">
    </div>
    <div class="input-group input-group-sm mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="inputGroup-sizing-sm">Genre</span>
      </div>
      <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" v-model="genre">
    </div>
    <div class="input-group input-group-sm mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="inputGroup-sizing-sm">Realisateur</span>
      </div>
      <input type="text" class="form-control" aria-label="Small" placeholder="nom" aria-describedby="inputGroup-sizing-sm" v-model="nom">
      <input type="text" class="form-control" aria-label="Small" placeholder="prenom" aria-describedby="inputGroup-sizing-sm" v-model="prenom">
      <input type="text" class="form-control" aria-label="Small" placeholder="nationalité" aria-describedby="inputGroup-sizing-sm" v-model="nationalite">
      <input type="date" class="form-control" aria-label="Small" placeholder="date de naissance" aria-describedby="inputGroup-sizing-sm" v-model="date">
    </div>
    <button type="button" class="btn btn-primary" @click="btnAddMovie">ok</button>
  </div>
</template>

<script>
export default {
    data(){
      return {
          title : "",
          releaseDate : "",
          langue : "",
          genre : "",
          nom :  "",
          prenom :  "",
          nationalite :  "",
          date :  ""
      }
    },
    methods: {
      btnAddMovie() {
        var newmovie = {
          id : this.$store.state.movies.length,
          title : this.title,
          releaseDate : this.releaseDate,
          langue : this.langue,
          genre : this.genre,
          realisateur : {
            nom : this.nom,
            prenom : this.prenom,
            nationalite : this.nationalite,
            date : this.date
          }
        }
        this.$store.dispatch('addMovieToAPI',newmovie);
        this.$router.push("/");
      }
  }
}
</script>
