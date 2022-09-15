import React, {} from "react";
import DigitPad from "./DigitPad";
import MathOperators from "./MathOperators";


const Calculator = () => {
  return (
    <div id="calculator-container" className="h-screen flex justify-center">
      <div id="display"></div>
      
      <DigitPad />

      <MathOperators />

      <button id="decimal">.</button>
      <button id="equals">=</button>
      <button id="clear">Clear</button>

    </div>
  );
}

export default Calculator;
