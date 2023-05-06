import React from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/avatar.png";
import styles from "../styles/username.css";
import { Toaster } from "react-hot-toast";


//recuperation de mdp
function Recovery() {

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
            <h4 className="text-5xl font-bold">Recovery</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Enter OTP to recover password.
            </span>
          </div>
          <form className="pt-20">
            <div className="textbox flex flex-col items-center gap-6 ">
              <div className="text-center">
                <span className="py-4 text-sm text-left text-gray-500">
                  Enter 6 digit OTP sent to your email address.
                </span>
                <input
                  
                  className="border-0 border-gray-50  py-4 px-5 rounded-xl w-3/4 shadow-sm text-lg focus:outline-none"
                  type="text"
                  placeholder="OTP"
                />
              </div>
              <button
                className="border bg-indigo-400 w-3/4 py-4 rounded-lg text-gray-50 text-xl shadow-sm text-center hover:bg-indigo-500"
                type="submit"
              >
                Recover
              </button>
            </div>
            <div className="text-center py-4">
              <span>
                Can't get OTP?{" "}
                <button className="text-red-500">
                  Resend
                </button>{" "}
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Recovery;
