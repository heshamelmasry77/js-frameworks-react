import React, { useState } from 'react';

function LearningState() {
  const [count, setCount] = useState(10);

  function handleIncrementCount() {
    console.log('you clicked the plus +');
    setCount(count + 1);
  }
  function handleDecrementCount() {
    console.log('you clicked the minus -');
    setCount(count - 1);
  }
  return (
    <>
      <button onClick={handleDecrementCount}>-</button>
      <span>{count}</span>
      <button onClick={handleIncrementCount}>+</button>
    </>
  );
}

export default LearningState;
