<template>
  <div class="d-flex justify-content-start">
    <SideBar msg="meet" />
    <MeetingDetail :confId=confId />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import MeetingDetail from "@/components/MeetingDetail.vue";
import SideBar from "@/components/SideBar.vue";
import { useRoute } from "vue-router";
import { computed } from "@vue/reactivity";

export default defineComponent({
  name: 'ListConfView',
  components: {
    SideBar,
    MeetingDetail
  },
  setup() {
    const route = useRoute();
    const confId = computed(() => route.params.confId)

    return {
      confId
    }
  }
});
</script>
