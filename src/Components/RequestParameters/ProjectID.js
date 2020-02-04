import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {setParameters} from '../../Actions';


class ProjectID extends React.Component {

    setProjectID = e => {
        let request = this.props.request;
        request.project_id = e.target.value;
        this.props.set({request: request});
    }


    render(){
        return(
            <div className="form-item">
                <h3 className="title">Project ID</h3>
                <input 
                    className="form-item__proj-id-input" 
                    placeholder="ID"
                    onChange = {this.setProjectID} 
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