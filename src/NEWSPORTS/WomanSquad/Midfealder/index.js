import React from "react";
import img from "../Midfealder/image.png";
import img1 from "../Midfealder/image copy.png";
import img2 from "../Midfealder/image copy 3.png";
import img3 from "../Midfealder/image copy 4.png";
import img4 from "../Midfealder/image copy 2.png";

const Midfeailder = () => {
  return (
    <div className=" flex bg-gradient-to-r   to-orange-400 from-green-500 ">
      <div>
        {" "}
        <div className="flex pt-4 text-4xl font-bold">
          <h1>Midfeailders</h1>
        </div>
        <div className=" flex   gap-4 pt-8  ">
          <img
            src={img}
            className="flex border-4  h-80 border-black  bg-blue-400"
            alt=""
          />
          <img
            src={img1}
            className="flex border-4  h-80 border-black  bg-blue-400"
            alt=""
          />
          <img
            src={img2}
            className="flex border-4  h-80 border-black  bg-blue-400"
            alt=""
          />
          <img
            src={img3}
            className="flex border-4  h-80 border-black  bg-blue-400"
            alt=""
          />
          <img
            src={img4}
            className="flex border-4  h-80 border-black  bg-blue-400"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Midfeailder;
