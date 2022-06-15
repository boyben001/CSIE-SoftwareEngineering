<template>
    <!-- First section -->
    <div class="nav-content" v-for="meet in meets" :key=meet.id>
        <router-link :to="{ name: 'meetingDetail', params: { confId: meet.id } }">
            <h3 class="nav-main-section-header">{{ meet.name }}</h3>
            <ul class="tags">
                <li><a href="#" class="tag">{{ meet.type }}</a></li>
                <li><a href="#" class="tag">{{ meet.time }}</a></li>
            </ul>
            <!-- Break for another section -->
            <hr />
        </router-link>
    </div>
</template>

<script>
export default {
    name: "NavBarContent-meet",
    data() {
        return {
            meets: [
                { id: 1, name: '111年校務會議', type: '校務會議', time: '6月1號 14:00' },
                { id: 2, name: '112年校務會議', type: '校務會議', time: '6月2號 14:00' },
                { id: 3, name: '113年校務會議', type: '校務會議', time: '6月3號 14:00' },
                { id: 4, name: '114年校務會議', type: '校務會議', time: '6月4號 14:00' },
                { id: 5, name: '115年校務會議', type: '校務會議', time: '6月5號 14:00' },
                { id: 6, name: '116年校務會議', type: '校務會議', time: '6月6號 14:00' },
                { id: 7, name: '117年校務會議', type: '校務會議', time: '6月6號 14:00' },
                { id: 8, name: '118年校務會議', type: '校務會議', time: '6月6號 14:00' },
                { id: 9, name: '114年校務會議', type: '校務會議', time: '6月4號 14:00' },
                { id: 10, name: '115年校務會議', type: '校務會議', time: '6月5號 14:00' },
                { id: 11, name: '116年校務會議', type: '校務會議', time: '6月6號 14:00' },
                { id: 12, name: '117年校務會議', type: '校務會議', time: '6月6號 14:00' },
                { id: 13, name: '118年校務會議', type: '校務會議', time: '6月6號 14:00' },
            ],
        };
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-main-section-header {
    font-size: 1em;
    margin: 0.1em 0;
    padding: 0.5em;
    text-align: left;
}

.tags {
    list-style: none;
    margin: 0 0 0 10px;
    overflow: hidden;
    padding: 0;

}

.tags li {
    float: left;
}

.tag {
    background: #eee;
    border-radius: 3px 0 0 3px;
    color: #999;
    display: inline-block;
    height: 26px;
    line-height: 26px;
    padding: 0 20px 0 23px;
    position: relative;
    margin: 0;
    text-decoration: none;
    -webkit-transition: color 0.2s;
}

.tag::before {
    background: #fff;
    border-radius: 10px;
    box-shadow: inset 0 1px rgba(0, 0, 0, 0.25);
    content: "";
    height: 6px;
    left: 10px;
    position: absolute;
    width: 6px;
    top: 10px;
}

.tag::after {
    background: #fff;
    border-bottom: 13px solid transparent;
    border-left: 10px solid #eee;
    border-top: 13px solid transparent;
    content: "";
    position: absolute;
    right: 0;
    top: 0;
}


.nav-content {
    cursor: pointer;
    transition: all 0.25s ease;
}

.nav-content:hover {
    transform: scale(1.05, 1.05);
}
</style>
