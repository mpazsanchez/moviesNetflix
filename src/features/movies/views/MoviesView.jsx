import React from "react";
import Banner from "../../../common/components/banner/Banner";
import Slider from "../../../common/components/slider/Slider";
import useFetch from "../../../common/hooks/useFetch";
import { getPopularMovies } from "../services/getPopularMovies";

const MoviesView = () => {
  const { data, error, isLoading } = useFetch(getPopularMovies);

  return (
    <>
      <Banner item={data[0]} />
      <Slider items={data} />
    </>
  );
};

export default MoviesView;
