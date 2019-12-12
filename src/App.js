import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'emotion-theming';
import theme from './helpers/theme';
import pages from './components/pages';

const App = () => (
  <BrowserRouter>
    <Switch>
      <ThemeProvider theme={theme}>
        {pages.map(page => <Route {...page} />)}
      </ThemeProvider>
    </Switch>
  </BrowserRouter>
);

export default App;
