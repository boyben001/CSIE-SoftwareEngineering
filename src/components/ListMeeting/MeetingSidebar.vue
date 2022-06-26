<template>
    <n-space vertical style="padding-right:0.5vw; max-height: 100vh">
        <n-card v-for="(meet, index) in meets" :key=index hoverable size="small">
            <router-link :to="`/meeting/${meet.id}`" style="text-decoration:none;">
                <n-h4 style="font-weight: bold;">{{ meet.title }}</n-h4>
                <n-tag type="success">
                    {{ meet.type }}
                </n-tag>
                <n-text depth="3">
                    <br>
                    {{ format_date(meet.time) }}
                </n-text>
            </router-link>
        </n-card>
    </n-space>
</template>

<script>
import axios from 'axios';
import Cookies from 'js-cookie';
import moment from 'moment'

export default {
    name: "MeetingSidebar",
    data() {
        return {
            meets: []
        };
    },
    methods: {
        async getCurrentMeeting() {
            // 獲取Cookies當中的login資訊並取得token
            const info = Cookies.get('login')
            if (info) {
                const token = JSON.parse(info).token
                await axios({
                    method: 'get',
                    url: 'http://127.0.0.1:8000/meeting/',
                    headers: {
                        accept: 'application/json',
                        'Content-Type': 'multipart/form-data',
                        'Authorization': `Bearer ${token}` // Bearer 跟 token 中間有一個空格
                    },
                })
                    .then((response) => {
                        for (var i = 0; i < response.data.length; i++){
                            if (response.data[i].is_draft == true){
                                this.meets.push(response.data[i])
                                console.log('aaa', i)
                                console.log('daa', this.meets)
                            }
                        }
                        console.log('datttaaaa', this.meets)
                    })
            }
        },
        format_date(value) {
            if (value) {
                return moment(String(value)).format('YYYY年MM月DD日 hh時mm分ss秒')
            }
        },
    },
    async mounted() {
        await this.getCurrentMeeting();
    }
};
</script>