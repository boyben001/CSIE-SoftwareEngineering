<template>
  <n-layout-sider bordered show-trigger="bar" collapse-mode="width" :width="180" :native-scrollbar="false">

    <n-menu :collapsed-icon-size="28" :icon-size="28" :options="menuOptions" />

  </n-layout-sider>
</template>

<script>
import { defineComponent, h, ref } from "vue";
import { RouterLink } from 'vue-router'
import { NIcon } from "naive-ui";
import {
  AddCircle as AddMeeting,
  ListCircleSharp as MeetingList,
  BarChartSharp as MotionList,
  Person as PersonList,
  PersonAdd as AddPerson
} from "@vicons/ionicons5";

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

const menuOptions = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'newMeeting',
          }
        },
        { default: () => '新增會議' }
      ),
    key: "addMeeting",
    icon: renderIcon(AddMeeting),
  },
   {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'newPerson',
          }
        },
        { default: () => '新增人員' }
      ),
    key: "addPerson",
    icon: renderIcon(AddPerson),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'listMeeting',
          }
        },
        { default: () => '會議列表' }
      ),
    key: "meetingList",
    icon: renderIcon(MeetingList),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'listMotion',
          }
        },
        { default: () => '決策追蹤' }
      ),
    key: "motionList",
    icon: renderIcon(MotionList),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'listMember',
          }
        },
        { default: () => '人員列表' }
      ),
    key: "personList",
    icon: renderIcon(PersonList),
  }
]

export default defineComponent({
  setup() {
    return {
      activeKey: ref(null),
      collapsed: ref(true),
      menuOptions,
    };
  }
});
</script>