<template>
  <BaseLayout>
    <!-- Header Section -->
    <div class="space-y-8 mb-12">
      <div class="text-center">
        <h1 class="text-4xl font-bold mb-6">Kunstinstallationen</h1>
        <p class="text-muted-foreground max-w-3xl mx-auto">
          Entdecken Sie unsere einzigartigen elektronischen Kunstinstallationen für Ihre Events.
          Jede Installation kann gemietet und an Ihre Veranstaltung angepasst werden.
        </p>
      </div>
    </div>

    <!-- Installation Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card
        v-for="installation in installations"
        :key="installation.id"
        class="group cursor-pointer hover:bg-accent/50 transition-colors overflow-hidden"
      >
        <div class="relative overflow-hidden aspect-[4/3]">
          <img
            :src="installation.image"
            :alt="installation.title"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
  </BaseLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import BaseLayout from '@/layouts/BaseLayout.vue'

interface Installation {
  id: number
  title: string
  description: string
  category: string
  image: string
}

const installations = ref<Installation[]>([
  {
    id: 1,
    title: 'Light Tunnel',
    description: 'Interaktive LED-Installation die auf Musik und Bewegung reagiert.',
    category: 'Interactive',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop',
  },
  {
    id: 2,
    title: 'Sound Dome',
    description: 'Visuelle Darstellung von Schallwellen in Echtzeit.',
    category: 'Audio Visual',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
  },
  {
    id: 3,
    title: 'Light Portal',
    description: 'Futuristische Lichtinstallation inspiriert von Cyberpunk Ästhetik.',
    category: 'Interactive',
    image: 'https://images.unsplash.com/photo-1520637836862-4d197d17c43a?w=400&h=300&fit=crop',
  },
  {
    id: 4,
    title: 'Neon Grid',
    description: 'Synchronisierte Visuals die perfekt zu elektronischer Musik passen.',
    category: 'Ambient',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
  },
  {
    id: 5,
    title: 'VR Experience',
    description: 'Hologramm-ähnliche Projektionen für ein einzigartiges Erlebnis.',
    category: 'Interactive',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop',
  },
  {
    id: 6,
    title: 'Laser Show',
    description: 'Unendlichkeitsspiegel mit integrierten LED-Effekten.',
    category: 'Performance',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
  },
  {
    id: 7,
    title: 'LED Installation',
    description: 'Interaktive LED-Installation die auf Musik und Bewegung reagiert.',
    category: 'Ambient',
    image: 'https://images.unsplash.com/photo-1520637836862-4d197d17c43a?w=400&h=300&fit=crop',
  },
  {
    id: 8,
    title: 'Kaleidoscope',
    description: 'Visuelle Darstellung von Schallwellen in Echtzeit.',
    category: 'Interactive',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
  },
  {
    id: 9,
    title: 'Augmented Reality',
    description: 'Futuristische Lichtinstallation inspiriert von Cyberpunk Ästhetik.',
    category: 'Experience',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop',
  },
])
</script>
