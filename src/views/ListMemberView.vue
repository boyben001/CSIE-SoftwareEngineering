<template>
  <div class="home">
    <div class="d-flex">
      <MenuBar />
      <div class="w-100" style="overflow-y: hidden; max-height: 100vh;">
        <NavBar />
        <n-loading-bar-provider>
          <n-message-provider>
            <n-notification-provider>
              <n-dialog-provider>
                <!-- ============================== -->
                <div class="d-flex justify-content-start">
                  <SideBar msg="person" />
                  <PersonDetail :msg=membId />
                </div>
              </n-dialog-provider>
            </n-notification-provider>
          </n-message-provider>
        </n-loading-bar-provider>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import MenuBar from '@/components/MenuBar.vue'
import NavBar from '@/components/NavBar.vue'
import { NMessageProvider, NLoadingBarProvider, NNotificationProvider, NDialogProvider } from 'naive-ui'
import SideBar from "@/components/SideBar.vue";
import PersonDetail from "@/components/PersonDetail.vue";
import { useRoute } from "vue-router";
import { computed } from "@vue/reactivity";

export default defineComponent({
  name: 'ListMemberView',
  components: {
    NLoadingBarProvider,
    NNotificationProvider,
    NDialogProvider,
    NMessageProvider,
    MenuBar,
    NavBar,
    SideBar,
    PersonDetail
  },
  setup() {
    const route = useRoute();
    const membId = computed(() => route.params.membId)

    return {
      membId
    }
  },
});
</script>
