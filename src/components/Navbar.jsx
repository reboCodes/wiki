import { Outlet, Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
      </nav>

      <Outlet />
    </>
  )
};

export default Navbar;