import React from "react";
import { Link } from "react-router-dom";

function TheLink({ children, to }) {
  return (
    <Link style={{ textDecoration: "none" }} to={to}>
      {children}
    </Link>
  );
}

export default TheLink;
