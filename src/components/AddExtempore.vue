<template>
  <n-card title="臨時動議" hoverable style="margin: 15px 0">
    <n-form ref="formRef" :model="dynamicForm" :style="{ maxWidth: '100%' }">
      <n-form-item v-for="(item, index) in dynamicForm.extempores" :key="index" :label="`編號 - ${index + 1}`"
        :path="`extempores[${index}].extempore`">
        <n-input v-model:value="item.extempore" placeholder="" maxlength="50" show-count clearable type="textarea"
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
      新增臨時動議
    </n-button>
  </n-card>

</template>

<script>
import { defineComponent, reactive, ref } from "vue";

export default defineComponent({
  setup() {
    const formRef = ref(null);

    const dynamicForm = reactive({
      extempores: [{ extempore: "" }]
    });

    const removeItem = (index) => {
      dynamicForm.extempores.splice(index, 1);
    };

    const addItem = () => {
      dynamicForm.extempores.push({ report: "" });
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

