import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './App.css';
import Home from './Home'
import { Switch, Route, Redirect } from 'react-router-dom';
import Campaign from './Campaign';
import Target from './Target';
import Budgets from './Budgets';
import Last from './Lastscreen';
import Dashboard from './Dashboard';
function App() {
  return (
    <>
    
     <Switch>
     <Route exact path ='/' component ={Home} />
     <Route exact path ='/Home' component ={Home} />
       <Route exact path ='/Target' component ={Target} />
       <Route exact path ='/Campaign' component ={Campaign} />
       <Route exact path ='/Budgets' component ={Budgets} />
       <Route exact path ='/Last' component ={Last} />
       <Route exact path ='/Dashboard' component ={Dashboard} />
       <Redirect to='./'/>
     </Switch>
    </>
  );
}

export default App;
