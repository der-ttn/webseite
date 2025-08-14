<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <!-- Ventilatoren Videos First -->
    <Card class="group cursor-pointer hover:bg-accent/50 transition-colors overflow-hidden">
      <div class="relative overflow-hidden aspect-[4/3]">
        <video class="w-full h-full object-cover" controls preload="metadata">
          <source src="/images/ventilator/IMG_5168 2.mp4?url" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
      <CardContent class="p-4">
        <CardTitle class="text-sm font-medium mb-2">Ventilator Video 1</CardTitle>
        <Button variant="secondary" size="sm" class="text-xs">Ventilatoren</Button>
      </CardContent>
    </Card>

    <Card class="group cursor-pointer hover:bg-accent/50 transition-colors overflow-hidden">
      <div class="relative overflow-hidden aspect-[4/3]">
        <video class="w-full h-full object-cover" controls preload="metadata">
          <source src="/images/ventilator/IMG_5592 2.mp4?url" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
      <CardContent class="p-4">
        <CardTitle class="text-sm font-medium mb-2">Ventilator Video 2</CardTitle>
        <Button variant="secondary" size="sm" class="text-xs">Ventilatoren</Button>
      </CardContent>
    </Card>

    <!-- Ventilatoren Images -->
    <Card
      v-for="installation in ventilatorenInstallations"
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

const ventilatorenInstallations = ref<Installation[]>([
  {
    id: 101,
    title: 'Ventilator Installation 1',
    description: 'Industrielle Ventilatoren für atmosphärische Effekte.',
    category: 'Ventilatoren',
    image: '/images/ventilator/IMG_0033 2.JPG',
  },
  {
    id: 102,
    title: 'Ventilator Installation 2',
    description: 'Ventilator-Setup bei Veranstaltung.',
    category: 'Ventilatoren',
    image: '/images/ventilator/IMG_0034 2.JPG',
  },
  {
    id: 103,
    title: 'Ventilator Installation 3',
    description: 'Bewegung und Geräusch für industriellen Look.',
    category: 'Ventilatoren',
    image: '/images/ventilator/IMG_0035 2.JPG',
  },
  {
    id: 104,
    title: 'Ventilator Installation 4',
    description: 'Ventilator-Aufbau im Detail.',
    category: 'Ventilatoren',
    image: '/images/ventilator/IMG_5138 2.jpeg',
  },
  {
    id: 105,
    title: 'Ventilator Installation 5',
    description: 'Atmosphärische Ventilator-Effekte.',
    category: 'Ventilatoren',
    image: '/images/ventilator/IMG_5146 2.jpeg',
  },
  {
    id: 106,
    title: 'Ventilator Installation 6',
    description: 'Ventilator-Installation in Aktion.',
    category: 'Ventilatoren',
    image: '/images/ventilator/IMG_5154 2.jpeg',
  },
  {
    id: 107,
    title: 'Ventilator Installation 7',
    description: 'Industrielle Ventilator-Atmosphäre.',
    category: 'Ventilatoren',
    image: '/images/ventilator/IMG_5165 2.jpeg',
  },
  {
    id: 108,
    title: 'Ventilator Installation 8',
    description: 'Ventilator-Setup bei Event.',
    category: 'Ventilatoren',
    image: '/images/ventilator/IMG_5166 2.jpeg',
  },
  {
    id: 109,
    title: 'Ventilator Installation 9',
    description: 'Bewegung und Atmosphäre durch Ventilatoren.',
    category: 'Ventilatoren',
    image: '/images/ventilator/IMG_5172 2.jpeg',
  },
  {
    id: 110,
    title: 'Ventilator Installation 10',
    description: 'Ventilator-Installation Detailaufnahme.',
    category: 'Ventilatoren',
    image: '/images/ventilator/IMG_5180 2.jpeg',
  },
  {
    id: 111,
    title: 'Ventilator Installation 11',
    description: 'Ventilator-Setup in vollem Betrieb.',
    category: 'Ventilatoren',
    image: '/images/ventilator/IMG_5197 2.JPG',
  },
  {
    id: 112,
    title: 'Ventilator Installation 12',
    description: 'Industrielle Ventilator-Ästhetik.',
    category: 'Ventilatoren',
    image: '/images/ventilator/IMG_5207 2.jpeg',
  },
])
</script>