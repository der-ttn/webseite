import { ref, onMounted, watch } from 'vue'

const isDark = ref(true) // Default to dark mode

export function useDarkMode() {
  const toggleDark = () => {
    isDark.value = !isDark.value
  }

  const applyTheme = () => {
    if (isDark.value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  // Load saved preference and apply theme on mount
  onMounted(() => {
    const saved = localStorage.getItem('darkMode')
    if (saved !== null) {
      isDark.value = saved === 'true'
    }
    applyTheme()
  })

  // Watch for changes and persist to localStorage
  watch(isDark, () => {
    applyTheme()
    localStorage.setItem('darkMode', isDark.value.toString())
  })

  return {
    isDark,
    toggleDark,
  }
}
