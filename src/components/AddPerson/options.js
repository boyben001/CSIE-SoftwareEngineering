const personTypeOptions = ["系上教師", "系助理", "校外教師", "業界專家", "學生"].map((v) => ({
    label: v,
    value: v
}));

const programTypeOptions = ["大學部", "碩士班", "博士班"].map((v) => ({
    label: v,
    value: v
}));

const studyYearOptions = ["一年級", "二年級", "三年級", "四年級", "五年級", "六年級", "七年級"].map((v) => ({
    label: v,
    value: v
}));

export {personTypeOptions, programTypeOptions, studyYearOptions};