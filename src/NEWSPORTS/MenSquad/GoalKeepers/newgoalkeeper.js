import React from "react";
import img1 from "../GoalKeepers/image.png";
import imag from "../DFENDERS/image.png";
import { Link } from "react-router-dom";
import Forwordmens from "../Forwords";
import Dfenders from "../DFENDERS";
import BoysCoaches from "../Coaches";

const NewGoalKeepers = () => {
  return (
    <div>
      <div className="flex  text-3xl  font-bold ">
        {" "}
        <Link to={"/header"}>
          {" "}
          <p className="mt-4">GOALKEEPER</p>
        </Link>
      </div>

      <div className="flex gap-4 mt-4">
        <div className=" flex w-72 h-44">
          {" "}
          <img src={imag} alt="" />
        </div>
        <div className=" flex w-72 h-44">
          {" "}
          <img src={img1} alt="" />
        </div>
      </div>

      <div></div>
      <div>
        <Dfenders />
      </div>
      <div>
        <Forwordmens />
      </div>
      <div>
        <BoysCoaches />
      </div>
    </div>
  );
};

export default NewGoalKeepers;
