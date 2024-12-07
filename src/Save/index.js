import React from "react";
import img from "../Images/img5.png";

export const Imi = () => {
  return (
    <div className="m-8">
      Imi
      <h1>
        today we are going to learn how to display maltiple images in react js
      </h1>
      <img
        className="m-8"
        src={img}
        alt="images"
        style={{ width: "50%", height: "40%" }}
      />
      <img
        className="m-8"
        src={require("../Images/img2.png")}
        style={{ color: "pink", width: "80%", height: "40%" }}
        alt="images"
      />
      <img
        className="m-8"
        src="https://cdn.pixabay.com/photo/2024/06/21/07/46/yoga-8843808_640.jpg"
        alt="images"
      />
    </div>
  );
};
