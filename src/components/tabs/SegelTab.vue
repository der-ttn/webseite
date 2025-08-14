<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <Card
      v-for="installation in segelInstallations"
      :key="installation.id"
      class="group cursor-pointer hover:bg-accent/50 transition-colors overflow-hidden"
    >
      <div class="relative overflow-hidden aspect-[4/3]">
        <img
          :src="installation.image"
          :alt="installation.title"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <CardContent class="p-4">
        <CardTitle class="text-sm font-medium mb-2">{{ installation.title }}</CardTitle>
        <Button variant="secondary" size="sm" class="text-xs">
          {{ installation.category }}
        </Button>
      </CardContent>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardTitle } from '@/components/ui/card'

interface Installation {
  id: number
  title: string
  description: string
  category: string
  image: string
}

const segelInstallations = ref<Installation[]>([
  {
    id: 701,
    title: 'Segel Installation 1',
    description: 'Beleuchtete Stoffsegel für atmosphärische Raumgestaltung.',
    category: 'Segel',
    image: '/images/segel/signal-2025-07-31-142840.jpeg',
  },
  {
    id: 702,
    title: 'Segel Installation 2',
    description: 'Hängende Lichtsegel mit sanften Bewegungen.',
    category: 'Segel',
    image: '/images/segel/signal-2025-07-31-142917.jpeg',
  },
  {
    id: 703,
    title: 'Segel Installation 3',
    description: 'Transluzente Segel mit Projektionsmöglichkeiten.',
    category: 'Segel',
    image: '/images/segel/signal-2025-07-31-143116.jpeg',
  },
  {
    id: 704,
    title: 'Segel Installation 4',
    description: 'Segel-Installation bei Event.',
    category: 'Segel',
    image: '/images/segel/signal-2025-07-31-143158.jpeg',
  },
])
</script>