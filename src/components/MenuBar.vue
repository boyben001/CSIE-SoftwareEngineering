<template>
  <n-space vertical>
    <n-layout has-sider style="height: 100vh;">
      <n-layout-sider bordered collapse-mode="width" :collapsed-width="80" :width="150" :collapsed="collapsed"
        show-trigger @collapse="collapsed = true" @expand="collapsed = false">

        <!-- first icon -->
        <router-link to="/newConf">
          <n-menu v-model:value="activeKey" :collapsed="collapsed" :collapsed-width="80" :collapsed-icon-size="28"
            :options="menuOptions0" />
        </router-link>
        <!-- second icon -->
        <router-link to="/listConf">
          <n-menu v-model:value="activeKey" :collapsed="collapsed" :collapsed-width="80" :collapsed-icon-size="28"
            :options="menuOptions1" />
        </router-link>
        <!-- third icon -->
        <router-link to="/decisionTrack">
          <n-menu v-model:value="activeKey" :collapsed="collapsed" :collapsed-width="80" :collapsed-icon-size="28"
            :options="menuOptions2" />
        </router-link>
        <!-- fourth icon -->
        <router-link to="/memberList">
          <n-menu v-model:value="activeKey" :collapsed="collapsed" :collapsed-width="80" :collapsed-icon-size="28"
            :options="menuOptions3" />
        </router-link>

      </n-layout-sider>
    </n-layout>
  </n-space>
</template>

<script>
import { defineComponent, h, ref } from "vue";
import { NIcon } from "naive-ui";
import {
  AddCircle as AddMeeting,
  ListCircleSharp as MeetingList,
  BarChartSharp as DiscussionList,
  Person as PersonList
} from "@vicons/ionicons5";

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

const menuOptions0 = [
  {
    label: "新增會議",
    key: "addMeeting",
    icon: renderIcon(AddMeeting),
  }
];
const menuOptions1 = [
  {
    label: "會議列表",
    key: "meetingList",
    icon: renderIcon(MeetingList),
  }
];
const menuOptions2 = [
  {
    label: "決策追蹤",
    key: "discussionList",
    icon: renderIcon(DiscussionList),
  }
];
const menuOptions3 = [
  {
    label: "人員列表",
    key: "personList",
    icon: renderIcon(PersonList),
  }
];

export default defineComponent({
  setup() {
    return {
      activeKey: ref(null),
      collapsed: ref(true),
      menuOptions0,
      menuOptions1,
      menuOptions2,
      menuOptions3,
    };
  }
});
</script>

<style>
.n-layout-toggle-button {
  font-size: 28px !important;
  width: 35px !important;
  height: 35px !important;
  right: 10px !important;
}
</style>