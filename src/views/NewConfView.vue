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
                <AddMeeting></AddMeeting>
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
import AddMeeting from '@/components/AddMeeting.vue'
import { NMessageProvider, NLoadingBarProvider, NNotificationProvider, NDialogProvider } from 'naive-ui'

export default defineComponent({
  name: 'HomeView',
  components: {
    NLoadingBarProvider,
    NNotificationProvider,
    NDialogProvider,
    NMessageProvider,
    MenuBar,
    NavBar,
    AddMeeting
  }
});
</script>

<style>
.d-flex justify-content-start {
  overflow-y: auto;
}
</style>
