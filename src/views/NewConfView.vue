<template>
  <n-layout>
    <n-scrollbar style="max-height: 100%; padding: 0% 5% " trigger="none">
      <AddMeeting />
    </n-scrollbar>
  </n-layout>
</template>

<script>
import { defineComponent } from "vue";
import AddMeeting from '@/components/AddMeetingForm.vue'

export default defineComponent({
  name: 'newConf',
  components: {
    AddMeeting
  }
});
</script>
