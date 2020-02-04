import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {setParameters} from '../../Actions';


class ClosedBy extends React.Component {

    setClosedBy = e => {
        let request = this.props.request;
        request.closed_by = e.target.value;
        this.props.set({request: request});
    }

    render(){
        return(
            <div className="form-item">
                <h3 className="title">Closed by</h3>
                <input 
                    className="form-item__closed-input" 
                    placeholder="Person ID or username"
                    onChange = {this.setClosedBy}
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


export default connect(mapStateToProps, mapDispatchToProps)(ClosedBy);