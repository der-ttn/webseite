<template>
  <BaseLayout>
    <!-- Header Section -->
    <div class="space-y-8 mb-12">
      <div class="text-center lg:text-left">
        <h1 class="text-4xl font-bold mb-6">Vereinssatzung</h1>
      </div>
    </div>

    <!-- Content -->
    <div class="prose prose-lg max-w-none" v-html="markdownContent"></div>
  </BaseLayout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { marked } from 'marked'
import BaseLayout from '@/layouts/BaseLayout.vue'

const markdownContent = ref('')

onMounted(async () => {
  try {
    // Load the markdown file
    const response = await fetch('/satzung.md')
    const text = await response.text()

    // Use marked to parse markdown to HTML
    const html = await marked(text)
    markdownContent.value = html
  } catch (error) {
    console.error('Error loading satzung.md:', error)
    markdownContent.value = '<p>Die Satzung konnte nicht geladen werden.</p>'
  }
})
</script>

<style scoped>
.prose {
  color: hsl(var(--foreground));
}

.prose h1 {
  color: hsl(var(--foreground));
  font-weight: 700;
  font-size: 2.25rem;
  line-height: 2.5rem;
  margin-top: 0;
  margin-bottom: 2rem;
}

.prose h2 {
  color: hsl(var(--foreground));
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 2rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.prose p {
  margin-bottom: 1rem;
  line-height: 1.75;
}

.prose ol {
  margin-left: 1.5rem;
  margin-bottom: 1rem;
}

.prose li {
  margin-bottom: 0.5rem;
}

.prose ol ol {
  margin-left: 2rem;
  margin-top: 0.5rem;
}

.prose strong {
  font-weight: 600;
}

.prose hr {
  border-color: hsl(var(--border));
  margin: 2rem 0;
}
</style>
