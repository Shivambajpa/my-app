import React from "react";

const Ifelsemethod = () => {
  let age = 10;
  let result;

  // const MyFun = () => {
  //   let age = 20;
  //   if (age >= 10) {
  //     return (
  //       <>
  //         <h2>You are eligible</h2>
  //       </>
  //     );
  //   } else {
  //     return (
  //       <>
  //         <h1>You are not eligible</h1>
  //       </>
  //     );
  //   }
  // };

  //   if (age >= 40) {
  //     return (
  //       <>
  //         <h2>You are eligible</h2>
  //       </>
  //     );
  //   } else {
  //     return (
  //       <>
  //         <h1>You are not eligible</h1>
  //       </>
  //     );
  //   }
  //   if (age >= 18)
  //     return (
  //       <>
  //         <div>
  //           <h1>You are eligible</h1>
  //         </div>
  //         ;
  //       </>
  //     );
  //   if (age >= 20) {
  //     result = <h1>You Can vote</h1>;
  //   } else {
  //     result = <h1>You cant vote</h1>;
  //   }

  return (
    <>
      {
        // <MyFun />
        /* <div>{result}</div> */

        // ternary opretor
        <div>
          {age > 18 ? (
            <h1>eligible for voter list</h1>
          ) : (
            <h2>YOU are not eligible for vote</h2>
          )}
        </div>
      }
    </>
  );
};

export default Ifelsemethod;
