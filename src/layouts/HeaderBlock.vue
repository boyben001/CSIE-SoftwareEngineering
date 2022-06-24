<template>
  <n-space justify="space-between" class="navbar">
    <router-link to="/home" style="text-decoration:none;">
      <div class="navbar_title">
        <img class="navbar_icon" src="../assets/icon/csie-logo.png" alt="">
        會議管理系統
      </div>
    </router-link>
    <n-dropdown trigger="click" :options="options" :render-label="renderDropdownLabel">
      <n-button text style="padding-top:5px">
        <n-avatar round :options="options" :style="{
          color: 'white',
          backgroundColor: 'purple'
        }">
        <!-- TODO: 替換 current person name -->
          嗨嗨
        </n-avatar>
      </n-button>

    </n-dropdown>
  </n-space>
</template>

<script>
import { defineComponent, h } from "vue";
import {
  PersonCircleOutline as UserIcon,
  Pencil as EditIcon,
  LogOutOutline as LogoutIcon,
  Body as BodyIcon
} from '@vicons/ionicons5'
import { NIcon } from "naive-ui";

const renderIcon = (icon) => {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon)
    });
  };
};

// TODO: 把串接處理
const options = [
  {
    label: "👋 你好 嗨嗨",
    key: "header",
    type: "title",
    icon: renderIcon(BodyIcon),
  },
  {
    key: "header-divider",
    type: "divider",
  },
  {
    label: "個人資料",
    key: "person_data",
    icon: renderIcon(UserIcon),
    // person_id
    url: "/member/3"
  },
  {
    label: "編輯個人資料",
    key: "edit_person_data",
    icon: renderIcon(EditIcon),
    // edit-person/person_id
    url: "/member/3"
  },
  {
    // TODO: token 需要清空
    label: "登出",
    key: "logout",
    icon: renderIcon(LogoutIcon),
    url: "/login"
  }
]

export default defineComponent({
  setup() {
    return {
      options,
      renderDropdownLabel(option) {
        if (option.type === "title") {
          return option.label;
        }
        return h("a", {
          href: option.url,
        }, {
          default: () => option.label
        });
      },
    };
  }
});
</script>


<style scoped>
.navbar {
  padding-top: 2px;
  padding-bottom: 2px;
}

.navbar_title {
  margin-left: 15px;
  color: rgb(52, 220, 150);
  font-weight: bold;
  font-size: 28px;
  text-align: center;
}

.navbar_icon {
  width: 32px;
  font-size: 28px;
  text-align: center;
}

.navbar_avatar {
  margin-top: 4px;
  margin-right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>