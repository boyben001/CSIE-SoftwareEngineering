const modelForm = {
    title: null,
    time: null,
    location: null,
    type: null,
    chair_id: null,
    minute_taker_id: null,
    attendees: [],
    announcements: [{ content: '' }],
    extempores: [{ content: '' }],
    motions: [{
        description: '',
        content: '',
        status: '',
        resolution: '',
        execution: ''
    }]
};

export default modelForm;