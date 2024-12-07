import React, { useRef } from "react";
import Mylist from "./mylist";
import "./paperlist.css";

const Paperlist = () => {
  const paperRef = useRef(null);

  const bat = () => {
    const paper = paperRef.current;
    if (paper) {
      const width = paper.clientWidth;
      paper.scrollLeft -= width;
      console.log(width);
    }
  };

  const zip = () => {
    const paper = paperRef.current;
    if (paper) {
      const width = paper.clientWidth;
      paper.scrollLeft += width;
      console.log(width);
    }
  };

  return (
    <div className="indu">
      <button onClick={bat} className="bat">
        <p>&lt;</p>
      </button>
      <button onClick={zip} className="zip">
        <p className="">&gt;</p>
      </button>
      <div className="card-no" ref={paperRef}>
        <Mylist listno="1" />
        <Mylist listno="2" />
        <Mylist listno="3" />
        <Mylist listno="4" />
        <Mylist listno="5" />
        <Mylist listno="6" />
        <Mylist listno="7" />
        <Mylist listno="8" />
        <Mylist listno="9" />
        <Mylist listno="10" />
        <Mylist listno="11" />
        <Mylist listno="12" />
      </div>
    </div>
  );
};

export default Paperlist;
