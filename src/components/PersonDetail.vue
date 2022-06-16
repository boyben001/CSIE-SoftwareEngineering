<template>
    <div v-for="memb in members" :key="memb.id">
        <div v-if="memb.id == msg">
            <n-card :title="memb.name" hoverable class="d-flex m-4 py-2">
                <div class="d-flex justify-content-between">
                    <div class="my-5">
                        <div class="mb-4"
                            style="width: 250px; font-size: 22px; font-weight: 500; border-bottom: 3px solid lightgray">
                            基本資料
                        </div>
                        <div>性別: {{ memb.gender }}</div>
                        <div>手機: {{ memb.phone }}</div>
                        <div>電子郵件: {{ memb.email }}</div>
                    </div>
                    <div class="d-flex flex-column align-items-center justify-content-around">
                        <EditDeleteBtn></EditDeleteBtn>
                        <div v-if="memb.gender == '男'">
                            <img src="https://img.icons8.com/color/480/undefined/user-male-circle--v1.png" width="100"
                                height="100" alt="" />
                        </div>
                        <div v-else-if="memb.gender == '女'">
                            <img src="https://img.icons8.com/color/480/undefined/user-female-circle--v1.png" width="100"
                                height="100" alt="" />
                        </div>
                    </div>
                </div>
                <div>
                    <div class="mb-4"
                        style="width: 250px; font-size: 22px; font-weight: 500; border-bottom: 3px solid lightgray">詳細資料
                    </div>
                    <div v-if="memb.persontype == '系上老師'">
                        <div>職稱: {{ memb.jobtitle }}</div>
                        <div>辦公室電話: {{ memb.officephone }}</div>
                    </div>

                    <div v-if="memb.persontype == '系助理'">
                        <div>辦公室電話: {{ memb.officephone }}</div>
                    </div>

                    <div v-if="memb.persontype == '校外老師'">
                        <div>學校名稱: {{ memb.schoolname }}</div>
                        <div>系所名稱: {{ memb.deptname }}</div>
                        <div>職稱: {{ memb.jobtitle }}</div>
                        <div>辦公室電話: {{ memb.officephone }}</div>
                        <div>地址: {{ memb.address }}</div>
                        <div>銀行帳戶: {{ memb.bankaccount }}</div>
                    </div>

                    <div v-if="memb.persontype == '業界專家'">
                        <div>公司名稱: {{ memb.companyname }}</div>
                        <div>職稱: {{ memb.jobtitle }}</div>
                        <div>辦公室電話: {{ memb.officephone }}</div>
                        <div>地址: {{ memb.address }}</div>
                        <div>銀行帳戶: {{ memb.bankaccount }}</div>
                    </div>

                    <div v-if="memb.persontype == '學生'">
                        <div>學號: {{ memb.studentid }}</div>
                        <div>學制: {{ memb.academicsystem }}</div>
                        <div>年級: {{ memb.year }}</div>
                    </div>
                </div>
            </n-card>
        </div>
    </div>
</template>

<script>
import EditDeleteBtn from "@/components/Edit-Delete-Button.vue"
export default {
    name: "PersonDetail",
    components: {
        EditDeleteBtn,
        // AddUser
    },
    props: {
        msg: Number
    },
    data() {
        return {
            members: [
                {
                    id: 1,
                    name: "Sam",
                    persontype: "系上老師",
                    gender: "男",
                    phone: "09010293",
                    email: "a@mail.com",
                    officephone: "032 50093143",
                    jobtitle: "系上老師",
                },
                {
                    id: 2,
                    name: "Sam",
                    persontype: "系助理",
                    gender: "男",
                    phone: "0987654321",
                    email: "ta@mail.com",
                    officephone: "032 50093143"
                },
            ]
        };
    }
}
</script>