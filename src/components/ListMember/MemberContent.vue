<template>
    <n-grid :cols="12">
        <n-gi offset="1" span="10">
            <n-card v-if="person.name != null" size="huge" style="margin-top: 10vh">
                <n-space justify="end">
                    <router-link :to="`/edit-person/${personId}`" style="text-decoration:none;">
                        <n-button type="info">
                            編輯
                        </n-button>
                    </router-link>

                    <n-button type="error">
                        刪除
                    </n-button>
                </n-space>

                <n-grid :x-gap="12" :cols="2" item-responsive>
                    <n-grid-item style="font-weight: bold; text-align:center;">
                        <img v-if="person.gender == '男'"
                            src="https://img.icons8.com/bubbles/500/undefined/user-male.png" style="width: 80%" />

                        <img v-if="person.gender == '女'"
                            src="https://img.icons8.com/bubbles/500/undefined/amy-winehouse.png" style="width: 80%" />

                        <n-h1>{{ person.name }}</n-h1>
                        <n-tag type="info" round>{{ person.type }}</n-tag>
                    </n-grid-item>
                    <n-grid-item>
                        <n-space vertical>
                            <n-h2>基本資料</n-h2>
                            <n-ul>
                                <n-li>性別: {{ person.gender }}</n-li>
                                <n-li>手機: {{ person.phone }}</n-li>
                                <n-li>電子郵件: {{ person.email }}</n-li>
                            </n-ul>

                            <n-divider></n-divider>

                            <n-h2>詳細資料</n-h2>
                            <n-ul v-if="person.type == '系上教師'">
                                <n-li>職稱: {{ person.dept_prof_info.job_title }}</n-li>
                                <n-li>辦公室電話: {{ person.dept_prof_info.office_tel }}</n-li>
                            </n-ul>

                            <n-ul v-if="person.type == '系助理'">
                                <n-li v-if="person.assistant_info != null">辦公室電話: {{ person.assistant_info.office_tel }}
                                </n-li>
                            </n-ul>

                            <n-ul v-if="person.type == '校外教師'">
                                <n-li>學校名稱: {{ person.other_prof_info.univ_name }}</n-li>
                                <n-li>系所名稱: {{ person.other_prof_info.dept_name }}</n-li>
                                <n-li>職稱: {{ person.other_prof_info.job_title }}</n-li>
                                <n-li>辦公室電話: {{ person.other_prof_info.office_tel }}</n-li>
                                <n-li>地址: {{ person.other_prof_info.address }}</n-li>
                                <n-li>銀行帳戶: {{ person.other_prof_info.bank_account }}</n-li>
                            </n-ul>

                            <n-ul v-if="person.type == '業界專家'">
                                <n-li>公司名稱: {{ person.expert_info.company_name }}</n-li>
                                <n-li>職稱: {{ person.expert_info.job_title }}</n-li>
                                <n-li>辦公室電話: {{ person.expert_info.office_tel }}</n-li>
                                <n-li>地址: {{ person.expert_info.address }}</n-li>
                                <n-li>銀行帳戶: {{ person.expert_info.bank_account }}</n-li>
                            </n-ul>

                            <n-ul v-if="person.type == '學生'">
                                <n-li>學號: {{ person.student_info.student_id }}</n-li>
                                <n-li>學制: {{ person.student_info.program }}</n-li>
                                <n-li>年級: {{ person.student_info.study_year }}</n-li>
                            </n-ul>
                        </n-space>
                    </n-grid-item>
                </n-grid>
            </n-card>
        </n-gi>
    </n-grid>

</template>

<script>
import axios from 'axios';
import Cookies from 'js-cookie';

export default {
    name: "personContent",
    components: {
    },
    data() {
        return {
            person: {}
        };
    },
    computed: {
        personId() {
            return this.$route.params.personId;
        },
    },
    watch: {
        personId: async function (val) {
            this.person = await this.getPerson(val);
        }
    },
    methods: {
        async getPerson(id) {
            // 獲取Cookies當中的login資訊並取得token
            const info = Cookies.get('login')
            const url = 'http://127.0.0.1:8000/person/' + id
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
                        console.log(response)
                        return response.data
                    })
            }
        }
    }
}
</script>

<style scoped>
.n-ul {
    list-style-type: none;
}
</style>