import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Signup() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required("username required")
        .min(3, "Must be at least 3 characters"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await axios.post(
          "http://localhost:3000/signup",
          values,
          {
            withCredentials: true,
          }
        );
        console.log("Response", response.data);
        alert("Signup Successfull");
        // ✅ Reset the form fields
        resetForm();
        navigate("/Login");
      } catch (error) {
        console.error("Signup error", error.response?.data || error.message);
        alert("Signup failed. check console for details");
      }
    },
  });
  return (
    <div className=" text-2xl text-white border-2 text-center p-10 rounded-2xl">
        {/* Heading */}
      <h1   className="text-gray-500 mb-10">
        Create Your Account
      </h1>

      {/* Subheading / description */}
      <p  className="text-gray-500 mb-10">
        Join us today! It takes only a few steps to get started.
      </p>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="fullname" className="font-bold">
            FullName:{" "}
          </label>
          <input
            type="text"
            id="fullname"
            placeholder="enter your username"
            name="username"
            onChange={formik.handleChange}
            value={formik.values.username}
            autoFocus
            className="mb-6 border-2 border-transparent hover:border-2 hover:border-b-amber-50  outline-0"
          />
          {formik.touched.username && formik.errors.username ? (
            <div style={{ color: "red" }}>{formik.errors.username}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="email" className="font-bold">
            Email:{" "}
          </label>
          <input
            type="email"
            id="email"
            placeholder="enter your Email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            className="mb-6 border-2 border-transparent hover:border-2 hover:border-b-amber-50  outline-0"
          />
          {formik.touched.email && formik.errors.email ? (
            <div style={{ color: "red" }}>{formik.errors.email}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="password" className="font-bold">
            Password:{" "}
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            onChange={formik.handleChange}
            value={formik.values.password}
            autoComplete="new-password"
            className="mb-6 border-2 border-transparent hover:border-2 hover:border-b-amber-50  outline-0"
          />
          {formik.touched.password && formik.errors.password ? (
            <div style={{ color: "red" }}>{formik.errors.password}</div>
          ) : null}
        </div>
        <button type="submit" className="p-4 text-white">
          Submit
        </button>
      </form>
    </div>
  );
}
