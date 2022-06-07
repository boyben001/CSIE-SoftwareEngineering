<template>
  <div class="d-flex justify-content-center align-items-center vh-100" style="background-color: #D9D9D9;">
    <div class=" outer d-flex justify-content-center align-items-center flex-column">
      <h2 class="mb-5 login_title">高雄大學資工系會議管理系統</h2>
      <div class="form-floating mb-3 d-flex flex-column align-items-center">
        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
        <label for="floatingInput">Email address</label>
        <button type="button" class="login_btn btn btn-outline-primary mt-4">登入</button>
      </div>
    </div>
  </div>
</template>

<script>
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
  width: 150px;
}
</style>