import React from 'react'


export default function PrivateToken(props) {

    /*
        setPrivateToken = e => {
            let request = this.props.request;
            request.private_token = e.target.value;
            request.get_request +=  '/issues?private_token=' + this.state.token;
            this.props.set({request: request});
        }
    */


    return (
        <div className="form-item">
            <h3 className="title">Private token</h3>
            <input
                className="form-item__token-input"
                placeholder="Paste private token here"
                onChange={e => { props.change(e.target.value, 'private_token') }}
            />
        </div>
    )
}

