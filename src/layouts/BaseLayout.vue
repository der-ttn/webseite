<template>
  <div class="flex relative flex-col min-h-screen">
    <!-- Header -->
    <AppHeader />

    <!-- Main Content -->
    <main class="flex-1 py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <slot />
      </div>
    </main>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>
