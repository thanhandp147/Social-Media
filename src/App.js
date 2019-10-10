import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Navbar from '../src/components/layout/Navbar';
import { Provider } from "react-redux";

import Landing from '../src/components/layout/Landing';
import Navbar from '../src/components/layout/Navbar';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import './css/background_home.css';




function App() {
  return (
    <Router>
      <div className="App">
        <div id="background">
          
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </div>
      </div>
    </Router>
  );
}

export default App;
