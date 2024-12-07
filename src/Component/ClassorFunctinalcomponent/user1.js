import React, { Component } from "react";

const User1 = () => {
  function Apple() {
    return <div>hello ASpple </div>;
  }
  return (
    <div>
      User1
      <Do />
      <Apple />
      {Apple()}
    </div>
  );
};
class Do extends Component {
  render() {
    return <h1>hello</h1>;
  }
}
export default User1;
