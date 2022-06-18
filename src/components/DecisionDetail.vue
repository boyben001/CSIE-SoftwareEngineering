<template>
    <h1>Decision ID ={{ deciId }}</h1>
    <div v-for="deci in decisions" :key=deci.discuss_matters.id>
        <div v-if="deci.discuss_matters.id == deciId" class="d-flex flex-column p-4 w-100">
            <h2 class="my-5">{{ deci.discuss_matters.reason }}</h2>
            <div>會議: {{ deci.conference_title }}</div>
            <div class="mb-5">狀態: {{ deci.discuss_matters.state }}</div>
            <div class="my-2">
                <h3 style="border-bottom: 5px solid #dee2e6 ">內容</h3>
                {{ deci.discuss_matters.content }}
            </div>
            <div class="my-2">
                <h3 style="border-bottom: 5px solid #dee2e6 ">決議</h3>
                {{ deci.discuss_matters.decision }}
            </div>
            <div class=" my-2">
                <h3 style="border-bottom: 5px solid #dee2e6 ">執行</h3>
                {{ deci.discuss_matters.execution }}
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: "DecisionDetail",
    props: {
        msg: Number,
        deciId: Number,
    },
    data() {
        return {
            decisions: [
                {
                    conference_title: '製作製作遊戲解決',
                    discuss_matters: {
                        id: 1,
                        reason: "粽子給誰吃",
                        state: 2,
                        content: "給魚吃",
                        decision: "給屈原吃",
                        execution: ""
                    }
                },
                {
                    conference_title: '製作製作遊戲解決2',
                    discuss_matters: {
                        id: 2,
                        reason: "粽子給誰吃2",
                        state: 2,
                        content: "給魚吃2",
                        decision: "給屈原吃2",
                        execution: "2"
                    }
                },
                {
                    conference_title: '製作製作遊戲解決3',
                    discuss_matters: {
                        id: 3,
                        reason: "粽子給誰吃3",
                        state: 2,
                        content: "給魚吃3",
                        decision: "給屈原吃3",
                        execution: ""
                    }
                },
            ]
        };
    }
})
</script>

