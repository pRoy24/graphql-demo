import React from 'react';
import TopNav from './components/nav/TopNav';

import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Admin from './components/admin/Admin';
import Landing from './components/user/Landing';


function App() {
  return (
    <div className="App">
      <Router>
      <TopNav/>
      <div>
        <Route path="/" exact component={Landing} />
        <Route path="/admin" component={Admin} />
      </div>
    </Router>
    </div>
  );
}

export default App;
