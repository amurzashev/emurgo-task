import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'emotion-theming';
import Navbar from './components/organisms/Navbar';
import theme from './helpers/theme';
import pages from './components/pages';

export default () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Navbar />
      <Switch>
        {pages.map(page => <Route {...page} />)}
      </Switch>
    </ThemeProvider>
  </BrowserRouter>
);
