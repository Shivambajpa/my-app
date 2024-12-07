import React from "react";

const Pops = (Props) => {
  console.log(Props);

  return (
    <div>
      <br />
      <h1 style={{ color: "blue" }}>Name: {Props.name}</h1>

      {/* <br />
      <h1 style={{ color: "black" }}>email: {Props.email}</h1>

      <h1 style={{ color: "red" }}> Address: {Props.other.address}</h1>
      <h1 style={{ color: "red" }}> Age: {Props.age}</h1> */}
    </div>
  );
};

export default Pops;
