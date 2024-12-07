import React from "react";

import { Link } from "react-router-dom";
import img from "../Goalkeeper/image copy.png";
import img1 from "../Goalkeeper/image.png";
import img2 from "../Dfenders/image copy 2.png";
import img3 from "../Dfenders/image copy 3.png";
import img4 from "../Dfenders/image copy.png";
import img5 from "../Dfenders/image.png";
import img6 from "../Dfenders/image4.png";
import Forword from "../Forword";
import Coaches from "../Coaches";
import Midfeailder from "../Midfealder";

const Goalkeeper = () => {
  return (
    <div className="  grid bg-gradient-to-r   to-orange-400 from-green-500 p-5 ">
      {" "}
      <div className="flex border-black font-bold text-4xl p-5 pt-4">
        <Link to={"/header"}>
          {" "}
          <h1>GoalKeepers</h1>{" "}
        </Link>
      </div>
      <div className="flex gap-4  border4 bg-gradient-to-r to-orange-400 from-green-500    border-black">
        <img
          src={img}
          className="flex border-4 h-80 border-black shadow-2xl bg-blue-400"
          alt=""
        />
        <img
          src={img1}
          className="flex border-4 h-80 border-black shadow-2xl bg-blue-400"
          alt=""
        />
      </div>
      <div className=" flex  font-bold text-4xl   p-5">
        <Link to={"/header"}>
          {" "}
          <h1>Dfenders</h1>
        </Link>
      </div>
      <div className="flex gap-4    border4 bg-gradient-to-r to-orange-400 from-green-500">
        {" "}
        <img
          src={img2}
          className="flex border-4  h-80 border-black shadow-2xl bg-blue-400"
          alt=""
        />
        <img
          src={img3}
          className="flex border-4 h-80 border-black shadow-2xl bg-blue-400"
          alt=""
        />
        <img
          src={img4}
          className="flex border-4  h-80 border-black shadow-2xl bg-blue-400"
          alt=""
        />
        <img
          src={img5}
          className="flex border-4  h-80 border-black shadow-2xl bg-blue-400"
          alt=""
        />
        <img
          src={img6}
          className="flex border-4 h-80 border-black shadow-2xl bg-blue-400"
          alt=""
        />
      </div>
      <div className=" ">
        <Forword />
      </div>
      <div>
        <Midfeailder />
      </div>
      <div>
        <Coaches />
      </div>
    </div>
  );
};

export default Goalkeeper;
