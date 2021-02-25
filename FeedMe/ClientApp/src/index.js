import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import { createStore } from 'redux';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/app';
import Header from './components/header';
import Credit from './components/credit';
import Profile from './components/profile';
import SignUp from './components/signUpForm/index.js';
import Recipe from './components/addRecipeForm/index.js';
import BrowseAll from './components/browseAll';
import allReducers from './reducers';
import { Provider } from 'react-redux';

//STORE
let store = createStore(
  allReducers, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <Router >
      <div>
        <Header />
        <Route exact path="/" component={App}/>
        <Route path="/credit" component={Credit}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/account/profile" component={Profile}/>
        <Route path="/account/addrecipe" component={Recipe}/>
        <Route path="/account/Browse/all" component={BrowseAll}/>
      </div>
    </Router> 
  </Provider>
  , 
  document.getElementById('root')
);
