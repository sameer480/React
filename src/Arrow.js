// Arrow Function in Event Handler
// Create a functional component ButtonGroup that renders two buttons: "Increment" and "Decrement". Use arrow functions to define event handlers that update a counter state. Display the counter value.
import React, { useState } from 'react';


const ButtonGroup=()=>{
    const [counter, setCounter] = useState(0);
return (
    <div>
        <h2>Counter: {counter}</h2>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
        <button onClick={() => setCounter(counter - 1)}>Decrement</button>
    </div>
);
};
export default ButtonGroup;