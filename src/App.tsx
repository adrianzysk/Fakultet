import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const [count, setCount] = useState(0)
    const handleClickPlus = () => {
       setCount(count + 1)
    }
    const handleClickMinus = () => {
        setCount(count - 1)
    }
    return (
       <div>
             <button onClick={handleClickPlus}>+</button>
             <h1>{count}</h1>
             <button onClick={handleClickMinus}>-</button>
            {
                count > 5 && <h1>{'wiêcej ni¿ 5'}</h1>
            }
            {
                count < 0 && <h1>{'mniej ni¿ 0'}</h1>
            }
       </div>
    )
}

export default App;
