import React from "react";
import img from "../Forword/image.png";
import img1 from "../Forword/image copy.png";
import img2 from "../Forword/image copy 4.png";
import img3 from "../Forword/image copy 3.png";
import img4 from "../Forword/image copy 2.png";
import img5 from "../Coaches/image copy 10.png";

const Forword = () => {
  return (
    <div>
      <div className="flex pt-4">
        <div className="flex pt-4 font-bold text-4xl ">
          <h1>Forword</h1>
        </div>
      </div>
      <div className="flex gap-4 mt-4 bg-gradient-to-r   to-orange-400 from-green-500 ">
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
        <img
          src={img2}
          className="flex border-4 h-80 border-black shadow-2xl bg-blue-400"
          alt=""
        />
        <img
          src={img3}
          className="flex border-4 h-80 border-black shadow-2xl bg-blue-400"
          alt=""
        />
        <img
          src={img4}
          className="flex border-4 h-80 border-black shadow-2xl bg-blue-400"
          alt=""
        />
      </div>
    </div>
  );
};

export default Forword;
