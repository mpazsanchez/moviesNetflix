import React from "react";

const Banner = ({ item }) => {
  return (
    <div
      style={{
        height: "80vh",
        backgroundImage: `url(${item?.backdrop})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></div>
  );
};

export default Banner;
