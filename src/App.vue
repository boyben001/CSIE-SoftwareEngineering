<template>
  <!-- <Conference_detail /> -->
  <Decision_detail></Decision_detail>
</template>

<script>
import Decision_detail from './components/decision_detail.vue';
// import Conference_detail from './components/conference_detail.vue'

export default {
  name: 'App',
  components: {
    Decision_detail
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
