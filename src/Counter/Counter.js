import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super(); // Call the parent constructor

    // Correctly initialize the state using an object:state is public
    this.state = { data: 1 };
  }
  apple() {
    // alert("anil");
    this.setState({ data: this.state.data + 1 });
  }
  render() {
    return (
      <div>
        <br />
        <h2>{this.state.data}</h2> <br /> <br />
        <button onClick={() => this.apple()} className="bg-gray-600">
          Increment
        </button>
      </div>
    );
  }
}

export default Counter;
