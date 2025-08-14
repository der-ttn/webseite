<template>
  <BaseLayout>
    <!-- Header Section -->
    <div class="space-y-8 mb-12 text-center">
      <div class="space-y-6">
        <h1 class="text-4xl font-bold">{{ $t('installations.title') }}</h1>
        <p class="text-muted-foreground max-w-3xl mx-auto text-lg">
          {{ $t('installations.subtitle') }}
        </p>
      </div>
    </div>

    <!-- Installation Description -->
    <div class="max-w-4xl mx-auto mb-12">
      <Card class="p-8">
        <CardContent class="space-y-6 p-0">
          <p class="text-lg leading-relaxed">
            {{ $t('installations.description.intro') }}
          </p>
          
          <div class="space-y-4">
            <div class="flex items-start space-x-3">
              <div class="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <p class="text-muted-foreground">{{ $t('installations.description.waben') }}</p>
            </div>
            <div class="flex items-start space-x-3">
              <div class="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <p class="text-muted-foreground">{{ $t('installations.description.ventilatoren') }}</p>
            </div>
            <div class="flex items-start space-x-3">
              <div class="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <p class="text-muted-foreground">{{ $t('installations.description.auspuff') }}</p>
            </div>
          </div>
          
          <Separator class="my-6" />
          
          <p class="text-center font-medium">
            {{ $t('installations.description.outro') }}
          </p>
          
          <div class="flex justify-center">
            <div class="text-2xl text-muted-foreground">⸻</div>
          </div>
        </CardContent>
      </Card>
    </div>

    <!-- Installation Tabs -->
    <div class="max-w-6xl mx-auto">
      <Tabs default-value="waben" class="w-full">
        <TabsList class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 w-full max-w-5xl mx-auto mb-8">
          <TabsTrigger value="waben">{{ $t('installations.tabs.waben') }}</TabsTrigger>
          <TabsTrigger value="lightstrips">{{ $t('installations.tabs.lightstrips') }}</TabsTrigger>
          <TabsTrigger value="spiegelsonne">{{ $t('installations.tabs.spiegelsonne') }}</TabsTrigger>
          <TabsTrigger value="ventilatoren">{{ $t('installations.tabs.ventilatoren') }}</TabsTrigger>
          <TabsTrigger value="kaleidoskop">{{ $t('installations.tabs.kaleidoskop') }}</TabsTrigger>
          <TabsTrigger value="auspuff">{{ $t('installations.tabs.auspuff') }}</TabsTrigger>
          <TabsTrigger value="segel">{{ $t('installations.tabs.segel') }}</TabsTrigger>
          <TabsTrigger value="seelentauscher">{{ $t('installations.tabs.seelentauscher') }}</TabsTrigger>
        </TabsList>

        <TabsContent value="waben" class="mt-6">
          <Suspense>
            <WabenTab />
            <template #fallback>
              <div class="flex justify-center items-center h-64">
                <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              </div>
            </template>
          </Suspense>
        </TabsContent>

        <TabsContent value="ventilatoren" class="mt-6">
          <Suspense>
            <VentilatorenTab />
            <template #fallback>
              <div class="flex justify-center items-center h-64">
                <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              </div>
            </template>
          </Suspense>
        </TabsContent>

        <TabsContent value="auspuff" class="mt-6">
          <Suspense>
            <AuspuffTab />
            <template #fallback>
              <div class="flex justify-center items-center h-64">
                <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              </div>
            </template>
          </Suspense>
        </TabsContent>

        <TabsContent value="kaleidoskop" class="mt-6">
          <Suspense>
            <KaleidoskopTab />
            <template #fallback>
              <div class="flex justify-center items-center h-64">
                <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              </div>
            </template>
          </Suspense>
        </TabsContent>

        <TabsContent value="lightstrips" class="mt-6">
          <Suspense>
            <LightstripsTab />
            <template #fallback>
              <div class="flex justify-center items-center h-64">
                <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              </div>
            </template>
          </Suspense>
        </TabsContent>

        <TabsContent value="segel" class="mt-6">
          <Suspense>
            <SegelTab />
            <template #fallback>
              <div class="flex justify-center items-center h-64">
                <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              </div>
            </template>
          </Suspense>
        </TabsContent>

        <TabsContent value="spiegelsonne" class="mt-6">
          <Suspense>
            <SpiegelsonneTab />
            <template #fallback>
              <div class="flex justify-center items-center h-64">
                <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              </div>
            </template>
          </Suspense>
        </TabsContent>

        <TabsContent value="seelentauscher" class="mt-6">
          <Suspense>
            <SeelentauscherTab />
            <template #fallback>
              <div class="flex justify-center items-center h-64">
                <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              </div>
            </template>
          </Suspense>
        </TabsContent>
      </Tabs>
    </div>
  </BaseLayout>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import BaseLayout from '@/layouts/BaseLayout.vue'

// Lazy load tab components
const WabenTab = defineAsyncComponent(() => import('@/components/tabs/WabenTab.vue'))
const LightstripsTab = defineAsyncComponent(() => import('@/components/tabs/LightstripsTab.vue'))
const SpiegelsonneTab = defineAsyncComponent(() => import('@/components/tabs/SpiegelsonneTab.vue'))
const VentilatorenTab = defineAsyncComponent(() => import('@/components/tabs/VentilatorenTab.vue'))
const KaleidoskopTab = defineAsyncComponent(() => import('@/components/tabs/KaleidoskopTab.vue'))
const AuspuffTab = defineAsyncComponent(() => import('@/components/tabs/AuspuffTab.vue'))
const SegelTab = defineAsyncComponent(() => import('@/components/tabs/SegelTab.vue'))
const SeelentauscherTab = defineAsyncComponent(() => import('@/components/tabs/SeelentauscherTab.vue'))

</script>
