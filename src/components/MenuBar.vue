<template>
  <div class="d-flex align-items-start" style="padding-top: 100px;border-right: 1px solid #ced4da;">
    <ul class="nav flex-column">
      <button class="nav-item">
        <a class="nav-link" href="#">
          <i class="bi bi-plus-circle-dotted" style="font-size: 48px; color: green"></i>
        </a>
      </button>
      <button class="nav-item">
        <a class="nav-link" href="#">
          <i class="bi bi-card-list" style="font-size: 48px;"></i>
        </a>
      </button>
      <button class="nav-item">
        <a class="nav-link" href="#">
          <img src="../assets/icon/decisionTrack.png" alt="" style="width: 48px;">
        </a>
      </button>
      <button class="nav-item">
        <a class="nav-link" href="#">
          <img src="../assets/icon/personList.png" alt="" style="width: 48px;">
        </a>
      </button>
    </ul>
    <button>
      <i class="bi bi-caret-left-fill" style="font-size: 24px;"></i>
    </button>
  </div>
</template>


<style scoped>
.nav-item {
  height: 70px;
  display: flex;
  align-items: center;
}

.nav-item:hover {
  background-color: rgb(13 110 253 / 25%);
}
</style>

