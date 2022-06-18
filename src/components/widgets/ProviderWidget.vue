<template>
  <n-config-provider :theme="theme">
    <n-global-style />
    <n-loading-bar-provider>
      <n-message-provider>
        <n-dialog-provider>
          <slot />
        </n-dialog-provider>
      </n-message-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>

<script>
import { defineComponent, computed } from "vue";
import { useOsTheme, darkTheme } from "naive-ui";

export default defineComponent({
  setup() {
    const osThemeRef = useOsTheme();
    return {
      theme: computed(() => osThemeRef.value === "dark" ? darkTheme : null),
      osTheme: osThemeRef
    };
  }
});
</script>
