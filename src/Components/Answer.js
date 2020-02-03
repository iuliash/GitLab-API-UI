import React from 'react'

export default function Answer(){
    return(
        <div className='answer'>
            <h3 className="answer__title">Answer</h3>
            <textarea className="answer__input"/>
            <p className='answer__ps'>*Amount of issues</p>
        </div>
    )
}