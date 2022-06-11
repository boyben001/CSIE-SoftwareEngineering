<template>
    <div class="nav-outer-container">
        <!-- <DeletePersonAlert :deletedname="name" /> -->
        <div v-if="msg == 'meet'">
            <SideBarContentMeet />
        </div>
        <div v-if="msg == 'decision'">
            <SideBarContentDecission />
        </div>
        <div v-if="msg == 'person'">
            <SideBarContentPerson />
        </div>
    </div>
</template>

<script>
// import DeletePersonAlert from "./DeletePersonAlert.vue";
import SideBarContentMeet from "./SideBarContent-meet.vue";
import SideBarContentPerson from "@/components/SideBarContent-person.vue";
import SideBarContentDecission from "./SideBarContent-decission.vue";

export default {
    name: "NavBar",
    props: {
        msg: String
    },
    components: {
        // DeletePersonAlert,
        // SideBarMeet,
        // SideBarContentDecission,
        SideBarContentPerson,
        SideBarContentDecission,
        SideBarContentMeet
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
