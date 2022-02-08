import { useState } from "react";
function MiniCalculator(props) {
    let [result, setResult] = useState("Result Here");
    function calculate() {
        if (props.operation === "add") {
            setResult(`sum of ${props.num1} , ${props.num2} is ${props.num1 + props.num2}`);
        }
        else if (props.operation === "subtract") {
            setResult(`Difference of ${props.num1} , ${props.num2} is ${props.num1 - props.num2}`);

        }
        else if (props.operation === "multiply") {
            setResult(`Multiplication of ${props.num1} , ${props.num2} is ${props.num1 * props.num2}`);

        }
        else if (props.operation === "divide") {
            setResult(`Division of ${props.num1} , ${props.num2} is ${props.num1 / props.num2}`);
        }
        else {
            setResult(`Please pass valid Operation`);             
            }
    }
    return (
        <div class="Item miniCalculatorItem">
            <h2>Mini Calculator Using Props</h2>
            <button onClick={calculate}>Calculate</button>
            <h3>{result}</h3>
        </div>
    );
}
export default MiniCalculator;