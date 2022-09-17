import { evaluate, parse } from "mathjs";
import React, { useState } from "react";


const Calculator = () => {
  const [input, setInput] = useState("0");
  const [result, setResult] = useState(""); 
  
  const handleOperatorClick = ({ target: { value } }) => {
    if (result) { 
      return setInput(result + value); 
    } 
      const lastIndex = input[input.length - 1]
      const isOperator = "+-*/".includes(lastIndex)
      console.log(isOperator)
      if (!isOperator || value === "-") {
        setInput(input + value)
      } else {
        const uh = input[input.length - 2]
        const fubar = "+-*/".includes(uh)
        const newInput = input.slice(0, fubar ? -2 : -1) + value;
        console.log(newInput)
        setInput(newInput)
      }
    }
  
  const handleDecimalClick = () => {
      try {
        parse(input + ".")
        setInput(input + ".")
      } catch (error) {
        console.log("Learn math nerd.")
      }
    }

  const updateInput = (e) => {
    setResult("")
    if (input === "0") {
      return setInput(e.target.value)
    }
    const isValid = input !== "0" || e.target.value !== "0" 
    if (!isValid) {
      return null; 
    }
    setInput(input + e.target.value)
  }
  
  const calculateInput = () => {
    setResult(evaluate(input)); 
    setInput("0"); 
  }
  
  
  const clearCalculator = () => {
    setResult("")
    setInput("0")
  }
  
  const buttons = [
    { name: "zero", value: "0" },
    { name: "one", value: "1"},
    { name: "two", value: "2"},
    { name: "three", value: "3"},
    { name: "four", value: "4"},
    { name: "five", value: "5"},
    { name: "six", value: "6"},
    { name: "seven", value: "7"},
    { name: "eight", value: "8"},
    { name: "nine", value: "9"},
    { name: "multiply", value: "*", onClick: handleOperatorClick},
    { name: "add", value: "+", onClick: handleOperatorClick },
    { name: "subtract", value: "-", onClick: handleOperatorClick},
    { name: "divide", value: "/", onClick: handleOperatorClick},
    { name: "decimal", value: ".", onClick: handleDecimalClick }];
  
  return (

    <div id="screen" className="flex justify-center">
      <h1 className="font-mono content-center">
        FreeCodeCamp JavaScript Calculator</h1>

      <div id="display" className="border-2 border-black">
        {result ||input || 0}
      </div>

      <div id="digit-container">
        {buttons.map(({ name, value, onClick = updateInput}) => (
          <button className="border-2 p-1" id={name} value={value} key={value}
            onClick={onClick}>{value}</button>
        ))}
      </div>
      <button id="equals" className="border-2 p-1" value="="
        onClick={calculateInput}>=</button>
      <button id="clear" className="border-2 p-1" onClick={clearCalculator}>Clear</button>

    </div>
  );
}

export default Calculator;
