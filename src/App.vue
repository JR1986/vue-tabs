<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Tabs from './components/Tabs.vue';
</script>

<template>
      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
      <Tabs />
</template>

<style>
ul {
  list-style-type: none;
}

li {
  padding: 16px;
}
</style>
