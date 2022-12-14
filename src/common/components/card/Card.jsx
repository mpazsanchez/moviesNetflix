import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ item }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    /* navigate("/movie", {
      state: item,
    }); */

    navigate(`/movie/${item.id}`);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        ...cardStyle,
        backgroundImage: `url(https://image.tmdb.org/t/p/w500${item.backdrop})`,
      }}
    >
      <div style={titleContainerStyle}>
        <h1 style={titleStyle}>{item.name}</h1>
      </div>
    </div>
  );
};

export default Card;

const cardStyle = {
  height: "150px",
  width: "300px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const titleContainerStyle = {
  height: "50%",
  width: "100%",
  //gradient
  background: "linear-gradient(360deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 60%)",
  display: "flex",
};

const titleStyle = {
  color: "white",
  fontSize: "2rem",
};
