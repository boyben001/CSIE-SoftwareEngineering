<template>
    <n-card style="padding: 2rem;">
        <n-h1>{{ meeting.title }}</n-h1>
        <n-space vertical>
            <n-tag type="info" round>時間：{{ meeting.time }}</n-tag>
            <n-tag type="info" round>地點：{{ meeting.location }}</n-tag>
            <n-tag type="info" round>類型：{{ meeting.type }}</n-tag>
            <n-tag type="info" round>主席：{{ meeting.chair_id }}</n-tag>
            <n-tag type="info" round>紀錄：{{ meeting.minute_taker_id }}</n-tag>
        </n-space>
        <n-space vertical>
            <n-h2 style="margin: 1.5rem 0 0.5rem 0; border-bottom: 1.5px solid #dee2e6 ">與會人員</n-h2>
            <n-space>
                <n-space v-for="(item, index) in meeting.attendee_association" :key="index"
                    style="margin: 0px !important">
                    <n-tag type="info" v-if="item.is_present">
                        {{ item.person_id }}
                    </n-tag>
                </n-space>
            </n-space>
        </n-space>
        <n-space vertical>
            <n-h2 style="margin: 1.5rem 0 0.5rem 0; border-bottom: 1.5px solid #dee2e6 ">主席致詞</n-h2>
            <n-card>
                <template #action>
                    {{ meeting.chair_speech }}
                </template>
            </n-card>
        </n-space>
        <n-space vertical>
            <n-h2 style="margin: 1.5rem 0 0.5rem 0; border-bottom: 1.5px solid #dee2e6 ">報告事項</n-h2>
            <n-space v-for="(item, index) in meeting.announcements" :key="index">
                <br>
                {{ index + 1 }}. {{ item.content }}
            </n-space>
        </n-space>
        <n-space vertical>
            <n-h2 style="margin: 1.5rem 0 0.5rem 0; border-bottom: 1.5px solid #dee2e6 ">討論事項</n-h2>
            <n-space vertical v-for="(item, index) in meeting.motions" :key="index"
                style="padding: 0.5rem 0 0.5rem 0; border-bottom: 1.5px solid #dee2e6 ">
                <n-space>
                    <n-tag type="info" round>提案</n-tag>{{ index + 1 }}
                </n-space>
                <n-space>
                    <n-tag type="info" round>案由</n-tag>{{ item.description }}
                </n-space>
                <n-space>
                    <n-tag type="info" round>狀態</n-tag>
                    <n-tag v-if="item.status === '結案'" type="primary" round> {{ item.status }}</n-tag>
                    <n-tag v-else-if="item.status === '執行中'" type="warning" round> {{ item.status }}</n-tag>
                    <n-tag v-else-if="item.status === '討論中'" type="error" round> {{ item.status }}</n-tag>
                </n-space>
                <n-space v-if="item.content != ''" style="align-items: center">
                    <n-tag type="info" round>內容</n-tag>
                    <n-card>
                        <template #action>
                            {{ item.content }}
                        </template>
                    </n-card>
                </n-space>
                <n-space v-if="item.resolution != ''" style="align-items: center">
                    <n-tag type="info" round>決策</n-tag>
                    <n-card>
                        <template #action>
                            {{ item.resolution }}
                        </template>
                    </n-card>
                </n-space>
                <n-space v-if="item.execution != ''" style="align-items: center">
                    <n-tag type="info" round>執行</n-tag>
                    <n-card>
                        <template #action>
                            {{ item.execution }}
                        </template>
                    </n-card>
                </n-space>
            </n-space>
        </n-space>
        <n-space vertical>
            <n-h2 style="margin: 1.5rem 0 0.5rem 0; border-bottom: 1.5px solid #dee2e6 ">臨時動議</n-h2>
            <n-space v-for="(item, index) in meeting.extempores" :key="index">
                <br>
                {{ index + 1 }}. {{ item.content }}
            </n-space>
        </n-space>
    </n-card>
    <!-- {{ this.$route.params.meetingId }} -->
    <!-- <pre>{{ meeting }}</pre> -->
</template>

<script>
import axios from 'axios';
import Cookies from 'js-cookie';

export default {
    name: "MeetingContent",
    components: {
        // SendButtonGroup
    },
    data() {
        return {
            meeting: {}
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
        }
    }
}
</script>
