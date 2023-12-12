<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import Header from './components/Header.vue'
</script>

<template>
  <div id="app">
    <Header /> 

    <main>
      <!-- The router view will render the content of each page -->
      <router-view></router-view>
    </main>

    <!-- add footer when design ready -->
  </div>
</template>

<script>
  export default {
    components: {
      Header // Register Header component
    },
    // App.vue component logic here if needed
  };
</script>

