import React from "react";
import { useFormik } from "formik";

import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(4, "Name must be at least 4 characters")
    .required("Name is required"),

  email: Yup.string()
    .email("email is required feild")
    .required("this is required feild"),

  Password: Yup.string()
    .min(5, "password should be five charentor")
    .required(6, "Password should be five charector"),
});

const Pilluu = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(
        `Name: ${values.name}, Email: ${values.email}, Password: ${values.password}`
      );
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="border m-10">
          {" "}
          <label htmlFor="name" className="border ">
            Name:
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="border m-5  bg-slate-500"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.errors.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <p className=" mt-4 text-red-500">{formik.errors.name}</p>
          ) : null}
        </div>
      </form>
    </div>
  );
};

export default Pilluu;
