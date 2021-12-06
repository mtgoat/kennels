import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Kennel } from './components/Kennel';
import './index.css';

//Now update your index.js by adding a root component of <Router /> which gets imported from the React Router package. Within <Router>, place the <Kennel /> child component. This tells React "I will be placing Routes in my Kennel component."
ReactDOM.render(
  <React.StrictMode>
    <Router> 
       <Kennel />
     </Router> 
    </React.StrictMode>,
  document.getElementById('root')
);


//how to start React => @ gitbush type, npm start.  