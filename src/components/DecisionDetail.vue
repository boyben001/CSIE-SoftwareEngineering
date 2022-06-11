<template>
    <div class="d-flex flex-column p-4 w-100">
        <h2 class="my-5">{{ discuss_matters.reason }}</h2>
        <div>會議: {{ conference_title }}</div>
        <div class="mb-5">狀態: {{ discuss_matters.state }}</div>
        <div class="my-2">
            <h3 style="border-bottom: 5px solid #dee2e6 ">內容</h3>
            {{ discuss_matters.content }}
        </div>
        <div class="my-2">
            <h3 style="border-bottom: 5px solid #dee2e6 ">決議</h3>
            {{ discuss_matters.decision }}
        </div>
        <div class=" my-2">
            <h3 style="border-bottom: 5px solid #dee2e6 ">執行</h3>
            {{ discuss_matters.execution }}
        </div>
    </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
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
})
</script>

