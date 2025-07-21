<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="min-h-screen bg-background">
    <div class="relative flex min-h-screen flex-col">
      <div class="flex-1">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-feature-settings:
    'rlig' 1,
    'calt' 1;
}
</style>
