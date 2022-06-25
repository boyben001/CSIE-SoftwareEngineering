<template>
    <n-space justify="space-between" style="padding-top: 5%;">
        <n-h1 style="font-weight: bold">編輯會議</n-h1>

        <router-link :to="`/meeting`" style="text-decoration:none;">
            <n-button type="info">
                返回
            </n-button>
        </router-link>
    </n-space>
    <n-form ref="formRef" :model="model" :rules="rules" label-placement="left" require-mark-placement="right-hanging"
        :size="size" label-width="auto" :style="{
            maxWidth: '100%'
        }">

        <n-h2>會議資訊</n-h2>
        <n-form-item label="標題" path="title">
            <n-input v-model:value="model.title" placeholder="" maxlength="20" show-count clearable />
        </n-form-item>
        <n-form-item label="地點" path="location">
            <n-input v-model:value="model.location" placeholder="" maxlength="30" show-count clearable />
        </n-form-item>
        <n-grid x-gap="12" :cols="2">
            <n-gi>
                <n-form-item label="時間" path="time">
                    <n-date-picker v-model:value="model.time" placeholder="" type="datetime" />
                </n-form-item>
            </n-gi>
            <n-gi>
                <n-form-item label="類型" path="type">
                    <n-select v-model:value="model.type" placeholder="" :options="meetingTypeOptions" />
                </n-form-item>
            </n-gi>
        </n-grid>

        <n-divider />
        
        <n-h2>出席人員</n-h2>
        <n-form-item label="主席" path="chair_id">
            <n-select v-model:value="model.chair_id" placeholder="選擇一項" :options="personOptions" />
        </n-form-item>
        <n-form-item label="紀錄" path="minute_taker_id">
            <n-select v-model:value="model.minute_taker_id" placeholder="選擇一項" :options="personOptions" />
        </n-form-item>
        <n-form-item label="與會人員" path="attendees">
            <n-select v-model:value="tempAttendees" placeholder="選擇多項" :options="personOptions" multiple />
        </n-form-item>

        <n-divider />

        <n-form-item>
            <n-space>
                <n-h2>報告事項</n-h2>
                <n-button attr-type="button" type="success" @click="addAnnouncement">
                    + 報告事項
                </n-button>
            </n-space>
        </n-form-item>
        <n-form-item v-for="(item, index) in model.announcements" :key="index" :label="`報告 ${index + 1}`"
            :path="`announcements[${index}].content`" :rule="{
                required: true,
                message: `報告內文 ${index + 1}`,
                trigger: ['input', 'blur']
            }">
            <n-input v-model:value="item.content" placeholder="內容文字" type="textarea" :autosize="{
                minRows: 3,
                maxRows: 5
            }" clearable />
            <n-button style="margin-left: 12px" type="error" @click="removeAnnouncement(index)">
                删除
            </n-button>
        </n-form-item>

        <n-divider v-if="model.announcements.length !== 0" />

        <n-form-item>
            <n-space>
                <n-h2>臨時動議</n-h2>
                <n-button attr-type="button" type="success" @click="addExtempore">
                    + 臨時動議
                </n-button>
            </n-space>
        </n-form-item>
        <n-form-item v-for="(item, index) in model.extempores" :key="index" :label="`動議 ${index + 1}`"
            :path="`extempores[${index}].content`" :rule="{
                required: true,
                message: `動議內文 ${index + 1}`,
                trigger: ['input', 'blur']
            }">
            <n-input v-model:value="item.content" placeholder="內容文字" type="textarea" :autosize="{
                minRows: 3,
                maxRows: 5
            }" clearable />
            <n-button style="margin-left: 12px" type="error" @click="removeExtempore(index)">
                删除
            </n-button>
        </n-form-item>

        <n-divider v-if="model.extempores.length !== 0" />

        <n-form-item>
            <n-space>
                <n-h2>討論事項</n-h2>
                <n-button attr-type="button" type="success" @click="addMotion">
                    + 討論事項
                </n-button>
            </n-space>
        </n-form-item>

        <n-space vertical>
            <n-card v-for="(item, index) in model.motions" :key="index" :title="`討論 ${index + 1}`">
                <n-form-item :label="`案由`" :path="`motions[${index}].description`" :rule="{
                    required: true,
                    message: `案由不得為空`,
                    trigger: ['input', 'blur']
                }">
                    <n-input v-model:value="item.description" placeholder="案由" maxlength="30" show-count clearable />
                </n-form-item>
                <n-form-item :label="`狀態`" :path="`motions[${index}].status`" :rule="{
                    required: true,
                    message: `狀態不得為空`,
                    trigger: ['input', 'blur']
                }">
                    <n-select v-model:value="item.status" placeholder="選擇一項" :options="statusOptions" />
                </n-form-item>
                <n-form-item :label="`內容`" :path="`motions[${index}].content`" :rule="{
                    required: true,
                    message: `內容不得為空`,
                    trigger: ['input', 'blur']
                }">
                    <n-input v-model:value="item.content" placeholder="內容文字" type="textarea" :autosize="{
                        minRows: 3,
                        maxRows: 5
                    }" clearable />
                </n-form-item>
                <n-form-item :label="`決策`" :path="`motions[${index}].resolution`" :rule="{
                    required: true,
                    message: `決策不得為空`,
                    trigger: ['input', 'blur']
                }">
                    <n-input v-model:value="item.resolution" placeholder="內容文字" type="textarea" :autosize="{
                        minRows: 3,
                        maxRows: 5
                    }" clearable />
                </n-form-item>
                <n-form-item :label="`執行`" :path="`motions[${index}].execution`" :rule="{
                    required: true,
                    message: `執行不得為空`,
                    trigger: ['input', 'blur']
                }">
                    <n-input v-model:value="item.execution" placeholder="內容文字" type="textarea" :autosize="{
                        minRows: 3,
                        maxRows: 5
                    }" clearable />
                </n-form-item>
                <n-space justify="end">
                    <n-button style="margin-left: 12px" type="error" @click="removeMotion(index)">
                        删除
                    </n-button>
                </n-space>
            </n-card>
        </n-space>

        <n-h2>上傳檔案</n-h2>
        <n-form-item path="uploadValue">
            <!-- TODO: action 為上傳的位置 -->
            <n-upload multiple directory-dnd action="" :max="5">
                <n-upload-dragger>
                    <div style="margin-bottom: 12px">
                        <n-icon size="48" :depth="3">
                            <archive-icon />
                        </n-icon>
                    </div>
                    <n-text style="font-size: 16px">
                        你可以文件拖到這裡
                    </n-text>
                    <n-p depth="3" style="margin: 8px 0 0 0">
                        警告: 請勿上傳執行檔，且檔案需小於 500 MB
                    </n-p>
                </n-upload-dragger>
            </n-upload>
        </n-form-item>

        <n-button type="success" @click="methods.handleValidateClick">
            確定編輯會議
        </n-button>
    </n-form>

    <pre>{{ JSON.stringify(model, null, 2) }}</pre>
</template>

<script>
import { defineComponent, ref, reactive, onMounted} from "vue";
import { ArchiveOutline as ArchiveIcon } from "@vicons/ionicons5";
import modelForm from './AddMeeting/model.js'
import rules from './AddMeeting/rules.js'
import { useMessage } from "naive-ui"
import Cookies from 'js-cookie'
import axios from 'axios'
import { useRoute } from 'vue-router'
import moment from 'moment'

import { meetingTypeOptions, statusOptions } from './AddMeeting/options.js'
export default defineComponent({
    components: {
        ArchiveIcon
    },
    setup() {
        const formRef = ref(null);
        const model = reactive(modelForm);
        const message = useMessage();
        const route = useRoute()
        const meetingId = route.params.meetingId
        const tempAttendees = ref([])
        const personOptions = ref([])

        onMounted(async () => {
            await methods.getMeet(meetingId)
            await methods.getAllPerson()
            personOptions.value = personOptions.value.map((v, i) => ({
                label: personOptions.value[i].name,
                value: personOptions.value[i].id
            }));
        })

        const removeAnnouncement = (index) => {
            model.announcements.splice(index, 1)
        }

        const addAnnouncement = () => {
            model.announcements.push({ content: '' })
        }

        const removeExtempore = (index) => {
            model.extempores.splice(index, 1)
        }

        const addExtempore = () => {
            model.extempores.push({ content: '' })
        }

        const removeMotion = (index) => {
            model.motions.splice(index, 1)
        }

        const addMotion = () => {
            model.motions.push({ content: '' })
        }

        const methods = {
            async getAllPerson() {
                // 獲取Cookies當中的login資訊並取得token
                const info = Cookies.get('login')
                let allPersonName = []
                if (info) {
                    const token = JSON.parse(info).token
                    await axios({
                        method: 'get',
                        url: 'http://127.0.0.1:8000/person/',
                        headers: {
                            accept: 'application/json',
                            'Content-Type': 'multipart/form-data',
                            'Authorization': `Bearer ${token}` // Bearer 跟 token 中間有一個空格
                        },
                    })
                        .then((response) => {
                            console.log('success', response.data)
                            for (var i = 0; i < response.data.length; i++) {
                                allPersonName.push({name: response.data[i].name, id: response.data[i].id});
                            }
                            personOptions.value = allPersonName
                        })
                }
            },
            async getMeet(id) {
                // 獲取Cookies當中的login資訊並取得token
                const info = Cookies.get('login')
                const url = 'http://127.0.0.1:8000/meeting/' + id
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
                            model.title = response.data.title
                            model.time = moment(response.data.time).valueOf();
                            model.location = response.data.location
                            model.type = response.data.type
                            model.chair_id = response.data.chair_id
                            model.minute_taker_id = response.data.minute_taker_id
                            //model.attendees = response.data.attendee_association
                            model.announcements = response.data.announcements
                            model.extempores = response.data.extempores
                            model.motions = response.data.motions
                            model["chair_speech"] = response.data.chair_speech
                            model["chair_confirmed"] = response.data.chair_confirmed
                            model["is_draft"] = response.data.is_draft

                            for (let i = 0; i < response.data.attendee_association.length; i++){
                                tempAttendees.value[i] = response.data.attendee_association[i].person_id
                            }

                            return response.data
                        })
                }
            },
            async editMeet(meetingId) {
                // 獲取Cookies當中的login資訊並取得token
                const info = Cookies.get('login')
                const url = 'http://127.0.0.1:8000/meeting/' + meetingId
                if (info) {
                    const token = JSON.parse(info).token
                    await axios({
                        method: 'put',
                        url: url,
                        headers: {
                            accept: 'application/json',
                            'Content-Type': 'multipart/form-data',
                            'Authorization': `Bearer ${token}` // Bearer 跟 token 中間有一個空格
                        },
                        data: {
                            'request': JSON.stringify(model, null, 2),
                            'files': []
                        }
                    })
                        .then((response) => {
                            console.log('success', response)
                            window.location.replace('/meeting/'+ meetingId)
                        })
                        .catch((error) => {
                            console.log('errorrr', error.response.data)
                        })
                }
            },
            handleValidateClick(e) {
                e.preventDefault();
                console.log('atttte', tempAttendees)
                for (let i = 0; i < tempAttendees.value.length; i++){
                    model.attendees[i] = {
                        "person_id": tempAttendees.value[i],
                        "is_present": true,
                        "is_confirmed": true,
                        "is_member": true
                    }
                }
                
                formRef.value?.validate((errors) => {
                    if (!errors) {
                        try {
                            methods.editMeet(meetingId);
                        } catch (exception) {
                            console.log("put error")
                        }
                        message.success("編輯會議成功");
                    } else {
                        message.error("還有空格未填");
                    }
                });
            },
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

        return {
            formRef,
            size: ref("medium"),
            model,
            methods,
            meetingTypeOptions,
            statusOptions,
            rules,
            tempAttendees,
            personOptions,
            removeAnnouncement,
            addAnnouncement,
            removeExtempore,
            addExtempore,
            removeMotion,
            addMotion,
        };
    },
});
</script>
