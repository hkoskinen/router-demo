import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';

class App extends Component {
  render() {
    return (
      <BrowserRouter>

        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={Error} />
        </Switch>

      </BrowserRouter>
    );
  }
}

export default App;

// In a nutshell, routing is just creating more components,
// and more routes and linking them together.
