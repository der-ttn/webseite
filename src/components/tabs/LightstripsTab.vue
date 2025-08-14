<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <!-- Lightstrips Videos First -->
    <Card class="group cursor-pointer hover:bg-accent/50 transition-colors overflow-hidden">
      <div class="relative overflow-hidden aspect-[4/3]">
        <video class="w-full h-full object-cover" controls preload="metadata">
          <source src="/images/lightstrips/IMG_0368.mp4?url" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
      <CardContent class="p-4">
        <CardTitle class="text-sm font-medium mb-2">Lightstrips Video 1</CardTitle>
        <Button variant="secondary" size="sm" class="text-xs">Lightstrips</Button>
      </CardContent>
    </Card>

    <Card class="group cursor-pointer hover:bg-accent/50 transition-colors overflow-hidden">
      <div class="relative overflow-hidden aspect-[4/3]">
        <video class="w-full h-full object-cover" controls preload="metadata">
          <source src="/images/lightstrips/IMG_0370.mp4?url" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
      <CardContent class="p-4">
        <CardTitle class="text-sm font-medium mb-2">Lightstrips Video 2</CardTitle>
        <Button variant="secondary" size="sm" class="text-xs">Lightstrips</Button>
      </CardContent>
    </Card>

    <Card class="group cursor-pointer hover:bg-accent/50 transition-colors overflow-hidden">
      <div class="relative overflow-hidden aspect-[4/3]">
        <video class="w-full h-full object-cover" controls preload="metadata">
          <source src="/images/lightstrips/IMG_3169.MP4?url" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
      <CardContent class="p-4">
        <CardTitle class="text-sm font-medium mb-2">Lightstrips Video 3</CardTitle>
        <Button variant="secondary" size="sm" class="text-xs">Lightstrips</Button>
      </CardContent>
    </Card>

    <!-- Lightstrips Images -->
    <Card
      v-for="installation in lightstripsInstallations"
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

const lightstripsInstallations = ref<Installation[]>([
  {
    id: 401,
    title: 'Lightstrips Installation 1',
    description: 'Flexible LED-Streifen für dynamische Lichteffekte.',
    category: 'Lightstrips',
    image: '/images/lightstrips/20230602_221015.jpg',
  },
  {
    id: 402,
    title: 'Lightstrips Installation 2',
    description: 'Programmierbare LED-Strips mit Farbverläufen.',
    category: 'Lightstrips',
    image: '/images/lightstrips/IMG_0309.jpeg',
  },
  {
    id: 403,
    title: 'Lightstrips Installation 3',
    description: 'Modulare Lichtstreifen für individuelle Gestaltung.',
    category: 'Lightstrips',
    image: '/images/lightstrips/IMG_0320.jpeg',
  },
  {
    id: 404,
    title: 'Lightstrips Installation 4',
    description: 'LED-Strips in verschiedenen Konfigurationen.',
    category: 'Lightstrips',
    image: '/images/lightstrips/IMG_0321.jpeg',
  },
  {
    id: 405,
    title: 'Lightstrips Installation 5',
    description: 'Lightstrip-Setup bei Event.',
    category: 'Lightstrips',
    image: '/images/lightstrips/IMG_3168.JPG',
  },
])
</script>