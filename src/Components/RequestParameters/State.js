import React from 'react'


export default function State(props) {
    return (
        <div className="form-item">
            <h3 className="title">State</h3>
            <select className="form-item__state active" defaultValue={'both'} onChange={e => { props.change(e.target.value, 'state') }}>
                <option value="both">Both</option>
                <option value="opened">Open</option>
                <option value="closed">Close</option>
            </select>
        </div>
    )

}

