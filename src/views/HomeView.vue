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
                <!-- <AddMeeting /> -->
                <!-- ============================== -->
                <div class="d-flex justify-content-start">
                  <SideBar />
                  <MeetingDetail />
                  <!-- <DecisionDetail /> -->
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
// import AddMeeting from '@/components/AddMeeting.vue'
import { NMessageProvider, NLoadingBarProvider, NNotificationProvider, NDialogProvider } from 'naive-ui'
import MeetingDetail from "@/components/MeetingDetail.vue";
// import DecisionDetail from "@/components/DecisionDetail.vue";
import SideBar from "@/components/SideBar.vue";

export default defineComponent({
  name: 'HomeView',
  components: {
    NLoadingBarProvider,
    NNotificationProvider,
    NDialogProvider,
    NMessageProvider,
    MenuBar,
    NavBar,
    // ==============
    // AddMeeting
    // ==============
    SideBar,
    MeetingDetail,
  }
});
</script>

