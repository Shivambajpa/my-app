import React, { useEffect, useState } from "react";
import img1 from "./indu1.png";
import img2 from "./indu2.png";
import img3 from "./indu3.png";
import img4 from "./indu4.png";
import img5 from "./indu5.png";
import img6 from "./indu6.png";
import img7 from "./indu7.png";
import img8 from "./indu8.png";
import img9 from "./indu9.png";
import img10 from "./indu10.png";

const ImageSlider = () => {
  const [counter, setcounter] = useState(0);
  const data = [
    img1,
    img2,
    img3,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
  ];
  const add = () => {
    // setcounter(counter + 1);
    setcounter(counter === 10 ? 0 : counter + 1);
  };
  const sub = () => {
    // setcounter(counter - 1);
    // setcounter(counter === 0 ? 10 : counter - 1);
  };
  useEffect(() => {
    const CounterClear = setInterval(() => {
      add();
      sub();
    }, 3000);
    return () => {
      clearInterval(CounterClear);
    };
  });

  return (
    <div>
      <img src={data[counter]} alt="" />
      ImageSlider
      <button onClick={add}>Next</button>
      <br />
      <button onClick={sub}>Previous</button>
    </div>
  );
};

export default ImageSlider;
