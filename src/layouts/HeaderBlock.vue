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
          {{ user.name }}
        </n-avatar>
      </n-button>

    </n-dropdown>
  </n-space>
</template>

<script>
import axios from 'axios';
import { defineComponent, h, ref, onMounted } from "vue";
import {
  PersonCircleOutline as UserIcon,
  Pencil as EditIcon,
  LogOutOutline as LogoutIcon,
  Body as BodyIcon
} from '@vicons/ionicons5'
import { NIcon } from "naive-ui";
import Cookies from 'js-cookie';

const renderIcon = (icon) => {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon)
    });
  };
};



export default defineComponent({
  setup() {

    const info = Cookies.get('login')
    const mail = JSON.parse(info).usermail
    const personOptions = ref([])
    const user = ref({})

    // TODO: 把串接處理
    const options = ref([]) 

    onMounted(async () => {
      await methods.getAllPerson()
      await getCurrentUser()
      options.value = [
      {
        label: "👋 你好 " + user.value.name,
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
        url: "/member/" + user.value.id
      },
      {
        label: "編輯個人資料",
        key: "edit_person_data",
        icon: renderIcon(EditIcon),
        url: "/edit-person/" + user.value.id
      },
      {
        // TODO: token 需要清空
        label: "登出",
        key: "logout",
        icon: renderIcon(LogoutIcon),
        url: "/login"
      }
    ]
    })

    const getCurrentUser = () => {
      for (let i = 0; i < personOptions.value.length; i++){
        if (personOptions.value[i].email == mail){
            user.value = personOptions.value[i]
        }
      }
    }

    const methods = {
            async getAllPerson() {
                // 獲取Cookies當中的login資訊並取得token
                const info = Cookies.get('login')
                let allPersonName = []
                if (info) {
                    const token = JSON.parse(info).token
                    await axios({
                        method: 'get',
                        url: 'http://127.0.0.1:8000/person/',
                        headers: {
                            accept: 'application/json',
                            'Content-Type': 'multipart/form-data',
                            'Authorization': `Bearer ${token}` // Bearer 跟 token 中間有一個空格
                        },
                    })
                        .then((response) => {
                            console.log('success', response.data)
                            for (var i = 0; i < response.data.length; i++) {
                                allPersonName.push({name: response.data[i].name, email: response.data[i].email, id: response.data[i].id});
                            }
                            personOptions.value = allPersonName
                        })
                }
            },
    }

    return {
      options,
      user,
      getCurrentUser,
      methods,
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