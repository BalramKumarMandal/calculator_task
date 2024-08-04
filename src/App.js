// src/Calculator.js
import React, { useState } from 'react';
import './Calculator.css'; // for styles

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    // Append clicked button value to input
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      // Check if the input ends with an operator or is incomplete
      if (input.match(/[\+\-\*\/]$/) || input === '') {
        setResult('Error');
        return;
      }

      // Evaluate the expression
      const evalResult = eval(input);

      // Handle special cases
      if (Number.isNaN(evalResult)) {
        setResult('NaN');
      } else if (evalResult === Infinity) {
        setResult('Infinity');
      } else {
        setResult(evalResult);
      }
    } catch {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={input} readOnly className="input-field" />
      <div className="buttons">
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('/')}>/</button>

        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('*')}>*</button>

        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('-')}>-</button>

        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={handleCalculate}>=</button>
        <button onClick={() => handleClick('+')}>+</button>

        <button onClick={handleClear} className="clear-button">
          C
        </button>
      </div>
      <div className="result">{result}</div>
    </div>
  );
}

export default App;
