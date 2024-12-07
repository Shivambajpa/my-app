import React from "react";
import PictureSlider from ".";

const Card = () => {
  return (
    <div>
      <div className="grid gap-4 ">
        {" "}
        <div className="flex">
          {" "}
          <PictureSlider titile="Tuff1" name="indu" />
          <PictureSlider titile="Tuff2" name="shivam" />
          <PictureSlider titile="Tuff3" name="indushivam" />
        </div>
        <div className="flex">
          {" "}
          <PictureSlider titile="Tuff4" name="shivamindu" />
          <PictureSlider titile="Tuff5" name="shivamindu" />
          <PictureSlider titile="Tuff6" name="shivamindu" />
        </div>
        <div className="flex  ">
          {" "}
          <PictureSlider titile="Tuff7" name="indushivam" />
          <PictureSlider titile="Tuff8" name="indushivam" />
          <PictureSlider titile="Tuff9" name="indushivam" />
        </div>
      </div>
    </div>
  );
};

export default Card;
