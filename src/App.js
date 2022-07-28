import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import CryptoContainer from './component/CryptoContainer';
import CryptoDetails from './component/CryptoDetails';
import './app.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<CryptoContainer />} />
      </Routes>
    </div>
  );
}

export default App;
