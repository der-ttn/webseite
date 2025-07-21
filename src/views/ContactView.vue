<template>
  <BaseLayout>
    <!-- Header Section -->
    <div class="space-y-8 mb-12">
      <div class="text-center lg:text-left">
        <h1 class="text-4xl font-bold mb-6">Kontakt</h1>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <!-- Contact Form -->
      <div class="space-y-6">
        <div class="space-y-2">
          <h2 class="text-2xl font-semibold">Nachricht senden</h2>
        </div>
        <form @submit.prevent="submitForm" class="space-y-6">
          <div class="space-y-2">
            <label for="name" class="block text-sm font-medium">Name</label>
            <Input id="name" v-model="form.name" type="text" required />
          </div>

          <div class="space-y-2">
            <label for="email" class="block text-sm font-medium">E-Mail</label>
            <Input id="email" v-model="form.email" type="email" required />
          </div>

          <div class="space-y-2">
            <label for="inquiry-type" class="block text-sm font-medium">Anfrage zu</label>
            <Select v-model="form.inquiryType" required>
              <SelectTrigger>
                <SelectValue placeholder="Bitte wählen..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="installation">Installation anfragen</SelectItem>
                <SelectItem value="general">Allgemeine Anfrage</SelectItem>
                <SelectItem value="booking">Booking Anfrage</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div class="space-y-2">
            <label for="message" class="block text-sm font-medium">Nachricht</label>
            <Textarea
              id="message"
              v-model="form.message"
              rows="4"
              required
              placeholder="Ihre Nachricht..."
            />
          </div>

          <Button type="submit" class="w-full"> Nachricht senden </Button>
        </form>
      </div>

      <!-- Contact Info -->
      <div class="space-y-8">
        <div class="space-y-6">
          <div class="space-y-2">
            <h2 class="text-2xl font-semibold">Kontaktinformationen</h2>
          </div>
          <div class="space-y-4">
            <div>
              <h3 class="font-medium text-muted-foreground">E-Mail</h3>
              <p>info@der-ttn.de</p>
            </div>
            <div>
              <h3 class="font-medium text-muted-foreground">Adresse</h3>
              <p>
                Jungfernstieg 21<br />
                24103 Kiel<br />
                Deutschland
              </p>
            </div>
          </div>
        </div>

        <div class="space-y-6">
          <div class="space-y-2">
            <h2 class="text-2xl font-semibold">Social Media</h2>
          </div>
          <div class="flex space-x-4">
            <a
              href="https://soundcloud.com/techno-tuev-nord"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="sm"> Soundcloud </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </BaseLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import BaseLayout from '@/layouts/BaseLayout.vue'

interface ContactForm {
  name: string
  email: string
  inquiryType: string
  message: string
}

const form = ref<ContactForm>({
  name: '',
  email: '',
  inquiryType: '',
  message: '',
})

const submitForm = (): void => {
  console.log('Form submitted:', form.value)
  // Here you would typically send the form data to a backend service
  alert('Nachricht gesendet! Wir melden uns bald bei Ihnen.')

  // Reset form
  form.value = {
    name: '',
    email: '',
    inquiryType: '',
    message: '',
  }
}
</script>
