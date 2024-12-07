import React, { useState } from "react";

const Usestate = () => {
  const [Count, setCount] = useState(0);
  const Add = () => {
    setCount((prevewCount) => prevewCount + 1);
    setCount((prevewCount) => prevewCount + 1);
  };
  const Sub = () => {
    setCount((prevewCount) => prevewCount - 1);
    setCount((prevewCount) => prevewCount - 1);
  };
  console.log(Count);
  return (
    <div className="flex flex-col justify-center items-center">
      usestate
      <button
        className="font"
        // onClick={() => setCount((prevewCount) => prevewCount + 1)}
        onClick={Add}
      >
        +
      </button>
      {Count}++++
      <button
        className="font"
        //   onClick={() => setCount(Count + 1)},
        onClick={Sub}
      >
        -
      </button>
    </div>
  );
};
export default Usestate;
