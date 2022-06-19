const meetingTypeOptions = ["系務會議", "系教評會", "系課程委員會", "招生暨學生事務委員會", "系發展協會"].map((v) => ({
    label: v,
    value: v
}));
const personOptions = ["路婉婷", "潘家偉", "郁美玲"].map((v, i) => ({
    label: v,
    value: i
}));
const statusOptions = ["討論中", "執行中", "結案"].map((v) => ({
    label: v,
    value: v
}));

export {meetingTypeOptions, personOptions, statusOptions};