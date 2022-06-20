<template>
    <n-space vertical style="padding-right:0.5vw;  max-height: 100vh">
        <n-card v-for="(person, index) in people" :key=index hoverable size="small">
            <router-link :to="`/member/${person.id}`" style="text-decoration:none;">
                <n-space justify="space-between">
                    <n-h4 style="font-weight: bold; color:rgb(52, 203, 220)">{{ person.name }}</n-h4>
                    <n-tag type="success" round>
                        {{ person.type }}
                    </n-tag>
                </n-space>
                <n-text italic>
                    {{ person.email }}
                </n-text>
            </router-link>
        </n-card>
    </n-space>
</template>

<script>
import axios from 'axios';
import Cookies from 'js-cookie';

export default {
    name: "MemberSidebar",
    data() {
        return {
            people: [{}]
        };
    },
    methods: {
        async getCurrentMeeting() {
            const info = Cookies.get('login')
            if (info) {
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
                    .then((response) => {
                        this.people = response.data;
                    })
            }
        }
    },
    async mounted() {
        await this.getCurrentMeeting();
    }
};
</script>