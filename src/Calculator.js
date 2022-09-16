/* eslint-disable no-eval */
import React, { useState } from "react";

const buttons = [{ name: "zero", value: "0", key: "0" },
{ name: "one", value: "1", key: "1" }, { name: "two", value: "2", key: "2" },
{ name: "three", value: "3", key: "3" }, { name: "four", value: "4", key: "4" },
{ name: "five", value: "5", key: "5" }, { name: "six", value: "6", key: "6" },
{ name: "seven", value: "7", key: "7" }, { name: "eight", value: "8", key: "8" },
{ name: "nine", value: "9", key: "9" }, { name: "multiply", value: "*", key: "*" },
{ name: "add", value: "+", key: "+" }, { name: "subtract", value: "-", key: "-" },
  { name: "divide", value: "/", key: "/" }, { name: "decimal", value: ".", key: "," }]; 

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const operator = ["/", ".", "+", "-", "*"];

  const updateInput = (e) => {
    setInput(input + e.target.value)
  }

  const calculateInput = (value) => {
    if ((operator.includes(value) && input === "") || (operator.includes(value) && operator.includes(input.slice(-1)))) {
      return;
    }
    setInput(input + value)

    if (!operator.includes(value)) {
      setResult(eval(input + value))
    }
  }


  const clearCalculator = () => {
    try {
      setInput("")
    } catch (error) {
      setInput("Error")
    }
  }
  return (

    <div id="screen" className="flex justify-center">
      <h1 className="font-mono content-center">
        FreeCodeCamp JavaScript Calculator</h1>

      <div id="display" className="border-2 border-black">
        {input || 0}
      </div>

      <div id="digit-container">
        {buttons.map(({ name, value, key }) => (
          <button className="border-2 p-1" id={name} value={value} key={key}
            onClick={updateInput}>{value}</button>
        ))}
      </div>
      <button id="equals" className="border-2 p-1" value="="
        onClick={() => calculateInput()}>=</button>
      <button id="clear" className="border-2 p-1" onClick={() => clearCalculator()}>Clear</button>

    </div>
  );
}

export default Calculator;
