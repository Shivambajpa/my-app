import React from "react";

class Killer extends React.Component {
  render() {
    return (
      <>
        <div>
          <p>my name is shivam</p>
          {this.props.name}
          <button
            onClick={() => this.setState({ name: "bajpai" })}
            className="text-cyan-600"
          >
            Update
          </button>
        </div>
      </>
    );
  }
}
export default Killer;
