import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {setParameters} from '../../Actions';


class State extends React.Component {
    constructor(){
        super();

        this.stateSelect = React.createRef();
    }

    setStateIssues = e => {
        this.stateSelect.current.className = 'form-item__state active';

        let request = this.props.request;
        request.state = e.target.value;
        this.props.set({request: request});
    }


    render(){
        return(
            <div className="form-item">
                <h3 className="title">State</h3>
                <select className="form-item__state" defaultValue={'DEFAULT'} ref={this.stateSelect} onChange={this.setStateIssues}>
                    <option value="DEFAULT" default hidden>Open or closed</option>
                    <option value="opened">Open</option>
                    <option value="closed">Close</option>
                </select>
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


export default connect(mapStateToProps, mapDispatchToProps)(State);


            