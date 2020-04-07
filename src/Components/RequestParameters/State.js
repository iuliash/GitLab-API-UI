import React from 'react'


export default class State extends React.Component{
    constructor(props){
        super(props);

        this.itemRef = React.createRef();
    }

    componentDidUpdate(){
        if (this.props.isActive) {
            this.itemRef.current.disabled = false
            this.itemRef.current.style.backgroundColor = 'white'
            this.itemRef.current.style.color = 'black'
        } else {
            this.itemRef.current.disabled = true
            this.itemRef.current.style.backgroundColor = '#F7F8FA'
            this.itemRef.current.style.color = '#919191'
        }
    }

    render(){
        return (
            <div className="form-item">
                <h3 className="title">State</h3>
                <select disabled ref = {this.itemRef} className="form-item__state" defaultValue={'both'} onChange={e => { this.props.change(e.target.value, 'state') }}>
                    <option value="both">Open or closed</option>
                    <option value="opened">Open</option>
                    <option value="closed">Close</option>
                </select>
            </div>
        )
    }
    

}

