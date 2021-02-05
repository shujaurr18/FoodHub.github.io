import React from 'react'
import Header from '../src/components/Header'
import './App.css';
import About from '../src/components/About'
import Shop from './components/Shop';
import Menu from './components/Menu';
import Clients from './components/Clients';
import Price from './components/Price';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Shop />
      <Menu />
      <Clients />
      <Price/>
    </div>
  );
}

export default App;
