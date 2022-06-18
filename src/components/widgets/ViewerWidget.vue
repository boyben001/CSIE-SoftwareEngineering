<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'
import { useLoadingBar } from 'naive-ui'

// content
export default defineComponent({
  setup () {
    const loadingBar = useLoadingBar()
    return {
      loading () {
        loadingBar.start()
      }
    }
  }
})
</script>
