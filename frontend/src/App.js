import React from 'react';
import logo from './logo.svg';
import './App.css';
import Filter from './Filter';
import axios from 'axios';
import './Filter.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
import Detail from './Detail';

function App() {
  return (
<>

    
   
    <Router>
      

    <Switch>
    <Route exact path = "/" component = {Filter} />
    <Route path = "/Detail/:slug" component = {Detail} />

    </Switch>
    </Router>
    
     
   
    
    
    
</>    
    
  );
}

export default App;
