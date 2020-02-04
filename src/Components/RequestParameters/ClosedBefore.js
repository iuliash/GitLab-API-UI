import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {setParameters} from '../../Actions';


const years = ['2015', '2016', '2017', '2018', '2019', '2020'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const days = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', 
            '23', '24', '25', '26', '27', '28', '29', '30', '31'];
const hours = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', 
            '21', '22', '23'];
const minutes = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', 
            '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', 
            '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59'];


class ClosedBefore extends React.Component {
    constructor(){
        super();

        this.setDateTime = this.setDateTime.bind(this)
    }

    setDateTime(type, e) {
        let request = this.props.request;
        request.closed_before[type] = e.target.value;
        this.props.set({request: request});
    } 


    render(){
        return(
            <div className="form-item">
                <h3 className="title">Closed after</h3>
                <div className="date-time">
                    <select className="date-time__item" defaultValue={'2020'} onChange={e => {this.setDateTime('year', e)}}>
                        {years.map(year => (
                            <option value={year} key={year}>{year}</option>
                        ))}
                    </select>
                    <select className="date-time__item" defaultValue={'January'} onChange={e => {this.setDateTime('month', e)}}>
                        {months.map(month => (
                            <option value={month} key={month}>{month}</option>
                        ))}
                    </select>
                    <select className="date-time__item" defaultValue={'27'} onChange={e => {this.setDateTime('day', e)}}>
                        {days.map(day => (
                            <option value={day} key={day}>{day}</option>
                        ))}
                    </select>
                    <select className="date-time__item" defaultValue={'00'} onChange={e => {this.setDateTime('hour', e)}}>
                        {hours.map(hour => (
                            <option value={hour} key={hour}>{hour}</option>
                        ))}
                    </select>
                    <select className="date-time__item" defaultValue={'01'} onChange={e => {this.setDateTime('minute', e)}}>
                        {minutes.map(minute => (
                            <option value={minute} key={minute}>{minute}</option>
                        ))}
                    </select>
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


export default connect(mapStateToProps, mapDispatchToProps)(ClosedBefore);