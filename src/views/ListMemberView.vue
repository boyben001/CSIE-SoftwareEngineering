<template>
  <n-layout has-sider style="max-height: 100vh">
    <n-layout style="padding-left:1.5vw">
      <n-grid :cols="4">
        <n-gi>
          <n-scrollbar style="max-height:95vh">
            <SideBar />
          </n-scrollbar>
        </n-gi>
        <n-gi span="3">
          <n-scrollbar style="max-height:95vh">
            <Content />
          </n-scrollbar>
        </n-gi>
      </n-grid>
    </n-layout>
  </n-layout>
</template>

<script>
import { defineComponent } from "vue";
import Content from "@/components/ListMember/MemberContent.vue";
import SideBar from "@/components/ListMember/MemberSidebar.vue";

export default defineComponent({
  name: 'ListMemberView',
  components: {
    SideBar,
    Content
  },
});
</script>
