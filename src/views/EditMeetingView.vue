<template>
  <n-layout>
    <n-scrollbar style="max-height: 95vh; padding: 0% 5% " trigger="none">
      <EditMeeting />
    </n-scrollbar>
  </n-layout>
</template>

<script>
import { defineComponent } from "vue";
import EditMeeting from '@/components/EditMeetingForm.vue'

export default defineComponent({
  name: 'editMeeting',
  components: {
    EditMeeting
  }
});
</script>
