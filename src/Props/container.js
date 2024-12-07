import React from "react";

const Mission = (Props, LastName) => {
  return (
    <div>
      Coatainer , {Props.name}
      {45}
      {Props.age}
      {Props.gender}
      {Props.name},{Props.LastName}
    </div>
  );
};
Mission.defaultProps = {
  LastName: "hosrt",
};

export default Mission;
