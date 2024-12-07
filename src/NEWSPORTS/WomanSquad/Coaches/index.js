import React from "react";
import img from "../Coaches/image copy 10.png";
const Coaches = () => {
  return (
    <div className="">
      <div className="flex   text-5xl  font-bold p-4">
        <h1>Coaches</h1>
      </div>
      <div>
        <img
          src={img}
          className="border-4 bg-blue-300  border-white  "
          alt=""
        />
      </div>
    </div>
  );
};

export default Coaches;
