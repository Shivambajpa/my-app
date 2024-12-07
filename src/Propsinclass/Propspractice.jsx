import React from "react";

class Popo extends React.Component {
  constructor() {
    super();

    this.state = { name: "shivam" };
  }
  render() {
    return (
      <>
        <div>
          <h1>hello</h1>
          <h2>{this.state.name}</h2>
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

export default Popo;

// class Lala extends React.Component {
//   render() {
//     return (
//       <>
//         <div>Hello</div>
//       </>
//     );
//   }
// }
