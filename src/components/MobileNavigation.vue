<template>
  <div v-if="mobileMenuOpen" class="md:hidden border-t bg-background">
    <div class="container py-4 space-y-2">
      <router-link
        to="/"
        class="block px-4 py-2 text-sm font-medium transition-colors hover:text-foreground"
        :class="currentRoute === '/' ? 'text-foreground' : 'text-muted-foreground'"
        @click="closeMobileMenu"
      >
        {{ $t('navigation.home').toUpperCase() }}
      </router-link>
      <router-link
        to="/installationen"
        class="block px-4 py-2 text-sm font-medium transition-colors hover:text-foreground"
        :class="currentRoute === '/installationen' ? 'text-foreground' : 'text-muted-foreground'"
        @click="closeMobileMenu"
      >
        {{ $t('navigation.installations').toUpperCase() }}
      </router-link>
      <router-link
        to="/kontakt"
        class="block px-4 py-2 text-sm font-medium transition-colors hover:text-foreground"
        :class="currentRoute === '/kontakt' ? 'text-foreground' : 'text-muted-foreground'"
        @click="closeMobileMenu"
      >
        {{ $t('navigation.contact').toUpperCase() }}
      </router-link>
      <router-link
        to="/impressum"
        class="block px-4 py-2 text-sm font-medium transition-colors hover:text-foreground"
        :class="currentRoute === '/impressum' ? 'text-foreground' : 'text-muted-foreground'"
        @click="closeMobileMenu"
      >
        {{ $t('navigation.imprint').toUpperCase() }}
      </router-link>

      <!-- Language switcher and Dark mode toggle for mobile -->
      <div class="px-4 py-2 border-t mt-2 pt-2 space-y-2">
        <div class="flex items-center justify-between">
          <span class="text-sm font-medium">Language:</span>
          <LanguageSwitcher />
        </div>
        <Button variant="ghost" size="sm" @click="toggleDark" class="w-full justify-start">
          <Sun v-if="isDark" class="h-4 w-4 mr-2" />
          <Moon v-else class="h-4 w-4 mr-2" />
          {{ isDark ? 'Light Mode' : 'Dark Mode' }}
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { Button } from '@/components/ui/button'
import { Sun, Moon } from 'lucide-vue-next'
import { useDarkMode } from '@/composables/useDarkMode'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'

interface Props {
  mobileMenuOpen: boolean
}

defineProps<Props>()

const emit = defineEmits<{
  'update:mobileMenuOpen': [value: boolean]
}>()

const { isDark, toggleDark } = useDarkMode()
const route = useRoute()
const currentRoute = computed(() => route.path)

const closeMobileMenu = () => {
  emit('update:mobileMenuOpen', false)
}
</script>
