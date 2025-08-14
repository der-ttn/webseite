<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <Card
      v-for="installation in auspuffInstallations"
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

const auspuffInstallations = ref<Installation[]>([
  {
    id: 601,
    title: 'Auspuff Installation 1',
    description: 'Auspuffrohre mit integrierten LED-Systemen.',
    category: 'Auspuff',
    image: '/images/auspuff/IMG_4201 2.jpeg',
  },
  {
    id: 602,
    title: 'Auspuff Installation 2',
    description: 'Industrielle Auspuffästhetik mit Nebeleffekten.',
    category: 'Auspuff',
    image: '/images/auspuff/signal-2025-01-18-174553_002.jpeg',
  },
])
</script>