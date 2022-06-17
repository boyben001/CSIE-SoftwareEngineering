<template>
  <n-h2 style="--font-size: 60px; --font-weight: 100">
    高雄大學資工系會議管理系統
  </n-h2>
  <n-card size="large" style="--padding-bottom: 30px">
    <n-auto-complete v-model:value="value" :input-props="{
          autocomplete: 'disabled'
        }" :options="options" placeholder="Email" />
    <n-button tertiary type="primary" @click="handleLogin">
      登入
    </n-button>
  <br>
  </n-card>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import { NButton } from 'naive-ui'
import Cookies from 'js-cookie'

export default defineComponent({
  components: {
    NButton
  },
  data() {
    return{
      loginForm: {
        usermail: '',
        token: ''
      }
    }
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
  },
  methods: {
    handleLogin() {
      const token = 'asds32adsavrAS3Fadf5567' // token本身就是加密過的字串，隨意
      let usermail = this.value
      // 帳號密碼需驗證不能為空
      if (usermail !== '') {
        this.loginForm.token = token
        this.loginForm.usermail = usermail
      } else {
        alert('帳號密碼不能為空')
      }

      var date = new Date();
      date.setTime(date.getTime()+(10*60*1000)); //十分鐘後 cookie 會過期
      console.log(date)
      
      Cookies.set('login', JSON.stringify(this.loginForm), { expires: date })
      console.log(this.loginForm)
      
      // cookie當中有token被設置才能改變路由
      if (Cookies.get('login') && this.loginForm.token) {
        this.$router.push({name: 'home'})
      }
    },
    
    // 將Cookies清除的測試用button事件
    removeCookie() {
      Cookies.remove('login')
    }
  }
});
</script>


<style scoped>
.n-h2 {
  margin: 20vh auto 20px;
  text-align: center;
  letter-spacing: 5px;
  opacity: 0.8;
}
.n-card {
  margin: 0 auto;
  text-align: center;  
  max-width: 380px;
  flex-wrap: wrap;
  box-shadow: var(--box-shadow);
}
.n-button {
  margin-top: 20px;
  width: 50%;
  padding: 10px;
}
</style>