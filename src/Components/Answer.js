import React from 'react'

export default function Answer(props) {
    return(
        <div className='answer'>
                <textarea readOnly
                    className="answer__input"
                    value = {props.issues}
                    placeholder = 'Result would appear here'
                />
        </div>
    )
}