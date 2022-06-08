<template>  
  <div class="edit-user">
    <div class="inner">
      <label for="name">姓名</label>
      <br>
      <input type="text">
    </div>
    
    <div class="inner">
      <label for="">姓別</label>
      <br>
      <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="gender"
                    id="gender1" value="Male" checked>
              <label class="form-check-label" for="pGenderInput1">男</label>
          </div>
          <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="gender"
                    id="gender2" value="Female">
              <label class="form-check-label" for="gender2">女</label>
      </div>
    </div>
    
    <div class="inner">
      <label for="phone">手機</label>
      <br>
      <input type="text">
    </div>

    <div class="inner">
      <label for="email">電子郵件</label>
      <br>
      <input type="text">
    </div>

    <div class="inner">
      <label for="persontype">類別</label>
      <br>
      <select v-model = "persontype">
        <option disabled value="">Please Choose</option>
        <option id ="dept-teach">Department Teacher</option>
        <option id="dept-assist">Department Assistant</option>
        <option id="out-teach">Outside Teacher</option>
        <option id="experts">Experts</option>
        <option id="student">Students</option>
      </select>

      <div v-if="persontype=='Department Teacher'">
        <div>
        <label for="email">電子郵件</label>
        <br>
        <input type="text">
        </div>
      </div>
      <div v-if="persontype=='Department Assistant'">
        <div>
        <label for="officephone">辦公室電話</label>
        <br>
        <input type="text">
        </div>
      </div>
      <div v-if="persontype=='Outside Teacher'">
        <div>
        <label for="schoolname">學校名稱</label>
        <br>
        <input type="text">
        </div>
        <div>
        <label for="deptname">系所名稱</label>
        <br>
        <input type="text">
        </div>
        <div>
        <label for="jobtitle">職稱</label>
        <br>
        <input type="text">
        </div>
        <div>
        <label for="officephone">辦公室電話</label>
        <br>
        <input type="text">
        </div>
        <div>
        <label for="address">地址</label>
        <br>
        <input type="text">
        </div>
        <div>
        <label for="bankaccount">銀行帳戶</label>
        <br>
        <input type="text">
        </div>
      </div>

      <div v-if="persontype=='Experts'">
        <div>
        <label for="schoolname">公司名稱</label>
        <br>
        <input type="text">
        </div>
        <div>
        <label for="jobtitle">職稱</label>
        <br>
        <input type="text">
        </div>
        <div>
        <label for="officephone">辦公室電話</label>
        <br>
        <input type="text">
        </div>
        <div>
        <label for="address">地址</label>
        <br>
        <input type="text">
        </div>
        <div>
        <label for="bankaccount">銀行帳戶</label>
        <br>
        <input type="text">
        </div>
      </div>
      <div v-if="persontype=='Students'">
        <div>
        <label for="studentid">學號</label>
        <br>
        <input type="text">
        </div>
        <div>
        <label for="academicsystem">學制</label>
        <br>
        <input type="text">
        </div>
        <div>
        <label for="year">年級</label>
        <br>
        <input type="text">
        </div>
        
      </div>
      </div>
  <button type="submit" class="btn btn-primary m-auto d-block" v-bind="submitForm">
    送出修改
  </button>

</div>
</template>

<script>

export default {
  data() {
    return {
      persontype: ''
      }
    },

  name: 'editUserVue',
 
  methods:{
    resetData(){
      this.name = ''
      this.phone =''
      this.email =''
      this.personrole =''
      

    },

    submitForm(){

    }
  }
}


// function show1(){
//   document.getElementById('div1').style.display ='none';
// }
// function show2(){
//   document.getElementById('div1').style.display = 'block';
// }
//   $("#seeAnotherField").change(function() {
//   if ($(this).val() == "yes") {
//     $('#otherFieldDiv').show();
//     $('#otherField').attr('required', '');
//     $('#otherField').attr('data-error', 'This field is required.');
//   } else {
//     $('#otherFieldDiv').hide();
//     $('#otherField').removeAttr('required');
//     $('#otherField').removeAttr('data-error');
//   }
// });
// $("#seeAnotherField").trigger("change");

// $("#seeAnotherFieldGroup").change(function() {
//   if ($(this).val() == "yes") {
//     $('#otherFieldGroupDiv').show();
//     $('#otherField1').attr('required', '');
//     $('#otherField1').attr('data-error', 'This field is required.');
//     $('#otherField2').attr('required', '');
//     $('#otherField2').attr('data-error', 'This field is required.');
//   } else {
//     $('#otherFieldGroupDiv').hide();
//     $('#otherField1').removeAttr('required');
//     $('#otherField1').removeAttr('data-error');
//     $('#otherField2').removeAttr('required');
//     $('#otherField2').removeAttr('data-error');
//   }
// });
// $("#seeAnotherFieldGroup").trigger("change");




</script>
