import { Button } from "@mui/material";
import React, { useState } from "react";

const CallState = () => {
  const [Data, setdata] = useState(0);

  var CallAira = () => {
    setdata(Data + 1);
  };
  console.log(Data);

  return (
    <div>
      <h1>{Data}</h1>
      <br />
      <button style={{ color: "blue", border: "2px" }} onClick={CallAira}>
        Click Aira
      </button>

      <br />
      <Button>Click</Button>
    </div>
  );
};

export default CallState;
