<template>
  <n-space justify="space-between" class="navbar">
    <router-link to="./home" style="text-decoration:none;">
      <div class="navbar_title">
        <img class="navbar_icon" src="../assets/icon/csie-logo.png" alt="">
        會議管理系統
      </div>
    </router-link>
    <router-link to="./" class="navbar_avatar">
      <n-avatar round :style="{
        color: 'white',
        backgroundColor: 'purple'
      }">
        嗨嗨
      </n-avatar>
    </router-link>
  </n-space>
</template>

<style scoped>
.navbar{
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