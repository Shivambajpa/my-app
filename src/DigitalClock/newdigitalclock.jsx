import React, { useState } from "react";

const Newdigitalclock = () => {
  const currtime = new Date().toLocaleTimeString();
  const [Time, setTime] = useState(currtime);
  const Indu = () => {
    const currTime = new Date().toLocaleTimeString();
    setTime(currTime);
  };

  setInterval(() => {
    Indu();
  }, 1000);
  console.log(currtime);

  return (
    <div className="grid bg-orange-700 rounded-3xl w-52 text-center items-center justify-center  font-bold">
      <h1>Digital Clock,s</h1>
      <p>{Time}</p>
    </div>
  );
};

export default Newdigitalclock;
