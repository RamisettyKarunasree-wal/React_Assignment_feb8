import { useState } from "react";
function Todo() {
let [todos, setTodo] = useState([]);
    function addTodo(event) {
        event.preventDefault();
        let inputVal = event.target.todoname.value;
        setTodo([...todos, inputVal]);
    }
    function clearAll(){
        setTodo([]);
    }
    return (
        <div className="Item todoItem">
            <h2>Todo Item</h2>
            <form onSubmit={addTodo}>
                <input type="text" name="todoname" placeholder="Enter todo item" /><br/>
                <button>Add Todo</button>
            </form>
            <button onClick={clearAll}>ClearAll</button>
            <div>{
                todos.map(function (val, index) {
                    return <h3>{val}</h3>;
                })
            }
            </div>
        </div>
    );
}
export default Todo;