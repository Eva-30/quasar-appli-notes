import { ref, watch, onMounted, onUnmounted } from 'vue'

const useLocalStorage = (key, defaultValue) => {
  const value = ref(defaultValue)
  const read = () => {
    const stringValue = window.localStorage.getItem(key)
    if (stringValue != null) value.value = JSON.parse(stringValue)
  }

  read()

  onMounted(() => {
    window.addEventListener('storage', read)
  })
  onUnmounted(() => {
    window.removeEventListener('storage', read)
  })

  const write = () => {
    window.localStorage.setItem(key, JSON.stringify(value.value))
  }
  watch([value], write, { deep: true })

  return value
}

export const useLocalNotes = () => {
  return useLocalStorage('notes', [])
}
