import logo from './logo.svg';
import './App.css';
import Soma from './Soma';
import { use } from 'react';


function App() {
  const [display, setDisplay] = useState(0);
  const [fistOperand, setFistOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

  const inputDigit = (digit) => {
    if(waitingForSecondOperand){
      setDisplay(String(digit));
      setWaitingForSecondOperand(false);
    } else {
      setDisplay(display === 0 ? String(digit) : display + digit);
    }
  };

  const inputDecimal = () => {
    if (condition) {

    }
  }

  const calculate = (fistOperand, secondOperand, operator) => {
    switch (operator) {
      case '+':
        return fistOperand + secondOperand;
      case '-':
        return fistOperand - secondOperand;
      case '*':
        return fistOperand * secondOperand;
      case '/':
        return fistOperand / secondOperand;
      default:
        return secondOperand;
    }
  }

  return (
    <div className="Calculator">
      <div className="display"></div>
        <div className="keypad">
              


        </div>
    </div>
  );
}

export default App;
