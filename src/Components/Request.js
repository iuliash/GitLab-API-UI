import React from 'react' 
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {setParameters} from '../Actions';

class Request extends React.Component {
    constructor(props, context){
        super(props, context);

        this.state = {
            issues: []
        }
    }

    setRequest = e => {
        let request = this.props.request;
        request.get_request = e.target.value;
        this.props.set({request: request});
        this.forceUpdate();
    }
    

    get_request = e => {
        e.preventDefault();

        fetch(this.props.request.get_request)
            .then (response => {
                if (response.status !== 200 ) {
                    throw new Error ('Error code: ', response.status);
                }
                console.log(response)
                response.json()
                    .then (issues => {
                        this.setState({issues: JSON.stringify(issues, null, 4)});
                    })
            })
            .catch(err => {
                console.log('Error: ', err);
            })        
    }
    
    render(){
        return(
            <div>
                <form className="get-request" onSubmit={this.get_request}>
                    <h3 className="get-request__title">GET request</h3>
                    <input 
                        className="get-request__input" 
                        placeholder="https://gitlab.com/api/v4/projects/12/issues?private_token=ej3-32jvdnsDfn2Ddj84e&state=closed&per_page=100"
                        value = {this.props.request.get_request}
                        onChange = {this.setRequest}
                        onFocus = {() => {this.forceUpdate()}}
                    />
                    <button className="get-request__btn">Send request</button>
                </form>
                <div className='answer'>
                    <h3 className="answer__title">Answer</h3>
                    <textarea readOnly
                        className="answer__input"
                        value = {this.state.issues}
                    />
                    <p className='answer__ps'>*Amount of issues</p>
                </div>
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


export default connect(mapStateToProps, mapDispatchToProps)(Request);