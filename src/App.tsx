import React from 'react';
import Navbar from './Navbar/Navbar'
import Content from './Content/Content'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Content />
    </BrowserRouter>
  );
}

export default App;
