const rules = {
    name: {
        required: true,
        trigger: ["blur", "input"],
        message: "名字不得為空"
    },
    gender: {
        required: true,
        trigger: ["blur", "input"],
        message: "性別不得為空"
    },
    phone: {
        required: true,
        trigger: ["blur", "input"],
        message: "手機不得為空"
    },
    email: {
        required: true,
        trigger: ["blur", "input"],
        message: "電子郵件"
    },
    type: {
        required: true,
        trigger: ["blur", "input"],
        message: "類型不得為空"
    },
    dept_prof_info: {
        job_title: {
            required: true,
            trigger: ["blur", "input"],
            message: "職稱不得為空"
        },
        office_tel: {
            required: true,
            trigger: ["blur", "input"],
            message: "辦公室電話不得為空"
        }
    },
    assistant_info: {
        office_tel: {
            required: true,
            trigger: ["blur", "input"],
            message: "辦公室電話不得為空"
        }
    },
    other_prof_info: {
        univ_name:{
            required: true,
            trigger: ["blur", "input"],
            message: "學校名稱不得為空"
        },
        dept_name:{
            required: true,
            trigger: ["blur", "input"],
            message: "系所名稱不得為空"
        },
        job_title: {
            required: true,
            trigger: ["blur", "input"],
            message: "職稱不得為空"
        },
        office_tel: {
            required: true,
            trigger: ["blur", "input"],
            message: "辦公室電話不得為空"
        },
        address:{
            required: true,
            trigger: ["blur", "input"],
            message: "地址不得為空"
        },
        bank_account:{
            required: true,
            trigger: ["blur", "input"],
            message: "銀行帳戶不得為空"
        },
    },
    expert_info: {
        company_name:{
            required: true,
            trigger: ["blur", "input"],
            message: "公司名稱不得為空"
        },
        job_title:{
            required: true,
            trigger: ["blur", "input"],
            message: "職稱不得為空"
        },
        office_tel: {
            required: true,
            trigger: ["blur", "input"],
            message: "辦公室電話不得為空"
        },
        address:{
            required: true,
            trigger: ["blur", "input"],
            message: "地址不得為空"
        },
        bank_account:{
            required: true,
            trigger: ["blur", "input"],
            message: "銀行帳戶不得為空"
        },
    },
    student_info: {
        student_id:{
            required: true,
            trigger: ["blur", "input"],
            message: "學號不得為空"
        },
        program:{
            required: true,
            trigger: ["blur", "input"],
            message: "學制不得為空"
        },
        study_year: {
            required: true,
            trigger: ["blur", "input"],
            message: "年級不得為空"
        },
    },
}

export default rules;