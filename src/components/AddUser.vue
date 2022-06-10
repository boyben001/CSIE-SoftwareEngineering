<template>
  <n-form label-placement="top" label-width="auto">
    <n-form-item label="姓名">
      <n-input placeholder="" />
    </n-form-item>
    <n-form-item label="性別">
      <n-radio :checked="checkedValue === '男'" value="男" name="basic-demo" @change="handleChange">
        男
      </n-radio>
      <n-radio :checked="checkedValue === '女'" value="女" name="basic-demo" @change="handleChange">
        女
      </n-radio>
    </n-form-item>
    <n-form-item label="手機">
      <n-input placeholder="" />
    </n-form-item>
    <n-form-item label="電子郵件">
      <n-input placeholder="" />
    </n-form-item>
    <n-form-item label="類別">
      <n-select v-model:value="persontype" :options="options" class="my-3" />
    </n-form-item>
    <n-form-item class="d-flex flex-column">
      <n-space v-if="persontype == 'Department Teacher'" class="d-flex flex-column">
        <n-form-item label="職稱">
          <n-input placeholder="" />
        </n-form-item>
        <n-form-item label="辦公室電話">
          <n-input placeholder="" />
        </n-form-item>
      </n-space>
      <n-space v-if="persontype == 'Department Assistant'">
        <n-form-item label="辦公室電話">
          <n-input placeholder="" />
        </n-form-item>
      </n-space>
      <n-space v-if="persontype == 'Outside Teacher'">
        <n-form-item label="學校名稱">
          <n-input placeholder="" />
        </n-form-item>
        <n-form-item label="系所名稱">
          <n-input placeholder="" />
        </n-form-item>
        <n-form-item label="職稱">
          <n-input placeholder="" />
        </n-form-item>
        <n-form-item label="辦公室電話">
          <n-input placeholder="" />
        </n-form-item>
        <n-form-item label="地址">
          <n-input placeholder="" />
        </n-form-item>
        <n-form-item label="銀行帳戶">
          <n-input placeholder="" />
        </n-form-item>
      </n-space>
      <n-space v-if="persontype == 'Experts'">
        <n-form-item label="公司名稱">
          <n-input placeholder="" />
        </n-form-item>
        <n-form-item label="職稱">
          <n-input placeholder="" />
        </n-form-item>
        <n-form-item label="職稱">
          <n-input placeholder="" />
        </n-form-item>
        <n-form-item label="辦公室電話">
          <n-input placeholder="" />
        </n-form-item>
        <n-form-item label="地址">
          <n-input placeholder="" />
        </n-form-item>
        <n-form-item label="銀行帳戶">
          <n-input placeholder="" />
        </n-form-item>
      </n-space>
      <n-space v-if="persontype == 'Students'">
        <n-form-item label="學號">
          <n-input placeholder="" />
        </n-form-item>
        <n-form-item label="學制">
          <n-input placeholder="" />
        </n-form-item>
        <n-form-item label="年級">
          <n-input placeholder="" />
        </n-form-item>
      </n-space>
    </n-form-item>
  </n-form>
</template>

<script>
import { defineComponent, ref } from "vue";
import {
  NInput,
  NFormItem,
  // NSelect,
  // NDatePicker,
  // NButton,
  NForm
} from "naive-ui";

export default defineComponent({
  name: 'AddUser',
  components: {
    // NButton,
    NInput,
    NFormItem,
    // NSelect,
    // NDatePicker,
    NForm
  },
  setup() {
    const checkedValueRef = ref(null);

    return {
      disabled: ref(true),
      checkedValue: checkedValueRef,
      handleChange(e) {
        checkedValueRef.value = e.target.value;
      },
      value: ref(null),
      options: [
        {
          label: "系上教師",
          value: "Department Teacher"
        },
        {
          label: "系助理",
          value: "Department Assistant"
        },
        {
          label: "校外教師",
          value: "Outside Teacher"
        },
        {
          label: "業界專家",
          value: "Experts"
        },
        {
          label: "學生",
          value: "Students"
        },
      ]
    };
  },
  data() {
    return {
      persontype: ''
    }
  },
  methods: {
    resetData() {
      this.name = ''
      this.phone = ''
      this.email = ''
      this.personrole = ''
    },
  }
})
</script>