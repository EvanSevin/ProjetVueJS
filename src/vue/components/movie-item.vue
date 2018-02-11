<template>
    <div>
      <router-link class="list-group-item" :to="{ name: 'show', params: { id: movie.id }}">{{ movie.title }}</router-link>
    </div>
</template>

<script>
export default {
    name: 'movie-item',
    props: ["movie"],
  }
</script>
