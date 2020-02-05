import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {setParameters} from '../../Actions';


class Milestone extends React.Component {
    constructor(){
        super();

        this.state = {
            milestone : ''
        }
    }


    setMilestone = e => {
        let request = this.props.request;
        request.milestone = this.state.milestone;

        if (this.state.milestone !== '') {
            request.get_request +=  '&milestone=' + this.state.milestone;
        }

        this.props.set({request: request});
    }

    render(){
        return(
            <div className="form-item">
                <h3 className="title">Milestone</h3>
                <input 
                    className="form-item__milestone-input" 
                    placeholder="Milestone title"
                    value = {this.state.milestone}
                    onChange = {e => this.setState({milestone : e.target.value})}
                    onBlur = {this.setMilestone}
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