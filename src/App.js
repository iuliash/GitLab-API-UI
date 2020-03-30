import React from 'react';
import './App.css';

import { createStore } from 'redux'
import { Provider } from 'react-redux';
import reducers from './Reducers'

import Header from './Components/Header'
import Domain from './Components/RequestParameters/Domain'
import PrivateToken from './Components/RequestParameters/PrivateToken'
import ProjectID from './Components/RequestParameters/ProjectID'
import State from './Components/RequestParameters/State'
import ClosedAfter from './Components/RequestParameters/ClosedAfter'
import ClosedBefore from './Components/RequestParameters/ClosedBefore'
import Assignee from './Components/RequestParameters/Assignee'
import ClosedBy from './Components/RequestParameters/ClosedBy'
import Milestone from './Components/RequestParameters/Milestone'
import Request from './Components/Request'



class App extends React.Component {
  constructor() {
    super();

    this.changeParameters = this.changeParameters.bind(this);

    this.state = {
      request: {
        domain: '',
        project_id: '',
        private_token: '',
        state: 'both',
        closed_after: {
          year: '',
          month: '',
          day: '',
          hour: '',
          minute: ''
        },
        closed_before: {
          year: '',
          month: '',
          day: '',
          hour: '',
          minute: ''
        },
        assignee: '',
        closed_by: '',
        milestone: '',
        get_request: ''
      }
    }
  }

  changeParameters(value, grid, second_grid) {

    let rqst = this.state.request;

    if (grid === 'closed_after' || grid === 'closed_before')
      rqst[grid][second_grid] = value;
    else rqst[grid] = value;
    if (rqst.domain !== '' && rqst.private_token !== '' && rqst.project_id !== '') {
      let r = rqst.domain + '/api/v4/projects/' + rqst.project_id + '/issues?private_token=' + rqst.private_token;
      if (rqst.state !== 'both')
        r += '&state=' + rqst.state;
      if (rqst.assignee !== '') {
        let isNumber = parseInt(rqst.assignee);
        if (isNaN(isNumber) === true) {
          r += '&assignee_username=' + rqst.assignee;
        } else if (isNaN(isNumber) === false) {
          r += '&assignee_id=' + rqst.assignee;
        }
      }
      if (rqst.milestone !== '') {
        r += '&milestone=' + rqst.milestone;
      }
      rqst.get_request = r;
    } else rqst.get_request = '';
    this.setState({ request: rqst });
    this.forceUpdate();
  }

  render() {
    return (
      <div className="App">
        <Provider store={createStore(reducers)}>
          <Header />
          <div className="send-form">
            <Domain
              change={this.changeParameters}
            />
            <ProjectID
              change={this.changeParameters}
            />
            <PrivateToken
              change={this.changeParameters}
            />
            <State
              change={this.changeParameters}
            />
            <ClosedAfter
              change={this.changeParameters}
            />
            <ClosedBefore
              change={this.changeParameters}
            />
            <Assignee
              change={this.changeParameters}
            />
            <ClosedBy
              change={this.changeParameters}
            />
            <Milestone
              change={this.changeParameters}
            />
          </div>
          <Request
            get_rqst={this.state.request.get_request}
          />
        </Provider>
      </div>
    );
  }
}

export default App;
