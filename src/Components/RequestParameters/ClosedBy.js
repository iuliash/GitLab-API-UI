import React from 'react'

export default class ClosedBy extends React.Component {
    constructor(props) {
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

    render() {
        return (
            <div className="form-item">
                <h3 className="title">Closed by</h3>
                <input
                    className="form-item__closed-input"
                    placeholder="Person ID or username"
                    onChange={e => { this.props.change(e.target.value, 'closed_by') }}
                    ref = {this.itemRef}
                    disabled
                />
            </div>
        )
    }
}
