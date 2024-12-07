import React, { useState } from "react";

const Hooks = () => {
  const [Count, setCount] = useState(0);

  function Increament() {
    setCount((PrevCount) => PrevCount + 1);
    setCount((PrevCount) => PrevCount + 1);
  }
  function Decrement() {
    setCount((PrevCount) => PrevCount - 1);
    setCount((PrevCount) => PrevCount - 1);
  }

  function Add() {
    setCount(Count + 1);
  }

  function Sub() {
    setCount(Count - 1);
  }

  console.log(Count);
  console.log(Count);
  return (
    <div className="hooks gap-8">
      <button className="button" onClick={Increament}>
        +
      </button>
      {Count}
      <button onClick={Decrement} className="bottom">
        -
      </button>
      <button onClick={Add} className="bottom">
        +
      </button>{" "}
      {Count}
      <button onClick={Sub} className="bottom">
        -
      </button>
    </div>
  );
};

export default Hooks;
