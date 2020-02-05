import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {setParameters} from '../../Actions';


class Assignee extends React.Component {
    constructor(){
        super();

        this.state = {
            assignee : ''
        }
    }


    setAssignee = e => {
        let request = this.props.request;
        request.assignee = this.state.assignee;

        if (this.state.assignee !== '') {
            let isNumber = parseInt(this.state.assignee);
            if (isNaN(isNumber) === true) {
                request.get_request +=  '&assignee_username=' + this.state.assignee;
            } else if (isNaN(isNumber) === false) {
                request.get_request +=  '&assignee_id=' + this.state.assignee;
            }
        }
        this.props.set({request: request});
    }

    render(){
        return(
            <div className="form-item">
                <h3 className="title">Assignee</h3>
                <input 
                    className="form-item__assignee-input" 
                    placeholder="Assignee ID or username"
                    value = {this.state.assignee}
                    onChange = {e => this.setState({assignee : e.target.value})}
                    onBlur = {this.setAssignee}
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