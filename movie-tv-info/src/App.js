import React from 'react';

import { Provider } from 'react-redux';

import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Layout
import Footer from './components/Layout/Footer';
import Navbar from './components/Layout/Navbar';

// Home
import Landing from './components/Home/Landing';
import Movie from './components/Home/Movie';

import store from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/movie/:id" component={Movie} />
          </Switch>
          <Footer />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
