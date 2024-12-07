import React, { useState } from "react";
import { Email } from "../Component/email";

const Click = () => {
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState("");
  const [NameError, setNameError] = useState("");
  const [EmailError, setEmailError] = useState("");
  const [PasswordError, setPasswordError] = useState("");
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handlechange = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      setName(value);
      if (value.length < 4) {
        setNameError("letters should be at least five charecter");
      } else {
        setNameError("");
      }
    }

    if (name === "email") {
      setEmail(value);
      if (!emailRegex.test(value)) {
        setEmailError("Invlid Email");
      } else {
        setEmailError("");
      }
    }

    if (name === "password") {
      setPassword(value);
      if (value.length < 5) {
        setPasswordError("Password should be less than five charecter");
      } else {
        setPasswordError("");
      }
    }
  };
  const handleSubmit = (i) => {
    i.preventDefault();

    if (!Name) setNameError("Name is required");
    if (!email) setEmailError("Email is required");
    if (!password) setPasswordError("Password is required");
    if (!Name) setNameError("Name is Required");
    if (!email) setEmailError("Email is requred ");
    if (!password) setPasswordError("password is required");

    if (
      !NameError &&
      !EmailError &&
      !PasswordError &&
      Name &&
      email &&
      password
    ) {
      alert(`Name: ${Name}, Email: ${email}, Password: ${password}`);
    } else {
      alert("Please fill all fields correctly");
    }

    const formdata = {
      Name,
      email,
      password,
    };
    setName("");
    setEmail("");
    setPassword("");
    setData(formdata);
  };
  console.log(data);

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        {" "}
        <div className="grid gap-5 bg-pink-500 p-14 text-center items-center justify-center">
          {" "}
          <div className="flex p-4 w-96 border-4  ">
            {" "}
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              value={Name}
              onChange={handlechange}
              // onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              onBlur={() => {
                if (!Name) setNameError("Name is required feaild");
              }}
            />
            {NameError && <p style={{ color: "red" }}>{NameError}</p>}
          </div>
          <div className="flex p-4 w-96 border-4  ">
            {" "}
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={handlechange}
              // onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              onClick={() => {
                if (!email) setEmailError("Email is required feaild");
              }}
            />
            {EmailError && <p style={{ color: "red" }}>{EmailError}</p>}
          </div>
          <div className="flex p-4 w-96 border-4  ">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={password}
              name="password"
              onChange={handlechange}
              // onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              onBlur={() => {
                if (!password) setPasswordError("password is required ");
              }}
            />
            {PasswordError && <p style={{ color: "red" }}>{PasswordError}</p>}
          </div>
          <div>
            <button type="submit" className="border-4 bg-black text-white p-4">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Click;
