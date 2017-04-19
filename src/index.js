import React from 'react';
import ReactDOM from 'react-dom';
//import {Router, Route, IndexRoute, hashHistory} from 'react-router'
import App from './App';
import ParentLayout from './ParentLayout'
//import AddCompany from './components/RegistrationForm';
//import Companies from './components/Companies';
import '../public/css/madeingambia.css';
import './index.css';

ReactDOM.render(
//  <App />,
<ParentLayout />,
/*  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Companies}></IndexRoute>
      <Route path="register" name="register" component={AddCompany}></Route>
    </Route>
  </Router>,*/
  document.getElementById('root')
);
