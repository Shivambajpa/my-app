import React, { useState } from "react";

const Practice = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: "",
  });
  console.log({ setFormData });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target; // Corrected destructuring
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  console.log();
  const onSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};
    if (!formData.username.trim()) {
      validationErrors.username = "username is required";
    }

    if (!formData.email.trim()) {
      validationErrors.email = "email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "email is not valid";
    }

    if (!formData.password.trim()) {
      validationErrors.password = "password is required";
    } else if (formData.password.length < 6) {
      validationErrors.password = "password should be at least 6 characters";
    }

    if (formData.cpassword !== formData.password) {
      validationErrors.cpassword = "cpassword does not match";
    }

    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      alert("Form is Submitted Successfully");
    }
  };
  console.log({ errors, formData });
  return (
    <div className="grid justify-center p-24 gap-6 items-center text-center">
      <form
        onSubmit={onSubmit}
        className="justify-center border items-center gap-6 text-center"
      >
        <div className="grid">
          <label>username</label>
          <input
            type="text" // Corrected input type
            name="username" // Corrected input name
            placeholder="username"
            className="border"
            onChange={handleChange}
            autoComplete="off"
          />
          {errors.username && <span>{errors.username}</span>}
        </div>
        <div className="grid">
          <label>email</label>
          <input
            type="email"
            name="email" // Added input name
            className="border"
            placeholder="email"
            onChange={handleChange}
            autoComplete="off"
          />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password" // Added input name
            className="border"
            placeholder="password"
            onChange={handleChange}
            autoComplete="off"
          />
          {errors.password && <span>{errors.password}</span>}
        </div>
        <div className="grid">
          <label>CPassword</label>
          <input
            type="password" // Corrected input type
            name="cpassword" // Added input name
            className="border"
            placeholder="cpassword"
            onChange={handleChange}
            autoComplete="off"
          />
          {errors.cpassword && <span>{errors.cpassword}</span>}
        </div>
        <div className="bg-blue-200">
          <button className="bg-blue-200" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Practice;
