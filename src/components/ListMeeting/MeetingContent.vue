<template>
    <n-card v-if="meeting.title != null" style="padding: 2rem;">
        <n-space justify="end">
            <router-link :to="`/edit-meeting/${meetingId}`" style="text-decoration:none;">
                <n-button type="info">
                    編輯
                </n-button>
            </router-link>

            <n-button type="error" @click="handleError">
                刪除
            </n-button>
        </n-space>
        <n-h1 style="font-weight: bold;">{{ meeting.title }}</n-h1>
        <n-descriptions label-placement="left" size="large" :column=1>
            <n-descriptions-item label="時間">
                {{ format_date(meeting.time) }}
            </n-descriptions-item>
            <n-descriptions-item label="地點">
                {{ meeting.location }}
            </n-descriptions-item>
            <n-descriptions-item label="類型">
                {{ meeting.type }}
            </n-descriptions-item>
            <n-descriptions-item label="主席">
                <router-link :to="`/member/${meeting.chair_id}`" style="text-decoration:none;">
                    <n-button v-if="meeting.chair_id != null" type="warning" dashed circle>
                        {{ getName(meeting.chair_id) }}
                    </n-button>
                </router-link>
            </n-descriptions-item>
            <n-descriptions-item label="紀錄">
                <router-link :to="`/member/${meeting.minute_taker_id}`" style="text-decoration:none;">
                    <n-button v-if="meeting.minute_taker_id != null" type="success" dashed circle>
                        {{ getName(meeting.minute_taker_id) }}
                    </n-button>
                </router-link>
            </n-descriptions-item>
        </n-descriptions>
        <n-space vertical>
            <n-space style="margin: 1.5rem 0 0.5rem 0">
                <n-h2>與會人員</n-h2>

                <n-button strong secondary type="info" :loading="loadingNoticeRef" @click="handleNoticeClick">
                    <template #icon>
                        <n-icon>
                            <NoticeIcon />
                        </n-icon>
                    </template>
                    寄送會議通知
                </n-button>
                <n-button strong secondary type="success" :loading="loadingResultRef" @click="handleResultClick">
                    <template #icon>
                        <n-icon>
                            <MailIcon />
                        </n-icon>
                    </template>
                    寄送會議結果
                </n-button>
            </n-space>

            <n-grid :x-gap="12" :y-gap="8" :cols="12" item-responsive>
                <n-grid-item v-for="(item, index) in meeting.attendee_association" :key="index"
                    span="4 400:3 600:2 800:1">
                    <router-link v-if="item.is_present" :to="`/member/${item.person_id}`" style="text-decoration:none;">
                        <n-button type="info" dashed size="small" round>
                            {{ getName(item.person_id) }}
                        </n-button>
                    </router-link>

                    <router-link v-if="!item.is_present" :to="`/member/${item.person_id}`"
                        style="text-decoration:none;">
                        <n-button type="error" dashed size="small" round>
                            {{ getName(item.person_id) }}
                        </n-button>
                    </router-link>
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
                <n-descriptions label-placement="left" size="large" :column=1>
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
import { defineComponent, ref } from 'vue'
import {
    MailOutline as MailIcon,
    NotificationsOutline as NoticeIcon
} from '@vicons/ionicons5'
import { useMessage, useDialog, useNotification } from 'naive-ui'
import moment from 'moment'

export default defineComponent({
    name: "MeetingContent",
    components: {
        MailIcon,
        NoticeIcon,
    },
    setup() {
        const message = useMessage()
        const dialog = useDialog()
        const loadingNoticeRef = ref(false)
        const loadingResultRef = ref(false)
        const notification = useNotification()

        const handleError = () => {
            dialog.warning({
                // TODO: 後面加上 person.name
                title: '即將刪除',
                content: '已刪除的內容將無法復原',
                positiveText: '取消',
                positiveButtonProps: { 'type': 'tertiary' },
                negativeText: '刪除',
                negativeButtonProps: { 'type': 'warning' },
                maskClosable: false,
                onPositiveClick: () => {
                    message.info('取消')
                },
                onNegativeClick: () => {
                    message.success('已刪除')
                }
            })
        };

        // 寄送通知
        const handleNoticeClick = () => {
            loadingNoticeRef.value = true
            setTimeout(() => {
                loadingNoticeRef.value = false;
                notification.info({
                    title: "會議通知已送出",
                    duration: 3000,
                });
            }, 2000)
        };

        // 寄送結果
        const handleResultClick = () => {
            loadingResultRef.value = true
            setTimeout(() => {
                loadingResultRef.value = false;
                notification.success({
                    title: "會議結果已送出",
                    duration: 3000,
                });
            }, 2000)
        };

        return {
            handleError,
            handleNoticeClick,
            handleResultClick,
            loadingNoticeRef,
            loadingResultRef,
        }
    },
    async mounted() {
        await this.getAllPerson()
        this.meeting = await this.getMeet(this.$route.params.meetingId);
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
        getName(id){
            console.log('iddddd', id)
            for (let i = 0; i < this.allPersonNames.length; i++){
                if (this.allPersonNames[i].id == id){
                    return this.allPersonNames[i].name
                }
            }
        },
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
                        console.log('contenttt', response.data)
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
                            allPersonName.push({name: response.data[i].name, id: response.data[i].id});
                        }
                        this.allPersonNames = allPersonName
                        console.log('allPersonName:', this.allPersonNames)
                    })
            }
        },
        format_date(value) {
            if (value) {
                return moment(String(value)).format('YYYY年MM月DD日 hh時mm分ss秒')
            }
        },
    }
})
</script>
