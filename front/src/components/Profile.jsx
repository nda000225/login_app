import React, { useState } from "react";
import avatar from "../assets/avatar.png";
import styles from "../styles/username.css";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { registerValidation } from "../helper/validate";
import convertToBase64 from "../helper/connect";

function Profile() {
  const [file, setFile] = useState();

  const formik = useFormik({
    initialValues: {
      firstname:'',
      lastname:'',
      email: "sangonewton@gmail.com",
      mobile: "",
      address: "",
    },
    validate: registerValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      values = await Object.assign(values, { profile: file || "" });
      console.log(values);
    },
  });

  const onUpload = async (e) => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  };
  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex justify-center items-center h-screen">
        <div
          className={
            (styles.glass,
            "border-4 border-gray-50 shrink-0 h-3/4 w-[30%] rounded-3xl py-18 px-2 min-w-max")
          }
          style={{ width: "35%", height: "90%" }}
        >
          <div className="title flex flex-col items-center py-4">
            <h4 className="text-5xl font-bold">Profile</h4>
            <span className="py-1 text-xl w-2/3 text-center text-gray-500">
              You can update the details.
            </span>
          </div>
          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="profile flex justify-center py-1">
              <label htmlFor="profile">
                <img
                  className="border-4 hover:border-gray-100/200  w-[135px] rounded-full shadow-lg cursor-pointer"
                  src={file || avatar}
                  alt="avatar"
                />
              </label>
              <input
                onChange={onUpload}
                type="file"
                id="profile"
                name="profile"
                className="hidden"
              />
            </div>
            <div className="textbox flex flex-col items-center gap-6 ">
              <div className="name flex gap-10 w-3/4">
                <input
                  {...formik.getFieldProps("firstname")}
                  className="border-0 border-gray-50  py-4 px-5 rounded-xl w-3/4 shadow-sm text-lg focus:outline-none"
                  type="text"
                  placeholder="Your First Name"
                />
                <input
                  {...formik.getFieldProps("lastname")}
                  className="border-0 border-gray-50  py-4 px-5 rounded-xl w-3/4 shadow-sm text-lg focus:outline-none"
                  type="text"
                  placeholder="Your Last Name"
                />
              </div>
              <div className="name flex gap-10 w-3/4">
                <input
                  {...formik.getFieldProps("mobile")}
                  className="border-0 border-gray-50  py-4 px-5 rounded-xl w-3/4 shadow-sm text-lg focus:outline-none"
                  type="text"
                  placeholder="Mobile Number"
                />
                <input
                  {...formik.getFieldProps("email")}
                  className="border-0 border-gray-50  py-4 px-5 rounded-xl w-3/4 shadow-sm text-lg focus:outline-none"
                  type="email"
                  placeholder="Your Email Address"
                />
              </div>
              <input
                {...formik.getFieldProps("address")}
                className="border-0 border-gray-50  py-4 px-5 rounded-xl w-3/4 shadow-sm text-lg focus:outline-none"
                type="text"
                placeholder="Address"
              />
              <button
                className="border bg-indigo-400 w-3/4 py-4 rounded-lg text-gray-50 text-xl shadow-sm text-center hover:bg-indigo-500"
                type="submit"
              >
                Register
              </button>
            </div>
            <div className="text-center py-3">
              <span>
                Come back later?{" "}
                <button className="text-red-500" to="/">
                  Logout
                </button>{" "}
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;
