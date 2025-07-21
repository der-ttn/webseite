import { ref, onMounted, watch } from 'vue'

const isDark = ref(true) // Default to dark mode

export function useDarkMode() {
  const toggleDark = () => {
    isDark.value = !isDark.value
  }

  // Apply theme on mount and watch for changes
  onMounted(() => {
    applyTheme()
  })

  watch(isDark, () => {
    applyTheme()
    localStorage.setItem('darkMode', isDark.value.toString())
  })

  const applyTheme = () => {
    if (isDark.value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  // Load saved preference or use default (dark)
  onMounted(() => {
    const saved = localStorage.getItem('darkMode')
    if (saved !== null) {
      isDark.value = saved === 'true'
    }
    applyTheme()
  })

  return {
    isDark,
    toggleDark
  }
}