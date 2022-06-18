<template>
  <n-space vertical size="large">
    <n-layout>
      <n-layout-header bordered>
        <Header />
      </n-layout-header>
      <n-layout-content>
        <n-layout has-sider style="height: 93vh">
          <Sidebar />
          <Content />
        </n-layout>
      </n-layout-content>
    </n-layout>
  </n-space>
</template>

<script>
import { defineComponent } from "vue";
import Header from './HeaderBlock.vue'
import Sidebar from './SidebarBlock.vue'
import Content from './ContentBlock.vue'

export default defineComponent({
  components: {
    Header,
    Sidebar,
    Content
  }
});
</script>