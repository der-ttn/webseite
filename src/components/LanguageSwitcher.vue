<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="ghost" size="sm">
        <Languages class="h-4 w-4" />
        <span class="ml-1 text-xs">{{ currentLanguage.toUpperCase() }}</span>
        <ChevronDown class="h-3 w-3 ml-1" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem @click="setLanguage('de')" :class="{ 'bg-accent': currentLanguage === 'de' }">
        🇩🇪 Deutsch
        <Check v-if="currentLanguage === 'de'" class="h-4 w-4 ml-auto" />
      </DropdownMenuItem>
      <DropdownMenuItem @click="setLanguage('en')" :class="{ 'bg-accent': currentLanguage === 'en' }">
        🇬🇧 English
        <Check v-if="currentLanguage === 'en'" class="h-4 w-4 ml-auto" />
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Languages, ChevronDown, Check } from 'lucide-vue-next'

const { locale } = useI18n()

const currentLanguage = computed(() => locale.value)

const setLanguage = (lang: string) => {
  locale.value = lang
}
</script>