<template>
  <NavigationMenu class="flex items-center">
    <NavigationMenuList class="flex space-x-6 text-sm font-medium">
      <NavigationMenuItem>
        <router-link
          to="/"
          :class="[
            'inline-flex items-center justify-center transition-colors hover:text-foreground px-3 py-2 rounded-md text-sm font-medium',
            currentRoute === '/' ? 'text-foreground bg-accent' : 'text-muted-foreground',
          ]"
        >
          HOME
        </router-link>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <router-link
          to="/installationen"
          :class="[
            'inline-flex items-center justify-center transition-colors hover:text-foreground px-3 py-2 rounded-md text-sm font-medium',
            currentRoute === '/installationen'
              ? 'text-foreground bg-accent'
              : 'text-muted-foreground',
          ]"
        >
          INSTALLATIONEN
        </router-link>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <router-link
          to="/kontakt"
          :class="[
            'inline-flex items-center justify-center transition-colors hover:text-foreground px-3 py-2 rounded-md text-sm font-medium',
            currentRoute === '/kontakt' ? 'text-foreground bg-accent' : 'text-muted-foreground',
          ]"
        >
          KONTAKT
        </router-link>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <router-link
          to="/impressum"
          :class="[
            'inline-flex items-center justify-center transition-colors hover:text-foreground px-3 py-2 rounded-md text-sm font-medium',
            currentRoute === '/impressum' ? 'text-foreground bg-accent' : 'text-muted-foreground',
          ]"
        >
          IMPRESSUM
        </router-link>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'

const route = useRoute()
const currentRoute = computed(() => route.path)
</script>
