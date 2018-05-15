import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>

        <Route path="/" component={Home} />

      </BrowserRouter>
    );
  }
}

export default App;

// In a nutshell, routing is just creating more components,
// and more routes and linking them together.
