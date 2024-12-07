import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const Test2 = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [usernameErrors, setUsernameErrors] = useState(false);
  const [passwordErrors, setPasswordErrors] = useState(false);
  const [emailErrors, setEmailErrors] = useState(false);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "username") {
      setUsername(value);
      if (value.length < 3) {
        setUsernameErrors(true);
      } else {
        setUsernameErrors(false);
      }
    }

    if (name === "email") {
      setEmail(value);
      if (!emailRegex.test(value)) {
        setEmailErrors(true);
      } else {
        setEmailErrors(false);
      }
    }

    if (name === "password") {
      setPassword(value);
      if (value.length < 5) {
        setPasswordErrors(true);
      } else {
        setPasswordErrors(false);
      }
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    let username = e.target.username.value;
    if (username.length < 3) {
      setUsernameErrors(true);
    } else {
      setUsernameErrors(false);
    }

    let email = e.target.email.value;
    if (!email || !emailRegex.test(email)) {
      setEmailErrors(true);
    } else {
      setEmailErrors(false);
    }

    let password = e.target.password.value;
    if (password.length < 5) {
      setPasswordErrors(true);
    } else {
      setPasswordErrors(false);
    }

    if (!usernameErrors && !emailErrors && !passwordErrors) {
      alert(`Username: ${username}, Email: ${email}, Password: ${password}`);
    }
  };

  return (
    <form className="grid grid-cols-1 gap-4" onSubmit={onSubmit}>
      <Typography variant="h4">Form Validation Demo</Typography>

      <div className="flex gap-5 justify-center items-center text-center p-24">
        <div className="flex gap-5">
          <label htmlFor="username">Username:</label>
          <TextField
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
            placeholder="*********"
          />
          {usernameErrors && (
            <p style={{ color: "red" }}>
              Name length must be greater than two characters
            </p>
          )}
        </div>

        <div className="flex gap-5">
          <label htmlFor="email">Email:</label>
          <TextField
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="*********"
          />
        </div>
        {emailErrors && <p style={{ color: "red" }}>Invalid Email</p>}

        <div className="flex gap-5">
          <label htmlFor="password">Password:</label>
          <TextField
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="*********"
          />
        </div>
        {passwordErrors && <p style={{ color: "red" }}>Invalid Password</p>}

        <div>
          <Button type="submit" name="submit">
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Test2;
