import React from "react";

const Functionall = () => {
  return (
    <h1>
      Functionall
      <ClearClass />
      <ClearClass /> <ClearClass /> <ClearClass /> <ClearClass /> <ClearClass />{" "}
      s
    </h1>
  );
};

class ClearClass extends React.Component {
  render() {
    return (
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus,
        animi culpa assumenda perspiciatis tenetur explicabo quae ea laudantium
        fuga consequuntur?
      </div>
    );
  }
}

export default Functionall;
