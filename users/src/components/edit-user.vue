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
      <label for="personrole">類別</label>
      <br>
      <select name="" id="">
        <option value="">請選擇</option>
        <option value="dept-teach" id="dept-teach" >系上老師</option>
        <div v-if="dept-teach === 'dept-teach'">
             
         <div class="inner">
      <label for="">職稱</label>
      <br>
      <input type="text">
    </div>
        </div>
        
        <option value="dept-assist">系助理</option>
        <option value="out-teach">校外老師</option>
        <option value="experts">業界專家</option>
        <option value="student">學生</option>
      </select>
    </div>
    <div class="inner">
      <label for="">職稱</label>
      <br>
      <input type="text">
    </div>
    <div class="inner">
      <label for="">辦公室電話</label>
      <br>
      <input type="text">
    </div>
    
  </div>
  
  <button type="submit" class="btn btn-primary m-auto d-block" v-bind="submitForm">
    送出修改
  </button>

  <form class="p-3">
  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" class="form-control" id="name" placeholder="Joe Smith">
  </div>
  
  <div class="form-group">
    <label for="seeAnotherField">Do You Want To See Another Field?</label>
    <select class="form-control" id="seeAnotherField">
          <option value="no">No Way.</option>
          <option value="yes">Absolutely!</option>
    </select>
  </div>
  
  <div class="form-group" id="otherFieldDiv">
    <label for="otherField">Here you go!</label>
    <select class="form-control" id="otherField">
      <option>Yay</option>
      <option>Woo</option>
      <option>Hazah</option>
      <option>Yipee</option>
      <option>Hoorah</option>
    </select>
  </div>
  
  <div class="form-group">
    <label for="seeAnotherFieldGroup">Do You Want To See Another Group of Fields?</label>
    <select class="form-control" id="seeAnotherFieldGroup">
          <option value="no">Not Particularly.</option>
          <option value="yes">I Guess!</option>
    </select>
  </div>
  
  <div class="form-group" id="otherFieldGroupDiv">
    <div class="row">
      <div class="col-6">
        <label for="otherField1">Group: Heres One!</label>
        <input type="text" class="form-control w-100" id="otherField1">
      </div>
      <div class="col-6">
        <label for="otherField2">Group: Another One!</label>
        <input type="text" class="form-control w-100" id="otherField2">
      </div>
    </div>
  </div>
  
</form>

</template>

<script>
export default {
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

$("#seeAnotherField").change(function() {
  if ($(this).val() == "yes") {
    $('#otherFieldDiv').show();
    $('#otherField').attr('required', '');
    $('#otherField').attr('data-error', 'This field is required.');
  } else {
    $('#otherFieldDiv').hide();
    $('#otherField').removeAttr('required');
    $('#otherField').removeAttr('data-error');
  }
});
$("#seeAnotherField").trigger("change");

$("#seeAnotherFieldGroup").change(function() {
  if ($(this).val() == "yes") {
    $('#otherFieldGroupDiv').show();
    $('#otherField1').attr('required', '');
    $('#otherField1').attr('data-error', 'This field is required.');
    $('#otherField2').attr('required', '');
    $('#otherField2').attr('data-error', 'This field is required.');
  } else {
    $('#otherFieldGroupDiv').hide();
    $('#otherField1').removeAttr('required');
    $('#otherField1').removeAttr('data-error');
    $('#otherField2').removeAttr('required');
    $('#otherField2').removeAttr('data-error');
  }
});
$("#seeAnotherFieldGroup").trigger("change");



</script>
