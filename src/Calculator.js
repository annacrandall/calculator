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
        const opsLocation = input[input.length - 2]
        const operatorExists = "+-*/".includes(opsLocation)
        const newInput = input.slice(0, operatorExists ? -2 : -1) + value;
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

    <div id="screen-display" className="font-mono text-center m-10">
      <h1 className="m-5 mb-9 text-xl">
        FreeCodeCamp JavaScript Calculator </h1>
      <div id="calculator-container" className="h-screen justify-center border-2 border-slate-700 rounded bg-zinc-400">
         <div id="input-display" className="border-2 border-slate-700 bg-zinc-200 rounded text-3xl p-4  m-4 mt-10">
          {result ||input || 0}
      </div>

    <div id="digit-container" className="grid grid-cols-3 gap-4 p-10 mt-3">
        {buttons.map(({ name, value, onClick = updateInput}) => (
          <button className="border-2 px-2 py-5 rounded bg-stone-400 border-slate-700" id={name} value={value} key={value}
            onClick={onClick}>{value}</button>
         ))}
    </div>

     <div id="button-container" className="m-3">
       <button id="equals" className="border-2 px-4 py-2 mx-4 rounded border-slate-700 bg-stone-300 " value="="
          onClick={calculateInput}>=</button>
        
        <button id="clear" className="border-2 px-3 py-2 mx-4 rounded border-slate-700 bg-amber-600 hover:border-white"
            onClick={clearCalculator}>Clear</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
