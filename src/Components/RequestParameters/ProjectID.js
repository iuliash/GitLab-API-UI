import React from 'react'


export default function ProjectID(props) {
    /*
        setProjectID = e => {
            let request = this.props.request;
            request.project_id = e.target.value;
            request.get_request +=  '/api/v4/projects/' + this.state.id;
            this.props.set({request: request});
            
        }*/


    return (
        <div className="form-item">
            <h3 className="title">Project ID</h3>
            <input
                className="form-item__proj-id-input"
                placeholder="ID"
                onChange={e => { props.change(e.target.value, 'project_id') }}
            />
        </div>
    )
}