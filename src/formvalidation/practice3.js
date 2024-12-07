import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

const Practice3 = () => {
  const [Name, setName] = useState(0);
  const [Email, setEmail] = useState(0);
  const [Password, setPassword] = useState(0);
  const [data, setData] = useState(0);

  const Submit = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setPassword("");
    const data = { Name, Email, Password };
    setData({ Name, Email, Password });
    setData(data);

    console.log(data);
  };
  console.log(data);
  return (
    <div>
      Practice3
      <form onSubmit={Submit}>
        {" "}
        <span>Name:</span>
        <TextField
          type="text"
          name="name"
          value={Name}
          onChange={(e) => setName(e.target.value)}
        ></TextField>
        <span>Email:</span>
        <TextField
          type="text"
          name="email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        ></TextField>
        <span>Password:</span>
        <TextField
          type="password"
          name="password"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
        ></TextField>
        <div>
          <Button type="submit" name="submit" variant="contained">
            SUBMIT
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Practice3;
