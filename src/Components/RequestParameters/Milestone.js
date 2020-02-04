import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {setParameters} from '../../Actions';


class Milestone extends React.Component {

    setMilestone = e => {
        let request = this.props.request;
        request.milestone = e.target.value;
        this.props.set({request: request});
    }

    render(){
        return(
            <div className="form-item">
                <h3 className="title">Milestone</h3>
                <input 
                    className="form-item__milestone-input" 
                    placeholder="Milestone title"
                    onChange = {this.setMilestone}
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


export default connect(mapStateToProps, mapDispatchToProps)(Milestone);