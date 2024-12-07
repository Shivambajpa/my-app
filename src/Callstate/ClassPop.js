import React from "react";

class ClassPop extends React.Component {
  constructor() {
    super();
    // this.state = {
    //   data: "anil",

    // this.state = {
    //   data: "shivab",
    // };

    this.state = {
      data: 1,
    };
  }

  apple() {
    // alert("aira");
    // alert(this.state.data);
    this.setState({ data: this.state.data + 1 });
  }
  render() {
    return (
      <div>
        {this.state.data}
        <h1>hello </h1>
        <button
          onClick={() => this.apple()}
          style={{ color: "red", border: "5px solid grey" }}
        >
          Click
        </button>
      </div>
    );
  }
}

export default ClassPop;
