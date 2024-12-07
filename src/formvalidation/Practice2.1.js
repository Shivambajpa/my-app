import React, { useState } from "react";
const Practice22 = () => {
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [data, setData] = useState({});
  const [NameErrors, setNameErrors] = useState(false);
  const [PasswordErrors, setPasswordErrors] = useState(false);
  const [EmailErrors, setEmailErrors] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleName = (e) => {
    // setName(e.target.value);
    let item = e.target.value;
    if (item.length < 3) {
      setNameErrors(true);
    } else {
      setNameErrors(false);
    }
    // setName(item);
    setData({ Name, Email, Password });
  };

  const handleEmail = (e) => {
    let far = e.target.value;
    // setEmail(far);
    if (!far.match(emailRegex)) {
      setEmailErrors(true);
    } else {
      setEmailErrors(false);
    }
    setData({ Name, Email: far, Password });
  };

  const handlePassword = (e) => {
    // setPassword(e.target.value);
    setData({ Name, Email, Password });
    const data = {
      Name: "",
      Email: "",
      Password: "",
    };
    console.log(data);

    let tar = e.target.value;
    if (tar.length < 8) {
      setPasswordErrors(true);
    } else {
      setPasswordErrors(false);
    }
    // setPassword(tar);
  };
  console.log(data);
  console.log(data);

  const handleSubmit = (e) => {
    // alert(e.target[0].value + "" + e.target[1].value + "" + e.target[2]);
    if (Name.length < 3 || Password.length < 8) {
      //   alert("Please Enter Correct Value");
      // } else {
      //   alert("Login Successfully");
      // }
      e.preventDefault();
      let item = e.target[0].value;
      if (item.length < 3) {
        setNameErrors(true);
      } else {
        setNameErrors(false);
      }
      //
      let far = e.target[1].value;
      if (!far.match(emailRegex)) {
        setEmailErrors(true);
      } else {
        setEmailErrors(false);
        alert("Please Enter Correct Value");
      }
      let tar = e.target[2].value;
      if (tar.length < 8) {
        setNameErrors(true);
      } else {
        setNameErrors(false);
      }
      setData({ Name, Email, far, Password });
    }
  };

  console.log(data);

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="bg-slate-300 grid-cols-1 justify-center text-center items-center "
      >
        <div className="grid gap-4">
          {" "}
          <label>NAME</label>
          <input
            type="text"
            name="Name"
            className="border "
            value={Name}
            onChange={handleName}
            placeholder="***********"
          ></input>
          {NameErrors ? (
            <span style={{ color: "red" }}>Invalid Entry</span>
          ) : (
            ""
          )}
          <br />
          <label>email</label>
          <input
            type="email"
            name="Email"
            className="border"
            value={Email}
            onChange={handleEmail}
            placeholder="***********"
          ></input>
          <br />
          {EmailErrors ? (
            <span style={{ color: "red" }}>Invalid Email</span>
          ) : (
            ""
          )}
          <label>password</label>
          <input
            type="password"
            name="Password"
            className="border"
            value={Password}
            onChange={handlePassword}
            placeholder="***********"
          ></input>
          <br />
          {PasswordErrors ? (
            <span style={{ color: "red" }}>Password Should be 8 Character</span>
          ) : (
            ""
          )}
          <div>
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Practice22;
