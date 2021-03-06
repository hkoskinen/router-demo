import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import ErrorComponent from './components/Error';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation  />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={ErrorComponent} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

// In a nutshell, routing is just creating more components,
// and more routes and linking them together.
