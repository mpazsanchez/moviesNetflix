import React from "react";

const Nav = () => {
  return (
    <div
      style={{
        height: "50px",
        width: "100%",
        backgroundColor: "black",
        display: "flex",
        alignItems: "center",
      }}
    >
      <nav style={navStyle}>
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="logo"
            style={{
              height: "50px",
              width: "100px",
            }}
          />
        </div>
        <ul style={ulStyle}>
          <li style={liStyle}>Home</li>
          <li style={liStyle}>Movies</li>
          <li style={liStyle}>TV Shows</li>
        </ul>
      </nav>

      <div
        style={{
          width: "50%",
        }}
      ></div>
    </div>
  );
};

export default Nav;

const navStyle = {
  height: "50px",
  width: "100%",
  backgroundColor: "black",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const ulStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "50%",
  listStyle: "none",
};

const liStyle = {
  color: "whitesmoke",
  fontSize: "1.5rem",
  fontWeight: "bold",
  cursor: "pointer",
};
