import React from 'react'


export default function Domain (props) {

        return(
            <div className = "form-item">
                <h3 className = "title">GitLab’s instance domain</h3>
                <input 
                    className = "form-item__domain-input" 
                    placeholder = "https://gitlab.com"
                    onChange = {e => {props.change(e.target.value, 'domain')}} 
                />
            </div>
        )
    
}