<template>
  <div id="EditMeeting">
    <h1 class="meeting">新增會議</h1>
    <div class="meetingInfo">
      <h3>會議資訊</h3>
      <div>
        <label class="meetingInfo_subtitle" for="">標題</label>
        <br>
        <input class="input_subtitle" type="text">
      </div>
      <div class="d-flex justify-content-between">
        <div>
          <label class="meetingInfo_subtitle" for="">時間</label>
          <br>
          <input class="input_subtitle innerDecoration" type="datetime-local">
        </div>
        <div>
          <label class="meetingInfo_subtitle" for="">地點</label>
          <br>
          <input class="input_subtitle innerDecoration" type="text">
        </div>
        <div>
          <label class="meetingInfo_subtitle" for="">類型</label>
          <br>
          <select class="input_subtitle innerDecoration" name="" id="">
            <option value="">請選擇</option>
            <option value="deptAffairs">系務會議</option>
            <option value="facultyEvaluation">系教評會</option>
            <option value="deptCurriculum">系課程委員會</option>
            <option value="studentAffairs">招生暨學生事務委員會</option>
            <option value="deptDevelopment">系發展協會</option>
            <option value="other">其他</option>
          </select>
        </div>
      </div>
    </div>
    <hr>
    <div class="attendee">
      <div class="d-flex justify-content-between ">
        <h3>與會人員</h3>
        <n-button class="edit_meeting_btn" type="primary">新增人員</n-button>
      </div>
      <div>
        <label class="meetingInfo_subtitle" for="chair">主席</label>
        <br>
        <select class="input_subtitle">
          <option value="">請選擇</option>
          <option :value="person" v-for="person in chair" :key="person.id">
            {{ person.name }} ({{ person.email }}) {{ person.status }}
          </option>
        </select>
      </div>
      <div>
        <label class="meetingInfo_subtitle" for="">紀錄</label>
        <br>
        <select class="input_subtitle" disabled>
          <option value="管理員">管理員</option>
        </select>
      </div>
      <div>
        <label class="meetingInfo_subtitle" for="join">與會者</label>
        <br>
        <select class="input_subtitle" @click="no_chair()">
          <option value="choose" selected>請選擇</option>
          <option v-for="person in chair" :key="person.id">
            {{ person.name }} ({{ person.email }}) {{ person.status }}
          </option>
        </select>
      </div>
      <div>
        <label class="meetingInfo_subtitle" for="list">列席</label>
        <br>
        <select class="input_subtitle">
          <option value="choose" selected>請選擇</option>
          <option v-for="person in chair" :key="person.id">
            {{ person.name }} ({{ person.email }}) {{ person.status }}
          </option>
        </select>
      </div>
    </div>
    <hr>
    <div class="meetingContent">
      <h3>會議內容</h3>
      <label class="meetingInfo_subtitle" for="">主席致詞</label>
      <br>
      <textarea class="input_subtitle" name="" id="" cols="30" rows="3"></textarea>
      <div class="d-flex justify-content-between my-3">
        <label class="meetingInfo_subtitle" for="">報告事項</label>
        <n-button class="edit_meeting_btn" type="primary" @click="addReport()">新增報告事項</n-button>
      </div>
      <AddReport v-for="item in countReport" :key="item" :amountReport="countReport" @minusReport="countReport -= 1">
      </AddReport>
      <div class="d-flex justify-content-between my-3">
        <label class="meetingInfo_subtitle" for="">討論事項</label>
        <n-button class="edit_meeting_btn" type="primary" @click="addDiscuss()">新增討論事項</n-button>
      </div>
      <AddDiscussion v-for="item in countDiscuss" :key="item" :amountDiscuss="countDiscuss"
        @minusDiscuss="countDiscuss -= 1">
      </AddDiscussion>
      <div class=" d-flex justify-content-between my-3">
        <label class="meetingInfo_subtitle" for="">臨時動議</label>
        <n-button class="edit_meeting_btn" type="primary" @click="addExtempore()">新增臨時動議</n-button>
      </div>
      <AddExtempore v-for="item in countExtempore" :key="item" :amountExtempore="countExtempore"
        @minusExtempore="countExtempore -= 1">
      </AddExtempore>
      <div class="my-3">
        <label class="meetingInfo_subtitle form-label" for="formFileMultiple">附件</label>
        <input class="input_subtitle form-control" type="file" id="formFileMultiple" multiple>
      </div>
    </div>
    <button type="submit" class="btn btn-primary m-auto d-block my-4 edit_meeting_btn">
      新增會議
    </button>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { NButton } from 'naive-ui'
import AddReport from './AddReport.vue'
import AddDiscussion from './AddDiscussion.vue'
import AddExtempore from './AddExtempore.vue'


export default defineComponent({
  name: "EditMeeting",
  components: {
    NButton,
    AddReport,
    AddDiscussion,
    AddExtempore
  },
  data() {
    return {
      countDiscuss: 0,
      countReport: 0,
      countExtempore: 0,
      chair: [
        {
          id: 1,
          name: '路婉婷',
          email: ' ledasdas@example.org ',
          status: '校外教師'
        },
        {
          id: 2,
          name: '潘家偉',
          email: ' ghjghjgh@example.org ',
          status: '系助理'
        },
        {
          id: 3,
          name: '郁美玲',
          email: ' azhosda@example.org ',
          status: '業界專家'
        }
      ]
    }
  },
  methods: {
    addDiscuss() {
      this.countDiscuss++;
    },
    addReport() {
      this.countReport++;
    },
    addExtempore() {
      this.countExtempore++;
    },
    no_chair() {

    }
  }
})
</script>

<style>
.list-group {
  max-height: 150px;
  overflow-y: scroll;
}

.chair_radio:hover {
  background-color: #dddddd;
}

.meeting {
  width: 60vw;
  margin: 30px auto;
}

hr {
  width: 58vw;
  margin: 3rem auto 3rem auto;
}

.meetingInfo_subtitle {
  font-size: 20px;
  margin-bottom: 0.5rem;
}

.input_subtitle {
  width: 57vw;
  margin: 0 0 0.5rem 0;
  display: block;
  border: 1px solid #ced4da;
  padding: 5px;
  border-radius: 5px;
}

.input_subtitle:focus {
  border-color: #86b7fe;
  outline: none;
  box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
}

.edit_meeting_btn {
  width: 125px;
}

.meetingInfo,
.attendee,
.meetingContent {
  width: 57vw;
  margin: 0 auto;
  font-weight: 500;
}

.innerDecoration {
  width: 18vw;
}
</style>