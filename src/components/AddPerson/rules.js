const rules = {
    title: {
        required: true,
        trigger: ["blur", "input"],
        message: "標題不得為空"
    },
    time: {
        type: 'number',
        required: true,
        trigger: ["blur", "input"],
        message: "時間不得為空"
    },
    location: {
        required: true,
        trigger: ["blur", "input"],
        message: "地點不得為空"
    },
    type: {
        required: true,
        trigger: ["blur", "input"],
        message: "類型不得為空"
    },
    chair_id: {
        type: 'number',
        required: true,
        trigger: ["blur", "change"],
        message: "必須要有主席"
    },
    minute_taker_id: {
        type: 'number',
        required: true,
        trigger: ["blur", "change"],
        message: "必須要有紀錄"
    },
    attendee_association: {
        type: "array",
        required: true,
        trigger: ["blur", "change"],
        message: "必須要有與會人員"
    },
    datetimeValue: {
        type: "number",
        required: true,
        trigger: ["blur", "change"],
        message: "Please input datetimeValue"
    },
    announcements: {
        content: {
            required: true,
            trigger: ["blur", "input"],
            message: "Please input nestedValue.path1"
        },
    }
}

export default rules;