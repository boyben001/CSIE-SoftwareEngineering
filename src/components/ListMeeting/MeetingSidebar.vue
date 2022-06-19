<template>
    <n-space vertical style="padding-right:0.5vw">
        <n-card v-for="(meet, index) in meets" :key=index hoverable size="small">
            <router-link :to="`/meeting/${meet.id}`" style="text-decoration:none;">
            <n-h4 style="font-weight: bold; color:rgb(220, 161, 52)">{{ meet.id }}{{ meet.title }}</n-h4>
            <n-tag type="success">
                {{ meet.type }}
            </n-tag>
            <n-text italic>
                <br>
                {{ meet.time }}
            </n-text>
            </router-link>
        </n-card>
    </n-space>
</template>

<script>
import axios from 'axios';
import Cookies from 'js-cookie';

export default {
    name: "MeetingSidebar",
    data() {
        return {
            meets: [{}]
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
                        this.meets = response.data;
                    })
            }
        }
    },
    async mounted() {
        await this.getCurrentMeeting();
    }
};
</script>