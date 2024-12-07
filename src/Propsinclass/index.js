import React from "react";
import Two from "./Two";

class Papaya extends React.Component {
  constructor() {
    super();
    this.state = { name: "shivam" };
  }
  render() {
    return (
      <div>
        <Two name={this.state.name} age={"25"} />
        {/* <br />
        <Two name={"aira"} age={"25"} />
        <br /> <Two name={"sonika"} age={"25"} /> <br />
        <Two name={"indu"} age={"25"} /> */}
        <button
          style={{ color: "orange" }}
          onClick={() => this.setState({ name: "bajpai" })}
        >
          Updatae Button
        </button>
      </div>
    );
  }
}
export default Papaya;
