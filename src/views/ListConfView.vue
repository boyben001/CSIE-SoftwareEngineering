<template>
  <div class="d-flex justify-content-start">
    <SideBar msg="meet" />
    <MeetingDetail />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import MeetingDetail from "@/components/MeetingDetail.vue";
import SideBar from "@/components/SideBar.vue";

export default defineComponent({
  name: 'ListConfView',
  components: {
    SideBar,
    MeetingDetail
  }
});
</script>
