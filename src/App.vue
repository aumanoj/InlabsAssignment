<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink to="/">QuestionA</RouterLink>
    <RouterLink to="/questionB">QuestionB</RouterLink>
    <RouterLink to="/questionC">QuestionC</RouterLink>
  </nav>
  <RouterView />
</template>

<style scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
}
</style>
