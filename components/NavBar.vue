<template>
    <div class="nav-outer-container">
        <DeletePersonAlert :deletedname="name"/>
    </div>
</template>

<script>
import DeletePersonAlert from "./DeletePersonAlert.vue";
export default {
    name: "NavBar",
    components: { DeletePersonAlert },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.nav-outer-container {
    padding: 1em 1.5em;
    background-color: #fff;
    width: 290px;
    border-right: 1px solid #ccc;
    position: fixed;
    top: 0;
    bottom: 0;
    overflow-y: auto;
}
</style>
