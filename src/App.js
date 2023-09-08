import './index.css';
import {H1} from "./components/H1"
import {useState} from 'react'



function App() {
    const [total, setTotal ] = useState();
    const [firstNumber, setFirstNumber] = useState();
    const [secondNumber, setSecondNumber] = useState();
    

    const clickCalculate = (symbol) => {
      switch (symbol){
        case "+":
          return setTotal(firstNumber + secondNumber);
        case "-":
          return setTotal(firstNumber - secondNumber);
        case "*":
          return setTotal(firstNumber * secondNumber);
        case "/":
          return setTotal(firstNumber / secondNumber);
              
        default:
        }
    }

  return (
    <>
      <h1>Simple Calculator</h1>
      <hr/>
      <H1 label={total}/>
      <hr/>

      <input type="number" placeholder="Enter the first Number" step={0.1} onChange={(e) => setFirstNumber(Number(e.target.value))} value={firstNumber}/>
      <input type="number" placeholder="Enter the second Number" step={0.1} onChange={(e) => setSecondNumber(Number(e.target.value))} value={secondNumber}/>
      <hr/>

      <input className='button' type="button" value="Add" onClick={() => clickCalculate("+")} />
      <input className='button' type="button" value="Subtract" onClick={() => clickCalculate("-")}/>
      <input className='button' type="button" value="Divide" onClick={() => clickCalculate("/")} />
      <input className='button' type="button" value="Multiply" onClick={() => clickCalculate("*")} />


    </>
  );
}

export default App;
