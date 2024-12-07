import React, { useState } from "react";
import Pops from "./Pops";

const Coderpop = () => {
  const [name, setName] = useState("shivam");
  var call = () => {
    setName("bajpai");
  };

  return (
    <div style={{ color: "red" }}>
      Coderpop
      <Pops
        name={"aira"}
        email={"don1234@gmail.com"}
        other={{ address: "lucklow", mobile: "2564278" }}
        age={"50"}
      />
      <Pops name={name} />
      <br />
      <button style={{ color: "grey" }} onClick={() => call()}>
        Update Name
      </button>
      {/* <Pops
        s
        name={"aira"}
        email={"killer1234@gmail.com"}
        other={{ address: "delhi", mobile: "2564278" }}
        age={"50"}
      />{" "}
      <br />
      <Pops
        style={{ color: "" }}
        name={"aira"}
        email={"aira@gmail.com"}
        other={{ address: "Lucknow", mobile: "2564278" }}
        age={"32"}
      />{" "}
      <br />
      <Pops
        style={{ color: "" }}
        name={"aira"}
        email={"aira@gmail.com"}
        other={{ address: "Lucknow", mobile: "2564278" }}
        age={"25"}
      />{" "} */}
    </div>
  );
};

export default Coderpop;
