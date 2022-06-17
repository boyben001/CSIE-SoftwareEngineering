<template>
    <div v-if="chartIsShow" class="vertical-align p-5 w-100">
        <!-- <SendButtonGroup /> -->
        <h1 style="text-align: center; margin-bottom: 30px">{{ conference.title }}</h1>
        <div class="my-2">時間: {{ conference.time }}</div>
        <div class="my-2">地點: {{ conference.location }}
        </div>
        <div class="my-2">類型: {{ conference.type }}</div>
        <div class="my-2">主席: {{ conference.chair_id }}</div>
        <div class="my-2">紀錄: {{ conference.minute_taker_id }}</div>
        <div class="d-flex my-2">
            <div>與會人員:</div>
            <div v-for="(item, index) in conference.attendee_association" :key=index>
                <div v-if="item.is_present" >
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
</template>

<script>
// import SendButtonGroup from './Send-ButtonGroup.vue';
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
        }
    },
    data() {
        return {
            conference:[{}]
            // conference: [
            //     {
            //         id: 1,
            //         title: "製作製作遊戲解決",
            //         time: "2022-06-03",
            //         place: "汨羅江",
            //         type: "系務會議",
            //         chair: "區員",
            //         recorder: "漁夫",
            //         attendee: [
            //             { id: 1, content: "區原", },
            //             { id: 2, content: "賣包人" }
            //         ],
            //         lia_si_ren_yuan: "漁夫",
            //         chair_speech: "我想跳我想跳我想跳我想跳我想跳我想跳我想跳我想跳我想跳我想跳我想跳。",
            //         report_matters: [
            //             { id: 1, content: "汨羅江的河畔" },
            //             { id: 2, content: "風好大" },
            //             { id: 3, content: "我好害怕" },
            //         ],
            //         discuss_matters: [
            //             {
            //                 id: 1,
            //                 detail: {
            //                     reason: "粽子給誰吃",
            //                     state: 2,
            //                     content: "給魚吃",
            //                     decision: "給屈原吃",
            //                     execution: ""
            //                 }
            //             },
            //             {
            //                 id: 2,
            //                 detail: {
            //                     reason: "屈原給誰吃",
            //                     state: 0,
            //                     content: "給魚吃",
            //                     decision: "給汨羅江吃",
            //                     execution: ""
            //                 }
            //             },
            //         ]
            //     },
            //     {
            //         id: 2,
            //         title: "製作製作遊戲解決2",
            //         time: "2022-06-032",
            //         place: "汨羅江2",
            //         type: "系務會議2",
            //         chair: "區員2",
            //         recorder: "漁夫2",
            //         attendee: [
            //             { id: 1, content: "區原2", },
            //             { id: 2, content: "賣包人2" }
            //         ],
            //         lia_si_ren_yuan: "漁夫2",
            //         chair_speech: "我想跳我想跳我想跳我想跳我想跳我想跳我想跳我想跳我想跳我想跳我想跳。2",
            //         report_matters: [
            //             { id: 1, content: "汨羅江的河畔2" },
            //             { id: 2, content: "風好大2" },
            //             { id: 3, content: "我好害怕2" },
            //         ],
            //         discuss_matters: [
            //             {
            //                 id: 1,
            //                 detail: {
            //                     reason: "粽子給誰吃2",
            //                     state: 2,
            //                     content: "給魚吃2",
            //                     decision: "給屈原吃2",
            //                     execution: ""
            //                 }
            //             }
            //         ]
            //     },
            // ]
        };
    },
    methods:{
        async getMeet(){
            // 獲取Cookies當中的login資訊並取得token
            const info = Cookies.get('login')
            const url = 'http://127.0.0.1:8000/meeting/' + this.msg
            if (info){
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
                .then((response)=>{
                    console.log('success', response)
                    this.conference = response.data
                    console.log('members:', this.conference)
                })
            }
        }
    },
    watch: {
        msg: {
            async handler (newName, oldName) {
                console.log('new: ', newName, 'old: ', oldName)
                await this.getMeet()
                this.$nextTick(()=>{
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
