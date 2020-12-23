// importing react--------->
import React from 'react';

// importing components----------------->
import Home from './Components/Homeyoti';
import Nextpage from './Components/nextpage';

// importing react router modules--------------->
import { Switch, Route } from 'react-router-dom';

// importing bootstrap css files-------------->
import 'bootstrap/dist/css/bootstrap.min.css';

// importing css style file---->
import './Components/Styles/App.css';


// rendering page--------------->
function App() {
  return (
    <div className="the-app">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/Nextpage" component={Nextpage} />
      </Switch>
    </div>
  );
}

export default App;
