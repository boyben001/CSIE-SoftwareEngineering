<template>
  <h2 style="margin-bottom: 30px;">新增會議</h2>
  <div class="meetingInfo">
    <h4>會議資訊</h4>
    <div class="inner">
      <label for="">標題</label>
      <br>
      <input type="text">
    </div>
    <div class="inner">
      <label for="">時間</label>
      <br>
      <input type="datetime-local">
    </div>
    <div class="inner">
      <label for="">地點</label>
      <br>
      <input type="text">
    </div>
    <div class="inner">
      <label for="">類型</label>
      <br>
      <select name="" id="">
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
  <hr>
  <div class="attendee">
    <div class="d-flex justify-content-between ">
      <h4>與會人員</h4>
      <n-button type="primary">新增人員</n-button>
    </div>
    <div class="inner">
      <label for="">主席</label>
      <br>
      <select name="" id="">
        <option value="">請選擇</option>
      </select>
    </div>
    <div class="inner">
      <label for="">紀錄</label>
      <br>
      <select name="" id="">
        <option value="">請選擇</option>
      </select>
    </div>
    <div class="inner">
      <label for="">與會者</label>
      <br>
      <select name="" id="">
        <option value="">請選擇</option>
      </select>
    </div>
    <div class="inner">
      <label for="">列席</label>
      <br>
      <select name="" id="">
        <option value="">請選擇</option>
      </select>
    </div>
  </div>
  <hr>
  <div class="meetingContent">
    <h4>會議內容</h4>
    <div style="padding-left: 40px; font-weight: 500;">
      <label for="">主席致詞</label>
      <br>
      <textarea name="" id="" cols="30" rows="3"></textarea>
      <div class="d-flex justify-content-between" style="margin: 10px 0 0 0;">
        <label for="">報告事項</label>
        <n-button type="primary">新增報告事項</n-button>
      </div>
      <div class="d-flex justify-content-between" style="margin: 10px 0 0 0;">
        <label for="">討論事項</label>
        <n-button type="primary">新增討論事項</n-button>
      </div>
      <div class="d-flex justify-content-between" style="margin: 10px 0 0 0;">
        <label for="">臨時動議</label>
        <n-button type="primary">新增臨時動議</n-button>
      </div>
      <div style="margin: 5px 0 15px 0;">
        <label for="formFileMultiple" class="form-label">附件</label>
        <input class="form-control" type="file" id="formFileMultiple" multiple>
      </div>
    </div>
  </div>
  <button type="submit" class="btn btn-primary m-auto d-block">
    新增會議
  </button>
</template>

<script>
import { defineComponent } from 'vue'
import { NButton } from 'naive-ui'

export default defineComponent({
  components: {
    NButton
  }
})
</script>

<style>
.inner {
  padding: 10px 40px;
  font-weight: 500;
}

input,
select,
textarea {
  width: 80vw;
  margin: 5px 0 0 0;
  display: block;
  border: 1px solid #ced4da;
  padding: 5px;
  border-radius: 5px;
}

input:focus,
select:focus,
textarea:focus {
  border-color: #86b7fe;
  outline: none;
  box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
}

button {
  width: 125px;
}

.meetingInfo,
.attendee,
.meetingContent {
  width: 85vw;
  margin: 0 auto;
}
</style>