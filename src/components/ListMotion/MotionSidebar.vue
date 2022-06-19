<template>
    <n-space vertical style="padding-right:0.5vw">
    <!-- TODO: Step1 : for motion in motions  -->
        <n-card v-for="(motion, index) in motions" :key=index hoverable size="small">
            <!-- TODO: Step 2 : motion JSON -->
            <router-link :to="`/motion/${index+1}`" style="text-decoration:none;">
            <n-h4 style="font-weight: bold; color:rgb(220, 161, 52)">{{ motion.description }}</n-h4>
            <pre>{{ motion }}</pre>
            </router-link>
            <!-- <router-link :to="`/meeting/${meet.id}`" style="text-decoration:none;">
            <n-h4 style="font-weight: bold; color:rgb(220, 161, 52)">{{ meet.id }}{{ meet.title }}</n-h4>
            <n-tag type="success">
                {{ meet.type }}
            </n-tag>
            <n-text italic>
                <br>
                {{ meet.time }}
            </n-text>
            </router-link> -->
        </n-card>
    </n-space>
</template>

<script>
import axios from 'axios';
import Cookies from 'js-cookie';

export default {
    name: "MotionSidebar",
    data() {
        // TODO: motions
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
                    // TODO: this.motions = response.data
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