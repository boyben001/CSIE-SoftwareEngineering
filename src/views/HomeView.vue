<template>
  <n-calendar v-model:value="value" #="{ year, month, date }" :is-date-disabled="isDateDisabled"
    @update:value="handleUpdateValue" class="calender">
    {{ year }}-{{ month }}-{{ date }}
  </n-calendar>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useMessage } from "naive-ui";
import { isYesterday, addDays } from "date-fns/esm";

export default defineComponent({
  name: 'HomeView',
  setup() {
    const message = useMessage();
    return {
      value: ref(addDays(Date.now(), 1).valueOf()),
      handleUpdateValue(_, { year, month, date }) {
        message.success(`${year}-${month}-${date}`);
      },
      isDateDisabled(timestamp) {
        if (isYesterday(timestamp)) {
          return true;
        }
        return false;
      }
    };
  }
});
</script>

<style scoped>
.calender {
  max-height: 90vh;
  width: 75vw;
  margin: fit-content;
  margin-left: 5vw;
  margin-top: 2vh;
  display: flex;
  align-content: center;
}

;
</style>
