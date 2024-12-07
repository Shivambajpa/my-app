import React, { useState } from "react";

const Hooka = () => {
  const [count, setCount] = useState(0);
  const Css = {
    color: "red",

    font: "bold",
  };

  const incre = () => {
    setCount(count + 5);
  };
  return (
    <div style={Css}>
      Hook features where added to react in version 16.8. hook allow function
      Components to have access to state and other React features. Becouse of
      this ,class components are generally no longer needed.
      <br />
      <h1>today we will learn useState in React</h1>
      <h2>Count is curent state</h2>
      <h3>setCount is a updated state</h3>
      <br /> <br /> <br />
      <div style={{ textAlign: "center" }}>
        {" "}
        <h1>{count}</h1>
        <button
          onClick={() => incre()}
          style={{
            background: "green",
            color: "White",
            padding: "20px",
            textAlign: "center",
          }}
        >
          Click Me
        </button>
      </div>
    </div>
  );
};

export default Hooka;
