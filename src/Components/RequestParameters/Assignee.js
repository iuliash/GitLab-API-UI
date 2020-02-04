import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {setParameters} from '../../Actions';


class Assignee extends React.Component {

    setAssignee = e => {
        let request = this.props.request;
        request.assignee = e.target.value;
        this.props.set({request: request});
    }

    render(){
        return(
            <div className="form-item">
                <h3 className="title">Assignee</h3>
                <input 
                    className="form-item__assignee-input" 
                    placeholder="Assignee ID or username"
                    onChange = {this.setAssignee}
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


export default connect(mapStateToProps, mapDispatchToProps)(Assignee);