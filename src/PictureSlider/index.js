import React from "react";
import img1 from "../PictureSlider/ImageCard/Don.jpg";
import "../PictureSlider/index.css";
const PictureSlider = (props) => {
  return (
    <div className="bg-slate-600 text-center items-center justify-center px-10">
      {/* <h1>we are export this component so that we can use this component</h1> */}
      <div class="h1"> </div>
      <div class="indu">
        <p class="killer">
          {" "}
          <img src={img1} alt="" className="h-32" />
          <h1>{props.titile}</h1>
        </p>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default PictureSlider;
