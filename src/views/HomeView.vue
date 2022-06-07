<template>
  <div class="home">
    <div class="d-flex justify-content-between">
      <MenuBar />
      <div class="showComponent w-100">
        <NavBar />
        <EditMeetingVue />
      </div>
    </div>
  </div>
</template>

<script>
import MenuBar from '@/components/MenuBar.vue'
import NavBar from '@/components/NavBar.vue'
import EditMeetingVue from '@/components/EditMeeting.vue'


export default {
  name: 'HomeView',
  components: {
    MenuBar,
    NavBar,
    EditMeetingVue
  }
}
</script>
