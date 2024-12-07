import React from "react";
import img from "../GirlsTeam/image.png";
import img1 from "../GirlsTeam/image copy.png";
import img3 from "../GirlsTeam/image copy 8.png";
import img5 from "../GirlsTeam/image copy 6.png";
import img6 from "../GirlsTeam/image copy 5.png";
import img7 from "../GirlsTeam/image copy 4.png";

import img2 from "../GirlsTeam/image copy 13.png";
import img10 from "../GirlsTeam/image copy.png";
import { Link } from "react-router-dom";

const GirlsTeam = () => {
  return (
    <div className="bg-amber-200  pt-8 h-svh w-svh">
      <div className="flex  font-bold text-4xl  p-4">
        <Link to={"/header"}>
          {" "}
          <h1>Girls Team</h1>
        </Link>
      </div>
      <div>
        {" "}
        <div className="flex w-96 p-4 h-72 gap-4">
          <img src={img} className="border-4  border-black" alt="" />
          <img src={img1} className="border-4  border-black" alt="" />
          <img src={img2} className="border-4  border-black" alt="" />
          <img src={img3} className="border-4  border-black" alt="" />
        </div>
        <div className="flex w-96 p-4 h-72 gap-4">
          <img src={img5} className="border-4  border-black" alt="" />
          <img src={img6} className="border-4  border-black" alt="" />
          <img src={img7} className="border-4  border-black" alt="" />
          <img src={img10} className="border-4  border-black" alt="" />
        </div>
      </div>
    </div>
  );
};

export default GirlsTeam;
