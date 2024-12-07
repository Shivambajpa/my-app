import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

const Practice3 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
      if (value.length < 4) {
        setNameError("Name must be at least 4 characters");
      } else {
        setNameError("");
      }
    }
    if (name === "email") {
      setEmail(value);
      if (!emailRegex.test(value)) {
        setEmailError("Invalid email");
      } else {
        setEmailError("");
      }
    }
    if (name === "password") {
      setPassword(value);
      if (value.length < 5) {
        setPasswordError("Password must be at least 5 characters");
      } else {
        setPasswordError("");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) setNameError("Name is required");
    if (!email) setEmailError("Email is required");
    if (!password) setPasswordError("Password is required");

    if (
      !nameError &&
      !emailError &&
      !passwordError &&
      name &&
      email &&
      password
    ) {
      alert(`Name: ${name}, Email: ${email}, Password: ${password}`);
    } else {
      alert("Please fill all fields correctly");
    }
  };

  return (
    <div>
      <h1>Practice3</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <span>Name:</span>
          <TextField
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            onBlur={() => {
              if (!name) setNameError("Name is required");
            }}
          />
          {nameError && <p style={{ color: "red" }}>{nameError}</p>}
        </div>
        <div>
          <span>Email:</span>
          <TextField
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
            onBlur={() => {
              if (!email) setEmailError("Email is required");
            }}
          />
          {emailError && <p style={{ color: "red" }}>{emailError}</p>}
        </div>
        <div>
          <span>Password:</span>
          <TextField
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            onBlur={() => {
              if (!password) setPasswordError("Password is required");
            }}
          />
          {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
        </div>
        <div>
          <Button type="submit" variant="contained">
            SUBMIT
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Practice3;
