<template>
    <n-card v-if="motion.description != null" size="huge" style="padding: 2rem;">
        <n-grid :x-gap="12" :cols="1" item-responsive>
            <n-grid-item>
                <n-space style="margin: 2rem 0">
                    <n-tag type="info" round>案由</n-tag>{{ motion.description }}
                </n-space>
                <n-space style="margin: 2rem 0">
                    <n-tag type="info" round>狀態</n-tag>
                    <n-tag v-if="motion.status === '結案'" type="primary" round> {{ motion.status }}</n-tag>
                    <n-tag v-else-if="motion.status === '執行中'" type="warning" round> {{ motion.status }}</n-tag>
                    <n-tag v-else-if="motion.status === '討論中'" type="error" round> {{ motion.status }}</n-tag>
                </n-space>
                <n-space vertical v-if="motion.content != ''" style="margin: 2rem 0;align-items: flex-start;">
                    <n-tag type="info" round>內容</n-tag>
                    <n-card>
                        <template #action>
                            {{ motion.content }}
                        </template>
                    </n-card>
                </n-space>
                <n-space vertical v-if="motion.resolution != ''" style="margin: 2rem 0;align-items: flex-start">
                    <n-tag type="info" round>決策</n-tag>
                    <n-card>
                        <template #action>
                            {{ motion.resolution }}
                        </template>
                    </n-card>
                </n-space>
                <n-space vertical v-if="motion.execution != ''" style="margin: 2rem 0;align-items: flex-start">
                    <n-tag type="info" round>執行</n-tag>
                    <n-card>
                        <template #action>
                            {{ motion.execution }}
                        </template>
                    </n-card>
                </n-space>
            </n-grid-item>
            <n-grid-item>

            </n-grid-item>
        </n-grid>
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