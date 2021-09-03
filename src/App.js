import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import ProcessForm from './pages/ProcessForm';
import ClientForm from './pages/ClientForm'

export default function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={ProcessForm} path="/register-process" exact />
          <Route component={ClientForm} path="/register-client" exact />
        </Switch>
    </BrowserRouter>
  );
}