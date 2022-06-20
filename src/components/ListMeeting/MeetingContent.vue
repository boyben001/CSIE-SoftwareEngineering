<template>
    <n-card v-if="meeting.title != null" style="padding: 2rem;">
        <n-h1 style="font-weight: bold;">{{ meeting.title }}</n-h1>
        <n-descriptions label-placement="left" size="large" column="1">
            <n-descriptions-item label="時間">
                {{ meeting.time }}
            </n-descriptions-item>
            <n-descriptions-item label="地點">
                {{ meeting.location }}
            </n-descriptions-item>
            <n-descriptions-item label="類型">
                {{ meeting.type }}
            </n-descriptions-item>
            <n-descriptions-item label="主席">
                {{ allPersonNames[meeting.chair_id - 1] }}
            </n-descriptions-item>
            <n-descriptions-item label="紀錄">
                {{ allPersonNames[meeting.minute_taker_id - 1] }}
            </n-descriptions-item>
        </n-descriptions>
        <n-space vertical>
            <n-h2 style="margin: 1.5rem 0 0.5rem 0; border-bottom: 1.5px solid #dee2e6 ">與會人員</n-h2>
            <n-grid :x-gap="12" :y-gap="8" :cols="12" item-responsive>
                <n-grid-item v-for="(item, index) in meeting.attendee_association" :key="index"
                    span="4 400:3 600:2 800:1">
                    <n-tag type="info" v-if="item.is_present">
                        {{ allPersonNames[item.person_id - 1] }}
                    </n-tag>
                    <n-tag type="error" v-if="!item.is_present">
                        {{ allPersonNames[item.person_id - 1] }}
                    </n-tag>
                </n-grid-item>
            </n-grid>
        </n-space>
        <n-space vertical>
            <n-h2 style="margin: 1.5rem 0 0.5rem 0; border-bottom: 1.5px solid #dee2e6 ">主席致詞</n-h2>
            <n-text>
                {{ meeting.chair_speech }}
            </n-text>
        </n-space>
        <n-space vertical>
            <n-h2 style="margin: 1.5rem 0 0.5rem 0; border-bottom: 1.5px solid #dee2e6 ">報告事項</n-h2>
            <n-ol>
                <n-li v-for="(item, index) in meeting.announcements" :key="index">
                    {{ item.content }}
                </n-li>
            </n-ol>
        </n-space>
        <n-space vertical>
            <n-h2 style="margin: 1.5rem 0 0.5rem 0; border-bottom: 1.5px solid #dee2e6 ">討論事項</n-h2>
            <n-space vertical v-for="(item, index) in meeting.motions" :key="index">
                <n-h3>提案 {{ index + 1 }}</n-h3>
                <n-descriptions label-placement="left" size="large" column="1">
                    <n-descriptions-item label="案由" style="padding-left:5">
                        {{ item.description }}
                    </n-descriptions-item>
                    <n-descriptions-item label="狀態">
                        <n-tag v-if="item.status === '結案'" type="primary" round> {{ item.status }}</n-tag>
                        <n-tag v-else-if="item.status === '執行中'" type="warning" round> {{ item.status }}</n-tag>
                        <n-tag v-else-if="item.status === '討論中'" type="error" round> {{ item.status }}</n-tag>
                    </n-descriptions-item>
                    <n-descriptions-item label="內容">
                        {{ item.content }}
                    </n-descriptions-item>
                    <n-descriptions-item label="主席">
                        {{ allPersonNames[meeting.chair_id - 1] }}
                    </n-descriptions-item>
                    <n-descriptions-item label="決策">
                         {{ item.resolution }}
                    </n-descriptions-item>
                    <n-descriptions-item label="執行">
                        {{ item.execution }}
                    </n-descriptions-item>
                </n-descriptions>
                <n-divider></n-divider>
            </n-space>
        </n-space>
        <n-space vertical>
            <n-h2 style="margin: 1.5rem 0 0.5rem 0; border-bottom: 1.5px solid #dee2e6 ">臨時動議</n-h2>
            <n-ol>
                <n-li v-for="(item, index) in meeting.extempores" :key="index">
                    {{ item.content }}
                </n-li>
            </n-ol>
        </n-space>
    </n-card>
</template>

<script>
import axios from 'axios';
import Cookies from 'js-cookie';

export default {
    name: "MeetingContent",
    components: {
        // SendButtonGroup
    },
    async mounted() {
        await this.getAllPerson()
        console.log('所有名子: ', this.allPersonNames)
    },
    data() {
        return {
            meeting: {},
            allPersonNames: []
        };
    },
    computed: {
        meetingId() {
            return this.$route.params.meetingId;
        },
    },
    watch: {
        meetingId: async function (val) {
            this.meeting = await this.getMeet(val);
        }
    },
    methods: {
        async getMeet(id) {
            // 獲取Cookies當中的login資訊並取得token
            const info = Cookies.get('login')
            const url = 'http://127.0.0.1:8000/meeting/' + id
            if (info) {
                const token = JSON.parse(info).token
                return await axios({
                    method: 'get',
                    url: url,
                    headers: {
                        accept: 'application/json',
                        'Content-Type': 'multipart/form-data',
                        'Authorization': `Bearer ${token}` // Bearer 跟 token 中間有一個空格
                    },
                })
                    .then((response) => {
                        return response.data
                    })
            }
        },
        async getAllPerson() {
            // 獲取Cookies當中的login資訊並取得token
            const info = Cookies.get('login')
            let allPersonName = []
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
                        console.log('success', response)
                        this.attendees = response.data
                        for (var i = 0; i < response.data.length; i++) {
                            allPersonName.push(response.data[i].name);
                        }
                        this.allPersonNames = allPersonName
                        console.log('allPersonName:', this.personOptions)
                    })
            }
        }
    }
}
</script>
