import React from 'react';
import './App.css';

import {createStore} from 'redux'
import { Provider } from 'react-redux';
import reducers from './Reducers'

import Header from './Components/Header'
import RequestParameters from './Components/RequestParameters'
import Request from './Components/Request'



function App() {
  return (
    <div className="App">
      <Provider store={createStore(reducers)}>
        <Header />
        <RequestParameters />
        <Request />
      </Provider>
    </div>
  );
}

export default App;
