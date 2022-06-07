<template>
    <h1 style="text-align:left;">{{ discuss_matters.reason }}</h1>
    <div class="vertical-align">
        <div>會議: {{ conference_title }}</div>
        <div>狀態: {{ discuss_matters.state }}</div>
        <div class="horizental-align">

        </div>
        <div>
            <br>
            <div class="big-word">內容: </div>
            <hr>
            {{ discuss_matters.content }}
        </div>
        <div>
            <br>
            <div class="big-word">決議:</div>
            <hr>
            {{ discuss_matters.decision }}
        </div>
        <div>
            <br>
            <div class="big-word">執行:</div>
            <hr>
            {{ discuss_matters.execution }}
        </div>
    </div>
</template>

<script>
export default {
    name: "DecisionDetail",
    props: {
        msg: String
    },
    data() {
        return {
            conference_title: '製作製作遊戲解決',
            discuss_matters: {
                id: 1,
                reason: "粽子給誰吃",
                state: 2,
                content: "給魚吃",
                decision: "給屈原吃",
                execution: ""
            }
        };
    }
}
</script>

<style>
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
