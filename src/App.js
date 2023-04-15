import React from 'react';

import { AboutUs, Header } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
  </div>
);

export default App;
