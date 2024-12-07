import React from "react";

class Two extends React.Component {
  render() {
    return (
      <div>
        <h1 style={{ backgroundColor: "blue" }}>Name:{this.props.name}</h1>
        <br />
        {/* <h1 style={{ backgroundColor: "grey" }}>Age:{this.props.age}</h1> */}
        <br />
      </div>
    );
  }
}

export default Two;
