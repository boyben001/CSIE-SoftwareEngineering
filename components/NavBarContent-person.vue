<template>
    <!-- First section -->
    <div class="nav-content" v-for="(attendee, index) in attendees" :key=index>
        <div class="topic">
            <h3 class="nav-main-section-header">{{ attendee.name }}</h3> 
            <n-tag 
                round 
                :color="{ color: '#d4d5d6', textColor: '#555', borderColor: '#555' }" 
                size="small" 
                class="statusButton"
            >{{attendee.identity}}</n-tag>
        </div>
        <div class="mail">{{ attendee.mail }}</div>
        <!-- Break for another section -->
        <hr />
    </div>
</template>

<script>
import { NTag } from 'naive-ui';
export default {
    name: "NavBarContent-person",
    data() {
        return {
            attendees: [
                {name:'陳鼎元', identity: '教師', mail: 'a1085520@mail.nuk.edu.tw'},
                {name:'廖健棚', identity: '學生', mail: 'a1085503@mail.nuk.edu.tw'},
                {name:'黃慶源', identity: '校外教師', mail: 'a1085523@mail.nuk.edu.tw'},
                {name:'高銘宏', identity: '業界專家', mail: 'a1085533@mail.nuk.edu.tw'},
                {name:'柳翰揚', identity: '系助理', mail: 'a1085513@mail.nuk.edu.tw'},
                {name:'吳嘉欣', identity: '學生', mail: 'a1085526@mail.nuk.edu.tw'},
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

.statusButton{
    margin-top: 10px;
    padding: 0px, 2px;
}

.mail{
    text-align: left;
    padding-left: 7px;
}

.topic{
    display: flex;
    flex-direction: row;
    height: auto;
    margin: 0 auto;
    flex-flow: row nowrap;
    align-content: flex-start;
}

.nav-main-section-header{
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

/*
.tag:hover {
    background-color: crimson;
    color: white;
}

.tag:hover::after {
    border-left-color: crimson;
}
*/

.nav-content{
    cursor: pointer;
    transition: all 0.25s ease;
}

.nav-content:hover{
    transform: scale(1.1, 1.1);
}
</style>
