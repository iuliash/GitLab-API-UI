const firstState = {
    request : {
        domain: '', 
        project_id: '', 
        private_token: '', 
        state: '', 
        closed_after: {
            year: '', 
            month: '', 
            day: '', 
            hour: '', 
            minute: ''
        }, 
        closed_before: {
            year: '', 
            month: '', 
            day: '', 
            hour: '', 
            minute: ''
        }, 
        assignee: '', 
        closed_by: '', 
        milestone: '', 
        get_request: ''
    }
}


export default function Request(state = firstState, action) {
    switch (action.type) {
        case 'SET_PARAMETERS' : 
            return action.obj
        default: 
            return state
    }
}