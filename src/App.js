import React from 'react';
import './App.css';

import Header from './Components/Header'
import RequestParameters from './Components/RequestParameters'
import Request from './Components/Request'
import Answer from './Components/Answer'



function App() {
  return (
    <div className="App">
      <Header />
      <RequestParameters />
      <Request />
      <Answer />
    </div>
  );
}

export default App;
