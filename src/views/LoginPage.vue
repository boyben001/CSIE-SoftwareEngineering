<template>
  <div class="d-flex justify-content-center align-items-center vh-100" style="background-color: #D9D9D9;">
    <div class=" outer d-flex justify-content-center align-items-center flex-column">
      <h2 class="mb-5 login_title">高雄大學資工系會議管理系統</h2>
      <div class="form-floating mb-3 d-flex flex-column align-items-center">
        <n-auto-complete v-model:value="value" :input-props="{
          autocomplete: 'disabled'
        }" :options="options" placeholder="Email" />
        <router-link to="/home">
          <n-button class="login_btn" tertiary type="primary">
            登入
          </n-button>
        </router-link>

      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import { NButton } from 'naive-ui'

export default defineComponent({
  components: {
    NButton
  },
  setup() {
    const valueRef = ref("");
    return {
      value: valueRef,
      options: computed(() => {
        return ["@gmail.com", "@yahooo.com.tw", "@mail.nuk.edu.tw"].map((suffix) => {
          const prefix = valueRef.value.split("@")[0];
          return {
            label: prefix + suffix,
            value: prefix + suffix
          };
        });
      })
    };
  }
});
</script>

<style>
.login_title {
  text-align: center;
}

.form-floating {
  width: 350px;
}

.outer {
  background-color: #fff;
  border-radius: 20px;
  width: 60vw;
  height: 55vh;
  box-shadow: 0 0 0 20px inset rgba(216, 216, 216, 0.2);
}

.login_btn {
  margin: 20px 0;
  width: 150px;
}

a {
  text-decoration: none;
}
</style>