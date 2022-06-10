<template>
    <!-- <AddUser></AddUser> -->
    <n-card :title="basicdata.name" hoverable class="d-flex m-4 py-2">
        <div class="d-flex justify-content-between">
            <div class="my-5">
                <div class="mb-4"
                    style="width: 250px; font-size: 22px; font-weight: 500; border-bottom: 3px solid lightgray">
                    基本資料
                </div>
                <div>性別: {{ basicdata.gender }}</div>
                <div>手機: {{ basicdata.phone }}</div>
                <div>電子郵件: {{ basicdata.email }}</div>
            </div>
            <div class="d-flex flex-column align-items-center justify-content-around">
                <EditDeleteBtn></EditDeleteBtn>
                <div v-if="basicdata.gender == '男'">
                    <img src="https://img.icons8.com/color/480/undefined/user-male-circle--v1.png" width="100"
                        height="100" alt="" />
                </div>
                <div v-else-if="basicdata.gender == '女'">
                    <img src="https://img.icons8.com/color/480/undefined/user-female-circle--v1.png" width="100"
                        height="100" alt="" />
                </div>
            </div>
        </div>
        <div>
            <div class="mb-4"
                style="width: 250px; font-size: 22px; font-weight: 500; border-bottom: 3px solid lightgray">詳細資料
            </div>
            <div v-if="basicdata.persontype == '系上老師'">
                <div>職稱: {{ moredetails.jobtitle }}</div>
                <div>辦公室電話: {{ moredetails.officephone }}</div>
            </div>

            <div v-if="basicdata.persontype == '系助理'">
                <div>辦公室電話: {{ moredetails.officephone }}</div>
            </div>

            <div v-if="basicdata.persontype == '校外老師'">
                <div>學校名稱: {{ moredetails.schoolname }}</div>
                <div>系所名稱: {{ moredetails.deptname }}</div>
                <div>職稱: {{ moredetails.jobtitle }}</div>
                <div>辦公室電話: {{ moredetails.officephone }}</div>
                <div>地址: {{ moredetails.address }}</div>
                <div>銀行帳戶: {{ moredetails.bankaccount }}</div>
            </div>

            <div v-if="basicdata.persontype == '業界專家'">
                <div>公司名稱: {{ moredetails.companyname }}</div>
                <div>職稱: {{ moredetails.jobtitle }}</div>
                <div>辦公室電話: {{ moredetails.officephone }}</div>
                <div>地址: {{ moredetails.address }}</div>
                <div>銀行帳戶: {{ moredetails.bankaccount }}</div>
            </div>

            <div v-if="basicdata.persontype == '學生'">
                <div>學號: {{ moredetails.studentid }}</div>
                <div>學制: {{ moredetails.academicsystem }}</div>
                <div>年級: {{ moredetails.year }}</div>
            </div>
        </div>
    </n-card>
</template>

<script>
import EditDeleteBtn from "@/components/Edit-Delete-Button.vue"
// import AddUser from "@/components/AddUser.vue"

export default {
    name: "person-details",
    components: {
        EditDeleteBtn,
        // AddUser
    },
    props: {
        msg: String
    },
    data() {
        return {

            basicdata:
            {
                id: 1,
                name: "Sam",
                persontype: "系上老師",
                gender: "男",
                phone: "09010293",
                email: "a@mail.com",
            }
            ,

            moredetails:
            {
                schoolname: "",
                companyname: "",
                deptname: "",
                officephone: "032 50093143",
                jobtitle: "系上老師",
                address: "",
                bankaccount: "",
                studentid: "",
                academicsystem: "",
                year: ""

            }


        };
    }
}
</script>

