import React, {useState} from "react";
function SomeComponentForLearningState() {
  const [count, setCount] = useState(0); // array
  // 1. value
  // 2. function to use to update your value vm

  function handleIncrementCount() {
  
    setCount(count + 1);
  }
  function handleDecrementCount() {
    
    setCount(count - 1);
  }

  return (
    <>
      <button onClick={handleDecrementCount}>-</button>
      <span>{count}</span>
      <button onClick={handleIncrementCount}>+</button>
    </>
  )
}

export default SomeComponentForLearningState
