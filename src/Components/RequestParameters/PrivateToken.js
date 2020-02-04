import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {setParameters} from '../../Actions';


class PrivateToken extends React.Component {

    setPrivateToken = e => {
        let request = this.props.request;
        request.private_token = e.target.value;
        this.props.set({request: request});
    }


    render(){
        return(
            <div className="form-item">
                <h3 className="title">Private token</h3>
                <input 
                    className="form-item__token-input" 
                    placeholder="Paste private token here"
                    onChange = {this.setPrivateToken} 
                />
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        request: state.Request.request
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        set: setParameters,
    }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(PrivateToken);