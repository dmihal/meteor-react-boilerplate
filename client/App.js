import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Pages/Routes';
import Layout from './Layout';

const App = () => (
  <Router>
    <Layout>
      <Routes />
    </Layout>
  </Router>
);

export default App;
