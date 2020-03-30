import React from 'react'


export default function Milestone(props) {
    return (
        <div className="form-item">
            <h3 className="title">Milestone</h3>
            <input
                className="form-item__milestone-input"
                placeholder="Milestone title"
                onChange={e => { props.change(e.target.value, 'milestone') }}
            />
        </div>
    )
}
