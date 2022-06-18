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
import { useRoute } from "vue-router";
import { computed } from "@vue/reactivity";

export default defineComponent({
  name: 'DecisionTrackView',
  components: {
    SideBar,
    DecisionDetail,
  },
  setup() {
    const route = useRoute();
    const deciId = computed(() => route.params.deciId)

    return {
      deciId
    }
  }
});
</script>
