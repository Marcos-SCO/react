import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Layout
import Footer from './components/Layout/Footer';
import Navbar from './components/Layout/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
