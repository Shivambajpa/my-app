import React from "react";

import Mycard from "./mycard";

import "./list.css";

const List = () => {
  let box = document.querySelector(".product-container");
  const zippa = () => {
    var width = box && box.clientWidth;
    box.scrollLeft = box && box.scrollLeft - width;
    console.log(width);
  };
  const botta = () => {
    var width = box && box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
    console.log(width);
  };

  return (
    <div className="product-crousel  p-8">
      list
      <button onClick={zippa} className="botta">
        <p>&lt;</p>
      </button>
      <button onClick={botta} className="zippa">
        <p>&gt;</p>
      </button>
      <div className=" product-container ">
        {" "}
        <Mycard listno="1" />
        <Mycard listno="2" />
        <Mycard listno="3" />
        <Mycard listno="4" />
        <Mycard listno="5" />
        <Mycard listno="6" />
        <Mycard listno="7" />
        <Mycard listno="8" />
        <Mycard listno="9" />
        <Mycard listno="10" />
        <Mycard listno="11" />
        <Mycard listno="12" />
        <Mycard listno="13" />
        <Mycard listno="14" />
      </div>
    </div>
  );
};

export default List;
