<template>
  <n-layout>
    <n-scrollbar style="max-height: 95vh; padding: 0% 5% " trigger="none">
      <AddPerson />
    </n-scrollbar>
  </n-layout>
</template>

<script>
import { defineComponent } from "vue";
import AddPerson from '@/components/AddPerson/AddPersonForm.vue'

export default defineComponent({
  name: 'newPerson',
  components: {
    AddPerson
  }
});
</script>
