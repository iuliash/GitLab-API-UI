import React from 'react'


export default class Milestone extends React.Component {
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
                <h3 className="title">Milestone</h3>
                <input
                    className="form-item__milestone-input"
                    placeholder="Milestone title"
                    onChange={e => { this.props.change(e.target.value, 'milestone') }}
                    ref = {this.itemRef}
                    disabled
                />
            </div>
        )
    }
}
