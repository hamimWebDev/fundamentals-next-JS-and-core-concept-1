"use client";
import React, { useState } from "react";

const Counter = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [count, setCount] = useState(0);
  console.log(count);
  return (
    <div>
      <h1>Value: {count}</h1>
      <button className="btn btn-active btn-primary" onClick={() => setCount(count + 1)}>Increase</button>
      <button className="btn btn-active btn-primary" onClick={() => setCount(count - 1)}>Increase</button>
    </div>
  );
};

export default Counter;
