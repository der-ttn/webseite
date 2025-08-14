<template>
  <BaseLayout>
    <!-- Hero Section -->
    <div class="space-y-8 text-center">
      <div class="space-y-6">
        <h1 class="text-4xl md:text-6xl font-light leading-tight">
          {{ $t('home.title') }}<br />
          <span class="text-3xl md:text-5xl">{{ $t('home.subtitle') }}</span>
        </h1>
      </div>

      <!-- Description Section -->
      <div class="space-y-4">
        <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
          {{ $t('home.description') }}
        </p>
      </div>
    </div>
  </BaseLayout>
</template>

<script setup lang="ts">
import BaseLayout from '@/layouts/BaseLayout.vue'
</script>
