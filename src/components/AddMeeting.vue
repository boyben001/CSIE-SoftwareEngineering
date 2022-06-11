<template>
  <n-form ref="formRef" :model="model" :rules="rules" label-placement="left" require-mark-placement="right-hanging"
    :size="size" label-width="auto" :style="{
      maxWidth: '100%'
    }" style="padding: 5% 10% ;">
    <n-tag :bordered="false" style="font-weight: bold; margin-bottom: 20px; font-size: 28px;">
      會議資訊
    </n-tag>
    <n-form-item label="標題" path="title">
      <n-input v-model:value="model.title" placeholder="" maxlength="20" show-count clearable />
    </n-form-item>
    <n-form-item label="時間" path="time">
      <n-date-picker v-model:value="model.time" placeholder="" type="datetime" />
    </n-form-item>
    <n-form-item label="地點" path="place">
      <n-input v-model:value="model.place" placeholder="" maxlength="30" show-count clearable />
    </n-form-item>
    <n-form-item label="類型" path="selectMeeting">
      <n-select v-model:value="model.selectMeeting" placeholder="" :options="meetingType" />
    </n-form-item>
    <!-- ---------------------------------------------------------- -->
    <div class="d-flex justify-content-between">
      <n-tag :bordered="false" style="font-weight: bold; margin-bottom: 20px; font-size: 28px;">
        與會人員
      </n-tag>
      <n-button attr-type="button" @click="showModal = true">
        新增人員
      </n-button>
      <n-modal v-model:show="showModal" preset="dialog" title="新增人員" positive-text="新增" negative-text="取消"
        @positive-click="submitCallback" @negative-click="cancelCallback" style="width: 50vw">
        <n-card hoverable>
          <AddUser></AddUser>
        </n-card>
      </n-modal>
    </div>
    <n-form-item label="主席" path="selectChair">
      <n-select v-model:value="model.selectChair" placeholder="" :options="people" />
    </n-form-item>
    <n-form-item label="紀錄" path="admin">
      <n-select v-model:value="model.admin" disabled />
    </n-form-item>
    <n-form-item label="與會者" path="attendee">
      <n-select v-model:value="model.attendee" placeholder="" :options="people" multiple />
    </n-form-item>
    <!-- ---------------------------------------------------------- -->
    <n-tag :bordered="false" style="font-weight: bold; margin-bottom: 20px; font-size: 28px;">
      會議內容
    </n-tag>
    <n-form-item label="主席致詞" path="chairSay">
      <n-input v-model:value="model.chairSay" placeholder="" maxlength="100" show-count clearable type="textarea"
        :autosize="{
          minRows: 2,
          maxRows: 3
        }" />
    </n-form-item>
    <AddReport></AddReport>
    <AddDiscussion></AddDiscussion>
    <AddExtempore></AddExtempore>
    <label for="">附件</label>
    <n-upload multiple directory-dnd action="#">
      <n-upload-dragger>
        <div style="margin-bottom: 12px">
          <n-icon size="36" :depth="3">
            <archive-icon />
          </n-icon>
        </div>
        <n-text style="font-size: 16px">
          Click or drag a file to this area to upload
        </n-text>
      </n-upload-dragger>
    </n-upload>
    <!-- ---------------------------------------------------------- -->
    <div style="display: flex; justify-content: center; align-items: center;">
      <n-button round type="primary" @click="handleValidateButtonClick" style=" width: 150px; padding: 10px;">
        新增會議
      </n-button>
    </div>
  </n-form>

  <!-- <pre>{{ JSON.stringify(model, null, 2) }}
</pre> -->

</template>

<script>
import { defineComponent, ref } from "vue";
import { useMessage } from "naive-ui";
import {
  NInput,
  NFormItem,
  NSelect,
  NDatePicker,
  NButton,
  NForm
} from "naive-ui";
import AddUser from "./AddUser.vue"
import AddReport from './AddReport.vue'
import AddDiscussion from './AddDiscussion.vue'
import AddExtempore from './AddExtempore.vue'
import { ArchiveOutline as ArchiveIcon } from '@vicons/ionicons5'
export default defineComponent({
  components: {
    NInput,
    NFormItem,
    NSelect,
    NDatePicker,
    NButton,
    NForm,
    AddUser,
    AddReport,
    AddDiscussion,
    AddExtempore,
    ArchiveIcon
  },
  setup() {
    const formRef = ref(null);
    const message = useMessage();
    return {
      formRef,
      size: ref("large"),
      model: ref({
        inputValue: null,
        textareaValue: null,
        selectMeeting: null,
        selectChair: null,
        admin: "管理員",
        multipleSelectPeople: null,
        datetimeValue: null,
      }),
      showModal: ref(false),
      cancelCallback() {
        message.success("作業取消");
      },
      submitCallback() {
        message.success("新增完成");
      },
      meetingType: ["系務會議", "系教評會", "系課程委員會", "招生暨學生事務委員會", "系發展協會"].map((String) => ({
        label: String,
        value: String
      })),
      people: ["路婉婷", "潘家偉", "郁美玲"].map((String) => ({
        label: String,
        value: String
      })),
      rules: {
        title: {
          required: true,
          trigger: ["blur", "input"],
          message: "必填欄位"
        },
        place: {
          required: true,
          trigger: ["blur", "input"],
          message: "必填欄位"
        },
        chairSay: {
          required: true,
          trigger: ["blur", "input"],
          message: "必填欄位"
        },
        selectMeeting: {
          required: true,
          trigger: ["blur", "change"],
          message: "必填欄位"
        },
        selectChair: {
          required: true,
          trigger: ["blur", "change"],
          message: "必填欄位"
        },
        attendee: {
          type: "array",
          required: true,
          trigger: ["blur", "change"],
          message: "至少選取一位"
        },
        time: {
          type: "number",
          required: true,
          trigger: ["blur", "change"],
          message: "請輸入會議時間"
        },
      },
      handleValidateButtonClick(e) {
        e.preventDefault();
        formRef.value?.validate((errors) => {
          if (!errors) {
            message.success("Valid");
          } else {
            console.log(errors);
            message.error("Invalid");
          }
        });
      }
    };
  },
});
</script>
<style>
form {
  max-height: 100vh;
  overflow-y: scroll;
}
</style>