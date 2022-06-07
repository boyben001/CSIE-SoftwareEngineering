<template>
  <div class="d-flex align-items-center">
    <textarea class="input_subtitle" name="" id="itemText" cols="20" rows="2" placeholder="內容"></textarea>
    <button id="delete" @click="$emit('minusReport')">
      <i class="bi bi-trash-fill"></i>
    </button>
  </div>

</template>
<script>
export default {
  props: {
    amountReport: Number,
  },
  emits: ['minusReport'],
}
</script>


<style>
#delete {
  width: 24px;
}

#itemText {
  padding: 0.5rem 1rem;
}
</style>



