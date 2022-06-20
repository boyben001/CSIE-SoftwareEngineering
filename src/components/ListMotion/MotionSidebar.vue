<template>
    <n-space vertical style="padding-right:0.5vw; max-height: 100vh">
        <n-card v-for="(motion, index) in motions" :key=index hoverable size="small">
            <router-link :to="`/motion/${index + 1}`" style="text-decoration:none;">
                <n-h4 style="font-weight: bold">{{ motion.description }}</n-h4>
                <n-space vertical align="left">
                    <n-tag v-if="motion.status == '討論中'" type="error">
                        {{ motion.status }}
                    </n-tag>
                    <n-tag v-else-if="motion.status == '執行中'" type="warning">
                        {{ motion.status }}
                    </n-tag>
                    <n-tag v-if="motion.status == '結案'" type="success">
                        {{ motion.status }}
                    </n-tag>
                    <n-ellipsis line-clamp="2" :tooltip="false" style="text-decoration:none;">
                        <n-text>
                            {{ motion.content }}
                        </n-text>
                    </n-ellipsis>
                </n-space>

            </router-link>
        </n-card>
    </n-space>
</template>

<script>
import axios from 'axios';
import Cookies from 'js-cookie';

export default {
    name: "MotionSidebar",
    data() {
        return {
            motions: [{}]
        };
    },
    methods: {
        async getCurrentMotion() {
            const info = Cookies.get('login')
            if (info) {
                const token = JSON.parse(info).token
                await axios({
                    method: 'get',
                    url: 'http://127.0.0.1:8000/motion/',
                    headers: {
                        accept: 'application/json',
                        'Content-Type': 'multipart/form-data',
                        'Authorization': `Bearer ${token}` // Bearer 跟 token 中間有一個空格
                    },
                })
                    .then((response) => {
                        this.motions = response.data;
                        return response.data
                    })
            }
        }
    },
    async mounted() {
        await this.getCurrentMotion();
    }
};
</script>