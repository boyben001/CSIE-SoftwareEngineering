<template>
  <div class="d-flex justify-content-center align-items-center my-3">
    <div class="inner">
      <h6>案由</h6>
      <input type="text">
      <h6>狀態</h6>
      <select name="" id="">
        <option value="dicuss">討論中</option>
        <option value="execute">執行中</option>
        <option value="finish">結案</option>
      </select>
      <h6>內容</h6>
      <textarea name="" id="" cols="20" rows="2"></textarea>
      <h6>決策</h6>
      <textarea name="" id="" cols="20" rows="2"></textarea>
      <h6>執行</h6>
      <textarea name="" id="" cols="20" rows="2"></textarea>
    </div>
    <button id="delete" @click="$emit('minusDiscuss')">
      <i class=" bi bi-trash-fill"></i>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    amountDiscuss: Number
  },
  emits: ['minusDiscuss'],
}
</script>

<style>
.inner {
  border: 1px solid #ced4da;
  padding: 0.5rem;
}

.inner input,
.inner textarea,
.inner select {
  width: 53vw;
}

#delete {
  border: none;
  background-color: transparent;
}

.bi-trash-fill {
  color: #92979c;
  font-size: 24px;
}

.bi-trash-fill:hover {
  color: #ff0000;
}
</style>