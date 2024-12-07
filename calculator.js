import React, { useState } from 'react';
// import './Calculator.css'; // Optional: Add styling as needed

const Calculator = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [operation, setOperation] = useState('+');
  const [result, setResult] = useState(0);

  const calculateResult = (num1, num2, op) => {
    switch (op) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        return num2 !== 0 ? num1 / num2 : 'Error';
      default:
        return 0;
    }
  };

  const handleInput1Change = (e) => {
    const value = e.target.value;
    setInput1(value);
    updateResult(value, input2, operation);
  };

  const handleInput2Change = (e) => {
    const value = e.target.value;
    setInput2(value);
    updateResult(input1, value, operation);
  };

  const handleOperationChange = (e) => {
    const value = e.target.value;
    setOperation(value);
    updateResult(input1, input2, value);
  };

  const updateResult = (val1, val2, op) => {
    const num1 = parseFloat(val1) || 0;
    const num2 = parseFloat(val2) || 0;
    setResult(calculateResult(num1, num2, op));
  };

  return (
    <div className="calculator">
      <h2>React Calculator</h2>
      <div className="calculator-inputs">
        <input
          type="number"
          value={input1}
          onChange={handleInput1Change}
          placeholder="Enter first number"
        />
        <select value={operation} onChange={handleOperationChange}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input
          type="number"
          value={input2}
          onChange={handleInput2Change}
          placeholder="Enter second number"
        />
      </div>
      <div className="calculator-result">
        <h3>Result: {result}</h3>
      </div>
    </div>
  );
};

export default Calculator;
