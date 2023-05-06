import React from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/avatar.png";
import styles from "../styles/username.css";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { resetPasswordValidate } from "../helper/validate";

function Reset() {
  const formik = useFormik({
    initialValues: {
      password: "admin@123",
      confirm_password: "admin@123",
    },
    validate: resetPasswordValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
    },
  });
  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex justify-center items-center h-screen">
        <div
          className={
            (styles.glass,
            "border-4 border-gray-50 shrink-0 h-3/4 w-[30%] rounded-3xl py-20 px-7 min-w-max")
          }
          style={{ width: "50%" }}
        >
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold">Reset</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Enter new password.
            </span>
          </div>
          <form className="py-20" onSubmit={formik.handleSubmit}>
            <div className="textbox flex flex-col items-center gap-6 ">
              <input
                {...formik.getFieldProps("password")}
                className="border-0 border-gray-50  py-4 px-5 rounded-xl w-3/4 shadow-sm text-lg focus:outline-none"
                type="password"
                placeholder="New Password"
              />
              <input
                {...formik.getFieldProps("confirm_password")}
                className="border-0 border-gray-50  py-4 px-5 rounded-xl w-3/4 shadow-sm text-lg focus:outline-none"
                type="password"
                placeholder="Repeat Password"
              />
              <button
                className="border bg-indigo-400 w-3/4 py-4 rounded-lg text-gray-50 text-xl shadow-sm text-center hover:bg-indigo-500"
                type="submit"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Reset;
