<template>
    <!-- First section -->
    <div class="nav-content" v-for="decission in decissions" :key=decission.id>
        <router-link :to="{ name: 'decisionDetail', params: { deciId: decission.id } }">
            <div class="topic">
                <h3 class="nav-main-section-header">{{ decission.name }}</h3>
                <n-tag type="info" class="statusButton" v-if="decission.status == '討論中'">{{ decission.status }}</n-tag>
                <n-tag type="warning" class="statusButton" v-else-if="decission.status == '執行中'">{{ decission.status }}
                </n-tag>
                <n-tag type="success" class="statusButton" v-else-if="decission.status == '已完成'">{{ decission.status }}
                </n-tag>
            </div>
            <ul class="tags">
                <li><a href="#" class="tag">{{ decission.meet }}</a></li>
            </ul>
            <!-- Break for another section -->
            <hr />
        </router-link>
    </div>

</template>

<script>
import { NTag } from 'naive-ui';
export default {
    name: "NavBarContent-decision",
    data() {
        return {
            decissions: [
                { id: 1, name: '111年工院盃舉行', status: '討論中', meet: '111年校務會議' },
                { id: 2, name: '112年工院盃舉行', status: '討論中', meet: '112年校務會議' },
                { id: 3, name: '113年工院盃舉行', status: '執行中', meet: '113年校務會議' },
                { id: 4, name: '114年工院盃舉行', status: '已完成', meet: '114年校務會議' },
                { id: 5, name: '115年工院盃舉行', status: '討論中', meet: '115年校務會議' },
                { id: 6, name: '116年工院盃舉行', status: '執行中', meet: '116年校務會議' },
                { id: 7, name: '117年工院盃舉行', status: '討論中', meet: '117年校務會議' },
                { id: 8, name: '118年工院盃舉行', status: '討論中', meet: '118年校務會議' },
                { id: 9, name: '119年工院盃舉行', status: '討論中', meet: '119年校務會議' },
            ],
        };
    },
    components: {
        NTag
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.statusButton {
    margin-top: 10px;
}

.topic {
    display: flex;
    flex-direction: row;
    height: auto;
    margin: 0 auto;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-content: flex-start;
}

.nav-main-section-header {
    margin-right: auto;
}

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
