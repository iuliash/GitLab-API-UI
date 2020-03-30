import React from 'react'


export default function Assignee(props) {
    return (
        <div className="form-item">
            <h3 className="title">Assignee</h3>
            <input
                className="form-item__assignee-input"
                placeholder="Assignee ID or username"
                onChange={e => { props.change(e.target.value, 'assignee') }}
            />
        </div>
    )
}