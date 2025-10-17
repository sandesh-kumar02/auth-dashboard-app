import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function Login({ setIsAuthenticated, setUserData }) {
  const navigate = useNavigate();
  const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = "Required";
    } else if (values.firstName.length > 15) {
      errors.firstName = "Must be 15 characters or less";
    }
  };
  const formik = useFormik({
    validationSchema: Yup.object({
      username: Yup.string()
        .required("username required")
        .min(3, "Must be at least 3 characters"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password required"),
    }),
    initialValues: {
      username: "",
      password: "",
    },

    validate,
    onSubmit: async (values) => {
      try {
        const res = await axios.post("http://localhost:3000/login", values, {
          withCredentials: true,
        });
        console.log("Full response:", res);
        console.log("Response from backend:", res.data); 
        if (res.data.success) {
          setIsAuthenticated(true);
          setUserData(res.data.user);
          alert("Login Successful");
          // navigate("/dashboard");
          setTimeout(() => navigate("/dashboard"), 100);
        } else {
          alert(res.data.message || "Login failed");
        }
      } catch (error) {
        alert("login failed");
        console.error(error);
      }
    },
  });
  return (
    <div className="border-2 border-white p-5 text-center rounded-2xl">
        {/* Heading */}
      <h1 className="mb-7">
        Welcome Back!
      </h1>
      
      {/* Subheading / description */}
      <p className="mb-7">
        Please login to your account to continue
      </p>
      {/* mfbd */}
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="username" className="font-bold">UserName : </label>
          <input
            type="text"
            id="username"
            placeholder="enter your name"
            name="username"
            onChange={formik.handleChange}
            value={formik.values.username}
            className="mb-7 border-2 border-white p-[7px] rounded-[7px] placeholder:font-bold"
          />
          {formik.errors.username ? <div className="font-bold">{formik.errors.username}</div> : null}
        </div>
        <div>
          <label htmlFor="password" className="font-bold">Password : </label>
          <input
            type="password"
            placeholder="enter your password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            className="mb-7 border-2 border-white p-[7px] rounded-[7px] placeholder:font-bold"
          />
          {formik.errors.password ? <div>{formik.errors.password}</div> : null}
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
