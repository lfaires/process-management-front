import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';

export default function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route component={Home} path="/" exact />
        </Switch>
    </BrowserRouter>
  );
}