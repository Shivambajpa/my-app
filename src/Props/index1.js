import React from "react";

const HOUSE = (Props) => {
  console.log(Props);
  return (
    <div>
      {Props.name}
      <br />
      {Props.hobby}
      {Props.lastName}
      {Props.hobby}
      {Props.value}
    </div>
  );
};
HOUSE.defaultProps = {
  lastName: "killer",
};

export default HOUSE;
