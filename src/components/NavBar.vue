<template>
  <div class="d-flex justify-content-between w-100 px-3 py-1" style="border-bottom: 1px solid #ced4da;">
    <router-link to="./home">
      <div class="navbar_title">
        會議管理系統
      </div>
    </router-link>
    <router-link to="./">
      <button class="myInfo" style="display: block">
        <img src="../assets/icon/myself.png" alt="" style="width: 30px;">
      </button>
    </router-link>
  </div>
</template>

<style>
.navbar_title {
  font-weight: bold;
  font-size: 28px;
  text-align: center;
}
</style>