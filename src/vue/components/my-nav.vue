<template>
  <ul class="nav justify-content-end">
    <li class="nav-item">
       <router-link class="nav-link" :to="{ path: '/'}" replace>List</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" :to="{ path: '/add'}" replace>Add</router-link>
    </li>
  </ul>
</template>

<script>
export default {
    name: 'my-nav'
  }
</script>
