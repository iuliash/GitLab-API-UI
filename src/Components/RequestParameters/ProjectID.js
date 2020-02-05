import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {setParameters} from '../../Actions';


class ProjectID extends React.Component {
    constructor(){
        super();

        this.state = {
            id : ''
        }
    }


    setProjectID = e => {
        let request = this.props.request;
        request.project_id = e.target.value;
        request.get_request +=  '/api/v4/projects/' + this.state.id;
        this.props.set({request: request});
        
    }


    render(){
        return(
            <div className="form-item">
                <h3 className="title">Project ID *</h3>
                <input 
                    className="form-item__proj-id-input" 
                    placeholder="ID"
                    value = {this.state.id}
                    onChange = {e => {this.setState({id: e.target.value})}} 
                    onBlur = {this.setProjectID}
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


export default connect(mapStateToProps, mapDispatchToProps)(ProjectID);