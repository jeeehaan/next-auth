'use client';

import React, { useState } from 'react';

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };
  const reset = () => {
    setCounter(0);
  };
  return (
    <div className="w-[500px] mx-auto">
      <div className="flex flex-col items-center">
        <div className="flex text-7xl ">
          <button onClick={decrement}>
            -
          </button>
          <div>{counter}</div>
          <button onClick={increment}>
            +
          </button>
        </div>
        <button onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};
