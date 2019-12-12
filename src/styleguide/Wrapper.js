/* eslint-disable react/prop-types */
import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { StaticRouter } from 'react-router-dom';
import theme from '../helpers/theme';

export default ({ children }) => (
  <StaticRouter>
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  </StaticRouter>
);
