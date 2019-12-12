import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import pages from './components/pages';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        {pages.map(page => <Route {...page} />)}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
