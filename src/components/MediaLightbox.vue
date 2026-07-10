<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { largeSrc, type MediaItem } from '@/lib/media'

const props = defineProps<{
  media: MediaItem[]
  startIndex: number
  label: string
}>()

const emit = defineEmits<{ close: [] }>()

const index = ref(props.startIndex)

function prev() {
  index.value = (index.value - 1 + props.media.length) % props.media.length
}
function next() {
  index.value = (index.value + 1) % props.media.length
}

function onKey(e: KeyboardEvent) {
  if (e.key === 'Escape') emit('close')
  else if (e.key === 'ArrowLeft') prev()
  else if (e.key === 'ArrowRight') next()
}

let touchStartX = 0
function onTouchStart(e: TouchEvent) {
  touchStartX = e.changedTouches[0].clientX
}
function onTouchEnd(e: TouchEvent) {
  const dx = e.changedTouches[0].clientX - touchStartX
  if (Math.abs(dx) > 50) (dx > 0 ? prev : next)()
}

onMounted(() => {
  window.addEventListener('keydown', onKey)
  document.body.style.overflow = 'hidden'
})
onUnmounted(() => {
  window.removeEventListener('keydown', onKey)
  document.body.style.overflow = ''
})
</script>

<template>
  <Teleport to="body">
    <div
      class="lightbox"
      role="dialog"
      aria-modal="true"
      @click.self="emit('close')"
      @touchstart.passive="onTouchStart"
      @touchend.passive="onTouchEnd"
    >
      <div class="lb-top">
        <div class="lb-counter">AKTE {{ label.toUpperCase() }} — {{ index + 1 }} / {{ media.length }}</div>
        <button class="lb-close" aria-label="Schließen" @click="emit('close')">✕</button>
      </div>
      <button v-if="media.length > 1" class="lb-arrow lb-prev" aria-label="Zurück" @click="prev">
        ←
      </button>
      <div class="lb-stage" @click.self="emit('close')">
        <video
          v-if="media[index].type === 'video'"
          :key="media[index].src"
          :src="media[index].src"
          controls
          autoplay
          playsinline
          class="lb-media"
        ></video>
        <img
          v-else
          :key="media[index].src"
          :src="largeSrc(media[index].src)"
          :alt="`${label} — Beweismittel ${index + 1}`"
          class="lb-media"
        />
      </div>
      <button v-if="media.length > 1" class="lb-arrow lb-next" aria-label="Weiter" @click="next">
        →
      </button>
    </div>
  </Teleport>
</template>

<style scoped>
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(5, 5, 5, 0.96);
}
.lb-top {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  z-index: 2;
}
.lb-counter {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 12px;
  letter-spacing: 0.15em;
  color: #eeff00;
}
.lb-close {
  background: none;
  border: 1px solid rgba(255, 22, 84, 0.6);
  color: #f0f0ea;
  font-size: 16px;
  line-height: 1;
  padding: 8px 12px;
  cursor: pointer;
}
.lb-close:hover {
  background: #ff1654;
  color: #050505;
}
.lb-stage {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 64px 80px;
}
.lb-media {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border: 1px solid rgba(255, 22, 84, 0.5);
  background: #000;
}
.lb-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  background: rgba(5, 5, 5, 0.7);
  border: 1px solid rgba(255, 22, 84, 0.6);
  color: #f0f0ea;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 20px;
  padding: 14px 16px;
  cursor: pointer;
}
.lb-arrow:hover {
  background: #ff1654;
  color: #050505;
}
.lb-prev {
  left: 16px;
}
.lb-next {
  right: 16px;
}
@media (max-width: 720px) {
  .lb-stage {
    padding: 56px 8px;
  }
  .lb-prev {
    left: 4px;
  }
  .lb-next {
    right: 4px;
  }
}
</style>
