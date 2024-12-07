import React from "react";
import img from "../BoysTeam/image copy 2.png";
import img1 from "../BoysTeam/image copy 3.png";
import img2 from "../BoysTeam/image copy 4.png";
import img3 from "../BoysTeam/image copy 5.png";
import img4 from "../BoysTeam/image copy 6.png";
import img6 from "../BoysTeam/image copy 7.png";
import img8 from "../BoysTeam/image copy 8.png";
import img9 from "../BoysTeam/image copy 9.png";
import img10 from "../BoysTeam/image copy 11.png";
import img11 from "../BoysTeam/image copy 10.png";
import { Link } from "react-router-dom";

const BoyTeam = () => {
  return (
    <div className="flex  bg-green-400  w-svw h-svh ">
      <div>
        {" "}
        <div className="font-bold text-white text-4xl pt-4 p-2 ">
          <Link to={"/header"}>
            {" "}
            <h1>Boys Teams Photos</h1>
          </Link>
        </div>
        <div className="flex gap-4 h-72 w-72   p-2 ">
          <img src={img} className="border-4 border-white" alt="" />
          <img src={img1} className="border-4 border-white" alt="" />
          <img src={img2} className="border-4 border-white" alt="" />
          <img src={img3} className="border-4 border-white" alt="" />
          <img src={img4} className="border-4 border-white" alt="" />
        </div>
        <div className="flex gap-4 h-72 w-72   p-2 ">
          <img src={img11} className="border-4 border-white" alt="" />
          <img src={img6} className="border-4 border-white" alt="" />
          <img src={img8} className="border-4 border-white" alt="" />
          <img src={img10} className="border-4 border-white" alt="" />
          <img src={img9} className="border-4 border-white" alt="" />
        </div>
      </div>
    </div>
  );
};

export default BoyTeam;
