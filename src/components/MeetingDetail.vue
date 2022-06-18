<template>
    <h1>Conference ID={{ confId }}</h1>
    <div v-for="{ conference, index } in conferences" :key="index">
        <div v-if="chartIsShow && index == confId" class="vertical-align p-5 w-100">
            <h1 style="text-align: center; margin-bottom: 30px">{{ conference.title }}</h1>
            <div class="my-2">時間: {{ conference.time }}</div>
            <div class="my-2">地點: {{ conference.location }}</div>
            <div class="my-2">類型: {{ conference.type }}</div>
            <div class="my-2">主席: {{ conference.chair_id }}</div>
            <div class="my-2">紀錄: {{ conference.minute_taker_id }}</div>
            <div class="d-flex my-2">
                <div>與會人員:</div>
                <div v-for="(item, index) in conference.attendee_association" :key=index>
                    <div v-if="item.is_present">
                        {{ item.person_id }}
                    </div>
                </div>
            </div>
            <div class="my-2">列席人員: 暫時空著</div>
            <div class="my-4">
                <h3 style="border-bottom: 5px solid #dee2e6 ">主席致詞:</h3>
                {{ conference.chair_speech }}
            </div>
            <div class="my-4">
                <h3 style="border-bottom: 5px solid #dee2e6 ">報告事項:</h3>
                <div v-for="(item, index) in conference.announcenents" :key=index>
                    <br>
                    {{ index }}. {{ item.content }}
                </div>
            </div>
            <div>
                <h3 style="border-bottom: 5px solid #dee2e6 ">討論事項:</h3>
                <div v-for="(item, index) in conference.motions" :key=index>
                    <div>提案 {{ index }} .</div>
                    <blockquote>
                        <div class="median-word"> 案由: {{ item.descripton }} </div>
                    </blockquote>
                    <blockquote>
                        <div class="median-word"> 狀態: {{ item.status }} </div>
                    </blockquote>
                    <blockquote>
                        <div class="median-word"> 內容: {{ item.content }} </div>
                    </blockquote>
                    <blockquote>
                        <div class="median-word"> 決策: {{ item.resolution }} </div>
                    </blockquote>
                    <blockquote>
                        <div class="median-word"> 執行: {{ item.execution }} </div>
                    </blockquote>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Cookies from 'js-cookie';

export default {
    name: "MeetingDetail",
    components: {
        // SendButtonGroup
    },
    props: {
        msg: {
            type: String
        },
        confId: {
            type: Number
        }
    },
    data() {
        return {
            conferences: [{}]
        };
    },
    methods: {
        async getMeet() {
            // 獲取Cookies當中的login資訊並取得token
            const info = Cookies.get('login')
            const url = 'http://127.0.0.1:8000/meeting/' + this.confId
            if (info) {
                const token = JSON.parse(info).token
                await axios({
                    method: 'get',
                    url: url,
                    headers: {
                        accept: 'application/json',
                        'Content-Type': 'multipart/form-data',
                        'Authorization': `Bearer ${token}` // Bearer 跟 token 中間有一個空格
                    },
                })
                    .then((response) => {
                        console.log('success', response)
                        this.conference = response.data
                        console.log('members:', this.conference)
                    })
            }
        }
    },
    watch: {
        msg: {
            async handler(newName, oldName) {
                console.log('new: ', newName, 'old: ', oldName)
                await this.getMeet()
                this.$nextTick(() => {
                    this.chartIsShow = true
                })
            },
            immediate: true
        }
    },
}
</script>

<style>
.vertical-align {
    overflow-y: scroll;
    max-height: 100vh;
}
</style>
