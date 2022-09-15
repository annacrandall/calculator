import React, { } from "react";
import DigitPad from "./components/DigitPad";
import MathOperators from "./components/MathOperators";


const Calculator = () => {
  return (
    <div id="calculator-container" className="h-screen flex justify-center">
      <div id="display"></div>
      <div id="button-box">
        <DigitPad />
        <MathOperators />
        <button id="decimal">.</button>
        <button id="equals">=</button>
        <button id="clear">Clear</button>
      </div>
    </div>
  );
}

export default Calculator;
