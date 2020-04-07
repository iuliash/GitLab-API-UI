import React from 'react' 
// разрешить редактирование поля ввода get запроса, url брать из него

export default class Request extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            issues: []
        }
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
                        value = {this.props.get_rqst}
                        onChange={e => { this.props.change(e.target.value, 'get_request') }}
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
