<template>
    <n-h1 style="font-weight: bold; padding-top: 5%;">編輯人員</n-h1>
    <n-form ref="formRef" :model="model" :rules="rules" label-placement="left" require-mark-placement="right-hanging"
        :size="size" label-width="auto" :style="{
            maxWidth: '100%'
        }">
        <n-h2>基本資訊</n-h2>
        <n-form-item label="姓名" path="title">
            <n-input v-model:value="model.name" placeholder="" maxlength="20" show-count clearable />
        </n-form-item>
        <n-form-item label="性別" path="gender">
            <n-radio-group v-model:value="model.gender" label="性別" name="genderRadio">
                <n-space>
                    <n-radio value="男">男</n-radio>
                    <n-radio value="女">女</n-radio>
                </n-space>
            </n-radio-group>
        </n-form-item>
        <n-form-item label="手機" path="phone">
            <n-input v-model:value="model.phone" placeholder="" maxlength="30" show-count clearable />
        </n-form-item>
        <n-form-item label="電子郵件" path="email">
            <n-input v-model:value="model.email" placeholder="example@example" maxlength="30" show-count clearable />
        </n-form-item>
        <n-form-item label="類型" path="type">
            <n-select v-model:value="model.type" placeholder="" :options="personTypeOptions" />
        </n-form-item>

        <n-space v-if="model.type == '系上教師'" vertical>
            <n-form-item label="職稱" path="dept_prof_info.job_title">
                <n-input v-model:value="model.dept_prof_info.job_title" placeholder="" maxlength="30" show-count
                    clearable />
            </n-form-item>
            <n-form-item label="辦公室電話" path="model.dept_prof_info.office_tel">
                <n-input v-model:value="model.dept_prof_info.office_tel" placeholder="" maxlength="30" show-count
                    clearable />
            </n-form-item>
        </n-space>

        <n-space v-if="model.type == '系助理'" vertical>
            <n-form-item label="辦公室電話" path="model.assistant_info.office_tel">
                <n-input v-model:value="model.assistant_info.office_tel" placeholder="" maxlength="30" show-count
                    clearable />
            </n-form-item>
        </n-space>

        <n-space v-if="model.type == '校外教師'" vertical>
            <n-form-item label="學校名稱" path="dept_prof_info.job_title">
                <n-input v-model:value="model.other_prof_info.univ_name" placeholder="" maxlength="30" show-count
                    clearable />
            </n-form-item>
            <n-form-item label="系所名稱" path="model.other_prof_info.dept_name">
                <n-input v-model:value="model.other_prof_info.dept_name" placeholder="" maxlength="30" show-count
                    clearable />
            </n-form-item>
            <n-form-item label="職稱" path="model.other_prof_info.job_title">
                <n-input v-model:value="model.other_prof_info.job_title" placeholder="" maxlength="30" show-count
                    clearable />
            </n-form-item>
            <n-form-item label="辦公室電話" path="model.other_prof_info.office_tel">
                <n-input v-model:value="model.other_prof_info.office_tel" placeholder="" maxlength="30" show-count
                    clearable />
            </n-form-item>
            <n-form-item label="地址" path="model.other_prof_info.address">
                <n-input v-model:value="model.other_prof_info.address" placeholder="" maxlength="30" show-count
                    clearable />
            </n-form-item>
            <n-form-item label="銀行帳戶" path="model.other_prof_info.bank_account">
                <n-input v-model:value="model.other_prof_info.bank_account" placeholder="" maxlength="30" show-count
                    clearable />
            </n-form-item>
        </n-space>

        <n-space v-if="model.type == '業界專家'" vertical>
            <n-form-item label="公司名稱" path="model.expert_info.company_name">
                <n-input v-model:value="model.expert_info.company_name" placeholder="" maxlength="30" show-count
                    clearable />
            </n-form-item>
            <n-form-item label="職稱" path="model.expert_info.job_title">
                <n-input v-model:value="model.expert_info.job_title" placeholder="" maxlength="30" show-count
                    clearable />
            </n-form-item>
            <n-form-item label="辦公室電話" path="model.expert_info.office_tel">
                <n-input v-model:value="model.expert_info.office_tel" placeholder="" maxlength="30" show-count
                    clearable />
            </n-form-item>
            <n-form-item label="地址" path="model.expert_info.address">
                <n-input v-model:value="model.expert_info.address" placeholder="" maxlength="30" show-count clearable />
            </n-form-item>
            <n-form-item label="銀行帳戶" path="model.expert_info.bank_account">
                <n-input v-model:value="model.expert_info.bank_account" placeholder="" maxlength="30" show-count
                    clearable />
            </n-form-item>
        </n-space>

        <n-space v-if="model.type == '學生'" vertical>
            <n-form-item label="學號" path="model.student_info.student_id">
                <n-input v-model:value="model.student_info.student_id" placeholder="" maxlength="8" show-count
                    clearable />
            </n-form-item>
            <n-form-item label="學制" path="model.student_info.program">
                <n-select v-model:value="model.student_info.program" placeholder="大學部" :options="programTypeOptions" />
            </n-form-item>
            <n-form-item label="年級" path="model.student_info.study_year">
                <n-select v-model:value="model.student_info.study_year" placeholder="一年級" :options="studyYearOptions" />
            </n-form-item>
        </n-space>
    </n-form>

    <pre>{{ JSON.stringify(model, null, 2) }}</pre>
</template>

<script>
import { defineComponent, ref, reactive } from "vue";
import axios from 'axios';
import Cookies from 'js-cookie';
import rules from './AddPerson/rules.js'
import modelForm from './AddPerson/model.js'
import {personTypeOptions, programTypeOptions, studyYearOptions} from './AddPerson/options.js'


export default defineComponent({
    computed: {
        personId() {
            return this.$route.params.personId;
        },
    },
    data() {
        return {
            person: {},
            model: {}
        };
    },
    watch: {
        personId: async function (val) {
            console.log(val);
            this.person = await this.getPerson(val);
        }
    },
    setup() {
        const formRef = ref(null);

        return {
            formRef,
            size: ref("medium"),
            personTypeOptions,
            programTypeOptions,
            studyYearOptions,
            rules,
        };
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
                        this.model = response.data
                        return response.data
                    })
            }
        }
    },
    async mounted(){
        this.model = reactive(modelForm);
        console.log("id: ", this.personId)
        await this.getPerson(this.personId)
    }
})
</script>