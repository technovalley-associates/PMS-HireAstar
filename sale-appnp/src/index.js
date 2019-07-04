import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link,Switch, BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import Users from './Client/users'
import Login from './Client/Login'
import SignUp from './Client/SignUp'
import * as serviceWorker from './serviceWorker';

const routing = (
  <Router>
    <div>
   <Switch>
      <Route exact path="/" component={App} /> 
      <Route exact path="/users" component={Users} /> 
      <Route exact path="/login" component={Login} /> 
      <Route exact path="/signup" component={SignUp} /> 
      
  </Switch>
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))
//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<UserDetails />, document.getElementById('root1'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
