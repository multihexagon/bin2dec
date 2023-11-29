import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [binaryInput, setBinaryInput] = useState('')
  const [decimal, setDecimal] = useState(0)

  const calculate = (binary) => {   
    const binaryList = binary.split('');
    binaryList.reverse();
    let decimal = 0;
    for (let i = 0; i < binaryList.length; i++) {
      decimal += binaryList[i] * Math.pow(2, i);
    }
    setDecimal(decimal);
  }

  const handleInputChange = (e) => {  
      const binary = e.target.value;
      setBinaryInput(binary);
      calculate(binary);

  }

  return (
    <>
      <h1>Binary to Decimal</h1>
      <div className="card">
        <label htmlFor="input">Enter Only 0's and 1's (Up to 8 digits) </label>
        <input type="text" id='binary' value={binaryInput} onChange={handleInputChange} maxLength={8} />
        <h2>
          <span>Decimal: {decimal}</span>
        </h2>
      </div>
    </>
  )
}

export default App
