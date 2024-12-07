import React from "react";
import ReactDevloperTool from ".";

const Devtool = (props) => {
  console.log(props);

  return (
    <div>
      <ReactDevloperTool
        name="shivam"
        email="shivambajpai"
        phonenumber="1234567895"
      />
    </div>
  );
};

export default Devtool;
