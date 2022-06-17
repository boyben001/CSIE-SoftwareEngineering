<template>

  <div class="d-flex justify-content-start">
    <SideBar msg="decision" />
    <DecisionDetail />
  </div>

</template>

<script>
import { defineComponent } from "vue";
import DecisionDetail from "@/components/DecisionDetail.vue";
import SideBar from "@/components/SideBar.vue";

export default defineComponent({
  name: 'DecisionTrackView',
  components: {
    SideBar,
    DecisionDetail,
  }
});
</script>
