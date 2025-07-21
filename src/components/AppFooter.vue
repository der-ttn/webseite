<template>
  <Card class="mt-20 rounded-none border-0 border-t bg-card">
    <div class="container px-6 py-12 mx-auto">
      <!-- Centered company info with separators -->
      <div class="flex gap-8 items-center mb-12">
        <!-- Left separator -->
        <div class="flex-1">
          <Separator class="bg-muted" />
        </div>

        <!-- Centered company info -->
        <div class="px-8 space-y-4 text-center">
          <h3 class="text-lg font-semibold text-foreground">
            Techno Tanz Überprüfungsverein Nord e.V.
          </h3>
        </div>
        <!-- Right separator -->
        <div class="flex-1 w-100">
          <Separator class="bg-muted" />
        </div>
      </div>

      <!-- Footer Navigation Links -->
      <div class="flex justify-center mb-6">
        <NavigationMenu class="flex items-center">
          <NavigationMenuList class="flex space-x-6 text-sm">
            <NavigationMenuItem>
              <router-link
                to="/satzung"
                class="inline-flex items-center justify-center transition-colors hover:text-foreground px-3 py-2 rounded-md text-sm font-medium text-muted-foreground"
              >
                Satzung
              </router-link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <router-link
                to="/impressum"
                class="inline-flex items-center justify-center transition-colors hover:text-foreground px-3 py-2 rounded-md text-sm font-medium text-muted-foreground"
              >
                Impressum
              </router-link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <!-- Bottom copyright -->
      <div class="pt-6 text-center border-t border-border">
        <p class="text-xs text-muted-foreground">
          &copy; 2025 Techno Tanz Überprüfungsverein Nord e.V. Alle Rechte vorbehalten.
        </p>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
</script>
