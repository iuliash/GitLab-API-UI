import React from 'react'
//import Select from '@material-ui/core/Select';
//import MenuItem from '@material-ui/core/MenuItem';


const years = ['2015', '2016', '2017', '2018', '2019', '2020'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const days = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', 
            '23', '24', '25', '26', '27', '28', '29', '30', '31'];
const hours = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', 
            '21', '22', '23'];
const minutes = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', 
            '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', 
            '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59'];

export default class RequestParameters extends React.Component {
    constructor(){
        super();

        this.stateSelect = React.createRef();
    }

    changeState = () => {
        this.stateSelect.current.className = 'form-item__state active';
    }
    
    render(){
        return(
            <div className="send-form">
                <div className="form-item">
                    <h3 className="title">GitLab’s instance domain</h3>
                    <input className="form-item__domain-input" placeholder="https://gitlab.com"/>
                </div>
                <div className="form-item">
                    <h3 className="title">Private token</h3>
                    <input className="form-item__token-input" placeholder="Paste private token here"/>
                </div>
                <div className="form-item">
                    <h3 className="title">Project ID</h3>
                    <input className="form-item__proj-id-input" placeholder="ID"/>
                </div>
                <div className="form-item">
                    <h3 className="title">State</h3>
                    <select className="form-item__state" defaultValue={'DEFAULT'} ref={this.stateSelect} onChange={this.changeState}>
                        <option value="DEFAULT" default hidden>Open or closed</option>
                        <option value="0">Open</option>
                        <option value="1">Close</option>
                    </select>
                </div>
                <div className="form-item">
                    <h3 className="title">Closed after</h3>
                    <div className="date-time">
                        <select className="date-time__item" defaultValue={'2020'}>
                            {years.map(year => (
                                <option value={year} key={year}>{year}</option>
                            ))}
                        </select>
                        <select className="date-time__item" defaultValue={'January'} >
                            {months.map(month => (
                                <option value={month} key={month}>{month}</option>
                            ))}
                        </select>
                        <select className="date-time__item" defaultValue={'25'} >
                            {days.map(day => (
                                <option value={day} key={day}>{day}</option>
                            ))}
                        </select>
                        <select className="date-time__item" defaultValue={'09'} >
                            {hours.map(hour => (
                                <option value={hour} key={hour}>{hour}</option>
                            ))}
                        </select>
                        <select className="date-time__item" defaultValue={'21'} >
                            {minutes.map(minute => (
                                <option value={minute} key={minute}>{minute}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="form-item">
                    <h3 className="title">Closed before</h3>
                    <div className="date-time">
                        <select className="date-time__item" defaultValue={'2020'}>
                            {years.map(year => (
                                <option value={year} key={year}>{year}</option>
                            ))}
                        </select>
                        <select className="date-time__item" defaultValue={'January'} >
                            {months.map(month => (
                                <option value={month} key={month}>{month}</option>
                            ))}
                        </select>
                        <select className="date-time__item" defaultValue={'27'} >
                            {days.map(day => (
                                <option value={day} key={day}>{day}</option>
                            ))}
                        </select>
                        <select className="date-time__item" defaultValue={'00'} >
                            {hours.map(hour => (
                                <option value={hour} key={hour}>{hour}</option>
                            ))}
                        </select>
                        <select className="date-time__item" defaultValue={'01'} >
                            {minutes.map(minute => (
                                <option value={minute} key={minute}>{minute}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="form-item">
                    <h3 className="title">Assignee</h3>
                    <input className="form-item__assignee-input" placeholder="Assignee ID or username"/>
                </div>
                <div className="form-item">
                    <h3 className="title">Closed by</h3>
                    <input className="form-item__closed-input" placeholder="Person ID or username"/>
                </div>
                <div className="form-item">
                    <h3 className="title">Milestone</h3>
                    <input className="form-item__milestone-input" placeholder="Milestone ID"/>
                </div>
            </div>
        )
    }
}