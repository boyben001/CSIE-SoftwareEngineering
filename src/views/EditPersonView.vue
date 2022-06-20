<template>
  <n-layout>
    <n-scrollbar style="max-height: 100%; padding: 0% 5% " trigger="none">
      <EditPerson />
    </n-scrollbar>
  </n-layout>
</template>

<script>
import { defineComponent } from "vue";
import EditPerson from '@/components/EditPersonForm.vue'

export default defineComponent({
  name: 'editPerson',
  components: {
    EditPerson
  }
});
</script>
