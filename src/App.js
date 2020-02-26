import React, { useState } from 'react';
import Logo from './img/logo.png';
import Button from './components/Button';
import Input from './components/Input';
import './App.css';

const App = () => {
  const [binary, setBinary] = useState('');
  const [decimal, setDecimal] = useState('');
  const handleConvert = (event) => {
    event.preventDefault();
    setDecimal(parseInt(binary, 2));
  };

  const handleBinaryChange = (event) => {
    setBinary(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img className="logo" src={Logo}></img>
        <h1>Bin2Dec</h1>
        <p>Binary to Decimal Converter</p>
      </header>

      <main className="main-container">
        <form>
          <Input label="Binary" type="number" placeholder="Ex: 1010" onChange={handleBinaryChange} value={binary} />
          <Input label="Decimal" type="number" value={decimal} readonly />
          <Button text="Convert" onClick={handleConvert} />
        </form>
      </main>
    </div>
  );
}

export default App;
