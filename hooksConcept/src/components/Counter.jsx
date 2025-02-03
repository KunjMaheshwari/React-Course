import React, {useState} from "react";


function Counter(){
    const [count, setCount] = useState(0);

    const handleIncrement = () =>{
        setCount(count +1);
    }
    const handleReset = () =>{
        setCount(0);
    }

    const handleDecrement = () =>{
        setCount(count -1);
    }

    return (
        <div className="counter-container">
            <p className = "count-display">{count}</p>
            <button className="counter-button" onClick = {handleIncrement} >Increment</button>
            <button className="counter-button" onClick = {handleReset} >Reset</button>
            <button className="counter-button" onClick = {handleDecrement} >Decrement</button>
        </div>
    )
}

export default Counter;