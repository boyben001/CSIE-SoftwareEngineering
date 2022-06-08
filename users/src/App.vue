<template>
  <editUserVue />
  
  <!-- <person-details/> -->
</template>

<script>
import editUserVue from './components/edit-user.vue'
//import PersonDetails from './components/person-details.vue'

export default {


  name: 'App',
  components: {
    editUserVue
    // PersonDetails
  }
}
</script>

<style>
    .inner {
      padding: 10px 40px;
      font-weight: 500;
    }

    input,
    select,
    textarea {
      width: 80vw;
      margin: 5px 0 0 0;
      display: block;
    }

    button {
      width: 125px;
    }
  </style>
