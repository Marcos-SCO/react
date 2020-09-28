import React from 'react';
import './App.css';
import './lib/font-awesome/css/all.min.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Component
import { Header } from './components/Header';
import { WatchList } from './components/Watchlist';
import { Watched } from './components/Watched';
import { Add } from './components/Add';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/" component={WatchList} />
          <Route path="/watched" component={Watched} />
          <Route path="/add" component={Add} />
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
