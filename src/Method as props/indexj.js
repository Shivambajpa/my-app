import React from "react";
import MethodProps from ".";

const Indexj = () => {
  const handleClick = () => {
    console.log("button is submit");
  };

  return (
    <div>
      <MethodProps
        name="indushivam"
        HandleClick="shivam"
        handleClick={handleClick}
      />
    </div>
  );
};

export default Indexj;
