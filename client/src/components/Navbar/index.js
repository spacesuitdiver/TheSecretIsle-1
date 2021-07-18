import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        The Secret Isle
      </Link>
    </nav>
  );
}

export default Navbar;
