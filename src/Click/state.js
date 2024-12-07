import React, { useState } from "react";

const State = () => {
  const [state, setState] = useState(0);

  function UpdateData() {
    setState(state + 1);
  }

  console.log("-----------------");

  return (
    <div className="">
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        voluptatibus alias praesentium distinctio ex quo adipisci veniam dolor
        fuga quam.
      </h1>
      {state}
      <br></br>
      <button className="bg-slate-500 h-40 w-40" onClick={UpdateData}>
        Shivam
      </button>
    </div>
  );
};

export default State;
