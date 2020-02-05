import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {setParameters} from '../../Actions';


class Domain extends React.Component {
    
    setDomain = e => {
        let request = this.props.request;
        request.domain = e.target.value;
        request.get_request = e.target.value;
        this.props.set({request: request});
    }


    render(){
        return(
            <div className = "form-item">
                <h3 className = "title">GitLab’s instance domain *</h3>
                <input 
                    className = "form-item__domain-input" 
                    placeholder = "https://gitlab.com"
                    onChange = {this.setDomain} 
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


export default connect(mapStateToProps, mapDispatchToProps)(Domain);