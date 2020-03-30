import React from 'react'

export default function ClosedBy(props) {
    return (
        <div className="form-item">
            <h3 className="title">Closed by</h3>
            <input
                className="form-item__closed-input"
                placeholder="Person ID or username"
                onChange={e => { props.change(e.target.value, 'closed_by') }}
            />
        </div>
    )
}
