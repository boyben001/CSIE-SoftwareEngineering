<template>
    <div v-if="chartIsShow">
        <n-card :title="member.name" hoverable class="d-flex m-4 py-2">
            <div class="d-flex justify-content-between">
                <div class="my-5">
                    <div class="mb-4"
                        style="width: 250px; font-size: 22px; font-weight: 500; border-bottom: 3px solid lightgray">
                        基本資料
                    </div>
                    <div>性別: {{ member.gender }}</div>
                    <div>手機: {{ member.phone }}</div>
                    <div>電子郵件: {{ member.email }}</div>
                </div>
                <div class="d-flex flex-column align-items-center justify-content-around">
                    <EditDeleteBtn></EditDeleteBtn>
                    <div v-if="member.gender == '男'">
                        <img src="https://img.icons8.com/color/480/undefined/user-male-circle--v1.png" width="100"
                            height="100" alt="" />
                    </div>
                    <div v-else-if="member.gender == '女'">
                        <img src="https://img.icons8.com/color/480/undefined/user-female-circle--v1.png" width="100"
                            height="100" alt="" />
                    </div>
                </div>
            </div>
            <div>
                <div class="mb-4" style="width: 250px; font-size: 22px; font-weight: 500; border-bottom: 3px solid lightgray">
                    詳細資料
                </div>
                <div v-if="member.type == '系上老師'">
                    <div>職稱: {{ member.dept_prof_info.job_title }}</div>
                    <div>辦公室電話: {{ member.dept_prof_info.office_tel }}</div>
                </div>

                <div v-if="member.type == '系助理'">
                    <div>辦公室電話: {{ member.assistant_info.office_tel }}</div>
                </div>

                <div v-if="member.type == '校外老師'">
                    <div>學校名稱: {{ member.other_prof_info.univ_name }}</div>
                    <div>系所名稱: {{ member.other_prof_info.dept_name }}</div>
                    <div>職稱: {{ member.other_prof_info.job_title }}</div>
                    <div>辦公室電話: {{ member.other_prof_info.office_tel }}</div>
                    <div>地址: {{ member.other_prof_info.address }}</div>
                    <div>銀行帳戶: {{ member.other_prof_info.bank_account }}</div>
                </div>

                <div v-if="member.type == '業界專家'">
                    <div>公司名稱: {{ member.expert_info.company_name }}</div>
                    <div>職稱: {{ member.expert_info.job_title }}</div>
                    <div>辦公室電話: {{ member.expert_info.office_tel }}</div>
                    <div>地址: {{ member.expert_info.address }}</div>
                    <div>銀行帳戶: {{ member.expert_info.bank_account }}</div>
                </div>

                <div v-if="member.type == '學生'">
                    <div>學號: {{ member.student_info.student_id }}</div>
                    <div>學制: {{ member.student_info.program }}</div>
                    <div>年級: {{ member.student_info.study_year }}</div>
                </div>
            </div>
        </n-card>
    </div>
</template>

<script>
import EditDeleteBtn from "@/components/Edit-Delete-Button.vue"
import axios from 'axios';
import Cookies from 'js-cookie';

export default {
    name: "PersonDetail",
    components: {
        EditDeleteBtn,
        // AddUser
    },
    props: {
        msg: {
            type: String
        }
    },
    data() {
        return {
            member: [{}],
            chartIsShow: false
        };
    },
    methods:{
        async getPerson(){
            // 獲取Cookies當中的login資訊並取得token
            const info = Cookies.get('login')
            const url = 'http://127.0.0.1:8000/person/' + this.msg
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
                    this.member = response.data
                    console.log('members:', this.members)
                })
            }
        }
    },
    watch: {
        msg: {
            async handler (newName, oldName) {
                console.log('new: ', newName, 'old: ', oldName)
                await this.getPerson()
                this.$nextTick(()=>{
                    this.chartIsShow = true
                })
            },
            immediate: true
        }
    },
}
</script>