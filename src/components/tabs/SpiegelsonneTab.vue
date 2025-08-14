<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <!-- Spiegelsonne Videos First -->
    <Card class="group cursor-pointer hover:bg-accent/50 transition-colors overflow-hidden">
      <div class="relative overflow-hidden aspect-[4/3]">
        <video class="w-full h-full object-cover" controls preload="metadata">
          <source src="/images/spiegelsonne/IMG_6044.mp4?url" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
      <CardContent class="p-4">
        <CardTitle class="text-sm font-medium mb-2">Spiegelsonne Video 1</CardTitle>
        <Button variant="secondary" size="sm" class="text-xs">Spiegelsonne</Button>
      </CardContent>
    </Card>

    <Card class="group cursor-pointer hover:bg-accent/50 transition-colors overflow-hidden">
      <div class="relative overflow-hidden aspect-[4/3]">
        <video class="w-full h-full object-cover" controls preload="metadata">
          <source src="/images/spiegelsonne/IMG_6191.mp4?url" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
      <CardContent class="p-4">
        <CardTitle class="text-sm font-medium mb-2">Spiegelsonne Video 2</CardTitle>
        <Button variant="secondary" size="sm" class="text-xs">Spiegelsonne</Button>
      </CardContent>
    </Card>

    <!-- Spiegelsonne Images -->
    <Card
      v-for="installation in spiegelsonneInstallations"
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

const spiegelsonneInstallations = ref<Installation[]>([
  {
    id: 201,
    title: 'Spiegelsonne Installation 1',
    description: 'Spektakuläre Spiegelsonne-Lichteffekte.',
    category: 'Spiegelsonne',
    image: '/images/spiegelsonne/IMG_6211.jpeg',
  },
  {
    id: 202,
    title: 'Spiegelsonne Installation 2',
    description: 'Spiegelsonne in voller Pracht.',
    category: 'Spiegelsonne',
    image: '/images/spiegelsonne/IMG_6212.jpeg',
  },
  {
    id: 203,
    title: 'Spiegelsonne Installation 3',
    description: 'Detailaufnahme der Spiegelsonne-Reflexionen.',
    category: 'Spiegelsonne',
    image: '/images/spiegelsonne/IMG_6215.jpeg',
  },
  {
    id: 204,
    title: 'Spiegelsonne Installation 4',
    description: 'Spiegelsonne-Setup bei Veranstaltung.',
    category: 'Spiegelsonne',
    image: '/images/spiegelsonne/IMG_6216.jpeg',
  },
  {
    id: 205,
    title: 'Spiegelsonne Installation 5',
    description: 'Rotierende Spiegelsonne mit Lichtreflexionen.',
    category: 'Spiegelsonne',
    image: '/images/spiegelsonne/IMG_6024.JPG',
  },
  {
    id: 206,
    title: 'Spiegelsonne Installation 6',
    description: 'Große Spiegelsonne als zentrales Lichtelement.',
    category: 'Spiegelsonne',
    image: '/images/spiegelsonne/IMG_6025.JPG',
  },
  {
    id: 207,
    title: 'Spiegelsonne Installation 7',
    description: 'Spiegelsonne bei Event-Beleuchtung.',
    category: 'Spiegelsonne',
    image: '/images/spiegelsonne/IMG_6045.jpeg',
  },
  {
    id: 208,
    title: 'Spiegelsonne Installation 8',
    description: 'Detailaufnahme der Spiegelsonne.',
    category: 'Spiegelsonne',
    image: '/images/spiegelsonne/IMG_6046.jpeg',
  },
  {
    id: 209,
    title: 'Spiegelsonne Installation 9',
    description: 'Spiegelsonne in vollem Glanz.',
    category: 'Spiegelsonne',
    image: '/images/spiegelsonne/IMG_6047.jpeg',
  },
  {
    id: 210,
    title: 'Spiegelsonne Installation 10',
    description: 'Lichtreflexionen der Spiegelsonne.',
    category: 'Spiegelsonne',
    image: '/images/spiegelsonne/IMG_6048.jpeg',
  },
  {
    id: 211,
    title: 'Spiegelsonne Installation 11',
    description: 'Spiegelsonne bei Veranstaltung.',
    category: 'Spiegelsonne',
    image: '/images/spiegelsonne/IMG_6174.jpeg',
  },
  {
    id: 212,
    title: 'Spiegelsonne Installation 12',
    description: 'Komplexe Lichtspiele durch Spiegelsonne.',
    category: 'Spiegelsonne',
    image: '/images/spiegelsonne/IMG_6175.jpeg',
  },
  {
    id: 213,
    title: 'Spiegelsonne Installation 13',
    description: 'Spiegelsonne-Effekte im Detail.',
    category: 'Spiegelsonne',
    image: '/images/spiegelsonne/IMG_6176.jpeg',
  },
  {
    id: 214,
    title: 'Spiegelsonne Installation 14',
    description: 'Atmosphärische Spiegelsonne-Beleuchtung.',
    category: 'Spiegelsonne',
    image: '/images/spiegelsonne/IMG_6177.jpeg',
  },
])
</script>