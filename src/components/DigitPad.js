 const DigitPad = () => {
    return (
        <div id="digit-container" className="flex justify center">
            <button id="zero" className="">0</button>
            <button id="one" className="">1</button>
            <button id="two" className="">2</button>
            <button id="three" className="">3</button>
            <button id="four" className="">4</button>
            <button id="five" className="">5</button>
            <button id="six" className="">6</button>
            <button id="seven" className="">7</button>
            <button id="eight" className="">8</button>
            <button id="nine" className="">9</button>
        </div>
    );
}
export default DigitPad;
// convert this so it takes in a prop (type) and then assigns the button value based on what number it is 