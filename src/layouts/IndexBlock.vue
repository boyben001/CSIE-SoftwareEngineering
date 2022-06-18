<template>
  <n-space vertical size="large">
    <n-layout>
      <n-layout-header>
        <Header />
      </n-layout-header>
      <n-layout has-sider style="height: 93.3vh">
        <Sidebar />
        <n-layout content-style="padding-left: 24px;">
          <n-scrollbar style="max-height: 93.3vh">
            <Content />
          </n-scrollbar>
        </n-layout>
      </n-layout>
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