<template>
    <div class = "upper">
        <div v-if="basicdata.gender=='男'">
            <img src="https://img.icons8.com/color/480/undefined/user-male-circle--v1.png" width="100" height="100" alt=""/>
        </div>
        <div v-else-if="basicdata.gender=='女'">
            <img src="https://img.icons8.com/color/480/undefined/user-female-circle--v1.png" width="100" height="100" alt=""/>
        </div>
        <div>{{basicdata.name}}</div>
        <div>({{basicdata.persontype}})</div>
    </div>

    <div class="left-side">
        <br>
        <div class="big-word">基本資料:</div>
        <hr>
            <div>性別: {{ basicdata.gender }}</div>
            <div>手機: {{ basicdata.phone }}</div>
            <div>電子郵件: {{ basicdata.email }}</div>
            <br>
    </div>
    <div class="right-side">
    <br>
        <div class="big-word">詳細資料:</div>
        <hr>
        <div v-if="basicdata.persontype=='系上老師'">
            <div>職稱: {{ moredetails.jobtitle }}</div>
            <div>辦公室電話: {{ moredetails.officephone }}</div>
        </div>

        <div v-if="basicdata.persontype=='系助理'">
            <div>辦公室電話: {{ moredetails.officephone }}</div>
        </div>

        <div v-if="basicdata.persontype=='校外老師'">
            <div>學校名稱: {{ moredetails.schoolname }}</div>
            <div>系所名稱: {{ moredetails.deptname }}</div>
            <div>職稱: {{ moredetails.jobtitle }}</div>
            <div>辦公室電話: {{ moredetails.officephone }}</div>
            <div>地址: {{moredetails.address}}</div>
            <div>銀行帳戶: {{ moredetails.bankaccount }}</div>
        </div>

        <div v-if="basicdata.persontype=='業界專家'">
            <div>公司名稱: {{ moredetails.companyname }}</div>            
            <div>職稱: {{ moredetails.jobtitle }}</div>
            <div>辦公室電話: {{ moredetails.officephone }}</div>
            <div>地址: {{moredetails.address}}</div>
            <div>銀行帳戶: {{ moredetails.bankaccount }}</div>        
        </div>

        <div v-if="basicdata.persontype=='學生'">
            <div>學號: {{ moredetails.studentid }}</div>
            <div>學制: {{ moredetails.academicsystem }}</div>
            <div>年級: {{ moredetails.year }}</div>
    </div>
</div>
</template>

<script>

export default {
    name: "person-details",
    props: {
        msg: String
    },
    data() {
        return {
            
                basicdata:
                {
                    id: 1,
                    name:"Sam",
                    persontype:"系上老師",
                    gender:"男",
                    phone:"09010293",
                    email:"a@mail.com",
                }        
                ,

                moredetails:
                {                    
                    schoolname:"",
                    companyname:"",
                    deptname:"",
                    officephone:"",
                    jobtitle:"",
                    address:"",
                    bankaccount:"",
                    studentid:"",
                    academicsystem:"",
                    year:""

                }
                
            
        };
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

.upper {
    text-align: center;
}

.lower {
    text-align: left;
}

.left-side {
    float: left;
    width: 50%;
}

.right-side {
    
    float: left;
    width: 50%;
}

.big-word {
    font-weight: bold;
    font-size: large;
    text-align: center;
}

.median-word {
    font-weight: bold;
    font-size: medium;
}
</style>
