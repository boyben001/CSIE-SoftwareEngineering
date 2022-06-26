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
    }
}

export default rules;