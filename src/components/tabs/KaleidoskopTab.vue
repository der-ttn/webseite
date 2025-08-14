<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <!-- Kaleidoskop Video First -->
    <Card class="group cursor-pointer hover:bg-accent/50 transition-colors overflow-hidden">
      <div class="relative overflow-hidden aspect-[4/3]">
        <video class="w-full h-full object-cover" controls preload="metadata">
          <source src="/images/kaleidoskop/IMG_5198.mp4?url" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
      <CardContent class="p-4">
        <CardTitle class="text-sm font-medium mb-2">Kaleidoskop Video</CardTitle>
        <Button variant="secondary" size="sm" class="text-xs">Kaleidoskop</Button>
      </CardContent>
    </Card>

    <!-- Kaleidoskop Images -->
    <Card
      v-for="installation in kaleidoskopInstallations"
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

const kaleidoskopInstallations = ref<Installation[]>([
  {
    id: 501,
    title: 'Kaleidoskop Installation 1',
    description: 'Farbenfrohe Kaleidoskop-Effekte mit rotierenden Mustern.',
    category: 'Kaleidoskop',
    image: '/images/kaleidoskop/IMG_5175.jpeg',
  },
  {
    id: 502,
    title: 'Kaleidoskop Installation 2',
    description: 'Symmetrische Lichtprojektionen in Kaleidoskop-Optik.',
    category: 'Kaleidoskop',
    image: '/images/kaleidoskop/IMG_5177.jpeg',
  },
  {
    id: 503,
    title: 'Kaleidoskop Installation 3',
    description: 'Interaktive Kaleidoskop-Displays für Events.',
    category: 'Kaleidoskop',
    image: '/images/kaleidoskop/IMG_5178.jpeg',
  },
  {
    id: 504,
    title: 'Kaleidoskop Installation 4',
    description: 'Kaleidoskop-Muster in verschiedenen Farben.',
    category: 'Kaleidoskop',
    image: '/images/kaleidoskop/IMG_5179.jpeg',
  },
  {
    id: 505,
    title: 'Kaleidoskop Installation 5',
    description: 'Kaleidoskop-Effekte bei Veranstaltung.',
    category: 'Kaleidoskop',
    image: '/images/kaleidoskop/IMG_5199.jpeg',
  },
  {
    id: 506,
    title: 'Kaleidoskop Installation 6',
    description: 'Detailaufnahme der Kaleidoskop-Projektionen.',
    category: 'Kaleidoskop',
    image: '/images/kaleidoskop/IMG_5212.jpeg',
  },
])
</script>