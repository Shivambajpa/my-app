import img1 from "../Images/img1.png";
import img2 from "../Images/img2.png";
import img3 from "../Images/img3.png";
import img4 from "../Images/img4.png";
import img5 from "../Images/img5.png";
import img6 from "../Images/img6.png";

import React, { useEffect, useState } from "react";

const ClickImageSliderBall = () => {
  const [count, setCount] = useState(0);
  const data = [img1, img2, img3, img4, img5, img6];

  const add = () => {
    setCount(count === 0 ? 5 : count - 1);
  };
  const sub = () => {
    setCount(count === 5 ? 0 : count + 1);
  };

  useEffect(() => {
    const countClear = setInterval(() => {
      add();
      sub();
    }, 3000);
    return () => {
      clearInterval(countClear);
    };
  });

  return (
    <>
      <div className="flex text-center items-center justify-center">
        <h1>
          <img
            src={data[count]}
            className="grid  justify-center items-center h-24 w-24"
            alt=""
          />
        </h1>
        <div className="flex gap-4">
          {" "}
          <button onClick={add}>Next</button>
          <button onClick={sub}>Back</button>
        </div>
      </div>
    </>
  );
};
export default ClickImageSliderBall;
