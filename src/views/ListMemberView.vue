<template>
  <div class="d-flex justify-content-start">
    <SideBar msg="person" />
    <PersonDetail :membId=membId />
  </div>

</template>

<script>
import { defineComponent } from "vue";
import SideBar from "@/components/SideBar.vue";
import PersonDetail from "@/components/PersonDetail.vue";
import { useRoute } from "vue-router";
import { computed } from "@vue/reactivity";

export default defineComponent({
  name: 'ListMemberView',
  components: {
    SideBar,
    PersonDetail
  },
  setup() {
    const route = useRoute();
    const membId = computed(() => route.params.membId)

    return {
      membId
    }
  },
});
</script>
