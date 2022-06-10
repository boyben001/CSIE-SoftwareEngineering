<template>
    <div class="nav-outer-container">
        <!-- <DeletePersonAlert :deletedname="name" /> -->
        <!-- <SideBarMeet /> -->
        <!-- <SideBarContentDecission /> -->
        <SideBarContentPerson />
    </div>
</template>

<script>
// import DeletePersonAlert from "./DeletePersonAlert.vue";
// import SideBarMeet from "@/components/SideBarContent-meet.vue"
// import SideBarContentDecission from "@/components/SideBarContent-decission.vue";
import SideBarContentPerson from "@/components/SideBarContent-person.vue";

export default {
    name: "NavBar",
    components: {
        // DeletePersonAlert,
        // SideBarMeet,
        // SideBarContentDecission,
        SideBarContentPerson
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-outer-container {
    padding: 0 0.5rem 1rem 0.5rem;
    background-color: #fff;
    width: 290px;
    border-right: 1px solid #ccc;
    overflow-y: auto;
    max-height: 100vh;
}
</style>
