<template>
  <provider>
    <viewer />
  </provider>
</template>

<script>
import { defineComponent } from "vue";
import {Provider, Viewer} from './components/widgets'
// import Layout from '@/layout/IndexBlock.vue'

export default defineComponent({
  components: {
    Provider,
    Viewer
  }
});
</script>
