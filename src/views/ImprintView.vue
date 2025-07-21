<template>
  <BaseLayout>
    <!-- Header Section -->
    <div class="space-y-8 mb-12">
      <div class="text-center lg:text-left">
        <h1 class="text-4xl font-bold mb-6">Impressum</h1>
      </div>
    </div>

    <!-- Content -->
    <div class="space-y-8">
                    <!-- Company Information -->
                    <div class="space-y-4">
                      <h2 class="text-2xl font-semibold">Angaben gemäß § 5 TMG</h2>
                      <div class="space-y-2">
                        <p class="font-medium">Techno Tanz Überprüfungsverein Nord e.V.</p>
                        <p>Jungfernstieg 21</p>
                        <p>24103 Kiel</p>
                        <p>Deutschland</p>
                      </div>
                    </div>

                    <!-- Contact Information -->
                    <div class="space-y-4">
                      <h2 class="text-2xl font-semibold">Kontakt</h2>
                      <div class="space-y-2">
                        <p><span class="font-medium">E-Mail:</span> info@der-ttn.de</p>
                      </div>
                    </div>

                    <!-- Legal Representatives -->
                    <div class="space-y-4">
                      <h2 class="text-2xl font-semibold">Vertreten durch den Vorstand</h2>
                      <div class="space-y-2">
                        <p>Janne Lentsch</p>
                        <p>Bent Müller</p>
                        <p>Hannes Laubach</p>
                        <p>Maximilian Milkereit</p>
                        <p>Leo Stitzing</p>
                        <p>Arne Bartelt</p>
                      </div>
                    </div>

                    <!-- Register Information -->
                    <div class="space-y-4">
                      <h2 class="text-2xl font-semibold">Registereintrag</h2>
                      <div class="space-y-2">
                        <p>
                          <span class="font-medium">Eintragung im Registergericht:</span>
                          Amtsgericht Kiel
                        </p>
                        <p><span class="font-medium">Registernummer:</span> VR 12345</p>
                      </div>
                    </div>

                    <!-- Tax Information -->
                    <div class="space-y-4">
                      <h2 class="text-2xl font-semibold">Umsatzsteuer-ID</h2>
                      <div class="space-y-2">
                        <p>
                          <span class="font-medium"
                            >Umsatzsteuer-Identifikationsnummer gemäß § 27 a
                            Umsatzsteuergesetz:</span
                          >
                        </p>
                        <p>DE123456789</p>
                      </div>
                    </div>

                    <!-- Responsible for Content -->
                    <div class="space-y-4">
                      <h2 class="text-2xl font-semibold">
                        Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
                      </h2>
                      <div class="space-y-2">
                        <p>Janne Lentsch</p>
                        <p>Techno Tanz Überprüfungsverein Nord e.V.</p>
                        <p>Jungfernstieg 21</p>
                        <p>24103 Kiel</p>
                      </div>
                    </div>

                    <!-- Disclaimer -->
                    <div class="space-y-4">
                      <h2 class="text-2xl font-semibold">Haftungsausschluss</h2>
                      <div class="space-y-4">
                        <div class="space-y-2">
                          <h3 class="text-lg font-medium">Haftung für Inhalte</h3>
                          <p class="text-muted-foreground">
                            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die
                            Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir
                            jedoch keine Gewähr übernehmen.
                          </p>
                        </div>

                        <div class="space-y-2">
                          <h3 class="text-lg font-medium">Haftung für Links</h3>
                          <p class="text-muted-foreground">
                            Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
                            Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden
                            Inhalte auch keine Gewähr übernehmen.
                          </p>
                        </div>

                        <div class="space-y-2">
                          <h3 class="text-lg font-medium">Urheberrecht</h3>
                          <p class="text-muted-foreground">
                            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
                            Seiten unterliegen dem deutschen Urheberrecht.
                          </p>
                        </div>
                      </div>
                    </div>
    </div>
  </BaseLayout>
</template>

<script setup lang="ts">
import BaseLayout from '@/layouts/BaseLayout.vue'
</script>
