<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <!-- First 15 installations (9-18, 1, 4, 2, 3, 5) -->
    <Card
      v-for="installation in wabenInstallations.slice(0, 15)"
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

    <!-- Video card -->
    <Card class="group cursor-pointer hover:bg-accent/50 transition-colors overflow-hidden">
      <div class="relative overflow-hidden aspect-[4/3]">
        <video 
          class="w-full h-full object-cover" 
          controls 
          preload="metadata"
          poster="/images/IMG_5984.jpeg"
        >
          <source src="/images/IMG_5985.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
      <CardContent class="p-4">
        <CardTitle class="text-sm font-medium mb-2">Richtfest-Dance</CardTitle>
        <Button variant="secondary" size="sm" class="text-xs">
          Waben
        </Button>
      </CardContent>
    </Card>

    <!-- Remaining installations (8, 20, 19) -->
    <Card
      v-for="installation in wabenInstallations.slice(15)"
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

const wabenInstallations = ref<Installation[]>([
  // 9-18 first (without 8)
  {
    id: 9,
    title: 'Waben Installation 9',
    description: 'Waben-Installation bei einer Veranstaltung.',
    category: 'Waben',
    image: '/images/IMG_6562.jpeg',
  },
  {
    id: 10,
    title: 'Waben Installation 10',
    description: 'Waben-Setup in Aktion.',
    category: 'Waben',
    image: '/images/IMG_6566.jpeg',
  },
  {
    id: 11,
    title: 'Waben Installation 11',
    description: 'Waben-Installation Detail.',
    category: 'Waben',
    image: '/images/IMG_6567.jpeg',
  },
  {
    id: 12,
    title: 'Waben Installation 12',
    description: 'Waben-Struktur bei einem Event.',
    category: 'Waben',
    image: '/images/IMG_6569.jpeg',
  },
  {
    id: 13,
    title: 'Waben Installation 13',
    description: 'Waben-Installation im Einsatz.',
    category: 'Waben',
    image: '/images/IMG_6570.jpeg',
  },
  {
    id: 14,
    title: 'Waben Installation 14',
    description: 'Waben-Setup Detailaufnahme.',
    category: 'Waben',
    image: '/images/IMG_6573.jpeg',
  },
  {
    id: 15,
    title: 'Waben Installation 15',
    description: 'Waben-Installation bei Veranstaltung.',
    category: 'Waben',
    image: '/images/IMG_6576.jpeg',
  },
  {
    id: 16,
    title: 'Waben Installation 16',
    description: 'Waben-Konstruktion in verschiedenen Winkeln.',
    category: 'Waben',
    image: '/images/IMG_6577.jpeg',
  },
  {
    id: 17,
    title: 'Waben Installation 17',
    description: 'Waben-Installation Nahaufnahme.',
    category: 'Waben',
    image: '/images/IMG_6578.jpeg',
  },
  {
    id: 18,
    title: 'Waben Installation 18',
    description: 'Waben-Setup bei einem Event.',
    category: 'Waben',
    image: '/images/IMG_6579.jpeg',
  },
  // Then 1
  {
    id: 1,
    title: 'Waben Installation 1',
    description: 'Unsere selbstgebaute Waben-Installation in Aktion.',
    category: 'Waben',
    image: '/images/IMG_1674.JPG',
  },
  // Then 4, 2, 3, 5
  {
    id: 4,
    title: 'Waben Installation 4',
    description: 'Waben-Installation bei Nacht.',
    category: 'Waben',
    image: '/images/IMG_5460.jpeg',
  },
  {
    id: 2,
    title: 'Waben Installation 2',
    description: 'Waben-Setup bei einer unserer Veranstaltungen.',
    category: 'Waben',
    image: '/images/IMG_5437.jpeg',
  },
  {
    id: 3,
    title: 'Waben Installation 3',
    description: 'Detailaufnahme der Wabenstruktur.',
    category: 'Waben',
    image: '/images/IMG_5438.jpeg',
  },
  {
    id: 5,
    title: 'Waben Installation 5',
    description: 'Atmosphäre der Waben-Installation.',
    category: 'Waben',
    image: '/images/IMG_5978.jpeg',
  },
  // Video will be here, then 8
  // Item 8 after video
  {
    id: 8,
    title: 'Waben Installation 8',
    description: 'Detailansicht der Waben-Konstruktion.',
    category: 'Waben',
    image: '/images/IMG_6051.jpeg',
  },
  // Then 20
  {
    id: 20,
    title: 'Waben Installation 20',
    description: 'Waben-Installation Event-Setup.',
    category: 'Waben',
    image: '/images/signal-2025-07-11-103610_006.jpeg',
  },
  // Finally 19
  {
    id: 19,
    title: 'Waben Installation 19',
    description: 'Waben-Installation im Betrieb.',
    category: 'Waben',
    image: '/images/IMG_6581.jpeg',
  },
])
</script>