<template>

    <!-- First section -->
    <div class="nav-content" v-for="(attendee, index) in attendees" :key=index>
        <router-link :to="{ name: 'personDetail', params: { membId: index+1 } }">
            <div class="topic">
                <h3 class="nav-main-section-header">{{ attendee.name }}</h3>
                <n-tag round :color="{ color: '#d4d5d6', textColor: '#555', borderColor: '#555' }" size="small"
                    class="statusButton">{{ attendee.type }}</n-tag>
            </div>
            <div class="mail">{{ attendee.email }}</div>
            <!-- Break for another section -->
            <hr />
        </router-link>
    </div>

</template>

<script>
import { NTag } from 'naive-ui';
import axios from 'axios';
import Cookies from 'js-cookie';

export default {
    name: "NavBarContent-person",
    data() {
        return {
            attendees: [{}]
        };
    },
    components: {
        NTag
    },
    methods:{
        async getAllPerson(){
            // 獲取Cookies當中的login資訊並取得token
            const info = Cookies.get('login')
            if (info){
                const token = JSON.parse(info).token
                await axios({
                    method: 'get',
                    url: 'http://127.0.0.1:8000/person/',
                    headers: {
                    accept: 'application/json',
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}` // Bearer 跟 token 中間有一個空格
                    }, 
                })
                .then((response)=>{
                    console.log('success', response)
                    this.attendees = response.data
                    console.log('attendees:', this.attendees)
                })
            }
        }
    },
    async mounted(){
        await this.getAllPerson();
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.statusButton {
    margin-top: 10px;
    padding: 0px, 2px;
}

.mail {
    text-align: left;
    padding-left: 7px;
}

.topic {
    display: flex;
    flex-direction: row;
    height: auto;
    margin: 0 auto;
    flex-flow: row nowrap;
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
