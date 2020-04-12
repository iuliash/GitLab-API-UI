import React from 'react'


const years = ['2015', '2016', '2017', '2018', '2019', '2020'];
const mounths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const days = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', 
            '23', '24', '25', '26', '27', '28', '29', '30', '31'];
const hours = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', 
            '21', '22', '23'];
const minutes = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', 
            '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', 
            '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59'];


export default class ClosedBefore extends React.Component {
    constructor(props){
        super(props);

        this.yearRef = React.createRef();
        this.monthRef = React.createRef();
        this.dayRef = React.createRef();
        this.hourRef = React.createRef();
        this.minuteRef = React.createRef();
    }

    componentDidUpdate(){
        if (this.props.isActive) {
            this.yearRef.current.disabled = false
            this.yearRef.current.style.backgroundColor = 'white'
            this.yearRef.current.style.color = 'black'
            this.monthRef.current.disabled = false
            this.monthRef.current.style.backgroundColor = 'white'
            this.monthRef.current.style.color = 'black'
            this.dayRef.current.disabled = false
            this.dayRef.current.style.backgroundColor = 'white'
            this.dayRef.current.style.color = 'black'
            this.hourRef.current.disabled = false
            this.hourRef.current.style.backgroundColor = 'white'
            this.hourRef.current.style.color = 'black'
            this.minuteRef.current.disabled = false
            this.minuteRef.current.style.backgroundColor = 'white'
            this.minuteRef.current.style.color = 'black'
        } else {
            this.yearRef.current.disabled = true
            this.yearRef.current.style.backgroundColor = '#F7F8FA'
            this.yearRef.current.style.color = '#919191'
            this.monthRef.current.disabled = true
            this.monthRef.current.style.backgroundColor = '#F7F8FA'
            this.monthRef.current.style.color = '#919191'
            this.dayRef.current.disabled = true
            this.dayRef.current.style.backgroundColor = '#F7F8FA'
            this.dayRef.current.style.color = '#919191'
            this.hourRef.current.disabled = true
            this.hourRef.current.style.backgroundColor = '#F7F8FA'
            this.hourRef.current.style.color = '#919191'
            this.minuteRef.current.disabled = true
            this.minuteRef.current.style.backgroundColor = '#F7F8FA'
            this.minuteRef.current.style.color = '#919191'
        }
    }

    render(){
        let date = new Date();
        return(
            <div className="form-item">
                <h3 className="title">Closed before</h3>
                <div className="date-time">
                    <select disabled ref={this.yearRef} className="date-time__item" defaultValue={date.getFullYear()} onChange={e => { this.props.change(e.target.value, 'closed_before', 'year') }} >
                            {years.map(year => (
                                <option value={year} key={year}>{year}</option>
                            ))}
                        </select>
                    <select disabled ref={this.monthRef} className="date-time__item" defaultValue={mounths[date.getMonth()]} onChange={e => { this.props.change(e.target.value, 'closed_before', 'month') }} >
                            {mounths.map(mounth => (
                                <option value={mounth} key={mounth}>{mounth}</option>
                            ))}
                        </select>
                    <select disabled ref={this.dayRef} className="date-time__item" defaultValue={date.getDate()} onChange={e => { this.props.change(e.target.value, 'closed_before', 'day') }} >
                            {days.map(day => (
                                <option value={day} key={day}>{day}</option>
                            ))}
                        </select>
                    <select disabled ref={this.hourRef} className="date-time__item" defaultValue={date.getHours()} onChange={e => { this.props.change(e.target.value, 'closed_before', 'hour') }} >
                            {hours.map(hour => (
                                <option value={hour} key={hour}>{hour}</option>
                            ))}
                        </select>
                    <select disabled ref={this.minuteRef} className="date-time__item" defaultValue={date.getMinutes()} onChange={e => { this.props.change(e.target.value, 'closed_before', 'minute') }}>
                            {minutes.map(minute => (
                                <option value={minute} key={minute}>{minute}</option>
                            ))}
                        </select>
                </div>
            </div>
        )
    }
}