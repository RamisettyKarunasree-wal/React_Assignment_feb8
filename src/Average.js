import { useState } from "react";
function Average() {
    let [average, setAverage] = useState(0);
    let [nos, setNum] = useState([]);
    function addNumber(event) {
        event.preventDefault();
        let inputVal = event.target.num.value;
        setNum([...nos, parseInt(inputVal)]);
        let sum = 0;
        for (let i = 0; i < nos.length; i++) {
            sum += parseInt(nos[i]);
        }
        sum += parseInt(inputVal);
        let avg_val = sum / (nos.length + 1);
        setAverage(avg_val);
    }
    function clearAll() {
        setNum([]);
        setAverage(0);
    }
    return (
        <div className="Item averageItem">
            <h2>Average of Elements</h2>
            <h3>Average is : <i>{average}</i></h3>
            <form onSubmit={addNumber}>
                <input type="number" name="num" placeholder="Enter Number" /><br />
                <button>Calculate Average</button>
            </form>
            <button onClick={clearAll}>Remove All</button>
            <div>{
                nos.map(function (val, index) {
                    return <h3>{val}</h3>;
                })
            }
            </div>
        </div>
    );
}
export default Average;