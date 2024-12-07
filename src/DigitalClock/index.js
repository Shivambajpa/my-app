import React from "react";
import { useState } from "react";

const DigitalClock = () => {
  const curTime = new Date().toLocaleTimeString();
  const [time, setTime] = useState(curTime);

  const Fun = () => {
    const curTime = new Date().toLocaleTimeString();
    setTime(curTime);
  };

  setInterval(() => {
    Fun();
  }, 1000);
  return (
    <div className="grid items-center text-center justify-center  mt-14 rounded-2xl">
      <div className="grid w-48   rounded-2xlL  p-14 text-center items-center justify-center gap-4 bg-green-600 ">
        <h1>Digitak Clocks</h1>
        <p className="font-bold text-4xl">{time}</p>
      </div>
    </div>
  );
};

export default DigitalClock;
