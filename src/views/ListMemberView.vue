<template>

  <div class="d-flex justify-content-start">
    <SideBar msg="person" />
    <PersonDetail />
  </div>

</template>

<script>
import { defineComponent } from "vue";
import SideBar from "@/components/SideBar.vue";
import PersonDetail from "@/components/PersonDetail.vue";

export default defineComponent({
  name: 'ListMemberView',
  components: {
    SideBar,
    PersonDetail
  }
});
</script>
