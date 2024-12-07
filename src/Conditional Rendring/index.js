import React from "react";

const Conditionalrendring = () => {
  var age = 28;
  let result;

  if (age >= 20) {
    return (
      <div style={{ color: "red" }}>
        <h1>first we will learn if conditon</h1>
        <h1>Eligible for vote</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1>not eligible for vote</h1>
      </div>
    );
  }

  // if (age >= 20) {
  //   result = <h1>eligible for vote</h1>;
  //   <h1>second we will learn element variable conditinal rendring</h1>;
  // } else {
  //   result = <h1>not eligible for vote</h1>;
  // }
  // return <div>{result}</div>;
  // const Main = () => {
  //   var age = 30;
  //   if (age >= 100) {
  //     return (
  //       <div>
  //         <h1>you are eligible</h1>;
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div>
  //         <h2>You are not ellibled</h2>
  //       </div>
  //     );
  //   }
  // };

  // return (
  //   <div>
  //     <Main />
  //   </div>
  // );

  return (
    <div>
      {age > 20 ? <h1>you are eligible</h1> : <h2>you are not Eligible</h2>}
    </div>
  );
};

export default Conditionalrendring;
