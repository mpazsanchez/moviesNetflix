import React from "react";
import Nav from "../nav/nav";

const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
};

export default Layout;
