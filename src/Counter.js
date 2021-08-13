import { useState } from "react";

 const Counter = () => {
    const[count, setCount]= useState(5);


  
    return (
      <div>
        <button id='increment-button' onClick={()=>setCount(count+1)}>+</button>
        <h5>count is {count}</h5>
        <button id='decrement-button' onClick={()=>setCount(count-1)}>-</button>
        <button id='reset-button' onClick={()=>setCount(5)}>reset</button>
      </div>
    );  
  };
  export default Counter;