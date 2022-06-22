<template>
  <n-layout>
    <n-scrollbar style="max-height: 95vh; padding: 0% 5% " trigger="none">
      <AddMeeting />
    </n-scrollbar>
  </n-layout>
</template>

<script>
import { defineComponent } from "vue";
import AddMeeting from '@/components/AddMeeting/AddMeetingForm.vue'

export default defineComponent({
  name: 'newMeeting',
  components: {
    AddMeeting
  }
});
</script>
