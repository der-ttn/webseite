<template>
  <header
    class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
  >
    <div class="container flex justify-between items-center h-16">
      <!-- Logo on the left with more space -->
      <div class="flex items-center">
        <router-link to="/" class="flex items-center px-4 py-4 space-x-2">
          <TTNLogo :width="120" :height="74" class="mt-20 ml-20 text-foreground" />
        </router-link>
      </div>

      <!-- Centered Navigation (hidden on mobile) -->
      <div class="hidden absolute left-1/2 transform -translate-x-1/2 md:flex">
        <AppNavigation />
      </div>

      <!-- Right side - language switcher, dark mode toggle and mobile menu -->
      <div class="flex items-center space-x-2">
        <!-- Language switcher -->
        <div class="hidden md:flex">
          <LanguageSwitcher />
        </div>

        <!-- Dark mode toggle -->
        <Button variant="ghost" size="sm" @click="toggleDark" class="hidden md:flex">
          <Sun v-if="isDark" class="w-4 h-4" />
          <Moon v-else class="w-4 h-4" />
        </Button>

        <!-- Mobile menu button -->
        <Button variant="ghost" size="sm" class="md:hidden" @click="toggleMobileMenu">
          <Menu class="w-4 h-4" />
        </Button>
      </div>
    </div>

    <!-- Mobile Navigation Menu -->
    <MobileNavigation v-model:mobileMenuOpen="mobileMenuOpen" />
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import { Menu, Sun, Moon } from 'lucide-vue-next'
import TTNLogo from '@/components/TTNLogo.vue'
import AppNavigation from '@/components/AppNavigation.vue'
import MobileNavigation from '@/components/MobileNavigation.vue'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import { useDarkMode } from '@/composables/useDarkMode'

const { isDark, toggleDark } = useDarkMode()
const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>
