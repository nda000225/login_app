import React from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/avatar.png";
import styles from "../styles/username.css";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { passwordValidate } from "../helper/validate";

function Password() {
  const formik = useFormik({
    initialValues: {
      password: "admin@123",
    },
    validate: passwordValidate,
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
        >
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold">Hello Again</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Explore More By connecting with us.
            </span>
          </div>
          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="profile flex justify-center py-4">
              <img
                className="border-4 hover:border-gray-100/200  w-[135px] rounded-full shadow-lg cursor-pointer"
                src={avatar}
                alt="avatar"
              />
            </div>
            <div className="textbox flex flex-col items-center gap-6 ">
              <input
                {...formik.getFieldProps("password")}
                className="border-0 border-gray-50  py-4 px-5 rounded-xl w-3/4 shadow-sm text-lg focus:outline-none"
                type="password"
                placeholder="Password"
              />
              <button
                className="border bg-indigo-400 w-3/4 py-4 rounded-lg text-gray-50 text-xl shadow-sm text-center hover:bg-indigo-500"
                type="submit"
              >
                Sign in
              </button>
            </div>
            <div className="text-center">
              <span>
                Forgot Password?{" "}
                <Link className="text-red-500" to="/recovery">
                  Recovery Now
                </Link>{" "}
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Password;
