import React from "react"
import "./styles.css"
import Buttons from "./Components/Buttons";

export default function App() {
    const [expression, setExpression] = React.useState("");
    const [answer, setAnswer] = React.useState(0);
  
    const display = (symbol) => {
      setExpression((prev) => prev + symbol);
      if (expression[expression.length - 1] === "=") {
        if (/[0-9]/.test(symbol)) {
          setExpression(symbol);
        } else {
          setExpression(answer + symbol);
        }
      }
    };
  
    const calculate = () => {
      setAnswer(eval(expression));
      setExpression((prev) => prev + "=");
    };
  
    const allClear = () => {
      setExpression("");
      setAnswer(0);
    };
  
    const clear = () => {
      setExpression((prev) => prev.split("").slice(0, prev.length - 1).join(""));
      setAnswer(0);
    };
  
    return (
      <div>
        <div className="container">
        <div className="grid">
          <div className="dis">
            <input type="text" value={expression} placeholder="0" disabled />
            <div className="total">{answer}</div>
          </div>
          <Buttons allClear={allClear} clear={clear} display={display} calculate={calculate}/>
        </div>
      </div>
      <h5>By Kalutu Daniel</h5>
      </div>
      
    );
}
  