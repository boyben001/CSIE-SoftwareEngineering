<template>
  <div class="home">
    <n-loading-bar-provider>
      <n-message-provider>
        <n-notification-provider>
          <n-dialog-provider>
            <AddMeeting />
          </n-dialog-provider>
        </n-notification-provider>
      </n-message-provider>
    </n-loading-bar-provider>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import AddMeeting from '@/components/AddMeeting.vue'
import { NMessageProvider, NLoadingBarProvider, NNotificationProvider, NDialogProvider } from 'naive-ui'

export default defineComponent({
  name: 'newConf',
  components: {
    NLoadingBarProvider,
    NNotificationProvider,
    NDialogProvider,
    NMessageProvider,
    AddMeeting
  }
});
</script>

<style>
.d-flex justify-content-start {
  overflow-y: auto;
}
</style>
