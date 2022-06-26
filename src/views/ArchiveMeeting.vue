<template>
    <n-layout>
        <n-scrollbar style="max-height: 95vh; padding: 3% 5% " trigger="none">
            <n-h1 style="font-weight: bold;">封存會議</n-h1>
            <n-tabs type="line" animated>
                <n-tab-pane name="draft" tab="尚未封存">
                    <n-data-table :columns="draft_columns" :data="draft_data" :pagination="pagination" :bordered="false" />
                </n-tab-pane>
                <n-tab-pane name="archive" tab="已封存">
                    <n-data-table :columns="archive_columns" :data="archive_data" :pagination="pagination" :bordered="false" />
                </n-tab-pane>
            </n-tabs>
        </n-scrollbar>
    </n-layout>
</template>

<script>
import { h, defineComponent, ref, onMounted } from "vue";
import { NButton, useMessage } from "naive-ui";
import Cookies from 'js-cookie'
import axios from 'axios'
import moment from 'moment'

export default defineComponent({
    setup() {
        const message = useMessage();
        const personOptions = ref([])
        const draft_data = ref([])
        const archive_data = ref([])
        const index = ref()

        onMounted(async () => {
            await methods.getAllPerson()
            await methods.getAllMeeting()
        })

        const createDraftColumns = ({
            Archive
        }) => {
            return [
                {
                    title: "Id",
                    key: "id"
                },
                {
                    title: "標題",
                    key: "title"
                },
                {
                    title: "主席",
                    key: "chairman"
                },
                {
                    title: "紀錄",
                    key: "minutetaker"
                },
                {
                    title: "開會時間",
                    key: "time"
                },
                {
                    title: "封存",
                    key: "archive",
                    render(row) {
                        return h(NButton, {
                            strong: true,
                            tertiary: true,
                            size: "small",
                            type: "success",
                            onClick: () => Archive(row)
                        }, { default: () => "封存" });
                    }
                }
            ];
        };

        const createArchiveColumns = ({
            Download
        }) => {
            return [
                {
                    title: "Id",
                    key: "id"
                },
                {
                    title: "標題",
                    key: "title"
                },
                {
                    title: "主席",
                    key: "chairman"
                },
                {
                    title: "紀錄",
                    key: "minutetaker"
                },
                {
                    title: "開會時間",
                    key: "time"
                },
                {
                    title: "下載",
                    key: "download",
                    render(row) {
                        return h(NButton, {
                            strong: true,
                            tertiary: true,
                            size: "small",
                            type: "info",
                            onClick: () => Download(row)
                        }, { default: () => "下載" });
                    }
                }
            ];
        };

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
            getName(id){
                for (let i = 0; i < personOptions.value.length; i++){
                    if (personOptions.value[i].id == id){
                        return personOptions.value[i].name
                    }
                }
                return ''
            },
            async getAllMeeting() {
                // 獲取Cookies當中的login資訊並取得token
                const info = Cookies.get('login')
                if (info) {
                    const token = JSON.parse(info).token
                    await axios({
                        method: 'get',
                        url: 'http://127.0.0.1:8000/meeting/',
                        headers: {
                            accept: 'application/json',
                            'Content-Type': 'multipart/form-data',
                            'Authorization': `Bearer ${token}` // Bearer 跟 token 中間有一個空格
                        },
                    })
                        .then((response) => {
                            console.log('success', response.data)
                            for (var i = 0; i < response.data.length; i++) {
                                if (response.data[i].is_draft == true){
                                    draft_data.value.push({
                                        id: response.data[i].id, 
                                        title: response.data[i].title, 
                                        chairman: methods.getName(response.data[i].chair_id), 
                                        minutetaker: methods.getName(response.data[i].minute_taker_id), 
                                        time: moment(response.data[i].time).format('YYYY-MM-DD')
                                    })
                                }else{
                                    archive_data.value.push({
                                        id: response.data[i].id, 
                                        title: response.data[i].title, 
                                        chairman: methods.getName(response.data[i].chair_id), 
                                        minutetaker: methods.getName(response.data[i].minute_taker_id), 
                                        time: moment(response.data[i].time).format('YYYY-MM-DD')
                                    })
                                }
                            }
                        })
                }
            },
            async editMeet(meetingId, model) {
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
                            draft_data.value.splice(index, 1)
                            archive_data.value.push({
                                id: model.id, 
                                title: model.title, 
                                chairman: methods.getName(model.chair_id), 
                                minutetaker: methods.getName(model.minute_taker_id), 
                                time: moment(model.time).format('YYYY-MM-DD')
                            })
                            message.info(`封存 ${model.title}`)
                        })
                        .catch((error) => {
                            console.log('errorrr', error.response.data)
                            message.info('封存失敗，資料未填妥')
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
                            const model = response.data
                            model.is_draft = false
                            model['attendees'] = response.data.attendee_association
                            console.log('sucesssss2222', model)
                            methods.editMeet(id, model)
                        })
                }
            },
            changeMeeting2Achive(id) {
                methods.getMeet(id)
            }
        }


        return {
            draft_data,
            archive_data,
            methods,
            draft_columns: createDraftColumns({
                Archive(row) {
                    for (let i = 0; i < draft_data.value.length; i++){
                        if (draft_data.value[i].id == row.id){
                            index.value = i
                        }
                    }
                    methods.changeMeeting2Achive(row.id)
                }
            }),
            archive_columns: createArchiveColumns({
                Download(row) {
                    message.info(`下載 ${row.title}`)
                }
            }),
            pagination: false
        };
    }
});
</script>