import React from 'react' 

export default class Request extends React.Component {
    
    
    render(){
        return(
            <form className="get-request">
                <h3 className="get-request__title">GET request</h3>
                <input className="get-request__input" placeholder="https://gitlab.com/api/v4/projects/12/issues?private_token=ej3-32jvdnsDfn2Ddj84e&state=closed&per_page=100"/>
                <button className="get-request__btn">Send request</button>
            </form>
        )
    }
}