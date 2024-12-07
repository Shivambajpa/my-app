import React, { useState } from "react";

const ValidationTask = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState({});

  const handleSubmit = (i) => {
    i.preventDefault();
    const formData = { name, email, password };
    setData(formData);
    setName("");
    setEmail("");
    setPassword("");
    console.log(formData);
  };

  console.log(data);

  return (
    <div className="container grid  grid-cols-1 justify-center items-center text-center gap-10 bg-slate-500 p-7">
      <form className="grid gap-4" onSubmit={handleSubmit}>
        <div className="field border">
          <label>UserName</label>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className="field border">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className="field border">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <button type="submit" className="fluid ui button blue">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ValidationTask;
