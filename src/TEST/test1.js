import { Label } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

const Test1 = () => {
  const [username, setusername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [usernameErrors, setuserNameErrors] = useState();
  const [passwordErrors, setPasswordErrors] = useState();
  const [EmailErrors, setEmailErrors] = useState();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleusername = (e) => {
    let username = e.target.value;
    if (username.length < 3) {
      setuserNameErrors(true);
    } else {
      setuserNameErrors(false);
    }
    setusername(username);
  };
  const handleEmail = (e) => {
    let email = e.target.value;
    if (!email.match(emailRegex)) {
      setEmailErrors(true);
    } else {
      setEmailErrors(false);
    }
    setEmail(email);
  };

  const handlePassword = (e) => {
    let password = e.target.value;
    if (password.length < 5) {
      setPasswordErrors(true);
    } else {
      setPasswordErrors(false);
    }
    setPassword(password);
  };

  // regular expression code or pattern

  const onSubmit = (e) => {
    e.preventDefault();
    // alert(e.target[0].value + "" + e.target[1].value + "" + e.target[2].value);

    let username = e.target[0].value;
    if (username.length < 3) {
      setuserNameErrors(true);
    } else {
      setuserNameErrors(false);
    }
    let email = e.target[1].value;
    if (!email || !email.match(emailRegex)) {
      setEmailErrors(true);
    } else {
      setEmailErrors(false);
    }
    setEmail(email);
    let password = e.target[2].value;
    if (password.length < 5) {
      setPasswordErrors(true);
    } else {
      setPasswordErrors(false);
    }
  };

  return (
    <form className="grid grid-cols-1 gap-4" onSubmit={onSubmit}>
      <h1>Form Validation Demo</h1>

      <div className="flex :lg gap-5 justify-center items-center text-center p-24">
        <div className="lg:flex gap-5">
          {" "}
          <Label>Username:</Label>
          <TextField
            type="text"
            name="username"
            value={username}
            onChange={handleusername}
            placeholder="*********"
          />
          <br />
          {usernameErrors ? (
            <p style={{ color: "red" }}>
              Name length must be greater tahn two Character
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="gap-5">
          {" "}
          <Label>Email:</Label>
          <TextField
            type="text"
            value={email}
            name="email"
            onChange={handleEmail}
            placeholder="*********"
          />
        </div>
        {EmailErrors ? <p style={{ color: "red" }}>Invali Email</p> : ""}
        <div className="gap-5">
          {" "}
          <Label>Password:</Label>
          <TextField
            type="password"
            name="password"
            value={password}
            onChange={handlePassword}
            placeholder="*********"
          />
        </div>
        {passwordErrors ? <p style={{ color: "red" }}>Invalid Password</p> : ""}
        <div>
          <Button type="submit" name="submit">
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Test1;
