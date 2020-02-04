import React from 'react' 
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {setParameters} from '../Actions';

class Request extends React.Component {
    
    setRequest = e => {
        let request = this.props.request;
        request.get_request = e.target.value;
        this.props.set({request: request});
    }

    
    render(){
        let rqst = this.props.request.get_request;
        return(
            <form className="get-request">
                <h3 className="get-request__title">GET request</h3>
                <input 
                    className="get-request__input" 
                    placeholder="https://gitlab.com/api/v4/projects/12/issues?private_token=ej3-32jvdnsDfn2Ddj84e&state=closed&per_page=100"
                    //value = {rqst}
                    //onChange = {this.setRequest}
                />
                <button className="get-request__btn">Send request</button>
            </form>
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


export default connect(mapStateToProps, mapDispatchToProps)(Request);