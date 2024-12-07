import React, { useRef } from "react";
import Mylist from "./Mylist1";

const Paperlist1 = () => {
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
    <div className="relative flex items-center justify-center space-x-2">
      <button
        onClick={bat}
        className="absolute left-0   p-8 bg-gray-200 hover:bg-gray-300 rounded"
      >
        <p>&lt;</p>
      </button>
      <button
        onClick={zip}
        className="absolute right-0 p-8 bg-gray-200 hover:bg-gray-300 rounded"
      >
        <p>&gt;</p>
      </button>
      <div
        className="flex overflow-x-auto space-x-4 p-4 border rounded w-full"
        ref={paperRef}
      >
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

export default Paperlist1;
