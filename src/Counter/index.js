import React, { Component } from "react";

export default class Countera extends Component {
  constructor() {
    super();
    this.state = { data: 1 };
  }

  apple() {
    this.setState({ data: this.state.data + 1 });
  }

  render() {
    return (
      <div>
        <h1>Hello{this.state.data}</h1>
        <button onClick={() => this.apple()}> Click</button>
      </div>
    );
  }
}
