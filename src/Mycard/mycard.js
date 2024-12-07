import React from "react";
import "./mycard.css";

const Mycard = (props) => {
  return (
    <div className="Mycard">
      mycard
      {props.listno}
    </div>
  );
};

export default Mycard;
