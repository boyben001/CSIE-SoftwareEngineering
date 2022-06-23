<template>
    <n-card v-if="motion.description != null" size="huge" style="padding: 2rem;">
        <n-h2 style="margin: 1.5rem 0 0.5rem 0; border-bottom: 1.5px solid #dee2e6 ">討論事項</n-h2>
        <n-descriptions label-placement="left" size="large" :column=1>
            <n-descriptions-item label="案由" style="padding-left:5">
                {{ motion.description }}
            </n-descriptions-item>
            <n-descriptions-item label="狀態">
                <n-tag v-if="motion.status === '結案'" type="primary" round> {{ motion.status }}</n-tag>
                <n-tag v-else-if="motion.status === '執行中'" type="warning" round> {{ motion.status }}</n-tag>
                <n-tag v-else-if="motion.status === '討論中'" type="error" round> {{ motion.status }}</n-tag>
            </n-descriptions-item>
            <n-descriptions-item label="內容">
                {{ motion.content }}
            </n-descriptions-item>
            <n-descriptions-item label="決策">
                {{ motion.resolution }}
            </n-descriptions-item>
            <n-descriptions-item label="執行">
                {{ motion.execution }}
            </n-descriptions-item>
        </n-descriptions>
    </n-card>
</template>

<script>
import axios from 'axios';
import Cookies from 'js-cookie';

export default {
    name: "MotionContent",
    components: {
        // SendButtonGroup
    },
    data() {
        return {
            motion: {},
        };
    },
    computed: {
        motionId() {
            return this.$route.params.motionId;
        },
    },
    watch: {
        motionId: async function () {
            this.getMotion(this.$route.params.motionId - 1)
        }
    },
    async mounted() {
        this.getMotion(this.$route.params.motionId - 1)
    },
    methods: {
        async getMotion(index) {
            // 獲取Cookies當中的login資訊並取得token
            const info = Cookies.get('login')
            const url = 'http://127.0.0.1:8000/motion/'
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
                        this.motion = response.data[index]
                        return response.data
                    })
            }
        }
    },
}
</script>