import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes';
import GlobalStyle from './styles/global';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Router />
    </BrowserRouter>
  );
};

export default App;
