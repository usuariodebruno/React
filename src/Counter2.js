import React, { useState } from "react";

function Counter(props) {
    const[count, setCount] = useState(props.count); // inicializa o estado com o valor de props.count

    function increment() {
        setCount(count + 1);
        console.log("increment");
    }

    function decrement() {
        setCount(count - 1);
        console.log("decrement");
    }

    return (
    <div>
        <h1>{count}</h1>
        <button onClick={increment}>+</button>        
        <button onClick={decrement}>-</button>
    </div>
    );    
}

export default Counter;