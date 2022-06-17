<template>
  <n-space vertical size="large">
    <n-layout>
      <n-layout-header>
        <NavBar />
      </n-layout-header>
      <n-layout has-sider style="height: 91.7vh">
        <MenuBar />
        <n-layout content-style="padding-left: 24px;">
          <n-scrollbar style="max-height: 91.7vh">
            <router-view />
          </n-scrollbar>
        </n-layout>
      </n-layout>
    </n-layout>
  </n-space>
</template>

<script>
import { defineComponent } from "vue";
import MenuBar from '@/components/MenuBar.vue'
import NavBar from '@/components/NavBar.vue'

export default defineComponent({
  components: {
    MenuBar,
    NavBar,
  }
});
</script>

<style scoped>
.n-layout-header {
  background: rgba(128, 128, 128, 0.2);
}

.n-layout-sider {
  background: rgba(128, 128, 128, 0.3);
}

.n-layout-content {
  background: rgba(128, 128, 128, 0.4);
}
</style>
