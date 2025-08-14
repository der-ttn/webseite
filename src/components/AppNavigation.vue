<template>
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <router-link to="/" :class="navigationMenuTriggerStyle()">
          {{ $t('navigation.home') }}
        </router-link>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <router-link to="/installationen" :class="navigationMenuTriggerStyle()">
          {{ $t('navigation.installations') }}
        </router-link>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <router-link to="/kontakt" :class="navigationMenuTriggerStyle()">
          {{ $t('navigation.contact') }}
        </router-link>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <router-link to="/impressum" :class="navigationMenuTriggerStyle()">
          {{ $t('navigation.imprint') }}
        </router-link>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</template>

<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
</script>
