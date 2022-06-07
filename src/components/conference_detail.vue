<template>
    <h1>{{ conference.title }}</h1>
    <div class="vertical-align">
        <div>時間: {{ conference.time }}</div>
        <div>地點: {{ conference.place }}</div>
        <div>類型: {{ conference.type }}</div>
        <div>主席: {{ conference.chair }}</div>
        <div>紀錄: {{ conference.recorder }}</div>
        <div class="horizental-align">
            <div>與會人員:</div>
            <div v-for="item in conference.attendee" :key="item.id">
                {{ item.content }}、
            </div>
        </div>
        <div>列席人員: {{ conference.lia_si_ren_yuan }}</div>
        <div>
            <br>
            <div class="big-word">主席致詞: </div>
            <hr>
            {{ conference.chair_speech }}
        </div>
        <div>
            <br>
            <div class="big-word">報告事項:</div>
            <hr>
            <div v-for="item in conference.report_matters" :key="item.id">
                <br>
                {{ item.id }}. {{ item.content }}
            </div>
        </div>
        <div>
            <br>
            <div class="big-word">討論事項:</div>
            <hr>
            <div v-for="item in conference.discuss_matters" :key="item.id">
                <div>提案 {{ item.id }} .</div>
                <blockquote>
                    <div class="median-word"> 案由: {{ item.detail.reason }} </div>
                </blockquote>
                <blockquote>
                    <div class="median-word"> 狀態: {{ item.detail.state }} </div>
                </blockquote>
                <blockquote>
                    <div class="median-word"> 內容: {{ item.detail.content }} </div>
                </blockquote>
                <blockquote>
                    <div class="median-word"> 決策: {{ item.detail.decision }} </div>
                </blockquote>
                <blockquote>
                    <div class="median-word"> 執行: {{ item.detail.execution }} </div>
                </blockquote>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "ConferenceDetail",
    props: {
        msg: String
    },
    data() {
        return {
            conference: {
                id: 1,
                title: "製作製作遊戲解決",
                time: "2022-06-03",
                place: "汨羅江",
                type: "系務會議",
                chair: "區員",
                recorder: "漁夫",
                attendee: [
                    { id: 1, content: "區原", },
                    { id: 2, content: "賣包人" }
                ],
                lia_si_ren_yuan: "漁夫",
                chair_speech: "我想跳我想跳我想跳我想跳我想跳我想跳我想跳我想跳我想跳我想跳我想跳。",
                report_matters: [
                    { id: 1, content: "汨羅江的河畔" },
                    { id: 2, content: "風好大" },
                    { id: 3, content: "我好害怕" },
                ],
                discuss_matters: [
                    {
                        id: 1,
                        detail: {
                            reason: "粽子給誰吃",
                            state: 2,
                            content: "給魚吃",
                            decision: "給屈原吃",
                            execution: ""
                        }
                    },
                    {
                        id: 2,
                        detail: {
                            reason: "屈原給誰吃",
                            state: 0,
                            content: "給魚吃",
                            decision: "給汨羅江吃",
                            execution: ""
                        }
                    },
                ]
            }
        };
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

.vertical-align {
    text-align: left;
}

.horizental-align {
    display: flex;
}

.big-word {
    font-weight: bold;
    font-size: large;
}

.median-word {
    font-weight: bold;
    font-size: medium;
}
</style>
