<template>
  <BaseLayout>
    <!-- Header Section -->
    <div class="mb-12 space-y-8">
      <div class="text-center lg:text-left">
        <h1 class="mb-6 text-4xl font-bold">Über uns</h1>
        <p class="text-xl text-muted-foreground">
          Erfahren Sie mehr über unseren Verein und unsere Mission.
        </p>
      </div>
    </div>

    <!-- Content Sections -->
    <div class="space-y-12">
      <!-- Mission Section -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Unsere Mission</h2>
        <div class="grid gap-6 lg:grid-cols-2">
          <div class="space-y-4">
            <p class="text-muted-foreground">
              Wir setzen uns für die Förderung von Kunst und Kultur im Bereich der elektronischen
              Musik ein. Unser Ziel ist es, einen diskriminierungsfreien Raum für kulturelle
              Entfaltung zu schaffen und regionale Künstler zu vernetzen.
            </p>
            <p class="text-muted-foreground">
              Durch innovative Veranstaltungen und Kooperationen tragen wir zur kulturellen Vielfalt
              in unserer Region bei und schaffen Begegnungsräume für Menschen, die sich für
              elektronische Musik und Kunst interessieren.
            </p>
          </div>
          <div class="space-y-4">
            <h3 class="text-lg font-medium">Unsere Werte</h3>
            <ul class="space-y-2 text-muted-foreground">
              <li>• Inklusivität und Vielfalt</li>
              <li>• Kreative Freiheit</li>
              <li>• Nachhaltigkeit</li>
              <li>• Gemeinschaft</li>
              <li>• Innovation</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Team Section -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Unser Team</h2>
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div class="space-y-4">
            <div class="rounded-lg aspect-square bg-muted"></div>
            <div>
              <h3 class="font-medium">Vorstand</h3>
              <p class="text-sm text-muted-foreground">
                Unser ehrenamtlicher Vorstand leitet die Geschäfte des Vereins und setzt sich für
                unsere Ziele ein.
              </p>
            </div>
          </div>
          <div class="space-y-4">
            <div class="rounded-lg aspect-square bg-muted"></div>
            <div>
              <h3 class="font-medium">Mitglieder</h3>
              <p class="text-sm text-muted-foreground">
                Aktive Mitglieder, die das Vereinsleben gestalten und unsere Veranstaltungen
                unterstützen.
              </p>
            </div>
          </div>
          <div class="space-y-4">
            <div class="rounded-lg aspect-square bg-muted"></div>
            <div>
              <h3 class="font-medium">Partner</h3>
              <p class="text-sm text-muted-foreground">
                Kooperationspartner aus Kultur, Wirtschaft und Gesellschaft, die unsere Arbeit
                unterstützen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- History Section -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Unsere Geschichte</h2>
        <div class="space-y-4">
          <p class="text-muted-foreground">
            Der Techno Tanz Überprüfungsverein Nord wurde gegründet, um die elektronische Musikszene
            in der Region zu stärken und einen Beitrag zur kulturellen Vielfalt zu leisten.
          </p>
          <p class="text-muted-foreground">
            Seit unserer Gründung haben wir zahlreiche Veranstaltungen organisiert, Künstler
            vernetzt und einen Raum für kreative Entfaltung geschaffen. Wir freuen uns darauf, auch
            in Zukunft Teil der lebendigen Kulturlandschaft zu sein.
          </p>
        </div>
      </section>
    </div>
  </BaseLayout>
</template>

<script setup lang="ts">
import BaseLayout from '@/layouts/BaseLayout.vue'
</script>

<style scoped>
.prose {
  color: hsl(var(--foreground));
}

.prose h2 {
  color: hsl(var(--foreground));
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.prose ol {
  margin-left: 1.5rem;
  margin-bottom: 1rem;
}

.prose li {
  margin-bottom: 0.5rem;
}

.prose ol[type='a'] {
  margin-left: 2rem;
  margin-top: 0.5rem;
}
</style>
