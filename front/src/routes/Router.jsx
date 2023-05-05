import React from "react";
import { Routes, Route } from "react-router-dom";
import Username from "../components/Username";
import Register from "../components/Register";
import Password from "../components/Password";
import Recovery from "../components/Recovery";
import Reset from "../components/Reset";
import Notfound from "../components/Notfound";
import Profile from "../components/Profile";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Username />} />
      <Route path="/register" element={<Register />} />
      <Route path="/password" element={<Password />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/recovery" element={<Recovery />} />
      <Route path="/reset" element={<Reset />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
}

export default Router;