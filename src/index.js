// importing react -------->
import React from 'react';

// importing react components------->
import ReactDOM from 'react-dom';

// importing style files---------------->
import './Components/Styles/index.css';

// importing components--->
import App from './App';

// importing react router components-------------->
import { BrowserRouter } from 'react-router-dom';


// rendering react Dom--->
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,

  document.getElementById('root')
);


