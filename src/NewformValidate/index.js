import React, { useState } from "react";

const New = () => {
  const [username, setusername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usernamerrors, setusernameerrors] = useState();
  const [emailerrors, setemailerrors] = useState();

  const [passworderrors, setPassworderrors] = useState();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = (e) => {
    // const indu = e.target[0].value;
    // if (indu.length < 3) {
    //   setusernameerrors(true);
    // } else {
    //   setemailerrors(false);
    // }
    // setusername();
    // //
    // var far = e.target[1].value;
    // if (!far.match(emailRegex)) {
    //   setemailerrors(true);
    // } else {
    //   setPassworderrors(false);
    // }
    // //
    // var vat = e.target[2].value;
    // if (vat.length < 5) {
    //   setPassworderrors(true);
    // } else {
    //   setPassworderrors(false);
    // }
    if (username.length < 3 || password.length < 5) {
      alert("Please enter correct value");
    } else alert(" login successfull");
    e.preventDefault();
  };

  const Handleusername = (e) => {
    const indu = e.target.value;
    setusername(indu);
    if (indu.length < 3) {
      setusernameerrors(true);
    } else {
      setusernameerrors(false);
    }

    setusername(e.target.value);
  };
  const HandleEmail = (e) => {
    let far = e.target.value;
    if (!far.match(emailRegex)) {
      setemailerrors(true);
    } else {
      setemailerrors(false);
    }
    setEmail();
  };

  const HandlePassword = (e) => {
    setPassword(e.target.value);
    var vat = e.target.value;
    if (vat.length < 5) {
      setPassworderrors(true);
    } else {
      setPassworderrors(false);
    }
  };
  console.log();
  return (
    <div className="flex flex-col items-center justify-center p-24 text-center gap-4">
      {" "}
      <div className="bg-slate-700 shadow-2xl w-72  gap-8 flex flex-col items-center justify-center text-center">
        <form className="" onSubmit={handleSubmit}>
          {" "}
          <h1>Form Validation</h1>
          <label>Name</label>{" "}
          <input
            type="text"
            name="username"
            className="border"
            placeholder="username"
            onChange={Handleusername}
            value={username}
          />
          {usernamerrors ? (
            <p style={{ color: "red" }}>invalid username</p>
          ) : (
            ""
          )}
          <br />
          <br />
          <label>Email</label>{" "}
          <input
            type="text"
            name="email"
            className="border"
            placeholder="email"
            onChange={HandleEmail}
            value={email}
          />{" "}
          {emailerrors ? <p style={{ color: "red" }}>Invalid Email</p> : ""}
          {}
          <br /> <br />
          <label>Password</label>{" "}
          <input
            type="password"
            name="password"
            className="border"
            placeholder="password"
            value={password}
            onChange={HandlePassword}
          />{" "}
          {passworderrors ? (
            <p style={{ color: "red" }}>Invalid Password</p>
          ) : (
            ""
          )}
          <div className="border bg-pink-700 p-4 w-20 rounded-full">
            <button type="submit" name="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default New;
