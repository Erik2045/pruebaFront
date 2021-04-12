import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './components/Navigation'
import Portada from './components/Portada'
import Pokemon from './components/Pokemon'

function App() {
  return (
    <div>
      <Router>
        <Navigation></Navigation>
        <div className="container">
          <Route path="/" exact component={Portada}></Route>
          <Route path="/pokemon/:id" component={Pokemon} ></Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
