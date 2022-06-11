<template>
  <n-card title="報告事項" hoverable style="margin: 15px 0">
    <n-form ref="formRef" :model="dynamicForm" :style="{ maxWidth: '100%' }">
      <n-form-item v-for="(item, index) in dynamicForm.reports" :key="index" :label="`事項編號 - ${index + 1}`"
        :path="`reports[${index}].report`">
        <n-input v-model:value="item.report" placeholder="" maxlength="50" show-count clearable type="textarea"
          :autosize="{
            minRows: 2,
            maxRows: 3
          }" />
        <n-button style="margin-left: 12px" @click="removeItem(index)">
          Remove
        </n-button>
      </n-form-item>
    </n-form>
    <n-button attr-type="button" @click="addItem">
      新增報告事項
    </n-button>
  </n-card>

</template>

<script>
import { defineComponent, reactive, ref } from "vue";

export default defineComponent({
  setup() {
    const formRef = ref(null);

    const dynamicForm = reactive({
      reports: [{ report: "" }]
    });

    const removeItem = (index) => {
      dynamicForm.reports.splice(index, 1);
    };

    const addItem = () => {
      dynamicForm.reports.push({ report: "" });
    };

    return {
      formRef,
      dynamicForm,
      addItem,
      removeItem
    };
  }
});
</script>

