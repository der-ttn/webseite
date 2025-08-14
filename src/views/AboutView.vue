<template>
  <BaseLayout>
    <!-- Header Section -->
    <div class="space-y-8 mb-12 text-center">
      <div class="space-y-6">
        <h1 class="text-4xl font-bold">{{ $t('about.title') }}</h1>
        <p class="text-xl text-muted-foreground max-w-3xl mx-auto">
          {{ $t('about.subtitle') }}
        </p>
      </div>
    </div>

    <!-- Content Sections -->
    <div class="space-y-12 max-w-4xl mx-auto">
      <!-- Mission Section -->
      <section class="space-y-6 text-center">
        <h2 class="text-2xl font-semibold">{{ $t('about.mission.title') }}</h2>
        <div class="grid gap-6 lg:grid-cols-2 text-left">
          <div class="space-y-4">
            <p class="text-muted-foreground">
              {{ $t('about.mission.description1') }}
            </p>
            <p class="text-muted-foreground">
              {{ $t('about.mission.description2') }}
            </p>
          </div>
          <div class="space-y-4">
            <h3 class="text-lg font-medium">{{ $t('about.mission.values.title') }}</h3>
            <ul class="space-y-2 text-muted-foreground">
              <li>• {{ $t('about.mission.values.inclusivity') }}</li>
              <li>• {{ $t('about.mission.values.freedom') }}</li>
              <li>• {{ $t('about.mission.values.sustainability') }}</li>
              <li>• {{ $t('about.mission.values.community') }}</li>
              <li>• {{ $t('about.mission.values.innovation') }}</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Team Section -->
      <section class="space-y-6 text-center">
        <h2 class="text-2xl font-semibold">{{ $t('about.team.title') }}</h2>
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div class="space-y-4">
            <div class="aspect-square bg-muted rounded-lg"></div>
            <div>
              <h3 class="font-medium">{{ $t('about.team.board.title') }}</h3>
              <p class="text-sm text-muted-foreground">
                {{ $t('about.team.board.description') }}
              </p>
            </div>
          </div>
          <div class="space-y-4">
            <div class="aspect-square bg-muted rounded-lg"></div>
            <div>
              <h3 class="font-medium">{{ $t('about.team.members.title') }}</h3>
              <p class="text-sm text-muted-foreground">
                {{ $t('about.team.members.description') }}
              </p>
            </div>
          </div>
          <div class="space-y-4">
            <div class="aspect-square bg-muted rounded-lg"></div>
            <div>
              <h3 class="font-medium">{{ $t('about.team.partners.title') }}</h3>
              <p class="text-sm text-muted-foreground">
                {{ $t('about.team.partners.description') }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- History Section -->
      <section class="space-y-6 text-center">
        <h2 class="text-2xl font-semibold">{{ $t('about.history.title') }}</h2>
        <div class="space-y-4 max-w-3xl mx-auto">
          <p class="text-muted-foreground">
            {{ $t('about.history.description1') }}
          </p>
          <p class="text-muted-foreground">
            {{ $t('about.history.description2') }}
          </p>
        </div>
      </section>
    </div>
  </BaseLayout>
</template>

<script setup lang="ts">
import BaseLayout from '@/layouts/BaseLayout.vue'
</script>

<style scoped>
.prose {
  color: hsl(var(--foreground));
}

.prose h2 {
  color: hsl(var(--foreground));
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.prose ol {
  margin-left: 1.5rem;
  margin-bottom: 1rem;
}

.prose li {
  margin-bottom: 0.5rem;
}

.prose ol[type='a'] {
  margin-left: 2rem;
  margin-top: 0.5rem;
}
</style>
