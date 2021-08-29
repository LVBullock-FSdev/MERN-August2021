import React from 'react';
import Home from './components/Home';
import { Router} from '@reach/router';
import './App.css';


function App() {

  return (
    <div className="App">
      <h1>ROUTING PRACTICE</h1>
      <h3>August 2021 Cohort edition, v1</h3>
      <hr />
      <p>Enter "/home" after localhost:3000 in the address bar above and hit enter to go home</p>
      <Router>
        <Home path="/home" />
        <Home path="/:word" />
        <Home path="/:word/:textColor/:bGroundColor" />
      </Router>
    </div>
  )
}

export default App;
