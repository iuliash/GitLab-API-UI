import React from 'react'
//import Select from '@material-ui/core/Select';

const yers = ['2015', '2016', '2017', '2018', '2019', '2020'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const days = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', 
            '23', '24', '25', '26', '27', '28', '29', '30', '31'];
const hours = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', 
            '21', '22', '23'];
const minutes = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', 
            '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', 
            '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59'];

export default class SendForm extends React.Component {
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
                    <h3 className="form-item__title">GitLab’s instance domain</h3>
                    <input className="form-item__domain-input" placeholder="https://gitlab.com"/>
                </div>
                <div className="form-item">
                    <h3 className="form-item__title">Private token</h3>
                    <input className="form-item__token-input" placeholder="Paste private token here"/>
                </div>
                <div className="form-item">
                    <h3 className="form-item__title">Project ID</h3>
                    <input className="form-item__proj-id-input" placeholder="ID"/>
                </div>
                <div className="form-item">
                    <h3 className="form-item__title">State</h3>
                    <select className="form-item__state" defaultValue={'DEFAULT'} ref={this.stateSelect} onChange={this.changeState}>
                        <option value="DEFAULT" default hidden>Open or closed</option>
                        <option value="0">Open</option>
                        <option value="1">Close</option>
                    </select>
                </div>
                <div className="form-item">
                    <h3 className="form-item__title">Closed after</h3>
                    <div className="date-time">
                        <select className="date-time__item" defaultValue={'2020'} >
                            <option value="2017">2017</option>
                            <option value="2018">2018</option>
                            <option value="2019">2019</option>
                            <option value="2020">2020</option>
                        </select>
                        <select className="date-time__item" defaultValue={'January'} >
                            <option value="January">January</option>
                            <option value="February">February</option>
                            <option value="March">March</option>
                            <option value="April">April</option>
                            <option value="May">May</option>
                            <option value="June">June</option>
                            <option value="July">July</option>
                            <option value="August">August</option>
                            <option value="September">September</option>
                            <option value="October">October</option>
                            <option value="November">November</option>
                            <option value="December">December</option> 
                        </select>
                        <select className="date-time__item" defaultValue={''} >

                        </select>
                        <select className="date-time__item" defaultValue={''} >
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                        </select>
                        <select className="date-time__item" defaultValue={''} >
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                        </select>
                    </div>
                </div>
                <div className="form-item">
                    <h3 className="form-item__title">Closed before</h3>
                </div>
                <div className="form-item">
                    <h3 className="form-item__title">Assignee</h3>
                </div>
                <div className="form-item">
                    <h3 className="form-item__title">Closed by</h3>
                </div>
                <div className="form-item">
                    <h3 className="form-item__title">Milestone</h3>
                </div>
            </div>
        )
    }
}