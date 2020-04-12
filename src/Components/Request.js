import React from 'react' 

export default class Request extends React.Component {
    constructor(props){
        super(props);
    }
    

    get_request = e => {
        e.preventDefault();

        fetch(this.props.get_rqst)
            .then (response => {
                if (response.status !== 200 ) {
                    throw new Error ('Error code: ', response.status);
                }
                console.log(response)
                response.json()
                    .then (issues => {
                        //this.setState({issues: JSON.stringify(issues, null, 4)});
                        this.props.setAnswer(JSON.stringify(issues, null, 4));
                    })
            })
            .catch(err => {
                console.log('Error: ', err);
            })        
    }
    
    render(){
        return(
            <div className="get-request">
                <hr  className="get-request__horizontal-line"/>  
                <form className="get-request__form" onSubmit={this.get_request}>
                    <input 
                        className="get-request__form-input" 
                        placeholder="Paste GitLab’s instance domain, Private token, and Project ID to start sending and filtering request "
                        value = {this.props.get_rqst}
                        onChange={e => { this.props.change(e.target.value, 'get_request') }}
                    />
                    <button className="get-request__form-btn">Send request</button>
                </form>
            </div>
        )
    }
}
